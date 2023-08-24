import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevLinks',
  description: 'um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados.',
  url: 'https://devlinks.mateusarce.dev/',
  siteName: 'DevLinks',
  image: '/favicon.icon',
  locale: 'pt_BR',
  type: 'website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta property="og:title" content="DevLinks" />
        <meta property="og:description" content="um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados." />
        <meta property="og:url" content="https://devlinks.mateusarce.dev/" />
        <meta property="og:site_name" content="DevLinks" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image:url" content="/favicon.ico" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:url" content="/favicon.ico" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Image preview" />
        <meta property="og:type" content="website" />
        <script async src="https://analytics.umami.is/script.js" data-website-id="830f9d6c-9dd7-4db6-a4f3-ffda7a1fae26"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
