import './globals.css';

export const metadata = {
  title: 'Queen Mira International School | QMIS - Admissions 2025',
  description:
    'Queen Mira International School (QMIS) — Shaping future leaders with world-class education, innovative programs, and holistic development. Apply for admissions 2025.',
  keywords:
    'QMIS, Queen Mira International School, admissions 2025, international school, best school',
  openGraph: {
    title: 'Queen Mira International School | QMIS',
    description: 'Shaping future leaders with world-class education.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
