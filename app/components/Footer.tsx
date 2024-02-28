import Image from "next/image";
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-slate-950 footer'>
        <aside className="items-center grid-flow-col">
            <Image src="/images/vibe-logo.svg" width={300} height={200} alt="The Vibe Logo"/>
            <p>The Vibe 2024</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-4xl px-8">
            <FaInstagram />
        </nav>
    </footer>
  )
}
