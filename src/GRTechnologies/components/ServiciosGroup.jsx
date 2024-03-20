import { ServiciosInfo, ServiciosInfoMini } from "../../data"
import { ServiciosCard, ServiciosMiniCard } from "../components"
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ServiciosGroup = () => {

    const serviciosRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div ref={serviciosRef} id="servicios" className="color5 pb-20">
            <div className=" mx-auto max-w-[1500px] px-0 sm:px-10 py-1">
                <h1 className="px-4 text-white font-bold text-3xl sm:text-5xl text-center my-8">Contrata nuestros servicios fácilmente</h1>
                <p className="px-4 text-xl sm:text-2xl text-center text-gray-500 " >Elige los servicios que deseas contratar, completá un pequeño formulario para contarnos sobre tu marca y nos vamos a comunicar para empezar a <strong className="text-gray-200">trabajar juntos.</strong></p>
                <div className="gap-10 px-12 2xl:px-4 py-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                    {
                        ServiciosInfoMini.map((info) => {
                            return (
                                <ServiciosMiniCard key={info.id} info={info}/>
                            );
                        })
                    }
                </div>
            </div>

            <div className="px-0 sm:px-10 mx-auto">
                <div className="gap-10 px-12 2xl:px-4 py-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
                    {
                        ServiciosInfo.map((info) => {
                            return (
                                <ServiciosCard key={info.id} info={info}/>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    )
}
