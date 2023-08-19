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
      
      <h1 className="text-[#D9D9D9] text-4xl">Sobre o projeto 🧑🏽‍💻</h1>
      <p className="text-[#D9D9D9] text-xl">
      Este repositório é um projeto criado para ajudar eu e outros programadores a encontrar ferramentas úteis para o desenvolvimento de softwares. Aqui você encontrará materiais para desenvolvimento frontend, backend e estudo de estruturas de dados. Sinta-se livre para contribuir.
      </p>

      <h1 className="text-[#D9D9D9] text-4xl">De onde veio a ideia? 💡</h1>
      <p className="text-[#D9D9D9] text-xl">
      Quando comecei a estudar programação, senti uma grande dificuldade em encontrar materiais de estudo e ferramentas que ajudassem no desenvolvimento. Então decidi criar este repositório, reunindo informações de threads do Twitter, Instagram e outros sites para ajudar tanto programadores novos quanto experientes.
      </p>
      </div>
    </main>
  </>
  )
}
