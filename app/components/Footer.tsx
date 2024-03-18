import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="flex w-full flex-wrap items-center justify-between bg-slate-950 p-4">
            <aside>
                <Image
                    src="/images/vibe-logo.svg"
                    width={100}
                    height={50}
                    alt="The Vibe Logo"
                />
            </aside>
            <Link
                href="https://www.instagram.com/the.vibe.brass/"
                className="flex flex-row items-center gap-2 text-2xl"
            >
                <FaInstagram aria-label="Instagram" />{' '}
                <span className="text-xs">the.vibe.brass</span>
            </Link>
        </footer>
    )
}
