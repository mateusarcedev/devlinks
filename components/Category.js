import Link from "next/link";

export default function Category({ title, url }) {
  return (
    <div className="text-white bg-background w-48 h-12 flex items-center justify-center rounded-md">
      <Link className="w-full text-center m-2" href={url}>
        {title}
      </Link>
    </div>
  );
}
