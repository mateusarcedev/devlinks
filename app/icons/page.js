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

      <div className="w-4/5 flex justify-center items-center m-4 gap-4 flex-wrap mb-5">      
      <Card 
      url="https://iconscout.com/"
      title="IconScout" 
      src="/icons/iconsout.png" 
      alt="Imagem do card" 
      desc="IconScout é uma biblioteca de ícones gratuita e de código aberto que oferece uma ampla variedade de ícones vetoriais para uso em projetos de design e desenvolvimento. Os ícones são personalizáveis e podem ser baixados em vários formatos, como SVG, PNG e fontes de ícones." 
      />

      <Card 
      url="https://fontawesome.com/"
      title="Font Awesome" 
      src="/icons/fontawesome.png" 
      alt="Imagem do card" 
      desc="FontAwesome é uma biblioteca de ícones popular e amplamente utilizada, que oferece uma vasta coleção de ícones vetoriais para uso em projetos de design e desenvolvimento web." 
      />

    <Card 
    url="https://lordicon.com/"
      title="LordIcon" 
      src="/icons/lordicon.png" 
      alt="Imagem do card" 
      desc="Lordicon é uma biblioteca de animações vetoriais interativas que oferece uma ampla variedade de ícones animados personalizáveis para uso em projetos de design e desenvolvimento web. É possível adicionar animações dinâmicas e envolventes aos ícones." 
      />

      <Card 
      url="https://ionic.io/ionicons"
      title="Ionicons" 
      src="/icons/ionicons.png" 
      alt="Imagem do card" 
      desc="É uma biblioteca de ícones vetoriais que oferece uma extensa coleção de ícones prontos para uso. Com uma variedade de estilos e tamanhos, os ícones são altamente personalizáveis e podem ser facilmente integrados em aplicativos e sites para melhorar a experiência do usuário." 
      />

<Card 
    url="https://heroicons.dev/"
      title="Hero Icons" 
      src="/icons/heroicons.svg" 
      alt="Imagem do card" 
      desc="Heroicons.dev é uma biblioteca de ícones minimalistas e personalizáveis, projetada para uso em projetos de design e desenvolvimento web. Com uma ampla seleção de ícones em diferentes estilos e tamanhos, o Heroicons.dev oferece uma maneira fácil e rápida de adicionar ícones elegantes e modernos aos seus projetos." 
      />

      <Card 
      url="https://feathericons.com/"
      title="Feather Icons" 
      src="/icons/feathericons.png" 
      alt="Imagem do card" 
      desc="Feather Icons é uma biblioteca de ícones minimalistas e leves, perfeita para projetos de design e desenvolvimento web. Com uma ampla variedade de ícones vetoriais, o Feather Icons oferece uma coleção elegante e fácil de usar, com ícones personalizáveis e prontos para serem integrados em seus projetos." 
      />

<Card 
      url="https://thenounproject.com/"
      title="Noun Icons" 
      src="/icons/nounicons.png" 
      alt="Imagem do card" 
      desc="É um site que oferece uma vasta coleção de ícones de alta qualidade para uso em projetos de design. Com uma interface intuitiva, os usuários podem pesquisar e baixar ícones para ilustrar suas criações de forma eficiente." 
      />

<Card 
    url="https://remixicon.com/"
      title="Remix Icons" 
      src="/icons/remixicon.webp" 
      alt="Imagem do card" 
      desc="Com uma sintaxe simples e intuitiva, os desenvolvedores podem facilmente incorporar ícones em suas aplicações para melhorar a experiência do usuário. É uma ferramenta valiosa para agilizar o desenvolvimento de interfaces visualmente atraentes." 
      />

      <Card 
      url="https://iconpark.oceanengine.com/official"
      title="IconPark" 
      src="/icons/iconpark.svg" 
      alt="Imagem do card" 
      desc="O ByteDance IconPark é uma biblioteca de ícones de código aberto desenvolvida pela ByteDance. Com uma ampla variedade de ícones disponíveis, o IconPark oferece aos desenvolvedores uma maneira fácil e conveniente de adicionar ícones estilizados aos seus aplicativos e sites." 
      />

<Card 
    url="https://www.flaticon.com/"
      title="FlatIcon" 
      src="/icons/flaticon.png" 
      alt="Imagem do card" 
      desc="O Flaticon é um site que oferece uma ampla variedade de ícones vetoriais gratuitos e premium. Com uma interface intuitiva e recursos de pesquisa avançados, o Flaticon facilita a localização e o download de ícones personalizáveis." 
      />

      <Card 
      url="https://phosphoricons.com/"
      title="Phoshor Icons" 
      src="/icons/phosphoricons.png" 
      alt="Imagem do card" 
      desc="Com um design moderno e consistente, os ícones do Phosphor Icons são altamente personalizáveis e podem ser facilmente integrados em projetos de software. É uma escolha popular entre os desenvolvedores para adicionar elementos visuais atraentes às interfaces de usuário." 
      />

<Card 
      url="https://react-icons.github.io/react-icons/"
      title="React Icons" 
      src="/icons/reacticons.png" 
      alt="Imagem do card" 
      desc="O React Icons é uma biblioteca que fornece um conjunto de ícones populares para uso em aplicativos React. Ele permite que os desenvolvedores adicionem facilmente ícones a seus componentes, melhorando a experiência do usuário. É uma ferramenta útil para criar interfaces intuitivas e visualmente atraentes." 
      />

<Card 
      url="https://iconoir.com/"
      title="Iconoir" 
      src="/icons/iconoir.png" 
      alt="Imagem do card" 
      desc="O Iconoir é uma biblioteca de ícones que oferece uma ampla variedade de ícones para uso em projetos de design. É uma ferramenta útil para designers e desenvolvedores que desejam adicionar ícones estilizados e modernos em seus projetos. O site permite que você faça o download dos ícones em diferentes formatos." 
      />

<Card 
      url="https://tablericons.com/"
      title="Tabler Icons" 
      src="/icons/tableicons.svg" 
      alt="Imagem do card" 
      desc="O Tabler Icons é um site que oferece mais de 1400 ícones SVG gratuitos e de código aberto. É uma biblioteca útil para designers e desenvolvedores que desejam adicionar ícones estilizados em seus projetos. Os ícones são criados por Codecalm e Paweł." 
      />

<Card 
      url="https://iconsvg.xyz/"
      title="Icon SVG" 
      src="/icons/iconsvg.png" 
      alt="Imagem do card" 
      desc="O ICONSVG é um site que oferece ícones SVG personalizáveis e rápidos para projetos. É uma ferramenta útil para designers e desenvolvedores que desejam adicionar ícones escaláveis e personalizados em seus projetos. O site requer a ativação do JavaScript para funcionar corretamente." 
      />

<Card 
      url="https://shape.so/"
      title="Shape SO" 
      src="/icons/shape.svg" 
      alt="Imagem do card" 
      desc="O Shape é um site que oferece uma variedade de formas personalizáveis para uso em projetos de design. É uma ferramenta útil para designers e desenvolvedores que desejam adicionar formas estilizadas e modernas em seus projetos. O site permite que você personalize as formas de acordo com suas necessidades." 
      />

<Card 
      url="https://akveo.github.io/eva-icons/#/"
      title="Eva Icons" 
      src="/icons/evaicons.jpg" 
      alt="Imagem do card" 
      desc="O Eva Icons é um site que oferece uma coleção de ícones de interface de usuário de código aberto, cuidadosamente projetados para ações e itens comuns. É uma biblioteca útil para designers e desenvolvedores que desejam adicionar ícones estilizados e modernos em seus projetos. O site permite que você explore e utilize os ícones de forma fácil e gratuita." 
      />


      </div>
    </main>
  </>
  )
}
