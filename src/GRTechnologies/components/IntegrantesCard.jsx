export const IntegrantesCard = ({ integrantes }) => {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {
            integrantes.map( integrante => (
                <ul key={integrante.nombre} className="flex flex-col p-4">
                    <li className="border-gray-400 mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex flex-col rounded-md w-24 h-24 bg-gray-300 justify-center items-center mr-4">
                                <img src={ integrante.imagen } alt="" />
                            </div>

                            <div key={integrante.nombre} className="flex-1 pl-1 mr-4">
                                <div className="font-medium">{ integrante.nombre }</div>
                                <div className="text-gray-600 text-sm">{ integrante.puesto }</div>
                            </div>  
                            <div className="text-gray-600 text-xs">
                                <a href={integrante.linkedin} target="_blank" rel="noopener">
                                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                                </a>
                                <a href={integrante.correo} target="_blank" rel="noopener">
                                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post"/>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            ))
        }
        </div>

    )
}
