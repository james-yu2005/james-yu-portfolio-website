import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Contact() {
    function redirectToGitHub() {
        window.location.href = "http://github.com/james-yu2005";
    }
    function redirectToLinkedin() {
        window.location.href = "https://www.linkedin.com/in/james-yu2005/"
    }
    function redirectToMail() {
        window.location.href = "mailto:j85yu@uwaterloo.ca"
    }
    return (
        <div id="contact" className="text-indigo-300 text-5xl text-center mt-20">
            Contact
            <div className="flex flex-row justify-center space-x-2 p-8 mb-10">
                <button onClick={redirectToMail}>
                    <AiOutlineMail className="text-teal-300 hover:text-sky-900" />
                </button>
                <button onClick={redirectToGitHub}>
                    <AiOutlineGithub className="text-teal-300 hover:text-sky-900" />
                </button>
                <button onClick={redirectToLinkedin} >
                    <AiOutlineLinkedin className="text-teal-300 hover:text-sky-900" />
                </button>
            </div>
        </div>
    )
}
