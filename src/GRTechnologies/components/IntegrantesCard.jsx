export const IntegrantesCard = ({ integrantes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {
                integrantes.map( integrante => (
                    <div 
                        key={integrante.id} 
                        className="bg-[#1a1d2e] border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-white/30 transition-all duration-300"
                    >
                        <div className="flex-shrink-0">
                            <img 
                                loading="lazy" 
                                src={integrante.imagen} 
                                alt={integrante.nombre} 
                                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500/30"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white text-xl mb-1 truncate">
                                {integrante.nombre}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3">
                                {integrante.puesto}
                            </p>
                            
                            <div className="flex gap-3">
                                <a 
                                    href={integrante.linkedin} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    title="Visita mi perfil de LinkedIn"
                                    className="hover:scale-110 transition-transform duration-200"
                                >
                                    <img 
                                        className="w-7 h-7 opacity-70 hover:opacity-100" 
                                        loading="lazy" 
                                        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
                                        alt="linkedin"
                                    />
                                </a>
                                <a 
                                    href={integrante.correo} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    title="Enviar un correo electrónico"
                                    className="hover:scale-110 transition-transform duration-200"
                                >
                                    <img 
                                        className="w-7 h-7 opacity-70 hover:opacity-100" 
                                        loading="lazy" 
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" 
                                        alt="email"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
