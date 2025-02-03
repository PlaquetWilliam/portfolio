import { MdArrowOutward } from "react-icons/md";

/* Images */
import Profil from '../assets/Profil.png'
import Linkedin from '../assets/Linkedin.png'
import Gmail from '../assets/Gmail.png'

export const Contact = () => {
    return (
    <>
        <section className='flex flex-col py-10 w-full'>
            <div className="flex flex-col items-center z-10 lg:flex-row">
                <p className="mb-2 mr-2 py-1 px-3 text-[#a9b4be] border border-[#3a3d40] bg-[#23282f] rounded lg:mb-0">Me contacter</p>
                <h1 className="text-2xl text-center font-bold text-[#adbac7] lg:text-left">Je serais heureux de travailler avec vous !</h1>
            </div>

            <div className="flex flex-col mt-8 gap-4 z-10 lg:flex-row">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/william-plaquet-9b6682210/" target="_blank" className="group flex-1 flex justify-between items-center p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                    
                    <div className='flex items-center'>
                        <div className="relative mr-4">
                            <img src={Profil} className='h-[80px] rounded-full'/>
                            <img src={Linkedin} className='absolute bottom-0 right-0 h-[30px] rounded-full'/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-[#adbac7]">William PLAQUET</h1>
                        </div>
                    </div>

                    <MdArrowOutward className="p-3 text-5xl text-[#adbac7]"/>
                </a>

                {/* Gmail */}
                <a href="https://mail.google.com/mail/?view=cm&to=wplaquet72@gmail.com" target="_blank" className="group flex-1 flex justify-between items-center p-4 bg-[#1e2329] border border-[#333538] rounded-lg">
                                    
                    <div className='flex items-center'>
                        <div className="relative mr-4">
                            <img src={Profil} className='h-[80px] rounded-full'/>
                            <img src={Gmail} className='absolute bottom-0 right-0 h-[30px] rounded-full'/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold text-[#adbac7]">wplaquet72@gmail.com</h1>
                        </div>
                    </div>

                    <MdArrowOutward className="p-3 text-5xl text-[#adbac7]"/>
                </a>
            </div>
        </section>
    </>
    )
}