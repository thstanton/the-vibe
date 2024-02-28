
export default function NavBar() {
    return (
        <nav className="navbar absolute z-50 text-xl text-slate-100">
            <div className="navbar-start">The Vibe</div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-2 px-1 text-xl text-slate-100">
                    <li>Bio</li>
                    <li>Contact</li>
                </ul>               
            </div>
        </nav>
    )
}
