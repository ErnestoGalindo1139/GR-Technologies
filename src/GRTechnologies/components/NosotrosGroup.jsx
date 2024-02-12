import { useState } from "react";
import { IntegrantesCard } from "../components"
import { useScrollAnimation } from "../hooks/useScrollAnimation";


export const NosotrosGroup = ({ info }) => {

    const nosotrosRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        
        <div ref={nosotrosRef} id="nosotros" className="pt-5 pb-[5rem] px-16 color3">
                        
            <h2 className="text-[#428BFF] font-bold text-4xl text-center my-5">{ info.titulo }</h2>
            <hr className="w-[10%] my-5 border border-[#428BFF] border-solid h-[5px] bg-[#428BFF]"/>

            <p className="text-white leading-8 text-xl text-center mb-4">{ info.descripcion }</p>
            {
                info.descripcion2
                ? <p className="text-white leading-8 text-xl text-center ">{ info.descripcion2 }</p>
                : <></>
            }
            {
                info.id == 4 ? 
                    <IntegrantesCard integrantes={ info.integrantes }/>
                : <></>
            }
        </div>

    )
}
