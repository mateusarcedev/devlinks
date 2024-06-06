import Card from "@/components/Card";
import CategoryBar from "@/components/CategoryBar";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<main className="bg-background flex flex-col items-center w-full ">
				<div className="w-4/5 flex justify-center items-center mt-4 gap-4 flex-wrap mb-5">
					<Card
						url="https://iuricode.com/"
						title="Iuri Code"
						src="/portfolios/iuricode.svg"
						alt="Imagem do card"
						desc="Freelancer como Frontend Developer e UI Designer. Desenvolve interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO."
					/>

					<Card
						url="https://olaolu.dev/"
						title="Ola Olu"
						src="/portfolios/olaolu.svg"
						alt="Imagem do card"
						desc="Ele gosta de criar produtos front-end sólidos e escaláveis com ótimas experiências para o usuário."
					/>

					<Card
						url="https://lynnandtonic.com/"
						title="Lynn Fisher"
						src="/portfolios/lynnfisher.png"
						alt="Imagem do card"
						desc="Ela é Lynn e é designer, desenvolvedora CSS e ilustradora. Ela adora trabalhar na web e garantir que ela continue sendo um lugar para todos e para nossas paixões criativas, pessoais e peculiares."
					/>

					<Card
						url="https://www.cassie.codes/"
						title="Cassie Codes"
						src="/portfolios/cassieevans.png"
						alt="Imagem do card"
						desc="Ela gosta de criar coisas divertidas e interativas com código. Ela também fala e escreve sobre essas coisas."
					/>

					<Card
						url="https://zenorocha.com/"
						title="Zeno Rocha"
						src="/portfolios/zenorocha.svg"
						alt="Imagem do card"
						desc="Ele adora o modo escuro, código aberto e projetos paralelos. Quando não está trabalhando, gosta de correr, assistir filmes e comer queijo."
					/>

					<Card
						url="https://www.adhamdannaway.com/"
						title="Adham"
						src="/portfolios/adhamdannaway.ico"
						alt="Imagem do card"
						desc="Ele é um designer de produtos baseado na ensolarada Sydney, Austrália.Desde 2005, ele tem se dedicado a transformar problemas complexos em designs simples, belos e intuitivos. Quando não está trabalhando com design, você o encontrará cozinhando, fazendo jardinagem ou se exercitando no parque."
					/>

					<Card
						url="https://danielsternlicht.com/"
						title="Daniel Sternlicht"
						src="/portfolios/danielsternlicht.ico"
						alt="Imagem do card"
						desc="Ele está sempre em busca de aprender coisas novas, usando o Google como seu professor e o editor de código como seu caderno. A web é a vida dele, explorando tecnologias e técnicas web, desenvolvendo aplicativos web incríveis. Tudo o que pode ajudá-lo a expandir seu conhecimento é sempre bem-vindo."
					/>

					<Card
						url="https://mattfarley.ca/"
						title="Matt Farley"
						src="/portfolios/mattfarley.png"
						alt="Imagem do card"
						desc="Desde o início da jornada dele como designer freelancer há mais de 11 anos, ele tem realizado trabalhos remotos para agências, prestado consultoria para startups e colaborado com pessoas talentosas para criar produtos digitais tanto para uso empresarial quanto para o consumidor."
					/>
				</div>
			</main>
		</>
	);
}
