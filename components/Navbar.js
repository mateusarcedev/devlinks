import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-navbar h-24 text-white flex items-center p-5 text-4xl justify-between">
      <Link href="/"> DevLinks </Link>
      <Link href="/"> BLOG </Link>
    </nav>
  )
}