
import { CiFacebook } from "react-icons/ci"
import Foot from "@/app/public/Foot.jpeg"
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";



export default function Footer (){
    return(
        <div>
            
        <div style={{ backgroundImage: `url(${Foot.src})`,backgroundSize:"cover"}} className="w-full h-48 ">
            <div className="flex justify-center ">
            <div className="w-[98%] h-[1px] bg-white"></div>
            </div>
            
             <ul className="m-4  text-6xl text-white flex justify-evenly">
                <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <li><CiFacebook /></li></a>
                <a href="https://www.instagram.com/wighioabdulmanan/">
                <li><FaInstagram /></li></a>
                <a href="https://linkedin.com/in/abdul-manan-wighio-4571912bb/">
                <li><IoLogoLinkedin/> </li></a>
                <a href="https://github.com/manan7866">
                <li><FaGithub /></li></a>
             </ul>
             <p className="text-center mt-10 text-slate-400">© copy-right by Abdul Manan</p>
             </div>
        
        </div>
    )
}
