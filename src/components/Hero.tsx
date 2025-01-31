import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";

import Profil from '../assets/Profil.png'

import cv from '../assets/CV.pdf';

export const Hero = () => {
    return (
    <>
        <section className='flex justify-between items-center py-20 w-full'>
            <div className="flex items-center h-full z-10">
                <div className='flex flex-col justify-center'>
                    <h1 className="text-6xl font-bold text-[#adbac7]">William Plaquet,</h1>
                    <h1 className="text-6xl font-bold text-[#adbac7]">Développeur Web</h1>
                    <p className="mt-4 text-lg text-[#9fa6b2]">Développeur Full-Stack / Frameworks</p>
                    <div className="mt-4 flex">
                        <a
                            href={cv}
                            download="William_Plaquet_CV.pdf"
                            className="mr-6 py-2 px-6 font-medium text-[#a9b4be] border border-[#3a3d40] bg-[#23282f] rounded cursor-pointer duration-100 hover:bg-[#303740]"
                            >
                            Télécharger le CV
                        </a>
                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="blank" className="flex justify-center items-center mr-6 p-2 font-medium text-[#a9b4be] border border-[#3a3d40] bg-[#23282f] rounded duration-100 hover:bg-[#303740]">
                            <CiLinkedin className="text-2xl" />
                        </a> 
                        <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage" target="blank" className="flex justify-center items-center p-2 font-medium text-[#a9b4be] border border-[#3a3d40] bg-[#23282f] rounded duration-100 hover:bg-[#303740]">
                            <SiIndeed className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center h-full z-10">
                <img src={ Profil } className='w-[400px] rounded-full'/>
            </div>
        </section>
    </>
    )
}