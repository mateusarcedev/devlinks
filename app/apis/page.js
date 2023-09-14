import Card from "@/components/Card";
import CategoryBar from "@/components/CategoryBar";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <>
      <Navbar/>
      <main className="bg-background flex flex-col items-center w-full ">
      <div className="w-4/5 flex justify-center items-center">
      <CategoryBar />
      </div>
      <div className="w-4/5 flex justify-center items-center mt-4 gap-4 flex-wrap">
      
      <Card 
      url="https://dummyjson.com/"
      title="DummyJSON" 
      src="/apis/dummyjson.png" 
      alt="Imagem do card" 
      desc="O DummyJSON é uma ferramenta que gera dados falsos em formato JSON para testes de software. Ele permite criar rapidamente conjuntos de dados fictícios para simular diferentes cenários e validar a funcionalidade do sistema." 
      />

      <Card 
      url="https://fakestoreapi.com/"
      title="Fake Store API" 
      src="/apis/fakestory.png" 
      alt="Imagem do card" 
      desc="A Fake Store API é uma API que simula uma loja online, fornecendo dados fictícios de produtos, categorias, clientes e pedidos. É uma ferramenta útil para testar e desenvolver aplicativos de comércio eletrônico sem a necessidade de dados reais." 
      />

    <Card 
    url="https://jsonplaceholder.typicode.com/"
      title="{JSON} Placeholder" 
      src="/apis/jsonplaceholder.ico" 
      alt="Imagem do card" 
      desc="O JSONPlaceholder é um serviço online que fornece dados de exemplo em formato JSON para testar e prototipar aplicativos. Ele simula uma API RESTful e permite que os desenvolvedores obtenham, criem, atualizem e excluam dados fictícios." 
      />

      <Card 
      url="https://rapidapi.com/hub"
      title="Rapid API Hub" 
      src="/apis/rapidapi.png" 
      alt="Imagem do card" 
      desc="A RapidAPI é uma plataforma que permite aos desenvolvedores acessar e integrar facilmente uma ampla variedade de APIs em seus projetos. Ela oferece uma maneira rápida e conveniente de encontrar, testar e usar APIs de diferentes provedores, simplificando o processo de desenvolvimento de software." 
      />

<Card 
      url="https://www.themoviedb.org/"
      title="The Movie Database" 
      src="/apis/themoviedb.png" 
      alt="Imagem do card" 
      desc="A TheMovieDB é uma plataforma online que fornece informações sobre filmes, séries de TV e celebridades. Os usuários podem pesquisar e descobrir detalhes sobre seus filmes favoritos, como sinopse, elenco e classificações. É útil para amantes do cinema se manterem atualizados sobre o mundo do entretenimento." 
      />

<Card 
      url="https://docapi.dev/books/api-de-frases"
      title="Crud de Frases" 
      src="/apis/docapi.png" 
      alt="Icone do site DocAPI.dev" 
      desc="Uma API simples para criar, editar, obter e excluir frases. Foi desenvolvida para ensinar os estudantes a realizar integrações de API com um Front-end React. A API não possui autenticação e está disponível gratuitamente." 
      />

      <Card 
      url="https://docapi.dev/books/api-do-sistema-solar"
      title="Sistema Solar" 
      src="/apis/docapi.png" 
      alt="Icone do site DocAPI.dev" 
      desc="Esta API trata de uma lista de planetas e corpos celestes do sistema solar, com o objetivo de ensinar estudantes a fazerem integrações de API em um Front-end React. É uma iniciativa educacional para ajudar os alunos a aprenderem sobre programação e desenvolvimento web. A API não possui autenticação e está disponível gratuitamente." 
      />

      </div>
    </main>
  </>
  )
}
