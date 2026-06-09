// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { casosExito } from "../../data";

export const CarruselClientes = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            // Ajustar slidesPerView según el ancho de la ventana
            if (window.innerWidth >= 1140) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 720) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        // Configurar el evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Llamar a handleResize cuando el componente se monta
        handleResize();

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="color5 pb-[2rem]">
            <div className="md:container mx-2 py-16 md:mx-auto" id="clientes">
                <h3 className="text-white font-bold md:mb-4 text-center text-4xl md:text-5xl pb-12">
                    Casos de éxito&nbsp;
                    <span className="text-blue-600">reales</span>
                </h3>
                
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    pagination={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    {casosExito.map((caso) => (
                        <SwiperSlide key={caso.id}>
                            <div className="bg-[#1a1d2e] border border-white/10 rounded-2xl overflow-hidden h-[550px] flex flex-col hover:border-white/30 transition-all duration-300">
                                {/* Imagen */}
                                <div className="relative h-64 overflow-hidden bg-gray-900">
                                    <img
                                        className="w-full h-full object-cover object-top"
                                        src={caso.imagen}
                                        alt={caso.nombre}
                                        onError={(e) => {
                                            e.target.style.objectFit = 'contain';
                                            e.target.style.padding = '20px';
                                        }}
                                    />
                                    {caso.url && (
                                        <a 
                                            href={caso.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                                        >
                                            <span className="text-white font-semibold text-lg bg-blue-600 px-6 py-2 rounded-full">
                                                Ver sitio →
                                            </span>
                                        </a>
                                    )}
                                </div>
                                
                                {/* Contenido */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="text-white text-2xl font-bold mb-2">{caso.nombre}</h4>
                                    <p className="text-blue-400 text-sm font-medium mb-4">{caso.tipo}</p>
                                    
                                    {/* Tecnologías */}
                                    <div className="mb-4">
                                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Tecnologías</p>
                                        <div className="flex flex-wrap gap-2">
                                            {caso.tecnologias.map((tech, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Características */}
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Características</p>
                                        <ul className="space-y-1.5">
                                            {caso.caracteristicas.map((caracteristica, index) => (
                                                <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                                                    <span className="text-green-400 text-xs">✓</span>
                                                    {caracteristica}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
