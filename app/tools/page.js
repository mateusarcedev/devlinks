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

      <div className="w-4/5 flex justify-center items-center m-4 gap-4 flex-wrap">      
      <Card 
      url="https://profile-readme-generator.com/"
      title="Readme Generator" 
      src="/tools/readmegenerator.png" 
      alt="Imagem do card" 
      desc="Fornece modelos para criar arquivos README para o seu perfil do GitHub. Ele oferece uma variedade de modelos pré-projetados que você pode personalizar para mostrar seus projetos, habilidades e interesses de forma visualmente atraente. Pode ser uma ferramenta útil para aprimorar seu perfil do GitHub e torná-lo mais informativo e envolvente para os visitantes." 
      />

      <Card 
      url="https://getwaves.io/"
      title="Get Waves" 
      src="/tools/getwaves.png" 
      alt="Imagem do card" 
      desc="Permite gerar ilustrações de ondas personalizadas para uso em projetos de design. Com uma interface simples e intuitiva, você pode ajustar parâmetros como cor, tamanho e forma das ondas para criar gráficos exclusivos." 
      />

    <Card 
    url="https://getbootstrap.com/"
      title="Bootstrap" 
      src="/tools/bootstrap.png" 
      alt="Imagem do card" 
      desc="Oferece um conjunto de ferramentas e recursos para construir sites responsivos de forma rápida e eficiente. Ele fornece templates, componentes, plugins JavaScript e uma arquitetura personalizável utilizando Sass. Além disso, o Bootstrap possui uma documentação abrangente e uma comunidade ativa para suporte e colaboração." 
      />

      <Card 
      url="https://select2.org/"
      title="Select 2" 
      src="/tools/select2.png" 
      alt="Imagem do card" 
      desc="Biblioteca JavaScript que oferece uma substituição personalizável para caixas de seleção HTML. Ele fornece recursos avançados, como pesquisa, marcação, suporte a dados remotos e personalização completa." 
      />

<Card 
    url="https://www.sanity.io/"
      title="Sanity" 
      src="/tools/sanityio.png" 
      alt="Imagem do card" 
      desc="É um CMS moderno e baseado em API. Ele permite que você gerencie seu conteúdo de forma estruturada e reutilizável em qualquer canal. Com o Sanity, você pode definir seus próprios modelos de conteúdo em JavaScript e personalizar a interface de edição com componentes React." 
      />

      <Card 
      url="https://www.tinkercad.com/"
      title="Tinkercard" 
      src="/tools/tinkercard.ico" 
      alt="Imagem do card" 
      desc="Com o Tinkercad, você pode projetar e simular circuitos eletrônicos, além de criar modelos físicos para impressão 3D. É uma ferramenta versátil e acessível para estudantes, entusiastas de eletrônica e profissionais da área." 
      />

<Card 
      url="https://astro.build/"
      title="Astro" 
      src="/tools/astrobuild.svg" 
      alt="Imagem do card" 
      desc="Astro é um poderoso framework web que permite construir sites de conteúdo rápido, aplicações web dinâmicas e APIs de servidor. Ele oferece uma abordagem centrada no conteúdo, integração perfeita com bibliotecas populares de interface de usuário e uma experiência amigável para desenvolvedores. Com o Astro, você pode criar projetos web escaláveis e performáticos com facilidade." 
      />

<Card 
    url="https://threejs.org/"
      title="Three JS" 
      src="/tools/threejs.ico" 
      alt="Imagem do card" 
      desc="Uma biblioteca JavaScript utilizada para criar gráficos 3D interativos no navegador. Com o Three.js, é possível criar cenas, animações e efeitos visuais impressionantes. É uma ferramenta popular entre desenvolvedores e artistas que desejam explorar o potencial da renderização 3D na web." 
      />

      <Card 
      url="https://www.useblackbox.io/"
      title="Blackbox" 
      src="/tools/blackbox.svg" 
      alt="Imagem do card" 
      desc="Plataforma de assistência de codificação alimentada por IA que permite codificar 10 vezes mais rápido e melhor. Ele oferece recursos como autocompletar, sugestões automatizadas de código, geração de código com base em perguntas, otimização de erros, rastreamento de versão, geração automática de README e mensagens de commit inteligentes." 
      />

<Card 
    url="https://headlessui.com/"
      title="Headless UI" 
      src="/tools/headlessui.ico" 
      alt="Imagem do card" 
      desc="O Headless UI é uma biblioteca de componentes de interface de usuário completamente sem estilo, projetados para serem totalmente acessíveis e integrarem perfeitamente com o Tailwind CSS. Ele oferece uma solução flexível e personalizável para criar interfaces bonitas e acessíveis em seus projetos web." 
      />

      <Card 
      url="https://ariakit.org/"
      title="Aria Kit" 
      src="/tools/ariakit.png" 
      alt="Imagem do card" 
      desc="O Ariakit é uma biblioteca de código aberto que oferece componentes e hooks de nível inferior para construir aplicativos web acessíveis com React. Ele é projetado para ajudar na criação de sistemas de design, bibliotecas de componentes e aplicativos web acessíveis." 
      />

<Card 
      url="https://webcode.tools/"
      title="Webcode tools" 
      src="/tools/webcode.webp" 
      alt="Imagem do card" 
      desc="Plataforma que oferece geradores de código para desenvolvedores, incluindo geradores de CSS altamente personalizáveis, geradores de elementos HTML, geradores de dados estruturados JSON-LD para melhorar o SEO do seu site, geradores de meta tags, geradores de Open Graph meta tags, geradores de Twitter Cards e geradores de arquivos robots.txt. " 
      />

<Card 
      url="https://swimm.io/"
      title="Swimm IO" 
      src="/tools/swimmio.webp" 
      alt="Imagem do card" 
      desc="Facilita a documentação interna de código e o compartilhamento de conhecimento entre equipes de desenvolvimento. Com recursos como geração automática de documentação, integração com IDEs e plugins para CI, o Swimm ajuda a acelerar o desenvolvimento e a manter a documentação atualizada. " 
      />

<Card 
      url="https://hygraph.com/"
      title="Hygraph" 
      src="/tools/hygraph.ico" 
      alt="Imagem do card" 
      desc="O Hygraph é uma plataforma de análise de dados baseada em GraphQL. Ele permite que você consulte e visualize dados de forma eficiente, fornecendo uma interface intuitiva para explorar e analisar dados complexos. Com recursos como consultas flexíveis, visualizações interativas e colaboração em tempo real." 
      />

<Card 
      url="https://www.radix-ui.com/"
      title="Radix UI" 
      src="/tools/radixui.png" 
      alt="Imagem do card" 
      desc="O Radix UI é uma biblioteca de componentes de código aberto otimizada para desenvolvimento rápido, fácil manutenção e acessibilidade. Basta importar e usar, sem necessidade de configuração. Ele oferece uma ampla gama de componentes prontos para uso, facilitando a criação de interfaces de usuário bonitas e funcionais." 
      />

<Card 
      url="https://tailwindui.com/components"
      title="Tailwind UI" 
      src="/tools/tailwindui.ico" 
      alt="Imagem do card" 
      desc="O Tailwind UI é uma biblioteca de componentes e templates prontos para uso, projetados com expertise e beleza, para acelerar o desenvolvimento de projetos com Tailwind CSS. É uma ferramenta essencial para criar interfaces bonitas e responsivas de forma rápida e eficiente." 
      />

<Card 
      url="https://bohr.io/"
      title="Bohr IO" 
      src="/tools/borhio.ico" 
      alt="Imagem do card" 
      desc="O bohr.io é uma plataforma de desenvolvimento e implantação integrada ao GitHub, projetada para ajudar os desenvolvedores a liberarem todo o seu potencial. Eles oferecem recursos básicos gratuitos, planos pagos para projetos comerciais e suporte à comunidade por meio de seu servidor Discord." 
      />

<Card 
      url="https://mintlify.com/"
      title="Mintlify" 
      src="/tools/mintlify.ico" 
      alt="Imagem do card" 
      desc="Mintlify é uma plataforma que ajuda você a criar uma documentação bonita e eficaz para seus usuários. Seja você um desenvolvedor, gerente de produto ou profissional de marketing, você pode usar o Mintlify para criar e manter documentação que converta usuários." 
      />

<Card 
      url="https://books.goalkicker.com/"
      title="Notas de programação para profissionais" 
      src="/tools/freebooksnotes.ico" 
      alt="Imagem do card" 
      desc="Site com vários livros de anotações de diferentes tecnologiais(em inglês)." 
      />

<Card 
      url="https://rxresu.me/pt-BR"
      title="Currículo reativo" 
      src="/tools/reativeresume.ico" 
      alt="Imagem do card" 
      desc="É um gerador de currículos, gratuito e de código aberto, desenvolvido para facilitar as tarefas tediosas de criação, atualização e divulgação de seu currículo. Este aplicativo possibilita a criação de múltiplos currículos, que podem ser compartilhados com recrutadores ou amigos com um link exclusivo ou impressos como PDF. Tudo isso de graça, sem anúncios, sem rastreamento, mantendo a integridade e privacidade dos seus dados." 
      />

<Card 
      url="https://checkio.org/"
      title="CheckIO" 
      src="/tools/checkio.png" 
      alt="Imagem do card" 
      desc="Jogos de codificação para programadores iniciantes e avançados onde você pode melhorar suas habilidades de codificação resolvendo desafios envolventes e tarefas divertidas usando Python e TypeScript" 
      />

      </div>
    </main>
  </>
  )
}
