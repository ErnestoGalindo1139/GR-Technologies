import { Typography } from "@material-tailwind/react";

const navigation = [
    { id:1, name: 'Inicio', href: 'inicio'},
    { id:2, name: 'Nosotros', href: 'nosotros'},
    { id:3, name: 'Servicios', href: 'servicios'},
    { id:4, name: 'Tecnologías', href: 'tecnologias'},
    { id:5, name: 'Clientes', href: 'clientes'},
    { id:6, name: 'Contacto', href: 'contacto'},
]

function scrollNav(e, targetId = 'inicio', esMovil = false) {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement && esMovil) {
        window.scrollTo({
            top: targetElement.offsetTop - 460,
            behavior: 'smooth',
        });
    } else {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth',
        });
    }
}

export function FooterComponent() {
    return (
        <footer className="w-full bg-white p-8 color1">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12text-center md:justify-between">
            <img loading="lazy" src="https://res.cloudinary.com/dfszyib7k/image/upload/v1708140218/grs-pagina-web/GRS-LogoNavbar_y31f4h.png" alt="logo" className="w-[120px]" />
            <ul className="flex gap-1 justify-center flex-wrap items-center gap-y-2 gap-x-8">
                {
                    navigation.map((item) => (
                        <li key={ item.id }>
                            <Typography 
                                onClick={(e) => scrollNav(e, item.href, true)}
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