const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/payment-button.js';

const RAZORPAY_CONFIG = {
  // Razorpay Payment Button ID will be added by client later.
  paymentButtonId: '',
  amount: 29900,
  currency: 'INR',
};

let razorpayButtonPromise;

function createPaymentButton() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.reject(new Error('Razorpay is only available in a browser.'));
  }
  if (razorpayButtonPromise) return razorpayButtonPromise;

  razorpayButtonPromise = new Promise((resolve, reject) => {
    const container = document.createElement('div');
    container.setAttribute('aria-hidden', 'true');
    container.style.position = 'fixed';
    container.style.left = '-10000px';
    container.style.top = '0';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.overflow = 'hidden';

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.razorpay.com/v1/payment-button/';
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT_URL;
    script.async = true;
    script.setAttribute('data-payment_button_id', RAZORPAY_CONFIG.paymentButtonId);
    script.onload = () => {
      const timeout = window.setTimeout(() => {
        reject(new Error('Razorpay checkout could not be opened.'));
      }, 10000);
      const interval = window.setInterval(() => {
        const button = form.querySelector('button, input[type="submit"]');
        if (!button) return;
        window.clearTimeout(timeout);
        window.clearInterval(interval);
        resolve({ button, container });
      }, 50);
    };
    script.onerror = () => reject(new Error('Razorpay could not be loaded.'));
    form.appendChild(script);
    container.appendChild(form);
    document.body.appendChild(container);
  });

  return razorpayButtonPromise;
}

export async function openRazorpayPaymentButton() {
  if (!RAZORPAY_CONFIG.paymentButtonId) {
    throw new Error('Payment is not configured yet.');
  }
  if (RAZORPAY_CONFIG.amount !== 29900 || RAZORPAY_CONFIG.currency !== 'INR') {
    throw new Error('Payment configuration is invalid.');
  }

  const { button } = await createPaymentButton();
  button.click();
}

// TODO: Add production payment verification through backend/webhook later.
