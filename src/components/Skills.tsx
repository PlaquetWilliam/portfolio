import { RiReactjsFill, RiTailwindCssFill, RiOpenaiFill } from "react-icons/ri";

export const Skills = () => {
    return (
    <>
        <section className='flex flex-col py-10 w-full'>
            <div className="flex flex-col items-center z-10 lg:flex-row">
                <p className="mb-2 mr-2 py-1 px-3 text-[#a9b4be] border border-[#3a3d40] bg-[#23282f] rounded lg:mb-0">Skills</p>
                <h1 className="text-2xl text-center font-bold text-[#adbac7] lg:text-left">Ce que j'aime pratiquer !</h1>
            </div>

            <div className="flex flex-col z-10 lg:mt-8 lg:flex-row">
                <div className="flex-1 flex flex-col p-8 lg:">
                    <RiReactjsFill className="text-6xl text-[#adbac7]"/>
                    <h1 className="mt-4 text-2xl font-bold text-[#adbac7]">React</h1>
                    <p className="mt-2 text-md text-[#9fa6b2]">J'utilise le framework React dans la plupart des mes projets.</p>
                </div>

                <div className="flex-1 flex flex-col p-8 border-y border-[#3a3d40] lg:border-x lg:border-y-transparent">
                    <RiTailwindCssFill className="text-6xl text-[#adbac7]"/>
                    <h1 className="mt-4 text-2xl font-bold text-[#adbac7]">Tailwindcss</h1>
                    <p className="mt-2 text-md text-[#9fa6b2]">Pour plus de facilité dans la conception, Tailwindcss est ma solution préféré.</p>
                </div>

                <div className="flex-1 flex flex-col p-8">
                    <RiOpenaiFill className="text-6xl text-[#adbac7]"/>
                    <h1 className="mt-4 text-2xl font-bold text-[#adbac7]">IA Integration</h1>
                    <p className="mt-2 text-md text-[#9fa6b2]">Ajouter l'intélligence Artificiel dans son site pour améliorer l'expérience utilisateur.</p>
                </div>
            </div>
        </section>
    </>
    )
}