import { CiMail } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";

 export default function Contact(){
    function redirectToGitHub() {
        window.location.href = "http://github.com/james-yu2005";
    }
    function redirectToLinkedin() {
        window.location.href = "https://www.linkedin.com/in/james-yu2005/"
    }
    function redirectToMail() {
        window.location.href = "mailto:j85yu@uwaterloo.ca"
    }
    return(
        <div id="contact" className="text-indigo-300 text-5xl text-center mt-20">
            Contact
            <div className="flex flex-row justify-center space-x-2 p-8">
                <button onClick={redirectToMail}>
                    <CiMail className="text-teal-300 hover:text-sky-900"/>
                </button>
                <button onClick={redirectToGitHub}>
                    <LuGithub className="text-teal-300 hover:text-sky-900"/>
                </button>
                <button onClick={redirectToLinkedin}>
                    <TiSocialLinkedin className="text-teal-300 hover:text-sky-900"/>
                </button>
            </div>
        </div>
    )
 }