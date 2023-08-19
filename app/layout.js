import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevLinks',
  description: 'um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
