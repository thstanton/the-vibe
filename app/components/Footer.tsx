import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer bg-slate-950">
            <aside className="grid-flow-col items-center">
                <Image
                    src="/images/vibe-logo.svg"
                    width={300}
                    height={200}
                    alt="The Vibe Logo"
                />
                <p>The Vibe 2024</p>
            </aside>
            <nav className="grid-flow-col gap-4 px-8 text-4xl md:place-self-center md:justify-self-end">
                <Link href="https://www.instagram.com/the.vibe.brass/">
                    <div className="btn btn-circle btn-ghost text-2xl">
                        <FaInstagram aria-label="Instagram" />
                    </div>
                </Link>
            </nav>
        </footer>
    )
}
