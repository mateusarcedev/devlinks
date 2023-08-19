import Category from "./Category";

export default function CategoryBar() {
  return (
    <div className="bg-white h-[105] rounded-lg flex items-center justify-between p-5 gap-2 overflow-x-auto">
      <Category url="/algos" title="Algoritmos" />
      <Category url="/apis" title="API's" />
      <Category url="/animations" title="Animações" />
      <Category url="/icons" title="Ícones" />
      <Category url="https://www.google.com" title="Blogs" />
      <Category url="https://www.google.com" title="Cores" />
      <Category url="https://www.google.com" title="Ferramentas" />
      <Category url="https://www.google.com" title="Fontes" />
      <Category url="https://www.google.com" title="Ilustrações" />
      <Category url="https://www.google.com" title="UI" />
      <Category url="https://www.google.com" title="Cursos" />
    </div>
  )
}