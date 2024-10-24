import { Footer } from "../components/Footer";

export const Skills = () => {
    return (
        <main>
            <section className='flex items-center py-40 w-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-full h-full">
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div className='flex flex-col justify-center w-5/6'>
                        <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Hard Skills</h1>
                            <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <p className='text-white font-montserrat'>
                                Au cours de mon cursus, j'ai eu l'occasion de travailler sur différents projets de développement informatique. J'ai ainsi élargi mes compétences 
                                en langages de programmation tels que HTML, CSS, JavaScript, TypeScript, C#, PHP, SQL et Java, mais aussi des frameworks comme React, Vue.js, 
                                Laravel ou encore Angular. Je me suis également familiarisé avec les méthodes agiles de gestion de projet et j'ai acquis une grande rigueur dans 
                                mon travail.
                            </p>
                            <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <div className="flex">
                                <a href={`${process.env.PUBLIC_URL}/Referentiel.pdf`} download="Référentiel.pdf">
                                    <button className="relative mr-6 py-2 px-6 font-medium text-blue-500 font-montserrat bg-transparent border-2 border-blue-500 overflow-hidden group">
                                        <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                            Télécharger le référentiel
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-center w-1/2'>
                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Html</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-12/12 h-full bg-[#ff7816] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">CSS</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-[#2196f3] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Javascript</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-[#ffdf00] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Java</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-10/12 h-full bg-[#e32c2d] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">React</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-[#63dbfc] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">VueJs</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-9/12 h-full bg-[#41b883] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Tailwind</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-12/12 h-full bg-[#14b3c6] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Laravel</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-8/12 h-full bg-[#fb473b] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Wordpress</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-[#21759b] rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">NodeJs</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-[#82cd28] rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Angular</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-10/12 h-full bg-[#d6002f] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex items-center py-40 w-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-full h-full">
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div className='flex flex-col justify-center w-5/6'>
                        <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Soft Skills</h1>
                            <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <p className='text-white font-montserrat'>
                                Dans le cadre de la réalisation de mes projets personnels et professionnels, j'ai dû faire preuve d'organisation et m'assurer d'évoluer dans un environnement 
                                de travail propice. Cette approche m'a permis de développer ma rigueur et d'être efficace dans mes tâches. J'ai pu cultiver ces compétences tout au long de ma 
                                scolarité, ainsi que pendant mes temps libres, notamment lors de la conception de mes projets de site web.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-center w-1/2'>
                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Travail en équipe</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-12/12 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Leadership</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-10/12 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Gestion du temps</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Capacité d'adaptation</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-11/12 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex flex-col w-5/6">
                            <p className="mb-1 text-white font-bold">Résolution de problèmes</p>
                            <div className="w-full h-1 bg-[#2b2b2b] rounded-full">
                                <div className="w-10/12 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    )
}