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
      
      </div>
    </main>
  </>
  )
}
