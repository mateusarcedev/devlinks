import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import CategoryBar from "@/components/CategoryBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export const metadata = {
	openGraph: {
		title: 'DevLinks',
		description:
			'Descubra ferramentas essenciais para programadores. Acelere seu desenvolvimento de software.',
		url: 'https://devlinks.mateusarce.dev/',
		siteName: 'DevLinks',
		images: [
			{
				url: './devlinks.svg',
				width: 800,
				height: 600,
			},
			{
				url: './devlinks.svg',
				width: 1800,
				height: 1600,
				alt: 'Logo do Site',
			},
		],
		locale: 'pt_BR',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
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
				<Navbar />
				<div className='flex items-center justify-center'>
					<CategoryBar />
				</div>
				{children}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
