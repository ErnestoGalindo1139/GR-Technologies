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
        <footer className="w-full bg-[#0f1117] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
                
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    
                    {/* Logo y descripción */}
                    <div className="lg:col-span-2">
                        <img 
                            loading="lazy" 
                            src="https://res.cloudinary.com/dfszyib7k/image/upload/v1708140218/grs-pagina-web/GRS-LogoNavbar_y31f4h.png" 
                            alt="GRS Technologies" 
                            className="w-32 mb-4" 
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Desarrollamos soluciones digitales modernas para empresas que buscan crecer en internet. Sitios web, sistemas y plataformas a la medida.
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a 
                                href="https://www.instagram.com/grs_technologies/" 
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                            >
                                <img className="w-4 h-4" src="https://img.icons8.com/ios/50/FE3073/instagram-new--v1.png" alt="Instagram"/>
                            </a>
                            <a 
                                href="https://www.facebook.com/profile.php?id=61556454782524" 
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                <img className="w-4 h-4" src="https://img.icons8.com/ios-filled/50/3F51B5/facebook-f.png" alt="Facebook"/>
                            </a>
                            <a 
                                href="https://www.youtube.com/channel/UC_bUID-7eg1fN5ad5Q8CzCQ" 
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                            >
                                <img className="w-4 h-4" src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube"/>
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Navegación
                        </h3>
                        <ul className="space-y-3">
                            {navigation.slice(0, 3).map((item) => (
                                <li key={item.id}>
                                    <a
                                        onClick={(e) => scrollNav(e, item.href, true)}
                                        href={`#${item.href}`}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Más enlaces */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                            Más información
                        </h3>
                        <ul className="space-y-3">
                            {navigation.slice(3).map((item) => (
                                <li key={item.id}>
                                    <a
                                        onClick={(e) => scrollNav(e, item.href, true)}
                                        href={`#${item.href}`}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} GRS Technologies. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                                Términos de Servicio
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}