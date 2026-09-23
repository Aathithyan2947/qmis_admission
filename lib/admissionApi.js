const configuredBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '');
const BASE_URL = configuredBaseUrl || (
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5001'
);

async function apiPost(path, body) {
  if (!BASE_URL) {
    throw new Error('The production API URL is not configured.');
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const responseText = await res.text();
  let data;
  try {
    data = responseText ? JSON.parse(responseText) : {};
  } catch {
    throw new Error(`API request failed with status ${res.status}.`);
  }
  if (!res.ok) {
    throw Object.assign(new Error(data.error || 'Request failed'), { status: res.status, data });
  }
  return data;
}

export async function checkPhoneExists(phone) {
  return apiPost('/api/leads/check', { phoneNumber: phone });
}

export async function sendOtp(phone) {
  return apiPost('/api/leads/send-otp', { phoneNumber: phone });
}

export async function verifyOtp(phone, otp) {
  return apiPost('/api/leads/verify-otp', { phoneNumber: phone, otp });
}

export async function submitLead({ verificationToken, leadData, children, addedBy }) {
  return apiPost('/api/leads/create', {
    verificationToken,
    leadData,
    children: children || [],
    addedBy: addedBy || 'Admission Portal',
  });
}

/**
 * Generate a bypass token for existing users (no OTP needed).
 * The qmis_dashboard token is plain base64-JSON with no HMAC,
 * so we can create a valid one client-side for existing-user updates.
 */
export function makeBypassToken(phone) {
  const cleanPhone = phone.replace(/\D/g, '');
  const payload = {
    phone: cleanPhone,
    verifiedAt: new Date().toISOString(),
    otpId: 'existing-user-bypass',
    exp: Date.now() + 30 * 60 * 1000,
  };
  return btoa(JSON.stringify(payload));
}
