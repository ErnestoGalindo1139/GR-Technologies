export const SectionButton = ({ secciones, seleccionActual, cambiarSeccion }) => {
    return (
        <div className="px-4 md:px-0 flex justify-around mx-auto max-w-[1500px]">
            {
                secciones.map((seccion) => (
                    <button
                        key={seccion}
                        onClick={() => cambiarSeccion(seccion)}
                        className={`text-normal sm:text-xl pt-8 pb-2 hover:text-[#428BFF] ${seleccionActual === seccion ? 'border-b-2 border-[#428BFF] border-solid text-[#428BFF]' : 'text-white'}`}
                    >
                        {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
                    </button>
                ))
            }
        </div>
    );
};