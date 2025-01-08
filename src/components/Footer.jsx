
import {AiFillLinkedin} from "react-icons/ai"
import {CgMail} from "react-icons/cg"

export function Footer(){
    return(
        <div className="p-3 mb-3 bg-gray-100 text-black font-semibold text-xl gap-3">
            <div className="flex justify-around items-center gap-3">
                <div>
                    <h1>To learn more about me</h1>
                </div>
                <div>
                    <ul className="flex items-center gap-3">
                        <li><a href="www.linkedin.com/in/enedi-god-swill-etim-a01845293"><AiFillLinkedin /></a></li>
                        <li><a href="https://mail.google.com/mail/u/bobbyenedi@gmail.com"><CgMail /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}