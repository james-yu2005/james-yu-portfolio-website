import { CiMail } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
 
 export default function Contact(){
    return(
        <div id="contact" className="text-indigo-300 text-5xl text-center mt-20">
            Contact
            <div className="flex flex-row justify-center space-x-2 p-8">
                <a href="mailto:j85yu@uwaterloo.ca">
                    <CiMail className="text-teal-300 hover:text-sky-900"/>
                </a>
                <a href="http://github.com/james-yu2005">
                    <LuGithub className="text-teal-300 hover:text-sky-900"/>
                </a>
                <a href="https://www.linkedin.com/in/james-yu2005/">
                    <TiSocialLinkedin className="text-teal-300 hover:text-sky-900"/>
                </a>
            </div>
        </div>
    )
 }