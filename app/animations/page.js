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
      url="https://scrollrevealjs.org/"
      title="ScrollReveal" 
      src="/animations/scroolreveal.ico" 
      alt="Imagem do card" 
      desc="ScrollReveal.js é uma biblioteca JavaScript que permite criar animações de scroll personalizadas em elementos da página. Ela facilita a revelação de elementos à medida que o usuário faz scroll na página." 
      />

      <Card 
      url="https://lottiefiles.com/"
      title="Lottie Files" 
      src="/animations/lottiefiles.png" 
      alt="Imagem do card" 
      desc="LottieFiles oferece uma ampla variedade de animações vetoriais em formato JSON . Compatível com várias plataformas e frameworks, como web e mobile, permite adicionar animações de alta qualidade de forma fácil e eficiente." 
      />

<Card 
      url="http://anijs.github.io/"
      title="Ani JS" 
      src="/animations/anijs.png" 
      alt="Imagem do card" 
      desc="O AniJS é uma biblioteca de animações CSS3 que permite criar animações interativas em seu site. Ele oferece uma integração fácil e rápida, além de ser leve e não exigir bibliotecas de terceiros. É uma ótima opção para adicionar animações a elementos HTML de forma simples e eficiente." 
      />

      <Card 
      url="https://animate.style/"
      title="Animate CSS" 
      src="/animations/animatecss.ico" 
      alt="Imagem do card" 
      desc="Uma biblioteca de animações CSS prontas para uso. Fácil de implementar e personalizar. Suporta a preferência de redução de movimento do usuário." 
      />

<Card 
      url="https://animejs.com/"
      title="Anime JS" 
      src="/animations/animejs.png" 
      alt="Imagem do card" 
      desc="Anime.js é uma biblioteca de animação JavaScript leve e poderosa, com suporte para propriedades CSS, SVG, atributos DOM e objetos JavaScript. Possui uma API simples de usar e oferece recursos como animações em cascata, transformações CSS em camadas e controle preciso de tempo e eventos." 
      />

      <Card 
      url="https://michalsnik.github.io/aos/"
      title="Animate On Scroll" 
      src="/animations/aos.png" 
      alt="Imagem do card" 
      desc="O AOS (Animate On Scroll) é uma biblioteca JavaScript leve que permite animar elementos à medida que eles entram na visualização durante a rolagem da página. É fácil de usar e oferece uma variedade de efeitos de animação pré-definidos para escolher." 
      />

<Card 
      url="https://elrumordelaluz.github.io/csshake/"
      title="CSS Shake" 
      src="/animations/cssshake.png" 
      alt="Imagem do card" 
      desc="Oferece uma variedade de classes CSS que podem ser aplicadas aos elementos para criar efeitos de tremor, balanço, rotação e muito mais. A biblioteca é fácil de usar e personalizável, permitindo adicionar animações interessantes aos elementos do seu site." 
      />

      <Card 
      url="http://ianlunn.github.io/Hover/"
      title="Hover CSS" 
      src="/animations/hovercss.png" 
      alt="Imagem do card" 
      desc="É uma biblioteca de efeitos de animação em CSS3 prontos para serem aplicados em links, botões, imagens e outros elementos. Os efeitos são fáceis de usar, copiar e colar, e estão disponíveis em diferentes formatos, como CSS, Sass e LESS." 
      />

<Card 
      url="https://greensock.com/"
      title="Green Sock" 
      src="/animations/greensock.ico" 
      alt="Imagem do card" 
      desc="É uma biblioteca JavaScript poderosa para animações na web, oferecendo uma ampla gama de recursos e plugins para criar animações suaves e de alto desempenho. O site fornece produtos, documentação, exemplos e suporte para ajudar os desenvolvedores a criar animações impressionantes." 
      />

      <Card 
      url="https://www.minimamente.com/project/magic/"
      title="Magic Animation" 
      src="/animations/magicanimation.png" 
      alt="Imagem do card" 
      desc="O site oferece uma coleção de efeitos de animação em CSS para adicionar interatividade e dinamismo aos elementos da página. Os efeitos são categorizados e podem ser facilmente aplicados aos elementos desejados. É uma ótima opção para criar animações impressionantes de forma simples e rápida." 
      />

<Card 
      url="https://mattboldt.com/demos/typed-js/"
      title="Typed JS" 
      src="/animations/typedjs.ico" 
      alt="Imagem do card" 
      desc="Biblioteca JavaScript que permite criar animações de digitação de texto de forma fácil e personalizada. Com uma simples configuração, é possível simular o efeito de digitação em elementos HTML. É uma ferramenta útil para adicionar interatividade e dinamismo ao conteúdo textual em páginas da web." 
      />

      <Card 
      url="https://swiperjs.com/swiper-api"
      title="Swiper" 
      src="/animations/swiper.png" 
      alt="Imagem do card" 
      desc="É uma poderosa ferramenta de criação de carrosséis e sliders interativos em JavaScript. A documentação fornece informações detalhadas sobre os recursos, opções de configuração e métodos disponíveis para usar o Swiper em seus projetos." 
      />

<Card 
      url="https://vincentgarreau.com/particles.js/"
      title="Particle JS" 
      src="/animations/particlejs.ico" 
      alt="Imagem do card" 
      desc="É uma biblioteca JavaScript leve para criar efeitos de partículas animadas. Ela oferece uma maneira fácil de adicionar elementos de partículas interativas e personalizáveis a sites e aplicativos." 
      />
      
      </div>
    </main>
  </>
  )
}
