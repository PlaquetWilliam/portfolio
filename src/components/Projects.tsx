import { MdOutlinePoll, MdOutlineSell, MdOutlineMusicNote, MdOutlinePermMedia, MdArrowForward } from "react-icons/md";

export const Projects = () => {
    return (
    <>
        <section className='flex flex-col py-10 w-full gap-4'>
            <div className="flex w-full gap-4">
                <div className="flex-2 p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                    <h1 className="text-2xl font-bold text-[#adbac7]">Mes projets</h1>

                    <div className="flex flex-col mt-4">
                        <a href="https://etu.bts-malraux72.net/~william.plaquet/inpoll" className="inline-flex items-center gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlinePoll className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Inpoll <span className="mr-2 px-2 text-yellow-500 font-normal text-sm border border-yellow-500 bg-[#23282f] rounded">Plus d'accés</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Application de gestion de sondages.</p>
                            </div>
                        </a>

                        <a href="https://plaquetwilliam.github.io/figurinum" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlineSell className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Figurinum <span className="mr-2 px-2 text-green-500 font-normal text-sm border border-green-500 bg-[#23282f] rounded">En cours</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Plateforme de vente de figurine en ligne.</p>
                            </div>
                        </a>

                        <a href="" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlineMusicNote className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Typezik <span className="mr-2 px-2 text-red-500 font-normal text-sm border border-red-500 bg-[#23282f] rounded">Obsolète</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Application de recherche de musique par rapport au style.</p>
                            </div>
                        </a>

                        <a href="https://etu.bts-malraux72.net/~william.plaquet/mediassic/client/pages/index.html" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlinePermMedia className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Médiassic <span className="mr-2 px-2 text-purple-500 font-normal text-sm border border-purple-500 bg-[#23282f] rounded">Fonctionnalités maqnuantes</span><span className="mr-2 px-2 text-yellow-500 font-normal text-sm border border-yellow-500 bg-[#23282f] rounded">Plus d'accés</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Wiki sur le domaine de la paléotonlogie.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex-1 p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                    <h1 className="text-2xl font-bold text-[#adbac7]">Mes expériences</h1>

                    <div className="flex flex-col mt-4">
                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" className="inline-flex items-center gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Mblog</h1>
                                <p className="text-[#9fa6b2] text-sm">Intégrateur Web - Développeur Full-Stack</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Association - La coulée Douce</h1>
                                <p className="text-[#9fa6b2] text-sm">Développeur Wordpress</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Groupe Lelièvre</h1>
                                <p className="text-[#9fa6b2] text-sm">Administrateur réseau - Assistance client</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Sncf</h1>
                                <p className="text-[#9fa6b2] text-sm">Développeur d'application</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-2 p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                <h1 className="text-2xl font-bold text-[#adbac7]">Mes projets 3D</h1>

                <div className="flex flex-col mt-4">
                    <a href="" className="inline-flex items-center gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                        <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                        <div className="flex flex-col">
                            <h1 className="text-[#adbac7] font-bold text-lg">Le Chevalier - Hollow Knight</h1>
                            <p className="text-[#9fa6b2] text-sm">Modèle 3D utilisé pour mon site de vente de figurines.</p>
                        </div>
                    </a>

                    <a href="" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                        <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                        <div className="flex flex-col">
                            <h1 className="text-[#adbac7] font-bold text-lg">M1911 Pistol</h1>
                            <p className="text-[#9fa6b2] text-sm">Utilisation pour un projet de jeu vidéo.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </>
    )
}