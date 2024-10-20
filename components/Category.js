import Link from "next/link";

export default function Category({ id, title, url, isActive, onClick }) {
	return (
		<div
			className={`text-white w-48 h-12 flex items-center justify-center rounded-md ${isActive ? "bg-slate-600" : "bg-background"
				}`}
			onClick={onClick}
		>
			<Link
				className={`w-full text-center m-2 ${isActive ? "text-white" : "hover:text-gray-400"
					}`}
				href={`/tools/${id}`}
			>
				{title}
			</Link>
		</div>
	);
}