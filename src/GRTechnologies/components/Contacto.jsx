import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
    Card,
    CardBody,
    Button,
    Typography,
    Tabs,
    TabsBody,
    TabPanel,
    Alert,
} from "@material-tailwind/react";
import { useFormPropio } from "../hooks/useFormPropio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ServiciosInfo } from "../../data/serviciosInfo";

export const Contacto = () => {
    const [type, setType] = useState("card");
    const { formState, email, celular, servicio, comentarios, onInputChange, onResetForm, setFormState } = useFormPropio({
        email: '',
        celular: '',
        servicio: '',
        comentarios: '',
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_9rfara5', 'template_dkqpqil', form.current, {
                publicKey: '_799lIJ7RXftySiG7',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
    }

    const contactoRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div className="bg-[#000016] lg:bg-[#1b1d33]" id="contacto">
            <Typography 
                variant="h2"
                className="text-center text-blue-600 text-[3rem] pt-10"
            >
                Solicitar
            </Typography>
            
            <div ref={contactoRef} className="pb-[3rem] lg:pb-[8rem] flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:mt-[4rem]">

            
                <div className="bg-[#000016] w-full lg:w-[22rem] lg:rounded-s-xl pb-[3rem] lg:pb-[0rem] lg:mx-0">
                    <Typography 
                        variant="h2"
                        className="text-center text-white text-[2rem] mt-[4rem] lg:mt-[7rem]"
                    >
                        Contactanos
                    </Typography>
                    <div className="w-3/4 lg:w-[16rem] h-[.2rem] bg-[#d946ef] mx-auto mt-[2rem]"></div>
                    <div className="flex flex-col gap-5 -center mt-[2rem] mb-[2rem] ml-[4rem]">

                        <div className="flex items-center gap-3 md:ml-[4rem] lg:ml-0">
                            <img loading="lazy" src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker" className="bg-[#4b5563] rounded-full p-[.2rem] w-[34px] h-[34px]"/>
                            <p className="text-white">Mazatlán, Sinaloa, México</p>
                        </div>
                        <div className="flex items-center gap-3 md:ml-[4rem] lg:ml-0">
                            <img loading="lazy" src="https://img.icons8.com/ios-glyphs/30/iphone.png" alt="iphone" className="bg-[#4b5563] rounded-full p-[.2rem] w-[34px] h-[34px]"/>
                            <p className="text-white">+52 669 269 88 56</p>
                        </div>
                        <div className="flex items-center gap-3 md:ml-[4rem] lg:ml-0">
                            <img loading="lazy" src="https://img.icons8.com/material-rounded/24/new-post.png" alt="new-post" className="bg-[#4b5563] rounded-full p-[.2rem] w-[34px] h-[34px]"/>
                            <p className="text-white">grstech1139@gmail.com</p>
                        </div>
                            
                        

                    </div>
                    <div className="mb-8 w-3/4 lg:w-[16rem] h-[.2rem] bg-[#d946ef] mx-auto"></div>
                    <div className="flex justify-center mt-[1rem] gap-5">
                        <a href="https://www.instagram.com/grs_technologies/" title="Visita nuestro perfil de Instagram" className="cursor-pointer">
                            <img className="w-[32px] h-[32px]" loading="lazy" src="https://img.icons8.com/ios/50/FE3073/instagram-new--v1.png" alt="instagram-new--v1"/>
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=61556454782524" title="Visita nuestro perfil de Facebook" className="cursor-pointer">
                            <img className="w-[32px] h-[32px]" loading="lazy" src="https://img.icons8.com/ios-filled/50/3F51B5/facebook-f.png" alt="facebook-f"/>
                        </a>

                        <a href="#" title="Visita nuestro perfil de LinkedIn" className="cursor-pointer">
                            <img className="w-[32px] h-[32px]" loading="lazy" src="https://img.icons8.com/fluency/48/linkedin-2.png" alt="linkedin-2"/>
                        </a>

                        <a href="https://www.youtube.com/channel/UC_bUID-7eg1fN5ad5Q8CzCQ" title="Visita nuestro canal de YouTube" className="cursor-pointer">
                            <img className="w-[34px] h-[34px]" loading="lazy" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/>
                        </a>
                    </div>
                    
                </div>

                <div className="w-full lg:w-[40rem]">
            
                {/* bg-[#536c8d] */}
                {/* bg-[#243a69] */}
                <Card className="mr-auto ml-auto bg-[#000016]s p-[1rem]  rounded-none lg:rounded-e-xl bg-[#243a69]">
                    <CardBody>
                        <Tabs value={type} className="overflow-visible">
                        
                            <TabsBody
                                className="!overflow-x-hidden !overflow-y-visible"
                                animate={{
                                initial: {
                                    x: type === "card" ? 400 : -400,
                                },
                                mount: {
                                    x: 0,
                                },
                                unmount: {
                                    x: type === "card" ? 400 : -400,
                                },
                                }}
                            >
                                <TabPanel value="card" className="p-0">
                                <form ref={form} className="mt-2 flex flex-col gap-4" onSubmit={sendEmail}>
                                    <div>

                                        <label color="blue-gray" className="font-medium text-white text-xl" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Ej. name@gmail.com"
                                            className="block w-full mt-1 mb-5 border-b-2 border-[#93c5fd] text-white shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.5rem] bg-inherit"
                                            id="email"
                                            name="email"
                                            value={ email }
                                            onChange={ onInputChange }
                                            required
                                        />

                                        <label color="blue-gray" className="font-medium text-white text-xl" htmlFor="celular">
                                            Celular
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Ej. 6692847395"
                                            className="block w-full mt-1 mb-5 border-b-2 border-[#93c5fd] text-white shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.5rem] bg-inherit"
                                            id="celular"
                                            name="celular"
                                            value={ celular }
                                            onChange={ onInputChange }
                                            required
                                        />

                                        <label color="blue-gray" className="font-medium text-white text-xl" htmlFor="servicio">
                                            Seleccione un servicio
                                        </label>
                                        <select
                                            id="servicio"
                                            name="servicio"
                                            autoComplete="servicio-name"
                                            className="block w-full mt-1 mb-5 border-b-2 border-[#93c5fd] shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.7rem] bg-inherit text-white"
                                            value={ !servicio ? '0' : servicio }
                                            onChange={onInputChange}
                                            required
                                        >
                                            <option value="0" disabled className="text-black"> Seleccione un servicio </option>
                                            {
                                                ServiciosInfo.map( servicio => (
                                                    <option key={servicio.id} value={servicio.id}  className="text-black">
                                                        {servicio.titulo}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <label color="blue-gray" className="font-medium text-white text-xl" htmlFor="comentarios">
                                            Comentarios
                                        </label>
                                        <textarea 
                                            name="comentarios" 
                                            id="comentarios" 
                                            value={ comentarios }
                                            onChange={ onInputChange }
                                            rows="4" 
                                            className="block w-full mt-1 mb-5 border-[#93c5fd] border-2 rounded-md px-3.5 py-2 text-white shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-inherit"
                                            required>
                                        </textarea>

                                    </div>
                                    <Button 
                                        size="lg"
                                        className="bg-[#a70267] hover:bg-[#a70283] mt-6 text-xl"
                                        type="submit"
                                        onClick={ () => { setTimeout(() => {
                                            onResetForm();
                                        }, 2000); } }
                                    >
                                        Solicitar Cotizacion
                                    </Button>

                                </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
                </div>
                
            </div>
        </div>
    )
}
