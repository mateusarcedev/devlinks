import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-navbar h-24 text-white flex items-center p-5 text-3xl justify-between">
      <Link href="/" className="hover:text-blue-600"> DevLinks </Link>
      <div className="flex items-center justify-center gap-5">
      <Link target="_blank" href="https://github.com/mateusarcedev/devlinks"> 
      <Image
      src="/github.svg"
      width={35}
      height={35}
      alt="Github logo"
    />
      </Link>
      </div>
    </nav>
  )
}