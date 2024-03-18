import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'

export default function NavBar() {
    return (
        <nav className="navbar absolute z-50 text-xl text-slate-100">
            <div className="navbar-start"></div>
            <div className="navbar-end">
                <ul className="font-subtitle menu gap-6 px-1 text-xl text-slate-100 hidden md:menu-horizontal">
                    <li>
                        <Link href={'/#bio'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/#contact'}>Get in Touch</Link>
                    </li>
                    <li className='text-3xl'>
                        <Link href="https://www.instagram.com/the.vibe.brass/">
                            <FaInstagram aria-label="Instagram" />
                        </Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden"
                    >
                        <MdMenu aria-label="Menu" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow relative right-0 z-50"
                    >
                        <li>
                            <Link href={'/#bio'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/#contact'}>Get in Touch</Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/the.vibe.brass/">
                                <FaInstagram aria-label="Instagram" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
