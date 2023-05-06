// About.tsx

import frame from "../assets/frame.svg"

export function About() {
    return (
        <div className="px-10 pt-14 min-h-screen flex flex-col justify-center items-center">
            {/** HERO Image */}
            <div className="border border-black h-[375px] w-[90%]">
                <img src={frame} className="bg-red-500 w-full object-cover" />
            </div>
            <h1 className="font-['Orbitron'] text-[2rem] tracking-[0.5rem] text-center mt-10">FARAH MASSUH</h1>
            <span className="text-[1.47rem] font-medium tracking-[0.5rem] text-center">FRONTEND DEVELOPER</span>
            <p className="text-center mt-5 text-[1.1rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus et, mollitia repudiandae laudantium reiciendis minima maxime aspernatur quod esse ipsum totam reprehenderit consequatur, ipsam illum dolorum aperiam!</p>
        </div>
    )
}