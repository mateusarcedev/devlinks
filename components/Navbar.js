import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github, FolderHeartIcon, PlusCircle, User2Icon, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Toast } from "../components/Toast";
import AddSuggestionModal from "./AddSuggestionModal";

export default function Navbar() {
	const { data: session } = useSession();
	const router = useRouter();
	const [toast, setToast] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showToast = (message, type) => {
		setToast({ message, type });
	};

	const handleFavoritesClick = (e) => {
		e.preventDefault();
		if (!session) {
			showToast("Faça login para acessar seus favoritos!", "warning");
			return;
		}
		router.push('/favorites');
	};

	const handleSuggestionClick = () => {
		if (!session) {
			showToast("Faça login para sugerir uma ferramenta!", "warning");
			return;
		}
		setIsModalOpen(true);
	};

	const handleModalSubmit = async (suggestionData) => {
		try {
			showToast("Sugestão enviada com sucesso!", "success");
		} catch (error) {
			showToast("Erro ao enviar sugestão. Tente novamente.", "error");
		}
	};

	return (
		<>
			<nav className="bg-navbar h-24 text-white flex items-center p-5 justify-between">
				<Link href="/" className="text-3xl font-bold hover:text-white/80">
					DevLinks
				</Link>
				<div className="flex items-center gap-4">
					<button
						onClick={handleFavoritesClick}
						className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
					>
						<FolderHeartIcon className="h-5 w-5 text-white" />
						<span className="sr-only">Favoritos</span>
						<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
							Favoritos
						</span>
					</button>

					<Link
						href="https://github.com/mateusarcedev/devlinks/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
					>
						<Github className="h-5 w-5 text-white" />
						<span className="sr-only">Github</span>
						<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
							Github
						</span>
					</Link>

					<button
						onClick={handleSuggestionClick}
						className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
					>
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
						<button
							onClick={() => signIn("github")}
							className="p-2 bg-black hover:bg-black/80 rounded-md transition-colors duration-200 group relative"
						>
							<User2Icon className="h-5 w-5 text-white" />
							<span className="sr-only">Entrar com GitHub</span>
							<span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-full left-1/2 transform -translate-x-1/2 mt-2">
								Entrar com GitHub
							</span>
						</button>
					)}
				</div>
			</nav>

			<AddSuggestionModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleModalSubmit}
			/>

			{toast && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast(null)}
				/>
			)}
		</>
	);
}