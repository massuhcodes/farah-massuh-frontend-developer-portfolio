// App.tsx

export default function App() {

  const toggleHamburger = () => {
    (document.getElementById("hamburger") as HTMLDivElement).classList.toggle("open")
  }

  return (
    <div className="h-full bg-[#d9d9d9] relative">
      <nav className="py-4 px-5 shadow-[0_2px_7px_0px_rgba(0,0,0,0.25)]">
        <div id="hamburger" className="hamburger" onClick={toggleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div id="shadow" className="bg-[#181818d6] absolute top-0 bottom-0 h-full w-full">
      </div>
      <div id="menu" className="menu py-4 px-5 bg-[#0d0d0d] h-full w-[40%] absolute top-0 right-0 flex flex-col items-end text-[#d9d9d9] shadow-[-2px_0_7px_0_rgba(0,0,0,0.75)]">
        <div id="x" className="x">
          <span></span>
          <span></span>
        </div>

        <ul className="text-[1.2rem]">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  )
}

