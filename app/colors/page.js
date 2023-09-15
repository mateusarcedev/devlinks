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
      url="https://colorhunt.co/"
      title="Color Hunt" 
      src="/colors/colorhunt.svg" 
      alt="Imagem do card" 
      desc="O Color Hunt é um site que oferece paletas de cores selecionadas manualmente para designers e artistas. Com uma ampla variedade de combinações de cores, você pode descobrir e explorar novas paletas para seus projetos de design de forma rápida e fácil." 
      />

<Card 
      url="https://www.happyhues.co/"
      title="Happy Hues" 
      src="/colors/happyhue.png" 
      alt="Imagem do card" 
      desc="O Happy Hues é um site de inspiração de paletas de cores que oferece exemplos do mundo real de como as cores podem ser usadas em projetos de design. É uma ótima ferramenta para ajudar a escolher as cores certas e criar uma estética visualmente agradável." 
      />

<Card 
      url="https://hihayk.github.io/scale/#4/6/50/80/-51/67/20/14/1D9A6C/29/154/108/white"
      title="Scale" 
      src="/colors/colorgenerate.ico" 
      alt="Imagem do card" 
      desc="O Scale é um gerador de escalas de cores que permite criar combinações de cores personalizadas. Com uma interface simples e fácil de usar, você pode ajustar os valores de matiz, saturação, luminosidade e transparência para obter a paleta de cores desejada." 
      />

<Card 
      url="https://www.whocanuse.com/"
      title="Who can use" 
      src="/colors/whocanuse.png" 
      alt="Imagem do card" 
      desc="O Who Can Use é uma ferramenta que destaca como a combinação de cores pode afetar pessoas com deficiência visual ou baixa visão. Ele fornece informações sobre o contraste de cores e como diferentes condições de visão podem ser afetadas por determinadas combinações de cores." 
      />

<Card 
      url="https://picular.co/"
      title="Picular" 
      src="/colors/picular.png" 
      alt="Imagem do card" 
      desc="Ajuda você a encontrar paletas de cores perfeitas para seus projetos. Com base em palavras-chave, ele oferece inspiração e combinações de cores únicas. É uma ferramenta útil para designers em busca de cores criativas e impactantes." 
      />

<Card 
      url="https://coolors.co/"
      title="Coolors" 
      src="/colors/coolors.png" 
      alt="Imagem do card" 
      desc="O Coolors é um site que permite criar paletas de cores de forma rápida e fácil. Ele oferece recursos como exportar paletas, verificar o contraste entre as cores e compartilhar as paletas criadas." 
      />

<Card 
      url="https://www.grabient.com/"
      title="Grabient" 
      src="/colors/grabient.ico" 
      alt="Imagem do card" 
      desc="Permite criar gradientes de cores personalizados de forma fácil e rápida. Com uma interface intuitiva, você pode selecionar as cores desejadas e ajustar o gradiente conforme suas preferências." 
      />

<Card 
      url="https://brandcolors.net/"
      title="Brand Colors" 
      src="/colors/brandcolors.png" 
      alt="Imagem do card" 
      desc="Reúne as cores oficiais de marcas famosas, como Facebook, Google, Twitter, entre outras. É uma referência útil para designers e profissionais de marketing que desejam utilizar as cores autênticas das marcas em seus projetos. O site oferece os códigos hexadecimais das cores para fácil utilização." 
      />

<Card 
      url="https://smart-swatch.netlify.app/"
      title="Smart Swatch" 
      src="/colors/smartswatch.png" 
      alt="Imagem do card" 
      desc="Permite criar paletas de cores personalizadas para seus projetos. Com uma interface simples e intuitiva, você pode selecionar as cores desejadas e obter os códigos hexadecimais correspondentes." 
      />

<Card 
      url="https://culrs.com/"
      title="Curls" 
      src="/colors/curls.png" 
      alt="Imagem do card" 
      desc="Este site oferece diversas paletas de cores monocromáticas com uma ampla gama de tons de uma única cor." 
      />

<Card 
      url="https://gradienthunt.com/"
      title="Gradient Hunt" 
      src="/colors/gradienthunt.png" 
      alt="Imagem do card" 
      desc="O Gradient Hunt é um site que oferece uma coleção de gradientes de cores bonitos. É uma ótima ferramenta para designers e desenvolvedores que desejam encontrar inspiração e usar gradientes em seus projetos. O site é fácil de navegar e permite que você copie os códigos de cores dos gradientes desejados." 
      />

<Card 
      url="https://pigment.shapefactory.co/"
      title="Pigment" 
      src="/colors/pigmentui.png" 
      alt="Imagem do card" 
      desc="O Pigment é um site que oferece uma variedade de paletas de cores para inspiração e uso em projetos de design. Com uma interface simples e intuitiva, é fácil explorar e selecionar paletas de cores que se adequem às suas necessidades. O site também permite que você copie os códigos de cores das paletas escolhidas." 
      />

<Card 
      url="https://gradientbuttons.colorion.co/"
      title="Gradient Buttons" 
      src="/colors/gradientbuttons.webp" 
      alt="Imagem do card" 
      desc="O Gradient Buttons é um site que oferece uma coleção de botões com gradientes de cores pré-definidos. É uma ferramenta útil para designers e desenvolvedores que desejam adicionar botões atraentes e estilizados em seus projetos. O site permite que você visualize e copie o código CSS dos botões gradientes selecionados." 
      />

<Card 
      url="https://flatuicolors.com/"
      title="Flat UI" 
      src="/colors/flatuicolors.ico" 
      alt="Imagem do card" 
      desc="O Flat UI Colors 2 é um site que oferece 14 paletas de cores planas, totalizando 280 cores para uso em projetos de design. É uma ferramenta útil para encontrar combinações de cores modernas e vibrantes. O site permite que você copie os códigos de cores hexadecimais das paletas selecionadas." 
      />

<Card 
      url="https://color.adobe.com/pt/create/color-wheel"
      title="Adobe Color" 
      src="/colors/adobecolors.ico" 
      alt="Imagem do card" 
      desc="O Adobe Color é um site que permite criar paletas de cores personalizadas usando a roda de cores. É uma ferramenta útil para designers que desejam explorar combinações de cores harmoniosas. O site oferece recursos avançados, como a capacidade de extrair paletas de cores de imagens." 
      />

<Card 
      url="https://colorable.jxnblk.com/"
      title="Colorable" 
      src="/colors/colorable.png" 
      alt="Imagem do card" 
      desc="O Colorable é um site que ajuda a avaliar a legibilidade de combinações de cores para design de interfaces. Ele fornece informações sobre o contraste entre as cores e se atendem aos padrões de acessibilidade. É uma ferramenta útil para garantir que o texto seja facilmente legível em diferentes fundos coloridos." 
      />

      </div>
</main>
</>
)
}
