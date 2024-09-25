import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'
import SplashLayout from '@/layouts/splash-layout'
import { Navbar } from '@/components/navbar'
import Social from '@/components/social'
import Footer from '@/components/footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Prueba de renderizado cliente y servidor',
  description:
    'Explora como se renderizan las paginas tanto del servidor como en el cliente',
  manifest: '/manifest.json'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-fill bg-[url('/assets/background.png')] bg-fixed bg-no-repeat antialiased`}
      >
        <SplashLayout>
          <Navbar />
          <Social />
          {children}
          <Footer />
        </SplashLayout>
      </body>
    </html>
  )
}
