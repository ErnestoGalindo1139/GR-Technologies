export const ServiciosMiniCard = ({ info }) => {
    return (

        <div className={`flex flex-col color-secundario px-8 border border-[#c2c6f2] rounded-xl py-4 gap-4 ${info.id === 3 ? 'lg:col-span-2 2xl:col-span-1' : 'lg:col-span-1'}`}>
            <div className="rounded-[50%] bg-[#3B2F4F] p-4 mx-auto">
                <img width="66" height="66" src={info.imagen} alt="external-Services-web-analytics-and-development-apps-smashingstocks-detailed-outline-smashing-stocks" className="" />
            </div>
            <div className="flex flex-col justify-center text-white text-center">
                <h2 className="font-bold text-3xl mb-2">{info.titulo}</h2>
                <p className="text-xl">{info.descripcion}</p>
            </div>
        </div>

    );
}
