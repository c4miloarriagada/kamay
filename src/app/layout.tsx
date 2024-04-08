import { Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kamay Labs Limitada',
  description: 'Software Creations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body className={` min-h-screen `}>
        <Header />
        <main className='h-full  px-40 pt-9 max-lg:px-20 max-md:px-14 max-sm:px-2'>
          {children}
        </main>
      </body>
    </html>
  );
}
