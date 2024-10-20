'use client';

import { useParams } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { AxiosConfig } from "../../utils/axiosConfig";
import Card from '../../../components/Card';

async function fetchCategoryData(id) {
  const { data } = await AxiosConfig.get(`/categories/${id}`);
  return data;
}

export default function ToolsPage() {
  const params = useParams();
  const slug = params.slug;

  const { data: categoryData, isLoading, error } = useQuery({
    queryKey: ["category", slug],
    queryFn: () => fetchCategoryData(slug),
    enabled: !!slug,
  });

  if (isLoading) return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Erro ao carregar os dados da categoria</div>;

  return (
    <div className="w-4/5 mx-auto py-8">
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData?.tools?.map(tool => (
          <Card key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}