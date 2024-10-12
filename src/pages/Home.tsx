import { Link } from 'react-router-dom'

import { Footer } from "../components/Footer";

import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";

import Profil from '../img/Profil.png'

export const Home = () => {
    return (
    <main>
        <section className='flex items-center w-full h-[100vh] bg-[#1b1b1b]'>
            <div className="flex justify-center items-center ml-52 w-1/2 h-full">
                <div className='flex flex-col justify-center w-5/6'>
                    <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                    <h1 className="pl-4 text-6xl font-bold text-white font-montserrat">William Plaquet,</h1>
                    <h1 className="pl-4 text-6xl font-bold text-white font-montserrat">Développeur Web</h1>
                    <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                    <p className="pl-4 text-lg text-[#6d6d6d] font-montserrat">Développeur Full-Stack / Développeur Frameworks</p>
                    <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                    <div className="flex">
                        <a href={`${process.env.PUBLIC_URL}/CV.pdf`} download="CV-PLAQUET.pdf">
                            <button className="relative mr-6 py-2 px-6 font-medium text-blue-500 font-montserrat bg-transparent border-2 border-blue-500 overflow-hidden group">
                                <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                    Télécharger le CV
                                </span>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="blank" className="relative flex justify-center items-center mr-6 p-2 font-medium text-blue-500 bg-transparent border-2 border-blue-500 overflow-hidden group">
                            <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                            <CiLinkedin className="relative text-2xl z-10 transition-colors duration-500 group-hover:text-white" />
                        </a>
                        <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage" target="blank" className="relative flex justify-center items-center p-2 font-medium text-blue-500 bg-transparent border-2 border-blue-500 overflow-hidden group">
                            <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                            <SiIndeed className="relative text-2xl z-10 transition-colors duration-500 group-hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center items-center w-1/2 h-full">
                <img src={ Profil } className='z-10 w-6/12 border-2 border-blue-500'/>
            </div>
        </section>

        <section className='flex items-center py-20 w-full bg-[#1b1b1b]'>
            <div className="flex justify-center items-center ml-52 w-full h-full">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className='flex flex-col justify-center w-5/6'>
                    <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Mes objectifs</h1>
                        <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <p className='mb-4 text-white font-montserrat'>
                            Pendant plusieurs années, je me suis interrogé sur la meilleure voie à suivre pour construire un avenir prometteur dans le domaine qui me 
                            passionne. Une fois mon objectif clairement défini, j'ai consacré mes efforts à l'atteindre de manière efficace et pragmatique. J'ai approfondi 
                            mes connaissances en étudiant divers langages, afin de les maîtriser et de renforcer mes compétences, dans le but d'acquérir une expertise solide 
                            et diversifiée dans mon domaine.
                        </p>

                        <p className='text-white font-montserrat'>
                            En m'entraînant régulièrement, j'ai commencé à développer des projets tant personnels que professionnels, ce qui m'a permis de progresser tout au long 
                            de mes études, tout en consolidant mes connaissances. Ces expériences m'ont facilité l'avancement dans la création de sites web et ont contribué à 
                            renforcer mes compétences techniques.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-evenly items-center w-1/2'>
                    <div className='flex justify-center mb-20 w-full'>
                        <div className='p-10 w-4/6 bg-[#2a2a2a]'>
                            <h1 className='mb-4 text-2xl font-bold text-white font-montserrat'>Développeur Full-Stack</h1>
                            <p className='text-[#6c6c6c] font-montserrat'>
                                Acquérir la capacité de conceptualiser une application entièrement fonctionnelle et intuitive, adaptée à un large éventail d'utilisateurs.
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-full'>
                        <div className='p-10 w-4/6 bg-[#2a2a2a]'>
                            <h1 className='mb-4 text-2xl font-bold text-white font-montserrat'>Diplôme d'ingénieur</h1>
                            <p className='text-[#6c6c6c] font-montserrat'>
                                Faire preuve de détermination dans mes études afin d'acquérir des connaissances approfondies dans le domaine du développement web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </main>
    )
}