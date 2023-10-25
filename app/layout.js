import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevLinks',
  description: 'um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados.',
  url: 'https://devlinks.mateusarce.dev/',
  siteName: 'DevLinks',
  image: '/favicon.icon',
  locale: 'pt_BR',
  type: 'website',
  openGraph: {
    title: 'DevLinks',
    description: 'um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados.',
    url: 'https://devlinks.mateusarce.dev/',
    siteName: 'DevLinks',
    locale: 'pt_BR',
    images: [
      {
        url: '/favicon.ico',
        width: 800,
        height: 600,
        alt: 'Image Preview'
      },
      {
        url: '/favicon.ico',
        width: 1800,
        height: 1600,
        alt: 'Image Preview'
      },
    ],
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='h-full'>
      <Head>        
        <Script async src="https://analytics.umami.is/script.js" data-website-id="830f9d6c-9dd7-4db6-a4f3-ffda7a1fae26" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
