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
      url="https://uijar.com/"
      title="UI Jar" 
      src="/inspirationUI/uljar.ico" 
      alt="Imagem do card" 
      desc="É uma plataforma que oferece uma coleção de designs de interface de usuário prontos para uso. Ele fornece inspiração e recursos para designers e desenvolvedores criarem interfaces intuitivas e atraentes. O site valoriza a importância do design como uma linguagem, não apenas um estilo passageiro." 
      />    

      <Card 
      url="https://mobbin.com/browse/ios/apps"
      title="Mobbin" 
      src="/inspirationUI/mobbin.svg" 
      alt="Imagem do card" 
      desc="Oferece uma biblioteca de mais de 100.000 capturas de tela totalmente pesquisáveis de aplicativos móveis e web. Ele permite economizar horas de pesquisa em UI e UX, fornecendo referências de telas de login e outros elementos de interface. Você pode explorar aplicativos, capturas de tela, elementos de UI e fluxos para obter inspiração e insights em design de interface." 
      />

    <Card 
    url="https://collectui.com/"
      title="Collect UI" 
      src="/inspirationUI/collectui.ico" 
      alt="Imagem do card" 
      desc="Compila uma extensa coleção de interfaces de usuário (UI) criativas e inspiradoras. Ele oferece uma variedade de designs de sites, aplicativos e elementos de interface, tornando-o um recurso valioso para designers em busca de referências e ideias. É uma plataforma útil para se manter atualizado com as tendências de design." 
      />

      <Card 
      url="https://www.lapa.ninja/"
      title="Lapa Ninja" 
      src="/inspirationUI/lapaninja.ico" 
      alt="Imagem do card" 
      desc="Oferece uma coleção de recursos gratuitos para designers, incluindo modelos de sites, elementos de design e inspiração. Ele é conhecido por sua variedade de modelos de páginas de destino e designs criativos, sendo uma fonte valiosa para profissionais de design em busca de inspiração e ferramentas úteis. Vale a pena explorar para quem trabalha com design web." 
      />

<Card 
      url="https://www.behance.net/"
      title="Behance" 
      src="/inspirationUI/behance.ico" 
      alt="Imagem do card" 
      desc="Destaca o trabalho de designers, artistas e criativos de várias disciplinas. Ela permite aos profissionais exibirem seus portfólios, receber feedback e se conectar com outros membros da comunidade. Behance é amplamente reconhecido como uma vitrine global para talentos criativos e uma fonte de inspiração para projetos criativos." 
      />

<Card 
      url="https://www.awwwards.com/"
      title="Awwwards" 
      src="/inspirationUI/awwwards.svg" 
      alt="Imagem do card" 
      desc="Premia e reconhece a excelência em design de sites. Ele apresenta uma coleção de sites notáveis, destacando tendências e inovações de design web. É uma valiosa fonte de inspiração e um guia para o que há de mais atual no mundo do design digital." 
      />

      <Card 
      url="https://designmunk.com/"
      title="Design Munk" 
      src="/inspirationUI/desingmunk.svg" 
      alt="Imagem do card" 
      desc="Recursos e inspiração relacionados ao design gráfico, branding e marketing. Ele fornece modelos, dicas e tutoriais para designers em busca de ferramentas e orientações para aprimorar seus projetos. É uma plataforma útil para profissionais de design em busca de recursos e ideias para suas criações." 
      />

<Card 
      url="https://ui.draculatheme.com/"
      title="Dracula Theme" 
      src="/inspirationUI/draculaui.ico" 
      alt="Imagem do card" 
      desc='Oferece um esquema de cores e design chamado "Dracula" para interfaces de usuário. Ele fornece paletas de cores prontas para uso que são populares entre desenvolvedores e designers de aplicativos e sites. Essa ferramenta facilita a criação de designs visualmente atraentes e de fácil leitura.'
      />

      <Card 
      url="https://dribbble.com/"
      title="Dribbble" 
      src="/inspirationUI/dribbble.ico" 
      alt="Imagem do card" 
      desc="Renomada comunidade online para designers, onde profissionais compartilham seus projetos e trabalhos criativos. É uma plataforma que oferece inspiração, networking e feedback para designers gráficos, de produtos e digitais. Muitos designers utilizam o Dribbble para exibir seu portfólio e colaborar com outros membros da comunidade." 
      />

    <Card 
    url="https://land-book.com/"
      title="Land Book" 
      src="/inspirationUI/landbook.png" 
      alt="Imagem do card" 
      desc="Galeria online que apresenta uma seleção de designs criativos de páginas de destino. Ele serve como uma fonte valiosa de inspiração para designers, oferecendo exemplos de páginas de destino de alta qualidade em diversas categorias. É um recurso útil para profissionais em busca de referências e ideias para suas próprias criações." 
      />

      
<Card 
      url="https://www.figma.com/community"
      title="Figma Community" 
      src="/inspirationUI/figmacomunity.svg" 
      alt="Imagem do card" 
      desc="É uma plataforma online associada ao software de design Figma, onde designers podem compartilhar e acessar recursos, modelos, plugins e componentes. É uma comunidade ativa que facilita a colaboração e o compartilhamento de ativos de design entre profissionais. Designers utilizam para encontrar e contribuir com recursos que agilizam seus fluxos de trabalho de design." 
      />

      </div>
    </main>
  </>
  )
}
