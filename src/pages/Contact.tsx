import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

import { Footer } from "../components/Footer";

import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";

type FormInputs = {
    name: String,
    email: String,
    message: String
}

export const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>()

    // Ajouter un état pour gérer les messages de succès et d'erreur
    const [formStatus, setFormStatus] = useState<"success" | "error" | "">("")

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            "service_dvm84oy",
            "template_tfhdenk",
            {
                name: data.name,
                email: data.email,
                message: data.message
            },
            "W8mlEkvXhCi9ciBmv"
        ).then(() => {
            // Mettre à jour l'état pour indiquer que l'envoi est un succès
            setFormStatus("success")
            // Réinitialiser le formulaire
            reset()
        }).catch(() => {
            // Mettre à jour l'état en cas d'erreur
            setFormStatus("error")
        })
    }

    // useEffect pour supprimer le message de succès après 5 secondes
    useEffect(() => {
        if (formStatus === "success") {
            const timer = setTimeout(() => {
                setFormStatus(""); // Réinitialiser l'état après 5 secondes
            }, 5000); // 5000 ms = 5 secondes
            return () => clearTimeout(timer); // Nettoyer le timer quand le composant se démonte ou formStatus change
        }
    }, [formStatus]);

    return (
        <main>
            <section className='flex py-20 w-full bg-[#1b1b1b]'>
                <div className="flex justify-center items-center ml-52 w-full h-full">
                    <div className='flex flex-col justify-center items-center w-1/2'>
                        <div className='flex flex-col justify-center w-5/6'>
                            <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Comment me contacter</h1>
                            <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <p className='text-white font-montserrat'>
                                N'hésitez pas à me contacter pour toute question ou demande d'informations. Je suis disponible pour discuter de mes 
                                projets ou d'une éventuelle candidature. Vous pouvez me joindre directement par e-mail ou via le formulaire de contact 
                                ci-dessous. Je vous remercie de votre intérêt et je vous répondrai dans les plus brefs délais.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-center w-1/2'>
                        <div className="flex flex-col justify-evenly items-center py-20 w-full lg:flex-wrap">
                            <div className="flex flex-col mb-10 p-10 w-1/2 bg-[#2a2a2a]">
                                <MdEmail className="mb-4 w-12 h-12 text-white"/>
                                <p className="w-full text-1xl font-medium text-[#6c6c6c] font-montserrat">wplaquet72@gmail.com</p>
                            </div>

                            <div className="flex flex-col mb-10 p-10 w-1/2 bg-[#2a2a2a]">
                                <FaPhone className="mb-4 w-12 h-12 text-white"/>
                                <p className="w-full text-1xl font-medium text-[#6c6c6c] font-montserrat">60 16 21 00 27</p>
                            </div>

                            <div className="flex flex-col p-10 w-1/2 bg-[#2a2a2a]">
                                <GiPositionMarker className="mb-4 w-12 h-12 text-white"/>
                                <p className="w-full text-1xl font-medium text-[#6c6c6c] font-montserrat">Guécélard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex py-20 w-full bg-[#1b1b1b]'>
                <div className="flex ml-52 w-full h-full">
                    <div className="flex justify-center items-center w-1/2 h-full">
                        <div className="flex flex-col w-5/6">
                            <div className='mb-5 w-24 h-px bg-[#6d6d6d]'></div>
                            <h1 className="pl-4 text-6xl font-bold text-blue-500 font-montserrat">Formulaire</h1>
                            <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>

                            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col mb-8">
                                    <input 
                                        {...register("name", { required: true })} 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className={`w-full px-3 py-2 bg-transparent text-white placeholder:text-[#6d6d6d] border ${errors.name ? 'border-red-500' : 'border-[#6d6d6d]'} outline-none`} 
                                        placeholder="Prénom & Nom / entreprise *" 
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="flex flex-col mb-8">
                                    <input 
                                        {...register("email", { required: true })} 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className={`w-full px-3 py-2 bg-transparent text-white placeholder:text-[#6d6d6d] border ${errors.email ? 'border-red-500' : 'border-[#6d6d6d]'} outline-none`} 
                                        placeholder="Email *" 
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <textarea 
                                        {...register("message", { required: true })} 
                                        id="message" 
                                        name="message" 
                                        className={`w-full px-3 py-2 bg-transparent text-white placeholder:text-[#6d6d6d] border ${errors.message ? 'border-red-500' : 'border-[#6d6d6d]'} outline-none resize-none`} 
                                        rows={7} 
                                        placeholder="Message *" 
                                        autoComplete="off"
                                    ></textarea>
                                </div>

                                <div className='my-5 w-24 h-px bg-[#6d6d6d]'></div>

                                <button type="submit" className="relative mr-6 py-2 px-6 font-medium text-blue-500 font-montserrat bg-transparent border-2 border-blue-500 overflow-hidden group">
                                <span className="absolute inset-0 bg-blue-500 transition-all duration-500 ease-out transform scale-0 group-hover:scale-150 origin-bottom-right z-0"></span>
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                    Envoyer le formulaire
                                </span>
                            </button>
                            </form>
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly items-center w-1/2'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21405.242727715104!2d0.11990886647119164!3d47.884999838004696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e29a51332fd76f%3A0x64aea7c154a635aa!2zNzIyMzAgR3XDqWPDqWxhcmQ!5e0!3m2!1sfr!2sfr!4v1728662554703!5m2!1sfr!2sfr" 
                        className="w-4/6 h-96 border-2 border-blue-500"
                        loading="lazy"
                    ></iframe>
                    </div>
                </div>
            </section>

            {/* Affichage du message de succès ou d'erreur, fixé en bas à droite */}
            {formStatus === "success" && (
                <div className="fixed bottom-4 right-4 p-4 w-80 bg-green-100 text-green-700 rounded-lg shadow-lg">
                    Votre message a bien été envoyé, merci pour votre prise de contact !
                </div>
            )}
            {formStatus === "error" && (
                <div className="fixed bottom-4 right-4 p-4 w-80 bg-red-100 text-red-700 rounded-lg shadow-lg">
                    Une erreur est survenue, veuillez réessayer plus tard.
                </div>
            )}

            <Footer/>
        </main>
    )
}