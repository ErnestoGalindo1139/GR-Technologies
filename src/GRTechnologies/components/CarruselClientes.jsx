// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { clientes } from '../../data';
import { useEffect, useState } from 'react';

export const CarruselClientes = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            // Ajustar slidesPerView según el ancho de la ventana
            if (window.innerWidth >= 1200) {
                setSlidesPerView(5);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3);
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
        <div className='color5 py-16 mx-auto '>
            <h3 className="text-white md:mb-4 text-center text-4xl md:text-5xl md:pb-8">Nuestros Clientes</h3>
            <Swiper
                // install Swiper modules
                className='max-w-[1500px]'
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                {
                    clientes.map( cliente => (
                        <SwiperSlide key={cliente.nombre} >
                            <img className='w-80 h-24 md:h-16 my-32 md:my-16 md:w-52 mx-auto hover:opacity-50 transition-transform hover:scale-[1.2]' src={ cliente.url } alt={ cliente.nombre } />
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
        </div>
    );
};