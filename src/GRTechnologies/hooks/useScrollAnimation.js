import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.05, animacion = 'animate__fadeIn') => {
    const elementRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (!element) return;

            const elementTop = element.offsetTop;
            const elementHeight = element.clientHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;


            if (scrollY > elementTop + elementHeight * threshold - windowHeight) {
                element.classList.add('animate__animated', animacion);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return elementRef;
};