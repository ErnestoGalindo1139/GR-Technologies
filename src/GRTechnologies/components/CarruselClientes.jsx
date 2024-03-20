// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    Mousewheel,
    Keyboard,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

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

            <div
                className="md:container mx-2 py-16 md:mx-auto"
                id="clientes"
            >
                <h3 className="text-white font-bold md:mb-4 text-center text-4xl md:text-5xl pb-8">
                Nuestros Casos de <span className="text-blue-600">Éxito</span>
                </h3>
                <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={true}
                
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <div className="relative h-[40rem]">
                    <img
                        className=" rounded-lg object-cover absolute w-full h-full  opacity-100  transition-opacity duration-300 object-left-top"
                        src="https://res.cloudinary.com/dfszyib7k/image/upload/v1709000024/grs-pagina-web/Clientes/mzi7uejbblnclr8rxidm.png"
                        alt=""
                    />
                    <div className="rounded-lg  absolute w-full h-full bg-[#00000067] opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-4xl">
                        <h1 className="absolute bottom-1 m-7 border p-1">BHouse</h1>
                        {/* <p className="text-sm font-thin text-gray-500 absolute bottom-1 ml-7 mb-3">
                        Da click para visualizar
                        </p> */}
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-[40rem]">
                    <img
                        className=" rounded-lg object-cover absolute w-full h-full  opacity-100  transition-opacity duration-300 border border-gray-900"
                        src="https://res.cloudinary.com/dfszyib7k/image/upload/v1708999726/grs-pagina-web/Clientes/m1xma5cpy2bg8ncmqsuw.png"
                        alt=""
                    />
                    <div className="rounded-lg  absolute w-full h-full bg-[#00000067] opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-4xl">
                        <h1 className=" absolute bottom-1 m-7">Misso sushi</h1>
                        {/* <p className="text-sm font-thin text-gray-500 absolute bottom-1 ml-7 mb-3">
                        Da click para visualizar
                        </p> */}
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-[40rem]">
                    <img
                        className=" rounded-lg object-cover absolute w-full h-full  opacity-100  transition-opacity duration-300 border border-gray-900"
                        src="https://res.cloudinary.com/dfszyib7k/image/upload/v1710968848/grs-pagina-web/Clientes/elWalamito_xn4bvk.jpg"
                        alt=""
                    />
                    <div className="rounded-lg  absolute w-full h-full bg-[#00000067] opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-4xl">
                        <h1 className=" absolute bottom-1 m-7">El Walamito Construcciones</h1>
                        {/* <p className="text-sm font-thin text-gray-500 absolute bottom-1 ml-7 mb-3">
                        Da click para visualizar
                        </p> */}
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="relative h-[40rem]">
                    <img
                    className=" rounded-lg object-cover absolute w-full h-full  opacity-100  transition-opacity duration-300"
                    src="https://res.cloudinary.com/dfszyib7k/image/upload/v1709000690/grs-pagina-web/Clientes/c7cyo157bamly5onn8h3.jpg"
                    alt=""
                    />
                    <div className="rounded-lg  absolute w-full h-full bg-[#00000067] opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-bold text-4xl">
                    <h1 className=" absolute bottom-1 m-7">Yarda El Marino</h1>
                    {/* <p className="text-sm font-thin text-gray-500 absolute bottom-1 ml-7 mb-3">
                        Da click para visualizar
                    </p> */}
                    </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
};
