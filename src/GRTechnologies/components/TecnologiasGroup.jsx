import { tecnologias } from "../../data"
import { TecnologiasCard } from "./TecnologiasCard"

export const TecnologiasGroup = () => {

    return (
        <div className="color1">
            <div className="py-16 px-10 max-w-[1500px] mx-auto">
                <h3 className="text-white mb-16 text-center text-5xl pb-12">Tecnologías</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x- gap-y-28 lg:gap-y-16">
                    {
                        tecnologias.map( tecnologia => (
                            <TecnologiasCard tecnologia={tecnologia} key={tecnologia.name} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
