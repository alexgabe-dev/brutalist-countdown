import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Epoch Launch Countdown',
  description: 'Made by Alex Gabe',
  icons: {
    icon: [
      { url: '/favicons/favicon.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* 
      _    _              ____       _          
     / \  | | _____  __  / ___| __ _| |__   ___ 
    / _ \ | |/ _ \ \/ / | |  _ / _` | '_ \ / _ \ 
   / ___ \| |  __/>  <  | |_| | (_| | |_) |  __/ 
  /_/   \_\_|\___/_/\_\  \____|\_,_|_.__/ \___| 
 
  2025.07.25
      */}
      <html lang="en">
        <head>
          <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        </head>
        <body>{children}</body>
      </html>
    </>
  )
}
