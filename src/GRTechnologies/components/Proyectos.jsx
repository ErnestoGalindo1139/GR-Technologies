import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';

const proyectos = [
    {id: 1, locacion: './BHouse1.png'},
    {id: 2, locacion: './misso1.png'},
    {id: 3, locacion: './Walamito1.png'},
    {id: 3, locacion: './DogsBrothersStore.png'},
]

export const Proyectos = () => {

    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {
        const handleResize = () => {
            // Ajustar slidesPerView según el ancho de la ventana
            if (window.innerWidth >= 1280) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
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
        <>
            <div className='bg-[#0d0e25]'>

                <Typography variant='h2' className='text-center pt-[3rem] text-white text-[2.6rem]'>
                    Inspiración en Cada Detalle<span className='block text-blue-600'>Echa un Vistazo a Nuestros Proyectos más Recientes</span>
                </Typography>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={slidesPerView}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    navigation={{ clickable: true }}
                    modules={[EffectCoverflow, Navigation]}
                    className="swiperProyectos"
                >
                    {
                        proyectos.map( proyecto => (
                            <SwiperSlide
                                className="swiper-slideProyectos"
                                key={proyecto.id}
                            >
                                <img className='rounded-[1rem]' src={proyecto.locacion} />
                            </SwiperSlide>
                        ))
                    }
                    
                    
                </Swiper>
            </div>
            
        </>
    )
}
