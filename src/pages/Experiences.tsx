import { Footer } from "../components/Footer";

export const Experiences = () => {
    return (
        <main>
            <section className='flex justify-center w-full h-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-4/6 h-full py-20">
                    <div className="relative w-full">
                        <div className="absolute top-0 bottom-0 left-1/2 w-[6px] bg-[#2b2b2b] -ml-[3px] rounded-full"></div>

                        <div className="relative w-1/2 px-[40px] py-[10px] left-0">
                            <div className="relative bg-[#2a2a2a] p-10">
                                <h1 className="text-2xl font-bold mb-4 text-white">Compagnie SNCF, Le Mans</h1>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">1ère et 2e Bac Professionnel SN</p>
                                <p className="text-1xl mb-4 text-[#6c6c6c] font-montserrat">Janvier 2019 et Janvier 2020</p>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Conception d'un site vitrine pour une mission d'apprentissage des langages (Javascript et PHP).</p>
                            </div>
                            <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] right-[-12px] rounded-full z-10"></div>
                            <div className="absolute top-[22px] right-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-l-[#2a2a2a]"></div>
                        </div>
                        
                        <div className="relative w-1/2 px-[40px] py-[10px] left-1/2">
                            <div className="relative bg-[#2a2a2a] p-10">
                                <h1 className="text-2xl font-bold mb-4 text-white">Société Groupe Lelièvre, Le Mans</h1>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Terminale BAC Professionnel SN</p>
                                <p className="text-1xl mb-4 text-[#6c6c6c] font-montserrat">Mai 2021</p>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Entretien de baies de brassages et configuration de machines virtuelles.</p>
                            </div>
                            <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] left-[-12px] rounded-full z-10"></div>
                            <div className="absolute top-[22px] left-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-r-[#2a2a2a]"></div>
                        </div>

                        <div className="relative w-1/2 px-[40px] py-[10px] left-0">
                            <div className="relative bg-[#2a2a2a] p-10">
                                <h1 className="text-2xl font-bold mb-4 text-white">Association La Coulée Douce, La Suze</h1>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">1er année de BTS SIO</p>
                                <p className="text-1xl mb-4 text-[#6c6c6c] font-montserrat">Mai 2022</p>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Mise en place d'une maquette pour rendre plus pratique la compréhension du site pour les employés et apprentissage du logiciel Wordpress.</p>
                            </div>
                            <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] right-[-12px] rounded-full z-10"></div>
                            <div className="absolute top-[22px] right-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-l-[#2a2a2a]"></div>
                        </div>
                        
                        <div className="relative w-1/2 px-[40px] py-[10px] left-1/2">
                            <div className="relative bg-[#2a2a2a] p-10">
                                <h1 className="text-2xl font-bold mb-4 text-white">Société Mblog, Voivres</h1>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Années de BTS SIO</p>
                                <p className="text-1xl mb-4 text-[#6c6c6c] font-montserrat">Janvier 2023 - Janvier 2024</p>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Refonte totale de l'intranet de l'entreprise avec sa maquette et des versions d'essais. A la fin de ce stage le site a été mis en production.</p>
                            </div>
                            <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] left-[-12px] rounded-full z-10"></div>
                            <div className="absolute top-[22px] left-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-r-[#2a2a2a]"></div>
                        </div>

                        <div className="relative w-1/2 px-[40px] py-[10px] left-0">
                            <div className="relative bg-[#2a2a2a] p-10">
                                <h1 className="text-2xl font-bold mb-4 text-white">Bachelor Concepteur Développeur D'application</h1>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Bac+3 étude supérieur</p>
                                <p className="text-1xl mb-4 text-[#6c6c6c] font-montserrat">2024 - 2025</p>
                                <p className="text-1xl text-[#6c6c6c] font-montserrat">Recherche d'une entreprise pouvant accueillir un alternant Concepteur Développeur D'application.</p>
                            </div>
                            <div className="absolute w-[25px] h-[25px] bg-[#ffffff] border-4 border-blue-500 top-[20px] right-[-12px] rounded-full z-10"></div>
                            <div className="absolute top-[22px] right-[20px] w-0 h-0 border-solid border-[10px] border-transparent border-l-[#2a2a2a]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}