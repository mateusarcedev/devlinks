import Link from "next/link";
import { Github, Star, PlusCircle, LogIn, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
	const { data: session } = useSession(); // Verifica se o usuário está logado

	return (
		<nav className="bg-navbar h-24 text-white flex items-center p-5 justify-between">
			<Link href="/" className="text-3xl font-bold hover:text-white/80">
				DevLinks
			</Link>
			<div className="flex items-center gap-4">
				<Link
					href="https://github.com/mateusarcedev/devlinks/"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
				>
					<Star className="h-5 w-5 text-white" />
					<span className="sr-only">Favoritar repositório</span>
					<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
						Favoritar Repositório
					</span>
				</Link>
				<button className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative">
					<PlusCircle className="h-5 w-5 text-white" />
					<span className="sr-only">Sugerir ferramenta</span>
					<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
						Sugerir Ferramenta
					</span>
				</button>

				{session ? (
					<button
						onClick={() => signOut()}
						className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
					>
						<LogOut className="h-5 w-5 text-white" />
						<span className="sr-only">Sair</span>
						<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
							Sair
						</span>
					</button>
				) : (
					// Se o usuário não estiver logado, mostre o botão de login
					<button
						onClick={() => signIn("github")} // Inicia o login com GitHub
						className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
					>
						<LogIn className="h-5 w-5 text-white" />
						<span className="sr-only">Entrar com GitHub</span>
						<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
							Entrar com GitHub
						</span>
					</button>
				)}
			</div>
		</nav>
	);
}
