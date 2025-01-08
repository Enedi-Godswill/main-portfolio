
import { Link } from "react-router-dom"
import { CgMenu } from "react-icons/cg"
import { CgClose } from "react-icons/cg"
import { useState } from "react"

export function Navbar(){

    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen((currentState) => !currentState)
    }

    return(
        <div className="fixed top-0 left-0 w-full flex justify-between items-center p-2 bg-gray-100 text-black font-semibold ">
            <Link to="/">ENEDI</Link>
            <ul className={`sm:flex sm:flex-row sm:gap-2 sm:static absolute top-9 right-3 bg-gray-100 flex-col rounded p-2 transition-all duration-75 ${open ? "flex" : "hidden"} `}>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/explore">Explore</Link></li>
            </ul>
            <button className="flex sm:hidden" onClick={handleOpen}>
                {open ? <CgClose /> : <CgMenu /> }
            </button>
        </div>
    )
}