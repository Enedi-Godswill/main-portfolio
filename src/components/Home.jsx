
import { Link } from "react-router-dom"

export function Home(){
    return(
        <div className="text-2xl font-semibold">
            <div className="w-full h-screen flex flex-col gap-3 justify-center items-center font-semibold">
                <h1 className="text-5xl font-bold">Enedi</h1>
                <p className="text-sm">Frontend Developer</p>
                <h1 className="text-5xl font-bold">GODSWILL</h1>
                <button className="bg-gray-100 text-sm text-gray-950 rounded p-2">
                    <Link to="/explore">
                        EXPLORE
                    </Link>
                </button>
            </div>
        </div>
    )
}