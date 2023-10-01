import Image from "next/image"
import Link from "next/link"

export default function Card(props) {
  return (
    <Link href={props.url} target="_blank">
    <div className="bg-white hover:bg-gray-200 w-80 h-[400px] rounded-md flex flex-col items-center justify-between p-2">
      <h1 className="bg-transparent text-2xl">{props.title}</h1>
      <Image 
      className="rounded-md bg-transparent"
      width={100}
      height={100}
      src={props.src}
      alt={props.alt}
      />
      <p className="m-2 bg-transparent flex justify-center text-sm">
      {props.desc}
</p>
    </div>
    </Link>
  )
}