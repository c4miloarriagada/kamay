import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kamay Labs Limitada',
  description: 'Software Creations'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body className={` min-h-screen `}>
        <Header />
        <main className='h-full pt-9 '>{children}</main>
      </body>
    </html>
  )
}
