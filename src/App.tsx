// App.tsx

import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Shadow } from "./components/Shadow"
import { Menu } from "./components/Menu"
import { About } from "./components/About"

export default function App() {

  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    const menu = (document.getElementById("menu") as HTMLDivElement)
    const shadow = document.getElementById("shadow") as HTMLDivElement
    if (activeMenu) {
      shadow.style.opacity = "0"
      setTimeout(() => shadow.classList.add("hidden"), 500)
      menu.style.transform = `translateX(10.7rem)`
    } else {
      shadow.classList.remove("hidden")
      setTimeout(() => shadow.style.opacity = "1")
      menu.style.transform = `translateX(0)`
    }
    setActiveMenu(() => !activeMenu)
  }

  return (
    <div className="h-full bg-[#d9d9d9] relative overflow-x-hidden">
      <Navbar {...{toggleMenu: toggleMenu}} />
      <Shadow />
      <Menu {...{toggleMenu: toggleMenu}} />
      <About />
    </div>
  )
}
