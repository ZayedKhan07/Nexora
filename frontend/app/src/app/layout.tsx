import type { Metadata } from 'next';
import './globals.css'; // Global styles, including Tailwind directives

export const metadata: Metadata = {
  title: 'Nexora MVP',
  description: 'Healthcare SaaS MVP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
