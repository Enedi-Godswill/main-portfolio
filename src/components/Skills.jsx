
import { heroData } from "../data/hero.js"
import { Navbar } from "./Navbar.jsx"
import { Footer } from "./Footer.jsx"

export function Skills(){
    return(
        <div className="text-white bg-gray-950">
            <Navbar />
            <div></div>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-2 p-5 mb-4">
                    <h1 className="text-3xl font-bold mb-3">Skills</h1>
                    <div className="sm:flex grid grid-cols-2 gap-3 w-full ">
                        {heroData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="text-xl w-full h-full flex flex-col text-center bg-gray-100 text-black rounded p-2">
                                        <h2 className="text-2xl font-bold">{item.name}</h2>
                                        <h3>{item.meaning}</h3>
                                        <p>{item.info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}