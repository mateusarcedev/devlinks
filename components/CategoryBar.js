import Category from "./Category";

export default function CategoryBar() {
  return (
    <div className="bg-white h-[105] rounded-lg flex items-center justify-between p-5 gap-2 overflow-x-auto">
      <Category url="/algos" title="Algoritmos" />
      <Category url="/apis" title="API's" />
      <Category url="/animations" title="Animações" />
      <Category url="/icons" title="Ícones" />
      <Category url="/blogs" title="Blogs" />
      <Category url="/colors" title="Cores" />
      <Category url="/tools" title="Ferramentas" />
      <Category url="/fonts" title="Fontes" />
      <Category url="/ilustrations" title="Ilustrações" />
      <Category url="/inspirationUI" title="UI" />
      <Category url="/loading" title="Cursos" />
      <Category url="/loading" title="Portifólios" />
    </div>
  )
}