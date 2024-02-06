import { nosotrosInfo } from "../../data"
import { IconoWhatsAppAnimado, Navbar, NosotrosGroup } from "../components"
import { BannerComponent } from "../components/BannerComponent";
import { Contacto } from "../components/Contacto";
import { FooterComponent } from "../components/FooterComponent";
import { ServiciosGroup } from "../components/ServiciosGroup";

export const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <BannerComponent />

            {/* Nosotros */}
            {
                nosotrosInfo.map( info => (
                    <NosotrosGroup key={info.id} info={ info } />
                ))
            }

            {/* Nuestros Servicios */}
            <ServiciosGroup />

            {/* Contacto */}
            <Contacto />

            {/* Footer */}
            <FooterComponent />

            {/* Whatsapp */}
            <IconoWhatsAppAnimado />
        </>
    )
}

