export default function Home() {
	return (
		<div className="bg-background h-full flex flex-col">


			<main className="flex flex-col items-center px-24 py-16 gap-12 text-[#D9D9D9]">

				<div className="flex flex-col gap-4 items-center">
					<h1 className="text-4xl md:text-2xl sm:text-xl">Sobre o projeto 🧑🏽‍💻</h1>
					<p className="text-xl">
						Este é um projeto criado para ajudar programadores
						iniciantes a encontrar ferramentas úteis para o
						desenvolvimento de softwares. Aqui você encontrará
						materiais para desenvolvimento frontend, backend e
						estudo de estruturas de dados. Sinta-se livre para
						contribuir.
					</p>
				</div>

				<div className="w-4/5 flex flex-col gap-4 items-center">
					<h1 className="text-4xl">De onde veio a ideia? 💡</h1>
					<p className="text-xl">
						Quando comecei a estudar programação, senti uma grande
						dificuldade em encontrar materiais de estudo e
						ferramentas que ajudassem no desenvolvimento. Então
						decidi criar este repositório, reunindo informações de
						threads do Twitter, Instagram e outros sites para ajudar
						tanto programadores novos quanto experientes.
					</p>
				</div>
			</main>
		</div>
	);
}
