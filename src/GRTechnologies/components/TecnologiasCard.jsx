export const TecnologiasCard = ({tecnologia}) => {

    const { url, urlImage, name, rate } = tecnologia;

    return (
        <div className="flex flex-col items-center transition-transform hover:translate-y-[-20px]">
            <img className="w-[50%]"  src={urlImage} alt={name} />
            <p className="text-white text-4xl sm:text-2xl md:text-3xl md:mt-4 lg:text-4xl font-bold"> { name } </p>
        </div>
    )
}
