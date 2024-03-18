import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function NavBar() {
    return (
        <nav className="navbar absolute z-50 text-xl text-slate-100">
            <div className="navbar-start"></div>
            <div className="navbar-end">
                <ul className="font-subtitle menu menu-horizontal gap-6 px-1 text-xl text-slate-100">
                    <li><Link href={'/#bio'}>About Us</Link></li>
                    <li><Link href={'/#contact'}>Get in Touch</Link></li>
                    <li>
                        <Link href="https://www.instagram.com/the.vibe.brass/">
                            <FaInstagram aria-label="Instagram" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
