import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";

const servicios = [
    { nombre: 'Landing Page' },
    { nombre: 'Sitio web' },
    { nombre: 'Sitio Web Sin Limites' },
    { nombre: 'Tienda Virtual' },
]

export const Contacto = () => {
    const [type, setType] = React.useState("card");


    return (
        <div className="bg-[#1b1d33] pb-[8rem]">

            <Typography 
                variant="h1"
                className="text-center text-white text-[3rem] pt-10"
            >
                Contactanos
            </Typography>
            <Card className="w-full max-w-[50rem] mt-20 mr-auto ml-auto bg-[#000016] p-[1rem]">
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
                            <form className="mt-2 flex flex-col gap-4">
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-2 font-medium text-white"
                                    >
                                        Email
                                    </Typography>
                                    <Input
                                        type="email"
                                        placeholder="Ej. name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                                        labelProps={{
                                        className: "before:content-none after:content-none",
                                        }}
                                    />

                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Celular
                                    </Typography>
                                    <Input
                                        type="number"
                                        placeholder="Ej. 6692847395"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
                                        labelProps={{
                                        className: "before:content-none after:content-none",
                                        }}
                                    />
                                    
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Seleccione un servicio
                                    </Typography>
                                    <Select
                                        label="Seleccionar servicio"
                                        color="blue"
                                        className="bg-white"
                                    >
                                        
                                        {
                                            servicios.map( servicio => (
                                                <Option>{servicio.nombre}</Option>
                                            ))
                                        }

                                    </Select>

                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mt-4 mb-2 font-medium text-white"
                                    >
                                        Comentarios
                                    </Typography>
                                    <Textarea 
                                        label="Escribe tus comentarios"
                                        className="bg-white"
                                    />

                                </div>
                                <Button 
                                    size="lg"
                                    className="bg-[#4323d5] mt-6"
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
