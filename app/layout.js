import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevLinks',
  description: 'um projeto criado para ajudar programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento e estudo de frontend, backend e estruturas de dados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
       <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ijb88pvali");
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
