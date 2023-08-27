import CategoryBar from "@/components/CategoryBar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <>
      <Navbar/>
      <main className="bg-background flex flex-col items-center w-full ">
      <div className="w-4/5 flex justify-center items-center">
      <CategoryBar />
      </div>
      <div className="w-4/5 flex justify-center items-center flex-col mt-4 gap-4 flex-wrap">
      <h1 className="text-white text-3xl">Aguarde! Estamos trazendo mais ferramentas para você.</h1>
      <div className="flex">
      <Image
      src="/programmer.svg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
      </div>
    </main>
  </>
  )
}
