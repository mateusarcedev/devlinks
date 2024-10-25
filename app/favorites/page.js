'use client';

import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { AxiosConfig } from "../utils/axiosConfig";
import Card from '../../components/Card';
import { Toast } from '../../components/Toast';

// Função para buscar os detalhes de uma ferramenta
async function fetchToolDetails(toolId) {
  const { data } = await AxiosConfig.get(`/tools/${toolId}`);
  return data;
}

// Função para buscar favoritos e seus detalhes
async function fetchFavoritesWithDetails() {
  // Primeiro, busca a lista de favoritos
  const { data: favorites } = await AxiosConfig.get('/favorites');

  // Depois, busca os detalhes de cada ferramenta
  const favoritesWithTools = await Promise.all(
    favorites.map(async (favorite) => {
      const toolDetails = await fetchToolDetails(favorite.toolId);
      return {
        ...favorite,
        tool: toolDetails
      };
    })
  );

  return favoritesWithTools;
}

export default function Favorites() {
  const [toast, setToast] = useState(null);

  const { data: favorites, isLoading, error, refetch } = useQuery({
    queryKey: ["favorites-with-tools"],
    queryFn: fetchFavoritesWithDetails,
  });

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleFavoriteRemoved = async () => {
    await refetch();
    showToast("Item removido dos favoritos", "success");
  };

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      Carregando seus favoritos...
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen">
      Erro ao carregar seus favoritos
    </div>
  );

  if (!favorites?.length) return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-xl font-semibold mb-4">Nenhum favorito encontrado</h2>
      <p className="text-gray-600">
        Você ainda não adicionou nenhuma ferramenta aos favoritos.
      </p>
    </div>
  );

  return (
    <div className="w-4/5 mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Meus Favoritos</h1>
      <div className="flex flex-wrap justify-between items-center gap-4">
        {favorites.map(favorite => (
          <Card
            key={favorite.id}
            tool={favorite.tool}
            showToast={showToast}
            onFavoriteRemoved={handleFavoriteRemoved}
            isFavorite={true}
            favoriteId={favorite.id}
          />
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