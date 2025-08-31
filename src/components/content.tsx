import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";



function Content() {
    return (
        <main >
            {/* HERO */}
            <section className="grid items-center gap-8 py-16 md:grid-cols-2 p-5">
                <div >
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl text-yellow-100 ">
                        Cortes y Barba
                    </h1>
                    <p className="mt-3 text-lg text-neutral-200">
                        Agenda por WhatsApp. Atención el mismo día. Estilos modernos y
                        clásicos, faciales y cuidado de barba.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <a
                            className="rounded-xl bg-yellow-400 px-5 py-3 text-black hover:bg-yellow-500 font-semibold"
                        >
                            Reservar por WhatsApp
                        </a>
                        <a
                            href="#servicios"
                            className="rounded-xl border px-5 py-3 hover:bg-black/5 font-semibold"
                        >
                            Ver servicios
                        </a>
                    </div>
                    <ul className="mt-6 grid gap-2 text-sm text-neutral-300 font-semibold r">
                        <li>• Abiertos de Lunes a Domingo</li>
                        <li>• Pagos en efectivo y transferencia</li>
                        <li>• A 3 min del Metro Iztapalapa</li>
                    </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
                    <Image
                        src="https://res.cloudinary.com/drjnmocww/image/upload/v1756445260/barber-landing_pkzeu1.jpg"
                        alt="Barbero realizando un corte de cabello"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className="scroll-mt-24 py-16 bg-white p-4">
                <h1 className="text-4xl font-bold text-amber-500 text-center">Servicios</h1>
                <p className="mt-2 text-neutral-600 text-center font-semibold">
                    Calidad profesional a precio justo. Pregunta por promociones.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: "Corte clásico", d: "Estilo limpio y preciso.", p: "$120" },
                        { t: "Corte + Barba", d: "Definición de barba y contornos.", p: "$180" },
                        { t: "Fade / Degradado", d: "Moderno y definido.", p: "$150" },
                        { t: "Afeitado tradicional", d: "Toalla caliente y navaja.", p: "$130" },
                        { t: "Facial rápido", d: "Limpieza y cuidado básico.", p: "$160" },
                        { t: "Tinte / Color", d: "Consulta previa.", p: "Desde $250" },
                    ].map((s) => (
                        <div
                            key={s.t}
                            className="rounded-2xl border p-5 shadow-sm hover:shadow-md border-neutral-500"
                        >
                            <h3 className="text-lg font-bold text-black">{s.t}</h3>
                            <p className="mt-1 text-sm text-neutral-600 font-semibold">{s.d}</p>
                            <div className="mt-4 font-medium text-gray-800">{s.p}</div>
                            <a
                                className="mt-4 inline-block rounded-xl border px-4 py-2 text-sm hover:bg-gray-100 text-black items-center justify-center"
                            >
                                Agendar
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <section id="ubicacion" className="scroll-mt-24 py-16 p-4">
                <h2 className="text-2xl font-semibold">Ubicación</h2>
                <p className="mt-2 text-neutral-600">
                    Cuauhtémoc 183, Iztapalapa, 09000 Ciudad de México, CDMX.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border">
                    <iframe
                        title="Mapa Barbería"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.77626931625883!2d-99.08915158022351!3d19.363583770743485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd443b69f8e5%3A0x45944d1c017c27e1!2sBelhugo&#39;s%20Haircuts%20%26%20Barbershop!5e1!3m2!1ses-419!2smx!4v1756618395839!5m2!1ses-419!2smx"
                        className="h-[380px] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </section>
            <section id="contacto" className="scroll-mt-24 py-16 bg-white">
                <h2 className="text-4xl font-semibold text-black text-center">Contacto</h2>
                <div className="mt-6 grid gap-6 md:grid items-center justify-center">
                    <div className="rounded-2xl border p-10">
                        <h3 className="font-semibold text-neutral-800">Escríbenos por WhatsApp</h3>
                        <p className="mt-2 text-gray-700">
                            Respuesta rápida para agendar tu cita.
                        </p>
                        <a
                            className="mt-4 inline-block rounded-xl bg-black px-5 py-3 text-white hover:bg-black/90 items-center justify-center"
                        >
                            Abrir WhatsApp
                        </a>
                        <ul className="mt-4 text-sm text-neutral-600">
                            <li>Tel: +52 55 0000 0000</li>
                            <li>Correo: contacto@barberdemo.com</li>
                            <li>Horarios: Lun–Sáb 10:00–20:00, Dom 11:00–17:00</li>
                        </ul>
                    </div>

                    
                </div>
            </section>
            {/* FOOTER */}
            <footer className="bg-black text-white text-center py-6">
                <p className="text-sm">
                    © {new Date/*  */().getFullYear()} Barbería Clásica. Todos los derechos
                    reservados.{/*  */}
                </p>
            </footer>
        </main>
    );
}

export default Content;
