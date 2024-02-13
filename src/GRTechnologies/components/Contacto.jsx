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

    return (
        <div className="bg-[#1b1d33] pb-[8rem]">

            <Typography 
                variant="h1"
                className="text-center text-white text-[3rem] pt-10"
            >
                Contactanos
            </Typography>
            <Alert color="green" className={`max-w-[50rem] mx-auto mt-20 ${envioForm == true ? '' : 'hidden'}`}>Formulario enviado correctamente.</Alert>
            <Card className="w-full max-w-[50rem] mr-auto mt-[2rem] ml-auto bg-[#000016] p-[1rem]">
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
                                        className="mb-2 font-medium text-white"
                                    >
                                        Email
                                    </Typography>
                                    <input
                                        type="email"
                                        placeholder="Ej. name@mail.com"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        p-[.5rem]"
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
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Celular
                                    </Typography>
                                    <input
                                        type="number"
                                        placeholder="Ej. 6692847395"
                                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        p-[.5rem]"
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
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Seleccione un servicio
                                    </Typography>
                                    <select
                                        id="servicio"
                                        name="servicio"
                                        autoComplete="servicio-name"
                                        className="block w-[22rem] rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                        p-[.7rem]"
                                        value={ !servicio ? '0' : servicio }
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option value="0" disabled> Seleccione un servicio </option>
                                        {
                                            servicios.map( servicio => (
                                                <option key={servicio.id} value={servicio.id}>
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
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Comentarios
                                    </Typography>
                                    <textarea 
                                        name="comentarios" 
                                        id="comentarios" 
                                        value={ comentarios }
                                        onChange={ onInputChange }
                                        rows="4" 
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                                    className="bg-[#4323d5] mt-6"
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

    )
}
