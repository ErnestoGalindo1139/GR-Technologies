import { IntegrantesCard } from "../components"
import { useScrollAnimation } from "../hooks/useScrollAnimation";


export const NosotrosGroup = ({ info }) => {

    const nosotrosRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        
        <div ref={nosotrosRef} id="nosotros" className="pt-12 pb-20 px-6 sm:px-10 mx-auto max-w-[1200px]">
            
            <div className="mb-12">
                <h2 className="text-white font-bold text-4xl sm:text-5xl text-center mb-4">
                    {info.titulo}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg sm:text-xl text-center max-w-4xl mx-auto">
                    {info.descripcion}
                </p>
                {
                    info.descripcion2 && (
                        <p className="text-gray-300 leading-relaxed text-lg sm:text-xl text-center max-w-4xl mx-auto">
                            {info.descripcion2}
                        </p>
                    )
                }
            </div>

            {
                info.id === 4 && (
                    <div className="mt-16">
                        <IntegrantesCard integrantes={info.integrantes}/>
                    </div>
                )
            }
        </div>

    )
}
