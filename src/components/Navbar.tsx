// Navbar.tsx

interface NavbarProps {
    toggleMenu: () => void
}

export function Navbar({toggleMenu}: NavbarProps) {
    return (
        <nav className="py-4 px-10 w-full flex flex-row-reverse shadow-[0_1px_6px_0px_rgba(0,0,0,0.50)] fixed bg-[#d9d9d9]">
            <div id="hamburger" className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}