'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { AxiosConfig } from "../../utils/axiosConfig";
import Card from '../../../components/Card';
import { Toast } from '../../../components/Toast';  // Certifique-se de que o caminho de importação está correto

async function fetchCategoryData(id) {
  const { data } = await AxiosConfig.get(`/categories/${id}`);
  return data;
}

export default function ToolsPage() {
  const params = useParams();
  const slug = params.slug;
  const [toast, setToast] = useState(null);

  const { data: categoryData, isLoading, error } = useQuery({
    queryKey: ["category", slug],
    queryFn: () => fetchCategoryData(slug),
    enabled: !!slug,
  });

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Erro ao carregar os dados da categoria</div>;

  return (
    <div className="w-4/5 mx-auto py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {categoryData?.tools?.map(tool => (
          <Card key={tool.id} tool={tool} showToast={showToast} />
        ))}
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}