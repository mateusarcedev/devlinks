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
      url="https://medium.com/"
      title="Medium" 
      src="/blogs/medium.png" 
      alt="Imagem do card" 
      desc="É uma plataforma onde você pode descobrir histórias e conhecimentos de escritores sobre diversos temas. É possível ler artigos de diferentes áreas, como programação, ciência de dados, tecnologia, autoaperfeiçoamento, escrita, , aprendizado de máquina, produtividade, entre outros" 
      />

      <Card 
      url="https://blog.rocketseat.com.br/"
      title="Blog Rocketseat" 
      src="/blogs/rocketseat.png" 
      alt="Imagem do card" 
      desc="É o blog da Rocketseat, uma plataforma de ensino de programação. Nele, você encontrará artigos sobre Node.js, carreira na área de desenvolvimento, comunidade de tecnologia, eventos como a Next Level Week, ferramentas como o Prisma e o TailwindCSS, inteligência artificial e outros tópicos relacionados à programação." 
      />

    <Card 
    url="https://diolinux.com.br/"
      title="Diolinux" 
      src="/blogs/diolinux.png" 
      alt="Imagem do card" 
      desc="É uma plataforma que aborda o mundo Linux e o software de código aberto. Nele, você encontrará conteúdo exclusivo, notícias, tutoriais e podcasts sobre sistemas operacionais como Zorin OS, Ubuntu, Elementary OS, Linux Mint, entre outros. Além disso, o site também aborda temas relacionados a aplicativos, Android e tecnologia em geral." 
      />

      <Card 
      url="https://stackoverflow.com/"
      title="Stack Overflow" 
      src="/blogs/stackoverflow.ico" 
      alt="Imagem do card" 
      desc="Stack Overflow é uma plataforma onde desenvolvedores aprendem, compartilham conhecimento e constroem suas carreiras. É um espaço para fazer perguntas, obter respostas e colaborar com a comunidade de programadores. Também oferece recursos como chat, blog e a possibilidade de criar equipes de trabalho." 
      />

<Card 
    url="https://www.lekoarts.de/"
      title="Lekoarts" 
      src="/blogs/lekoarts.png" 
      alt="Imagem do card" 
      desc="É um portfólio online de Lennart Jörgens, um engenheiro de software. Ele oferece uma ampla variedade de recursos e opções de personalização, incluindo a criação de temas no Figma e integração com o gatsby-source-tmdb. Além disso, o site também possui estatísticas e um projeto chamado portfolio-v2." 
      />

      <Card 
      url="https://projecthub.arduino.cc/"
      title="Arduino Project Hub" 
      src="/blogs/arduino_project_hub.ico" 
      alt="Imagem do card" 
      desc="Arduino Project Hub é uma plataforma onde os usuários podem navegar e compartilhar milhares de projetos criados com Arduino. Ela oferece modelos prontos para projetos de IoT, permitindo que os usuários criem projetos rapidamente, sem a necessidade de programação. O site também fornece recursos educacionais para aprendizado e inspiração." 
      />

<Card 
      url="https://cult.honeypot.io/"
      title="Cult Honeypot" 
      src="/blogs/cult_honeypot.png" 
      alt="Imagem do card" 
      desc="é uma plataforma que oferece conteúdo relacionado a desenvolvimento de carreira na área de tecnologia. Ele apresenta artigos, eventos, podcasts e relatórios sobre diversos tópicos relevantes para desenvolvedores. Além disso, o site também possui uma seção de vagas de emprego para profissionais da área." 
      />

<Card 
    url="https://wokwi.com/"
      title="Wokwi" 
      src="/blogs/wowky.png" 
      alt="Imagem do card" 
      desc="uma plataforma online que oferece um simulador de Arduino, ESP32 e STM32, permitindo simular projetos de IoT no navegador. Ele também suporta placas como Pi Pico. Além disso, o site possui um roadmap, o Wokwi Club e projetos de Arduino selecionados pela equipe, como o Touch LCD Breakout Game, 32 Servos Dancing, Dino Game, Electronic Safe, Dot Matrix Clock e FastLED Animations." 
      />

      <Card 
      url="https://dev.to/"
      title="Dev.to" 
      src="/blogs/devto.png" 
      alt="Imagem do card" 
      desc="DEV Community é uma plataforma online para desenvolvedores compartilharem conhecimento e se conectarem.Os usuários podem publicar artigos, participar de discussões e seguir outros desenvolvedores. É um espaço colaborativo e inclusivo para a comunidade de desenvolvimento de software." 
      />

<Card 
    url="https://www.tabnews.com.br/"
      title="TabNews" 
      src="/blogs/tabnews.png" 
      alt="Imagem do card" 
      desc="O TabNews é um site brasileiro desenvolvido e mantido pela comunidade, que oferece conteúdos relevantes sobre programação e tecnologia. Os usuários podem interagir com o site e ganhar tabcoins, uma moeda virtual, ao participar ativamente da comunidade." 
      />

      <Card 
      url="https://css-tricks.com/"
      title="CSS-Tricks" 
      src="/blogs/csstricks.ico" 
      alt="Imagem do card" 
      desc="CSS-Tricks é um site dedicado a fornecer dicas, truques e tutoriais sobre CSS e desenvolvimento web. É uma valiosa fonte de informações para designers e desenvolvedores que desejam aprimorar suas habilidades em CSS. O site também aborda tópicos relacionados, como JavaScript e ferramentas de desenvolvimento web." 
      />

<Card 
      url="https://www.geeksforgeeks.org/"
      title="Geeks for Geeks" 
      src="/blogs/geeksforgeeks.png" 
      alt="Imagem do card" 
      desc="GeeksforGeeks é um site de aprendizado e prática de programação. Ele oferece tutoriais, artigos e desafios para ajudar os desenvolvedores a aprimorar suas habilidades. É uma plataforma popular entre a comunidade de programadores." 
      />

      </div>
    </main>
  </>
  )
}
