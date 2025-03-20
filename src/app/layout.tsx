import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SBN INFRA PRIVATE LIMITED',
  description: 'SBN INFRA PRIVATE LIMITED',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-dm-sans antialiased`}>{children}</body>
    </html>
  );
}
