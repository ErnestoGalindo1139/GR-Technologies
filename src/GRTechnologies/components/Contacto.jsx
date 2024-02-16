import React, { useEffect, useState } from "react";
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
import { useForm, ValidationError } from '@formspree/react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const servicios = [
    { id: 1, nombre: 'Landing Page' },
    { id: 2, nombre: 'Sitio web' },
    { id: 3, nombre: 'Sitio Web Sin Limites' },
    { id: 4, nombre: 'Tienda Virtual' },
]

export const Contacto = () => {
    const [type, setType] = useState("card");
    const { formState, email, celular, servicio, comentarios, onInputChange, onResetForm, setFormState } = useFormPropio({
        email: '',
        celular: '',
        servicio: '',
        comentarios: '',
    });
    const [state, handleSubmit] = useForm("mkndrjyl");
    const [envioForm, setEnvioForm] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            onResetForm();
            setEnvioForm(true);
            setTimeout(() => {
                setEnvioForm(false);
            }, 3000);
        }

    }, [state.submitting]);

    const contactoRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div className="bg-[#1b1d33]">
            <Typography 
                variant="h2"
                className="text-center text-white text-[3rem] pt-10"
            >
                Solicitar
            </Typography>
            <Alert color="green" className={`max-w-[50rem] ${envioForm == true ? '' : 'hidden'}`}>Formulario enviado correctamente.</Alert>
            
            <div ref={contactoRef} id="contacto" className="pb-[8rem] flex justify-center mt-[4rem]">

            
                <div className="bg-[#535f8f]s bg-[#000016] w-[22rem] rounded-s-xl">
                    <Typography 
                        variant="h2"
                        className="text-center text-white text-[2rem] mt-[7rem]"
                    >
                        Contactanos
                    </Typography>
                    <div className="w-[16rem] h-[.2rem] bg-[#d946ef] mx-auto mt-[2rem]"></div>
                    <div className="flex flex-col gap-5 justify-center mt-[2rem] mb-[2rem] ml-[4rem]">

                        <div className="flex items-center gap-3">
                            <img width="34" height="34" src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker" className="bg-[#4b5563] rounded-full p-[.2rem]"/>
                            <p className="text-white">Mazatlán, Sinaloa, México</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img width="34" height="34" src="https://img.icons8.com/ios-glyphs/30/iphone.png" alt="iphone" className="bg-[#4b5563] rounded-full p-[.2rem]"/>
                            <p className="text-white">+52 669 269 88 56</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <img width="34" height="34" src="https://img.icons8.com/material-rounded/24/new-post.png" alt="new-post" className="bg-[#4b5563] rounded-full p-[.2rem]"/>
                            <p className="text-white">grstech1139@gmail.com</p>
                        </div>
                            
                        

                    </div>
                    <div className="w-[16rem] h-[.2rem] bg-[#d946ef] mx-auto"></div>
                    <div className="flex justify-center mt-[1rem] gap-4">
                        <div className="bg-[#4b5563] rounded-full p-[.2rem]">
                            <img src="https://img.icons8.com/material/24/instagram-new--v1.png" alt="new-post" className="w-[1.8rem] h-[1.8rem] cursor-pointer"/>
                        </div>

                        <div className="bg-[#4b5563] rounded-full p-[.4rem] cursor-pointer">
                            <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/facebook-f.png" alt="facebook-f"/>
                        </div>

                        <div className="bg-[#4b5563] rounded-full p-[.4rem] cursor-pointer">
                            <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/linkedin-2--v1.png" alt="linkedin-2--v1" />
                        </div>

                        <div className="bg-[#4b5563] rounded-full p-[.4rem] cursor-pointer">
                            <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play"/>
                        </div>
                    </div>
                    
                </div>

                <div>
            
                {/* bg-[#536c8d] */}
                {/* bg-[#243a69] */}
                <Card className="w-[40rem] mr-auto ml-auto bg-[#000016]s p-[1rem] rounded-s-none bg-[#243a69]">
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
                                <form className="mt-2 flex flex-col gap-4" onSubmit={handleSubmit}>
                                    <div>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mb-2 font-medium text-white text-xl"
                                        >
                                            Email
                                        </Typography>
                                        <input
                                            type="email"
                                            placeholder="Ej. name@gmail.com"
                                            className="block w-full border-b-2 border-[#93c5fd] text-white shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.5rem] bg-inherit"
                                            id="email"
                                            name="email"
                                            value={ email }
                                            onChange={ onInputChange }
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                        />

                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mt-4 mb-2 font-medium text-white text-xl"
                                        >
                                            Celular
                                        </Typography>
                                        <input
                                            type="number"
                                            placeholder="Ej. 6692847395"
                                            className="block w-full border-b-2 border-[#93c5fd] text-white shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.5rem] bg-inherit"
                                            id="celular"
                                            name="celular"
                                            value={ celular }
                                            onChange={ onInputChange }
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Celular" 
                                            field="celular"
                                            errors={state.errors}
                                        />
                                        
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mt-4 mb-2 font-medium text-white text-xl"
                                        >
                                            Seleccione un servicio
                                        </Typography>
                                        <select
                                            id="servicio"
                                            name="servicio"
                                            autoComplete="servicio-name"
                                            className="block w-[22rem] border-b-2 border-[#93c5fd] shadow-sm ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                            p-[.7rem] bg-inherit text-white"
                                            value={ !servicio ? '0' : servicio }
                                            onChange={onInputChange}
                                            required
                                        >
                                            <option value="0" disabled className="text-black"> Seleccione un servicio </option>
                                            {
                                                servicios.map( servicio => (
                                                    <option key={servicio.id} value={servicio.id}  className="text-black">
                                                        {servicio.nombre}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <ValidationError 
                                            prefix="servicio" 
                                            field="servicio"
                                            errors={state.errors}
                                        />

                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mt-4 mb-2 font-medium text-white text-xl"
                                        >
                                            Comentarios
                                        </Typography>
                                        <textarea 
                                            name="comentarios" 
                                            id="comentarios" 
                                            value={ comentarios }
                                            onChange={ onInputChange }
                                            rows="4" 
                                            className="block w-full border-[#93c5fd] border border-2 rounded-md px-3.5 py-2 text-white shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-inherit"
                                            required>
                                        </textarea>
                                        <ValidationError 
                                            prefix="Comentarios" 
                                            field="comentarios"
                                            errors={state.errors}
                                        />

                                    </div>
                                    <Button 
                                        size="lg"
                                        className="bg-[#a70267] mt-6 text-xl"
                                        type="submit"
                                        disabled={state.submitting}
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
