// app/layout.tsx
import { Archivo, Inter } from 'next/font/google';
import './globals.css';

// Initialize Playfair Display
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

// Initialize Inter
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply both font variables to the root HTML element
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}