import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '@/components/layout/header/Header'
import { Footer } from '@/components/layout/footer/Footer'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './styles/theme'

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
    <html lang="ja">
      <body className={inter.className}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
