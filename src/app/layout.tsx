import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header/Header'

// nextjs 14でchakra UIを使用する場合は以下を参考。（Getting Started with Next.js (Pages)ではないので注意！）
// https://chakra-ui.com/getting-started
// https://chakra-ui.com/getting-started/nextjs-app-guide

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Support',
  description: 'iOS support',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Providers>
      <Header />
      <main>{children}</main>
    </Providers>
    
    </>

    // <html lang="ja">
    //   <body className={inter.className}>{children}</body>
    // </html>
  )
}
