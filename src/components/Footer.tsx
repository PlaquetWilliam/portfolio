import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center ml-52 py-10 bg-[#2a2a2a]">
            <h1 className="mb-4 text-2xl font-medium italic text-white font-montserrat">William Plaquet, Développeur Full-Stack</h1>
            <p className="mb-2 flex items-center text-[#6c6c6c] font-montserrat">Site héberger sur Github</p>
            <p className="mb-2 flex items-center text-[#6c6c6c] font-montserrat">Portfolio créer avec :
                <div className="flex">
                    <FaReact className="ml-2 w-8 h-8 text-[#67d8ff]" />
                    <RiTailwindCssFill className="ml-2 w-8 h-8 text-[#15b3c6]" />
                </div>
            </p>
        </footer>
    )
}