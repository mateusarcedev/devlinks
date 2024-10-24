'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { AxiosConfig } from "../app/utils/axiosConfig"
import { Toast } from "./Toast"

export default function Card({ tool, onFavoriteChange }) {
	const { data: session, status } = useSession()
	const [isFavorite, setIsFavorite] = useState(false)
	const [toast, setToast] = useState(null)

	useEffect(() => {
		if (status === "authenticated" && session?.user?.githubId) {
			checkFavoriteStatus()
		}
	}, [session, status, tool.id])

	const checkFavoriteStatus = async () => {
		if (status !== "authenticated" || !session?.user?.githubId) {
			console.log("User not authenticated in checkFavoriteStatus")
			return
		}

		try {
			const response = await AxiosConfig.get(`/favorites/check`, {
				params: {
					userId: session.user.githubId,
					toolId: tool.id
				}
			})
			setIsFavorite(response.data.isFavorite)
		} catch (error) {
			console.error("Error checking favorite status:", error)
			setToast({ message: "Erro ao verificar status de favorito", type: "error" })
		}
	}

	const handleFavoriteClick = async (e) => {
		e.preventDefault()
		e.stopPropagation()

		if (status !== "authenticated" || !session?.user?.githubId) {
			setToast({ message: "Por favor, faça login para adicionar aos favoritos.", type: "error" })
			return
		}

		try {
			const response = await AxiosConfig.post("/favorites/toggle", {
				userId: session.user.githubId,
				toolId: tool.id
			})

			const newFavoriteStatus = response.data.isFavorite
			setIsFavorite(newFavoriteStatus)
			setToast({
				message: `${tool.name} ${newFavoriteStatus ? 'adicionado aos' : 'removido dos'} favoritos`,
				type: "success"
			})

			if (onFavoriteChange) {
				onFavoriteChange(tool.id, newFavoriteStatus)
			}
		} catch (error) {
			console.error("Erro ao atualizar favoritos:", error.response ? error.response.data : error.message)
			setToast({ message: "Ocorreu um erro ao atualizar os favoritos. Por favor, tente novamente.", type: "error" })
		}
	}

	if (status === "loading") {
		return <div>Loading...</div>
	}

	return (
		<>
			<Link href={tool.link} target="_blank" className="block w-64 max-w-sm">
				<div className="bg-white hover:bg-blue-50 rounded-lg flex flex-col justify-between p-6 relative shadow-md transition-all duration-300 ease-in-out group cursor-pointer h-[290px]">
					<div className="flex justify-between items-center w-full">
						<h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
							{tool.name}
						</h2>
						<button
							className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
							onClick={handleFavoriteClick}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
							</svg>
							<span className="sr-only">Add to favorites</span>
						</button>
					</div>
					<div className="mt-2 flex-grow overflow-hidden">
						<p className="text-sm text-gray-600 mt-4">
							{tool.description}
						</p>
					</div>
				</div>
			</Link>
			{toast && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast(null)}
				/>
			)}
		</>
	)
}