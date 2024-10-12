import { Footer } from "../components/Footer";

import React, { useState } from 'react';
import Projet1 from '../img/Projet1.png';
import Projet2 from '../img/Projet2.png';
import Projet3 from '../img/Projet3.png';
import Projet4 from '../img/Projet4.png';
import Projet5 from '../img/Projet5.png';
import Projet6 from '../img/Projet6.png';

import { FaArrowRightLong } from "react-icons/fa6";

export const Projects = () => {
    const [currentWebIndex, setCurrentWebIndex] = useState(0);
    const [currentModelisationIndex, setCurrentModelisationIndex] = useState(0);

    const imagesWeb = [Projet1, Projet2, Projet3, Projet4];
    const imagesModelisation  = [Projet5, Projet6];

    const nextImageWeb = () => {
        setCurrentWebIndex((prevIndex) => (prevIndex + 1) % imagesWeb.length);
    };

    const nextImageModelisation = () => {
        setCurrentModelisationIndex((prevIndex) => (prevIndex + 1) % imagesModelisation.length);
    };

    return (
        <main>
            <section className='flex items-center py-20 w-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-1/2 h-full">
                    <div className='flex flex-col justify-center w-5/6'>
                        <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Mes projets</h1>
                        <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <p className="pl-4 text-lg text-[#6d6d6d] font-montserrat">Développement Web</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <div className='flex flex-col items-start'>
                        <img src={imagesWeb[currentWebIndex]} className='z-10 mb-5 w-10/12 border-2 border-blue-500' alt="Projet Web" />

                        <button className="relative py-2 px-6 font-medium text-blue-500 font-montserrat bg-transparent border-2 border-blue-500 overflow-hidden group" onClick={nextImageWeb}>
                            <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                            <span className="relative flex items-center z-10 transition-colors duration-500 group-hover:text-white">
                                Projet suivant<FaArrowRightLong className='ml-2'/>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='flex items-center py-20 w-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-1/2 h-full">
                    <div className='flex flex-col justify-center w-5/6'>
                        <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Mes projets</h1>
                        <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                        <p className="pl-4 text-lg text-[#6d6d6d] font-montserrat">Modélisation 3D</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <div className='flex flex-col items-start'>
                        <img src={imagesModelisation[currentModelisationIndex]} className='z-10 mb-5 w-10/12 border-2 border-blue-500' alt="Projet 3D" />

                        <button className="relative py-2 px-6 font-medium text-blue-500 font-montserrat bg-transparent border-2 border-blue-500 overflow-hidden group" onClick={nextImageModelisation}>
                            <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                            <span className="relative flex items-center z-10 transition-colors duration-500 group-hover:text-white">
                                Projet suivant<FaArrowRightLong className='ml-2'/>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    );
}