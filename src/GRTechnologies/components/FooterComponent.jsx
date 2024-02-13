import { Typography } from "@material-tailwind/react";

const navigation = [
    { name: 'Inicio', href: 'inicio'},
    { name: 'Nosotros', href: 'nosotros'},
    { name: 'Nuestros Servicios', href: 'nuestrosServicios'},
    { name: 'Contacto', href: 'contacto'},
]

function scrollNav(e, targetId = 'inicio') {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

export function FooterComponent() {
    return (
        <footer className="w-full bg-white p-8 color1">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12text-center md:justify-between">
            <img src="/GRS-LogoNavbar.png" alt="logo" className="w-[120px]" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                {
                    navigation.map((item) => (
                        <li key={item.name}>
                            <Typography 
                                onClick={(e) => scrollNav(e, item.href)}
                                key={item.name}
                                as="a"
                                href={item.href}
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                {item.name}
                            </Typography>
                        </li>
                    ))
                }
            </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="white"className="text-center font-normal">
            &copy; 2024 GRS Technologies
        </Typography>
        </footer>
    );
}