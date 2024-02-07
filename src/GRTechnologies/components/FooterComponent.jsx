import { Typography } from "@material-tailwind/react";

export function FooterComponent() {
    return (
        <footer className="w-full bg-white p-8 color1">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12text-center md:justify-between">
            <img src="/GRS-LogoNavbar.png" alt="logo" className="w-[120px]" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                    as="a"
                    href="#"
                    color="white"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                    Nosotros
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href="#"
                    color="white"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                    Nuestros Servicios
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href="#"
                    color="white"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                    Ubicacion
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href="#"
                    color="white"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                    Contacto
                    </Typography>
                </li>
            </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="white"className="text-center font-normal">
            &copy; 2024 GRS Technologies
        </Typography>
        </footer>
    );
}