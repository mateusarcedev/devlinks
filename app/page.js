'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
	const [contributors, setContributors] = useState([])

	useEffect(() => {
		fetch('https://api.github.com/repos/mateusarcedev/devlinks/contributors')
			.then(response => response.json())
			.then(data => setContributors(data))
			.catch(error => console.error('Error fetching contributors:', error))
	}, [])

	return (
		<div className="bg-[#111] min-h-screen flex flex-col text-gray-300">
			<main className="container mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<section className="space-y-4 p-6 bg-[#222] rounded-lg">
						<h2 className="text-2xl font-bold text-white">Objetivo</h2>
						<p className="text-md leading-relaxed">
							O DevLinks visa ser um ponto centralizado de recursos, beneficiando tanto programadores
							novatos quanto experientes. Ao consolidar uma ampla gama de ferramentas e materiais de
							estudo em um único local, o projeto busca simplificar o processo de aprendizagem e
							desenvolvimento, tornando-o mais acessível e eficiente para todos os níveis de experiência
							em programação.
						</p>
					</section>

					<section className="space-y-4 p-6 bg-[#222] rounded-lg">
						<h2 className="text-2xl font-bold text-white">Contribuições</h2>
						<p className="text-md leading-relaxed">
							A comunidade de desenvolvedores é convidada a contribuir para este projeto, seja adicionando
							novas ferramentas, atualizando informações existentes ou sugerindo melhorias. Juntos, podemos
							criar um recurso ainda mais valioso para a comunidade de desenvolvimento de software.
						</p>
					</section>
				</div>

				<section className="space-y-8">
					<h2 className="text-3xl font-bold text-center text-white">Contribuidores</h2>
					<div className="flex flex-wrap justify-center gap-4 md:gap-6">
						{contributors.map((contributor) => (
							<a
								key={contributor.id}
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center group"
							>
								<div className="relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-gray-500 transition-colors duration-300">
									<Image
										src={contributor.avatar_url}
										alt={`Avatar de ${contributor.login}`}
										width={64}
										height={64}
										className="transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
								<span className="mt-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
									{contributor.login}
								</span>
							</a>
						))}
					</div>
				</section>
			</main>
		</div>
	)
}