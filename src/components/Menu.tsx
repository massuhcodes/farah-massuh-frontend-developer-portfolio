// Menu.tsx

interface MenuProps {
    toggleMenu: () => void
}

export function Menu({toggleMenu}: MenuProps) {
    return (
        <div id="menu" className={`menu py-4 px-10 w-[10rem] bg-[#0d0d0d] h-full absolute top-0 right-0 flex flex-col items-end text-[#d9d9d9] shadow-[-0.2rem_0_0.5rem_0_rgba(0,0,0,0.75)] duration-500 ease-in-out transition-transform translate-x-[10.7rem]`}>
            <div id="x" className="x" onClick={toggleMenu}>
                <span></span>
                <span></span>
            </div>
            <ul className="text-[1.3rem] h-[60%] flex flex-col justify-evenly">
                <li className="sidebar-list">About</li>
                <li className="sidebar-list">Projects</li>
                <li className="sidebar-list">Contact</li>
                <li className="sidebar-list">Resume</li>
            </ul>
      </div>
    )
}