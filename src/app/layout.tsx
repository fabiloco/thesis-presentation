import type { Metadata } from 'next';
import './globals.css';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Valentina Paternina',
  description:
    'Uso de herramientas tecnológicas como apoyo al inicio de los procesos de diseño',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <main className='font-sans text-neutral-900 min-h-screen w-full bg-neutral-50'>
          {children}
        </main>
      </body>
    </html>
  );
}
