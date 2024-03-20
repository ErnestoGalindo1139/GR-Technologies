"use client";
import { BackgroundGradient } from "./background-gradient";

export const ServiciosCard = ({ info }) => {
    const { titulo, descripcion, colorHeading, colorText, id } = info;

    return (
        <>
            {id === 4 && (
                <BackgroundGradient className="p-[2px] w-full">
                    <div 
                        className={`box flex flex-col color2 rounded-3xl pb-4 gap-4 shadow-xl ${id === 3 ? 'lg:col-span-2 2xl:col-span-1' : 'lg:col-span-1'}`}
                    >
                        <h2 
                            className="font-bold text-3xl mb-2 rounded-t-3xl py-8 text-center" 
                            style={{ backgroundColor: `#${colorHeading}`, color: colorText }}
                        >
                            {titulo}
                        </h2>

                        <ul className="text-white px-8">
                            {descripcion.map((lista, index) => (
                                <li 
                                    key={index} 
                                    className="border-b border-[#3f3f46] py-4 flex sm:text-normal text-md">
                                    <img 
                                        loading="lazy" 
                                        src={`https://img.icons8.com/ios-filled/50/${colorHeading}/checkmark--v1.png`} alt="external-Services-web-analytics-and-development-apps-smashingstocks-detailed-outline-smashing-stocks" className="w-6 h-6 mr-3" />
                                    {lista}
                                </li>
                            ))}
                        </ul>
                    </div>
                </BackgroundGradient>
            )}
            {id !== 4 && (
                <div>
                    <div 
                        className={`box flex flex-col color2 rounded-3xl pb-4 gap-4 shadow-xl ${id === 3 ? 'lg:col-span-2 2xl:col-span-1' : 'lg:col-span-1'}`}>
                        <h2 
                            className="font-bold text-3xl mb-2 rounded-t-3xl py-8 text-center" 
                            style={{ backgroundColor: `#${colorHeading}`, color: colorText }}
                        >
                            {titulo}
                        </h2>

                        <ul className="text-white px-8">
                            {descripcion.map((lista, index) => (
                                <li 
                                    key={index} 
                                    className="border-b border-[#3f3f46] py-4 flex text-sm sm:text-normal"
                                >
                                    <img 
                                        loading="lazy" 
                                        src={`https://img.icons8.com/ios-filled/50/${colorHeading}/checkmark--v1.png`} alt="external-Services-web-analytics-and-development-apps-smashingstocks-detailed-outline-smashing-stocks" 
                                        className="w-6 h-6 mr-3" 
                                    />
                                    {lista}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
