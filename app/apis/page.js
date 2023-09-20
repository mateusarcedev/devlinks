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
      <div className="w-4/5 flex justify-center items-center mt-4 gap-4 flex-wrap mb-5">
      
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

<Card 
      url="https://developer.marvel.com/"
      title="Marvel API" 
      src="/apis/marvel.ico" 
      alt="Imagem do card" 
      desc="É a documentação de introdução para a API da Marvel Comics. Ele fornece informações sobre como começar a usar a API, incluindo o registro para obter uma chave de API, as diretrizes de uso e atribuição, e a comunidade de desenvolvedores. Os desenvolvedores podem criar aplicativos incríveis usando dados dos quadrinhos da Marvel." 
      />

      <Card 
      url="https://api.nasa.gov/"
      title="NASA API" 
      src="/apis/nasa.ico" 
      alt="Imagem do card" 
      desc="O objetivo deste site é tornar os dados da NASA, incluindo imagens, facilmente acessíveis para desenvolvedores de aplicativos. Este catálogo se concentra em APIs amplamente úteis e de fácil utilização e não inclui todas as APIs da NASA." 
      />

    <Card 
    url="https://pokeapi.co/"
      title="PokéAPI" 
      src="/apis/pokeapi.png" 
      alt="Imagem do card" 
      desc="O PokeAPI é uma API RESTful que fornece dados completos sobre a série principal de jogos Pokémon. É de fácil acesso e não requer configuração extensa para ser utilizada. A documentação é completa e permite começar a usar a API em poucos minutos." 
      />

      
<Card 
      url="https://swapi.dev/"
      title="Swapi" 
      src="/apis/swapi.ico" 
      alt="Imagem do card" 
      desc="O SWAPI é a API oficial de Star Wars, fornecendo dados completos sobre planetas, naves espaciais, veículos, personagens, filmes e espécies da saga. É uma fonte confiável e acessível para desenvolvedores obterem informações sobre o universo de Star Wars. A API é de fácil acesso e possui documentação abrangente para facilitar a integração em diferentes projetos." 
      />

<Card 
      url="https://rickandmortyapi.com/"
      title="Rick and Morty API" 
      src="/apis/rickandmorty.png" 
      alt="Icone do site DocAPI.dev" 
      desc="A API de Rick and Morty é uma fonte de dados completa sobre a famosa série de desenho animado. Ela fornece informações sobre personagens, episódios, locais e muito mais. É uma ferramenta útil para desenvolvedores que desejam criar aplicativos ou obter informações sobre o universo de Rick and Morty." 
      />

      <Card 
      url="https://developer.nytimes.com/"
      title="NY Times" 
      src="/apis/nytimes.ico" 
      alt="Icone do site DocAPI.dev" 
      desc="O site do Developer da New York Times oferece acesso a APIs e recursos para desenvolvedores interessados em utilizar dados e conteúdo do jornal. É uma plataforma que permite criar aplicativos, extrair informações e explorar os dados do NY Times de forma programática." 
      />

<Card 
      url="https://developer.riotgames.com/apis"
      title="Riot" 
      src="/apis/riot.png" 
      alt="Imagem do card" 
      desc="O site do Developer da Riot Games oferece acesso às APIs da empresa para desenvolvedores interessados em criar aplicativos e serviços relacionados aos jogos da Riot, como League of Legends. É uma plataforma que permite obter dados e interagir com os sistemas dos jogos da Riot Games de forma programática." 
      />

      <Card 
      url="https://unsplash.com/developers"
      title="Unplash API" 
      src="/apis/unplash.png" 
      alt="Imagem do card" 
      desc="O site Unsplash oferece uma API poderosa para acessar uma vasta coleção de fotos de alta qualidade. Os desenvolvedores podem se registrar e criar aplicativos incríveis com essas imagens. A API do Unsplash é amplamente utilizada em várias plataformas e ferramentas populares." 
      />

    <Card 
    url="https://deckofcardsapi.com/"
      title="Deck of cards" 
      src="/apis/deckofcards.ico" 
      alt="Imagem do card" 
      desc="O site Deck of Cards API fornece uma API para acessar um baralho de cartas virtual. Os desenvolvedores podem usar essa API para criar jogos de cartas, aplicativos de apostas e outras aplicações relacionadas a cartas. É uma ferramenta útil para desenvolvedores que precisam de funcionalidades de baralho de cartas em seus projetos." 
      />

      <Card 
      url="https://www.football-data.org/"
      title="Football Data" 
      src="/apis/footballdata.png" 
      alt="Imagem do card" 
      desc="O site Football Data API fornece uma API amigável para desenvolvedores com dados e estatísticas de futebol, como placares ao vivo, tabelas, escalações e muito mais. É fácil de integrar e usar, com acesso gratuito às principais competições. Para necessidades mais avançadas, há planos pagos disponíveis." 
      />

<Card 
      url="https://developer.spotify.com/"
      title="Spotify API" 
      src="/apis/spotify.ico" 
      alt="Imagem do card" 
      desc="O site Developer Spotify oferece uma plataforma para desenvolvedores construírem aplicativos e integrações com a vasta biblioteca de músicas e podcasts do Spotify. Os desenvolvedores podem acessar tutoriais e APIs para criar recursos como recomendações de músicas, playlists personalizadas e reprodução de áudio." 
      />

<Card 
      url="https://developers.google.com/youtube?hl=pt-br"
      title="Youtube API" 
      src="/apis/youtube.png" 
      alt="Icone do site DocAPI.dev" 
      desc="É a documentação oficial da API do YouTube, onde os desenvolvedores podem encontrar informações e recursos para adicionar funcionalidades do YouTube em seus sites e aplicativos. A documentação abrange desde a reprodução de vídeos incorporados até a pesquisa de conteúdo, análises e transmissões ao vivo." 
      />

      <Card 
      url="https://goqr.me/api/"
      title="QR code API" 
      src="/apis/qrcodegenerator.ico" 
      alt="Icone do site DocAPI.dev" 
      desc="O site goqr.me/api oferece uma API para gerar e decodificar QR codes. É possível criar QR codes personalizados com cores, logotipos e até mesmo ler QR codes através da API. O site também fornece documentação detalhada sobre os recursos e parâmetros da API." 
      />

<Card 
      url="https://http.dog/"
      title="HTTP Dog" 
      src="/apis/dog.svg" 
      alt="Imagem do card" 
      desc="É uma ferramenta simples e útil para testar requisições HTTP. Ele permite que você envie solicitações para um servidor e visualize as respostas correspondentes. É uma ótima opção para depurar e entender melhor como as requisições HTTP funcionam." 
      />

      <Card 
      url="https://developer.clashofclans.com/#/"
      title="Clash of Clans" 
      src="/apis/clashofclans.ico" 
      alt="Imagem do card" 
      desc="É a página oficial da API do Clash of Clans, fornecendo recursos para desenvolvedores. Ele permite que os desenvolvedores acessem dados e funcionalidades do jogo para criar aplicativos e integrações personalizadas." 
      />

    <Card 
    url="https://disneyapi.dev/"
      title="Disney APi" 
      src="/apis/disney.svg" 
      alt="Imagem do card" 
      desc="É uma API REST e GraphQL baseada em personagens da Disney. Ele fornece acesso a informações sobre os personagens da Disney de forma programática, permitindo que os desenvolvedores integrem esses dados em suas próprias aplicações." 
      />

      
<Card 
      url="https://docs.zelda.fanapis.com/docs"
      title="Zelda API" 
      src="/apis/zelda.png" 
      alt="Imagem do card" 
      desc="É a documentação de uma API aberta e gratuita que fornece informações sobre a franquia de jogos The Legend of Zelda. A API suporta tanto REST quanto GraphQL, permitindo aos desenvolvedores acessar dados sobre jogos, monstros e outros elementos da série." 
      />

<Card 
      url="https://fortnitetracker.com/site-api"
      title="Fortnite API" 
      src="/apis/fortnite.ico" 
      alt="Icone do site DocAPI.dev" 
      desc="Fornece uma API gratuita para desenvolvedores obterem informações do jogo Fortnite. É uma ótima ferramenta para criar bots, ferramentas e projetos de pesquisa relacionados ao Fortnite. Eles possuem diretrizes de uso, como limite de solicitações e autenticação por chave de API." 
      />

      <Card 
      url="https://developer.pubg.com/"
      title="PUBG API" 
      src="/apis/pubg.png" 
      alt="Icone do site DocAPI.dev" 
      desc="É a plataforma oficial para desenvolvedores que desejam construir aplicativos e sites usando dados oficiais do jogo PUBG. Ele oferece acesso a APIs e recursos para criar experiências personalizadas relacionadas ao PUBG." 
      />

<Card 
      url="https://openweathermap.org/api"
      title="Open Weather" 
      src="/apis/weather.png" 
      alt="Icone do site DocAPI.dev" 
      desc="Fornece uma coleção de APIs poderosas para dados meteorológicos atuais, previsões, históricos e mapas climáticos. É uma plataforma confiável e amplamente utilizada por profissionais e especialistas em projetos relacionados ao clima. O site oferece documentação detalhada e exemplos de uso para diferentes linguagens de programação." 
      />

      </div>
    </main>
  </>
  )
}
