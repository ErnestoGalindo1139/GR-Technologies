import { ServiciosInfo, ServiciosInfoMini } from "../../data"
import { ServiciosCard, ServiciosMiniCard } from "../components"

export const ServiciosGroup = () => {
    return (
        <div className="color-primario pb-20">
            <div className=" mx-auto max-w-[1500px] px-10 py-1">
                <h2 className="text-white font-bold text-5xl text-center my-8">Contrata nuestros servicios fácilmente</h2>
                <p className="text-2xl text-gray-500 " >Elegí los servicios que deseas contratar, completá un pequeño formulario para contarnos sobre tu marca y nos vamos a comunicar para empezar a <strong className="text-gray-200">trabajar juntos.</strong></p>
                <div className="gap-8 px-12 2xl:px-4 py-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                    {
                        ServiciosInfoMini.map((info) => {
                            return (
                                <ServiciosMiniCard key={info.id} info={info}/>
                            );
                        })
                    }
                </div>
            </div>

            <div className="px-10 mx-auto max-w-[1500px]">
                <div className="gap-8 px-12 2xl:px-4 py-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
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
