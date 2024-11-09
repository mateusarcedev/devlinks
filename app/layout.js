'use client'

import './globals.css';
import Head from 'next/head';
import CategoryBar from "../components/CategoryBar";
import Navbar from "../components/Navbar";
import { QueryProvider } from './providers';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children, session }) {
	return (
		<html lang="pt-br" className="h-full">
			<Head>
				<title>Tools4.tech - Ferramentas Essenciais para Desenvolvedores</title>
				<meta name="description" content="Encontre as melhores ferramentas para desenvolvedores, acelere seu desenvolvimento de software com recursos selecionados em Tools4.tech." />
				<meta name="keywords" content="ferramentas para desenvolvedores, desenvolvimento de software, recursos para programadores, programação, tecnologia" />
				<meta property="og:title" content="Tools4.tech - Ferramentas Essenciais para Desenvolvedores" />
				<meta property="og:description" content="Descubra ferramentas essenciais para programadores e acelere seu desenvolvimento de software em Tools4.tech." />
				<meta property="og:url" content="https://tools4.tech/" />
				<meta property="og:site_name" content="Tools4.tech" />
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:image" content="/favicon.ico" />
				<meta property="og:image:width" content="800" />
				<meta property="og:image:height" content="600" />
				<meta property="og:image:alt" content="Tools4.tech - Ferramentas para Desenvolvedores" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Tools4.tech - Ferramentas Essenciais para Desenvolvedores" />
				<meta name="twitter:description" content="Acelere seu desenvolvimento de software com as melhores ferramentas para desenvolvedores." />
				<meta name="twitter:image" content="/favicon.ico" />
				<link rel="canonical" href="https://tools4.tech/" />
			</Head>
			<body className="bg-[#111111] h-full ">
				<SessionProvider session={session}>
					<QueryProvider>
						<Navbar />
						<div className='flex flex-col items-center justify-center'>
							<CategoryBar />
						</div>
						{children}
					</QueryProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
