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
      <Category url="/loading" title="Ferramentas" />
      <Category url="/loading" title="Fontes" />
      <Category url="/loading" title="Ilustrações" />
      <Category url="/loading" title="UI" />
      <Category url="/loading" title="Cursos" />
    </div>
  )
}