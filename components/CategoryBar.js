'use client';

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Category from "./Category";
import { AxiosConfig } from "../app/utils/axiosConfig";

async function fetchCategories() {
	const { data } = await AxiosConfig.get("/categories");
	return data;
}

export default function CategoryBar() {
	const [activeCategory, setActiveCategory] = useState(null);
	const { data: categories, isLoading, error } = useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategories,
	});

	if (error) return (
		<h1 className="text-white">Erro ao carregar as categorias</h1>
	)

	const handleCategoryClick = (categoryId) => {
		setActiveCategory(categoryId);
	};

	return (
		<div className="bg-white w-4/5 h-auto rounded-lg flex items-center justify-between p-5 gap-2 overflow-x-auto mt-4">
			{isLoading ? (
				<>
					{[...Array(5)].map((_, index) => (
						<div key={index} className="flex-shrink-0">
							<div className="h-12 w-48 bg-gray-200 rounded-md animate-pulse"></div>
						</div>
					))}
				</>
			) : (
				categories?.map((category) => (
					<Category
						key={category.id}
						id={category.id}
						title={category.name}
						url={`/tools/${category.id}`}
						isActive={activeCategory === category.id}
						onClick={() => handleCategoryClick(category.id)}
					/>
				))
			)}
		</div>
	);
}