import { Fira_Sans } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import './globals.css';

const fira = Fira_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

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
      <body className={`${fira.className} bg-primary-base min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
