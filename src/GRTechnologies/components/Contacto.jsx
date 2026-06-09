import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useFormPropio } from "../hooks/useFormPropio";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ServiciosInfo } from "../../data/serviciosInfo";
import { Alerta } from "./";

export const Contacto = () => {
    const [type, setType] = useState("card");
    
    const { formState, email, celular, servicio, comentarios, onInputChange, onResetForm, setFormState } = useFormPropio({
        email: '',
        celular: '',
        servicio: '',
        comentarios: '',
    });

    const [mensaje, setMensaje] = useState();

    const onCelularChange = (e) => {
        if (
            !(
                e.ctrlKey ||
                e.altKey ||
                (e.keyCode >= 48 && e.keyCode <= 57) || // Números del teclado alfanumérico
                (e.keyCode >= 96 && e.keyCode <= 105) || // Números del teclado numérico
                e.keyCode === 8 || // Tecla de retroceso
                e.keyCode === 9 || // Tecla Tab
                e.keyCode === 13 || // Tecla Enter
                e.keyCode === 27 || // Tecla Escape
                e.keyCode === 37 || // Flecha izquierda
                e.keyCode === 39 || // Flecha derecha
                e.keyCode === 46 // Tecla Suprimir
                )
        ) {
            e.preventDefault();
        }

    };

    const onPasteCelular = (e) => {
        // Obtener el texto que se está pegando
        const pastedText = e.clipboardData.getData('text/plain');
        // Verificar si el texto contiene solo números
        if (!/^\d*$/.test(pastedText)) {
            e.preventDefault();
        }
    }

    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        if (!resultado) {
            console.log("El correo electrónico ingresado no es válido.");
        }
        return resultado;
    };

    const validarCelular = (celular) => {
        const regex = /^(?:\+\d{1,3}\s?)?\d{6,14}$/;
        const resultado = regex.test(celular);
        return resultado;
    };

    const form = useRef();
    const emailRef = useRef();
    const celularRef = useRef();
    const [alertVisible, setAlertVisible] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        if(!validarEmail(email)) {
            setError(true);
            setMensaje('El correo electrónico ingresado no es válido.');
            emailRef.current.focus();
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        if(!validarCelular(celular)) {
            setError(true);
            setMensaje('El celular ingresado no es válido.');
            celularRef.current.focus();
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        onResetForm();
        emailjs
            .sendForm('service_9rfara5', 'template_dkqpqil', form.current, {
                publicKey: '_799lIJ7RXftySiG7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setAlertVisible(true); // Mostrar la alerta
                    setTimeout(() => {
                        setAlertVisible(false); // Ocultar la alerta después de 3 segundos
                    }, 3000);
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
    }

    const contactoRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <div className="bg-gradient-to-b from-[#1a1d2e] to-[#0f1117] py-20" id="contacto">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-white font-bold text-4xl sm:text-5xl mb-4">
                        ¿Listo para empezar tu proyecto?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad
                    </p>
                </div>

                <div ref={contactoRef} className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Información de contacto */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#1a1d2e] border border-white/10 rounded-2xl p-8 h-full">
                            <h3 className="text-white font-bold text-2xl mb-8">Información de contacto</h3>
                            
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                        <img loading="lazy" src="https://img.icons8.com/ios-filled/50/3b82f6/marker.png" alt="ubicación" className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Ubicación</p>
                                        <p className="text-white font-medium">Mazatlán, Sinaloa, México</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                                        <img loading="lazy" src="https://img.icons8.com/ios-glyphs/30/10b981/iphone.png" alt="teléfono" className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                                        <a href="tel:+526693316005" className="text-white font-medium hover:text-green-400 transition-colors">
                                            +52 669 331 6005
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                                        <img loading="lazy" src="https://img.icons8.com/material-rounded/24/a855f7/new-post.png" alt="email" className="w-6 h-6"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Email</p>
                                        <a href="mailto:contacto@grstechs.com" className="text-white font-medium hover:text-purple-400 transition-colors">
                                            contacto@grstechs.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <p className="text-gray-400 text-sm mb-4">Síguenos en redes sociales</p>
                                <div className="flex gap-4">
                                    <a 
                                        href="https://www.instagram.com/grs_technologies/" 
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Instagram"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                                    >
                                        <img className="w-5 h-5" loading="lazy" src="https://img.icons8.com/ios/50/FE3073/instagram-new--v1.png" alt="Instagram"/>
                                    </a>

                                    <a 
                                        href="https://www.facebook.com/profile.php?id=61556454782524" 
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Facebook"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                                    >
                                        <img className="w-5 h-5" loading="lazy" src="https://img.icons8.com/ios-filled/50/3F51B5/facebook-f.png" alt="Facebook"/>
                                    </a>

                                    <a 
                                        href="#" 
                                        target="_blank"
                                        rel="noreferrer"
                                        title="LinkedIn"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300"
                                    >
                                        <img className="w-5 h-5" loading="lazy" src="https://img.icons8.com/fluency/48/linkedin-2.png" alt="LinkedIn"/>
                                    </a>

                                    <a 
                                        href="https://www.youtube.com/channel/UC_bUID-7eg1fN5ad5Q8CzCQ" 
                                        target="_blank"
                                        rel="noreferrer"
                                        title="YouTube"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                                    >
                                        <img className="w-5 h-5" loading="lazy" src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#1a1d2e] border border-white/10 rounded-2xl p-8">
                            <h3 className="text-white font-bold text-2xl mb-6">Envíanos un mensaje</h3>
                            
                            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                                
                                <div>
                                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={onInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="celular" className="block text-white text-sm font-medium mb-2">
                                        WhatsApp / Teléfono
                                    </label>
                                    <input
                                        ref={celularRef}
                                        type="tel"
                                        placeholder="6691234567"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300"
                                        id="celular"
                                        name="celular"
                                        value={celular}
                                        onChange={onInputChange}
                                        onKeyDown={e => onCelularChange(e)}
                                        onPaste={e => onPasteCelular(e)}
                                        maxLength="12"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="servicio" className="block text-white text-sm font-medium mb-2">
                                        Tipo de servicio
                                    </label>
                                    <select
                                        id="servicio"
                                        name="servicio"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                                        value={!servicio ? '0' : servicio}
                                        onChange={onInputChange}
                                        required
                                    >
                                        <option value="0" disabled className="text-gray-900 bg-white">
                                            Selecciona un servicio
                                        </option>
                                        {
                                            ServiciosInfo.map(servicio => (
                                                <option key={servicio.id} value={servicio.id} className="text-gray-900 bg-white">
                                                    {servicio.titulo}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="comentarios" className="block text-white text-sm font-medium mb-2">
                                        Cuéntanos sobre tu proyecto
                                    </label>
                                    <textarea
                                        name="comentarios"
                                        id="comentarios"
                                        value={comentarios}
                                        onChange={onInputChange}
                                        rows="4"
                                        placeholder="Describe brevemente qué necesitas..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02]"
                                >
                                    Enviar mensaje
                                </button>

                                {/* Alertas */}
                                {alertVisible && (
                                    <Alerta mensaje="¡Mensaje enviado! Te contactaremos pronto" tipo="success" />
                                )}
                                {error && (
                                    <Alerta mensaje={mensaje} tipo="error" />
                                )}

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
