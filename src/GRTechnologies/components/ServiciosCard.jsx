export const ServiciosCard = ({ info }) => {
    return (
        <div className={`flex flex-col color-secundario px-8 border border-[#c2c6f2] rounded-xl py-4 gap-4 ${info.id === 3 ? 'lg:col-span-2 2xl:col-span-1' : 'lg:col-span-1'}`}>
            <img src={info.imagen} alt="external-Services-web-analytics-and-development-apps-smashingstocks-detailed-outline-smashing-stocks" className=" mx-auto w-[550px] h-[450px] py-5"/>
            <div className="flex flex-col justify-center text-white text-center">
                <h2 className="font-bold text-3xl mb-2">{info.titulo}</h2>
                <p className="text-xl">{info.descripcion}</p>
                <button
                    className=" my-4 middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 hover:bg-orange-500/90 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    
                >
                    Ver Servicios
                </button>
            </div>
        </div>
    )
}
