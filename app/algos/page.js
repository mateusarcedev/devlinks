import Card from "@/components/Card";

export default function Home() {
	return (
		<>
			<main className="bg-background flex flex-col items-center w-full ">
				<div className="w-4/5 flex justify-center items-center mt-4 gap-4 flex-wrap mb-5">
					<Card
						url="https://www.beecrowd.com.br/judge/pt/login"
						title="BEECROWD"
						src="/algos/beecrowd.png"
						alt="Imagem do card"
						desc="Este é um recurso online gratuito, desenvolvido pelo Google, que oferece exercícios e dicas para ajudar você a se preparar para uma entrevista de emprego em inglês de maneira mais eficiente."
					/>

					<Card
						url="https://grow.google/certificates/interview-warmup/?utm_source=news.google.com&utm_medium=referral&utm_campaign=news-sitemap"
						title="Interview Warmup"
						src="/algos/interviewwarmup.png"
						alt="Imagem do card"
						desc="Este é um recurso online gratuito, desenvolvido pelo Google, que oferece exercícios e dicas para ajudar você a se preparar para uma entrevista de emprego em inglês de maneira mais eficiente."
					/>

					<Card
						url="https://www.jschallenger.com/"
						title="JS Challenger"
						src="/algos/jschallenger.png"
						alt="Imagem do card"
						desc="O JS Challenger é uma plataforma online com desafios de programação em JavaScript . Oferece exercícios práticos e feedback instantâneo. Ideal para desenvolvedores que desejam melhorar suas habilidades em JavaScript."
					/>

					<Card
						url="https://app.codility.com/programmers/"
						title="codility"
						src="/algos/codility.png"
						alt="Imagem do card"
						desc="O Codility é uma plataforma de testes de programação usada para avaliar habilidades técnicas de desenvolvedores. Oferece desafios em várias linguagens e avalia automaticamente as soluções enviadas. É útil para recrutamento e para desenvolvedores praticarem suas habilidades."
					/>

					<Card
						url="https://www.hackerrank.com/dashboard"
						title="HackerRank"
						src="/algos/hackerrank.png"
						alt="Imagem do card"
						desc="O HackerRank é uma plataforma de programação online que oferece desafios de codificação, competições e avaliações técnicas. É usado por empresas para recrutamento e por desenvolvedores para praticar habilidades de programação."
					/>
				</div>
			</main>
		</>
	);
}
