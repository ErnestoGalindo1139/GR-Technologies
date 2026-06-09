import { soluciones, procesoTrabajo } from "../../data";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ServiciosGroup = () => {

    const serviciosRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div ref={serviciosRef} id="servicios" className="color5 py-20">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
                
                {/* Sección de Soluciones */}
                <div className="mb-24">
                    <h2 className="text-white font-bold text-4xl sm:text-5xl text-center mb-16">
                        Cómo podemos ayudarte
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {soluciones.map((solucion) => (
                            <div 
                                key={solucion.id} 
                                className="relative bg-[#1a1d2e] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 group overflow-hidden"
                            >
                                {/* Gradient accent on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${solucion.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4">{solucion.icono}</div>
                                    <h3 className="text-white text-2xl font-semibold mb-3">{solucion.titulo}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed">{solucion.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección de Proceso */}
                <div className="mt-24 pt-12 border-t border-white/10">
                    <h2 className="text-white font-bold text-4xl sm:text-5xl text-center mb-16">
                        ¿Cómo trabajamos?
                    </h2>
                    
                    <div className="max-w-4xl mx-auto space-y-6">
                        {procesoTrabajo.map((paso, index) => (
                            <div 
                                key={paso.numero}
                                className="flex gap-6 items-start group bg-[#1a1d2e] border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300">
                                    {paso.numero}
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-white text-xl font-semibold mb-2">{paso.titulo}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed">{paso.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
