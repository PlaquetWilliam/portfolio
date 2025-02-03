import { useState } from "react";
import { MdOutlinePoll, MdOutlineSell, MdOutlineMusicNote, MdOutlinePermMedia, MdArrowForward } from "react-icons/md";
import Typezik from '../assets/Typezik.png'

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20" onClick={onClose}>
        <div className="p-4 bg-[#1e2329] border border-[#333538] rounded-lg" onClick={onClose}>
            <h2 className="text-2xl font-bold text-[#adbac7]">Image du site</h2>
            <img src={ Typezik } className='mt-8 w-[700px] rounded'/>
        </div>
      </div>
    );
  };

export const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <section className='flex flex-col py-10 w-full gap-4'>
            <div className="flex flex-col w-full gap-4 z-10 2xl:flex-row">
                <div className="flex-2 p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                    <h1 className="text-2xl font-bold text-[#adbac7]">Mes projets</h1>

                    <div className="flex flex-col mt-4">
                        <a href="https://etu.bts-malraux72.net/~william.plaquet/inpoll" target="_blank" className="inline-flex items-center gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlinePoll className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Inpoll <span className="mr-2 px-2 text-yellow-500 font-normal text-xs border border-yellow-500 bg-[#23282f] rounded">Plus d'accés</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Application de gestion de sondages.</p>
                            </div>
                        </a>

                        <a href="https://plaquetwilliam.github.io/figurinum" target="_blank" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlineSell className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Figurinum <span className="mr-2 px-2 text-green-500 font-normal text-xs border border-green-500 bg-[#23282f] rounded">En cours</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Plateforme de vente de figurine en ligne.</p>
                            </div>
                        </a>

                        <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c] cursor-pointer">
                            <MdOutlineMusicNote className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded" />

                            <div className="flex items-start flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Typezik <span className="mr-2 px-2 text-red-500 font-normal text-xs border border-red-500 bg-[#23282f] rounded">Obsolète</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Application de recherche de musique.</p>
                            </div>
                        </button>

                        <a href="https://etu.bts-malraux72.net/~william.plaquet/mediassic/client/pages/index.html" target="_blank" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdOutlinePermMedia className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Médiassic <span className="mr-2 px-2 text-yellow-500 font-normal text-xs border border-yellow-500 bg-[#23282f] rounded">Plus d'accés</span></h1>
                                <p className="text-[#9fa6b2] text-sm">Wiki sur le domaine de la paléotonlogie.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex-1 p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                    <h1 className="text-2xl font-bold text-[#adbac7]">Mes expériences</h1>

                    <div className="flex flex-col mt-4">
                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="_blank" className="inline-flex items-center gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Mblog</h1>
                                <p className="text-[#9fa6b2] text-sm">Développeur Full-Stack</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="_blank" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">La Coulée Douce</h1>
                                <p className="text-[#9fa6b2] text-sm">Développeur Wordpress</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="_blank" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Groupe Lelièvre</h1>
                                <p className="text-[#9fa6b2] text-sm">Administrateur réseau</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="_blank" className="inline-flex items-center gap-4 mt-2 flex p-2 rounded duration-100 hover:bg-[#2e343c]">
                            <MdArrowForward className="p-3 text-5xl bg-[#434d5b] text-[#adbac7] rounded"/>

                            <div className="flex flex-col">
                                <h1 className="text-[#adbac7] font-bold text-lg">Sncf</h1>
                                <p className="text-[#9fa6b2] text-sm">Développeur d'application</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-2 p-4 bg-[#1e2329] border border-[#333538] rounded-lg z-10">
                <h1 className="text-2xl font-bold text-[#adbac7]">Mes projets 3D</h1>

                <div className="flex flex-col w-full mt-4 gap-2 lg:flex-row">
                    <div className="flex items-center w-full gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c] cursor-default">
                        <div className="flex flex-col w-full">
                            <h1 className="text-[#adbac7] font-bold text-lg">Le Chevalier - Hollow Knight</h1>
                            <p className="text-[#9fa6b2] text-sm">Modèle 3D utilisé pour mon site de vente de figurines.</p>

                            <div className="flex mt-4 w-full h-[400px] sketchfab-embed-wrapper bg-slate-800 rounded">
                                <iframe className="w-full h-full rounded" src="https://sketchfab.com/models/68ad11e79ba34c609bd065e4099ae8a1/embed?autospin=1"></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full gap-4 flex p-2 rounded duration-100 hover:bg-[#2e343c] cursor-default">
                        <div className="flex flex-col w-full">
                            <h1 className="text-[#adbac7] font-bold text-lg">Pistolet M1911</h1>
                            <p className="text-[#9fa6b2] text-sm">Utilisation pour un projet de jeu vidéo.</p>

                            <div className="flex mt-4 w-full h-[400px] sketchfab-embed-wrapper bg-slate-800 rounded">
                                <iframe className="w-full h-full rounded" src="https://sketchfab.com/models/ed301bf663014f4c85d8f26833c5d57a/embed?autospin=1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}