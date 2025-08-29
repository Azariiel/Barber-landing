import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaCut, FaUserTie } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";



function Content() {
    return (
        <div className="w-full">
            {/* HERO */}
            <section
                className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url(https://res.cloudinary.com/drjnmocww/image/upload/v1756445260/barber-landing_pkzeu1.jpg)",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Barbería Clásica
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Tu estilo, nuestra pasión
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                        Reserva tu cita
                    </button>
                </div>
            </section>

            {/* SERVICIOS */}
            <section className="py-20 px-6 md:px-20 bg-gray-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                        Nuestros Servicios
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos una amplia gama de servicios para satisfacer tus
                        necesidades y ayudarte a lucir impecable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
                        <FaCut className="text-4xl mx-auto mb-4 text-amber-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Corte de Cabello
                        </h3>
                        <p className="text-gray-600">
                            Clásico, moderno o el estilo que tú elijas.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
                        <GiRazor className="text-4xl mx-auto mb-4 text-amber-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Arreglo de Barba
                        </h3>
                        <p className="text-gray-600">
                            Definición y cuidado para tu mejor look.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-xl text-center hover:scale-105 transition">
                        <FaUserTie className="text-4xl mx-auto mb-4 text-amber-400" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Servicio Completo
                        </h3>
                        <p className="text-gray-600">
                            Corte + barba en un solo paquete premium.
                        </p>
                    </div>
                </div>
            </section>
            <div className="bg-gray-50 flex flex-col items-center justify-center p-6">
                <h1 className="text-gray-800 text-2xl font-bold text-center">Agenda tu cita mandandonos un mensaje</h1>
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg transition mt-4">
                    <FaWhatsapp className="inline-block mr-2 text-gray-800" />
                    WhatsApp
                </button>
            </div>
            {/* FOOTER */}
            <footer className="bg-black text-white text-center py-6">
                <p className="text-sm">
                    © {new Date/*  */().getFullYear()} Barbería Clásica. Todos los derechos
                    reservados.{/*  */}
                </p>
            </footer>
        </div>
    );
}

export default Content;
