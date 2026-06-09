import { useState } from "react";
import { nosotrosInfo, secciones, tecnologias } from "../../data"
import { CarruselClientes, IconoWhatsAppAnimado, Navbar, NosotrosGroup, SectionButton, TecnologiasCard, TecnologiasGroup } from "../components"
import { BannerComponent } from "../components/BannerComponent";
import { Contacto } from "../components/Contacto";
import { FooterComponent } from "../components/FooterComponent";
import { ServiciosGroup } from "../components/ServiciosGroup";

export const HomePage = () => {

    const [seccionActual, setSeccionActual] = useState('Nosotros');

    const cambiarSeccion = (nuevaSeccion) => {
        setSeccionActual(nuevaSeccion);
    };

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <BannerComponent />

            {/* Nuestros Servicios */}
            <ServiciosGroup />

            {/* Tecnologias */}
            <TecnologiasGroup />

            {/* Clientes */}
            <CarruselClientes />

            {/* Nosotros */}
            <div className="color3 py-[1rem]">
                {/* Botones de selección de sección */}
                <SectionButton secciones={secciones} seleccionActual={seccionActual} cambiarSeccion={cambiarSeccion} />

                {/* Contenido de la sección actual */}
                <NosotrosGroup info={nosotrosInfo[seccionActual]} />
            </div>

            {/* Contacto */}
            <Contacto />

            {/* Footer */}
            <FooterComponent />

            {/* Whatsapp */}
            <IconoWhatsAppAnimado />
        </>
    )
}

