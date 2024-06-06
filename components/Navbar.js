import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="bg-navbar h-24 text-white flex items-center p-5 text-3xl justify-between">
			<Link href="/" className="text-white hover:text-blue-600">
				DevLinks
			</Link>
			<div className="flex items-center justify-center gap-5">
				<Link
					target="_blank"
					href="https://github.com/mateusarcedev/devlinks"
					className="hover:bg-blue-600 rounded-lg"
				>
					<Image
						src="/utils/github.svg"
						width={35}
						height={35}
						alt="Github logo"
					/>
				</Link>
			</div>
		</nav>
	);
}
