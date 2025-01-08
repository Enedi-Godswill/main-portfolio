import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"

export function Explore(){
    return(
        <div className="bg-gray-950 text-white">
            <Navbar />
                <div className="flex flex-col text-2xl  gap-3 p-3 text-center justify-center items-center w-full h-screen">
                    <h1 className="text-5xl font-bold">Frontend Developer</h1>
                    <p>Bringing life to your websites</p>
                </div>
                <div className="flex flex-col justify-center text-center text-sm items-center gap-3 p-3 sm:text-2xl mb-8">
                    <h1 className="text-2xl font-semibold uppercase border-b-4 w-[60%] mb-3 ">About</h1>
                    <p>A graduate of the university of Cross River State majoring in Computer Science</p>
                    <p>The process of creating a website is the ability to design a means of communication that showcases the processes by which services can be shared among people and resources can be gathered.</p>
                    <p>The coding aspect also allows for more experience and proper understanding, allowing for major changes and the opportunity to learn from each advance in the codebase.</p>
                </div>
            <Footer />
        </div>
    )
}