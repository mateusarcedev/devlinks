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
				<meta property="og:title" content="DevLinks" />
				<meta
					property="og:description"
					content="Descubra ferramentas essenciais para programadores. Acelere seu desenvolvimento de software."
				/>
				<meta
					property="og:url"
					content="https://devlinks.mateusarce.dev/"
				/>
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