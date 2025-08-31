"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { header } from "framer-motion/client";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function Content() {
  return (
    
    <main>
      {/* HERO */}
      <motion.section
        className="grid items-center gap-8 py-16 md:grid-cols-2 p-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-yellow-100">
            Cortes y Barba
          </h1>
          <p className="mt-3 text-lg text-neutral-200">
            Agenda por WhatsApp. Atención el mismo día. Estilos modernos y
            clásicos, faciales y cuidado de barba.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-black font-semibold transition-all hover:bg-yellow-500 hover:shadow-lg active:scale-[0.98]"
            >
              <FaWhatsapp className="text-xl" />
              Reservar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-xl border px-5 py-3 font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
            >
              Ver servicios
            </a>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-neutral-300 font-semibold">
            <li>• Abiertos de Lunes a Domingo</li>
            <li>• Pagos en efectivo y transferencia</li>
            <li>• A 3 min del Metro Iztapalapa</li>
          </ul>
        </motion.div>

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow"
          variants={zoomIn}
        >
          <Image
            src="https://res.cloudinary.com/drjnmocww/image/upload/v1756445260/barber-landing_pkzeu1.jpg"
            alt="Barbero realizando un corte de cabello"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </motion.div>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section
        id="servicios"
        className="scroll-mt-24 py-16 bg-white p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-bold text-amber-500 text-center"
          variants={fadeUp}
        >
          Servicios
        </motion.h1>
        <motion.p
          className="mt-2 text-neutral-600 text-center font-semibold"
          variants={fadeUp}
        >
          Calidad profesional a precio justo. Pregunta por promociones.
        </motion.p>

        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
        >
          {[
            { t: "Corte clásico", d: "Estilo limpio y preciso.", p: "$120" },
            { t: "Corte + Barba", d: "Definición de barba y contornos.", p: "$180" },
            { t: "Fade / Degradado", d: "Moderno y definido.", p: "$150" },
            { t: "Afeitado tradicional", d: "Toalla caliente y navaja.", p: "$130" },
            { t: "Facial rápido", d: "Limpieza y cuidado básico.", p: "$160" },
            { t: "Tinte / Color", d: "Consulta previa.", p: "Desde $250" },
          ].map((s) => (
            <motion.div
              key={s.t}
              variants={fadeUp}
              className="rounded-2xl border border-neutral-200 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-black">{s.t}</h3>
              <p className="mt-1 text-sm text-neutral-600 font-semibold">{s.d}</p>
              <div className="mt-4 font-medium text-gray-800">{s.p}</div>
              <a
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm transition-all hover:bg-gray-100 active:scale-[0.98]"
              >
                <FaWhatsapp />
                Agendar
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* UBICACIÓN */}
      <motion.section
        id="ubicacion"
        className="scroll-mt-24 py-16 p-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold">Ubicación</h2>
        <p className="mt-2 text-neutral-600">
          Cuauhtémoc 183, Iztapalapa, 09000 Ciudad de México, CDMX.
        </p>
        <motion.div
          className="mt-6 overflow-hidden rounded-2xl border"
          variants={zoomIn}
        >
          <iframe
            title="Mapa Barbería"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.77626931625883!2d-99.08915158022351!3d19.363583770743485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd443b69f8e5%3A0x45944d1c017c27e1!2sBelhugo&#39;s%20Haircuts%20%26%20Barbershop!5e1!3m2!1ses-419!2smx!4v1756618395839!5m2!1ses-419!2smx"
            className="h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section
        id="contacto"
        className="scroll-mt-24 py-16 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-semibold text-black text-center"
          variants={fadeUp}
        >
          Contacto
        </motion.h2>

        <motion.div
          className="mt-6 grid gap-6 md:grid items-center justify-center"
          variants={stagger}
        >
          <motion.div
            variants={fadeIn}
            className="rounded-2xl border p-10 shadow-sm transition-all hover:shadow-md"
          >
            <h3 className="font-semibold text-neutral-800">Escríbenos por WhatsApp</h3>
            <p className="mt-2 text-gray-700">
              Respuesta rápida para agendar tu cita.
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition-all hover:bg-black/90 hover:shadow-lg active:scale-[0.98]"
            >
              <FaWhatsapp className="text-xl" />
              Abrir WhatsApp
            </a>
            <ul className="mt-4 text-sm text-neutral-600">
              <li>Tel: +52 55 0000 0000</li>
              <li>Correo: contacto@barberdemo.com</li>
              <li>Horarios: Lun–Sáb 10:00–20:00, Dom 11:00–17:00</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="bg-black text-white text-center py-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Barbería Clásica. Todos los derechos reservados.
        </p>
      </motion.footer>
    </main>
  );
}

export default Content;
