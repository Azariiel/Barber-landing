// components/navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const NavLinks = (
        <>
            <a href="#servicios" className="hover:text-yellow-400 font-semibold">Servicios</a>
            <a href="#ubicacion" className="hover:text-yellow-400 font-semibold">Ubicación</a>
            <a href="#contacto" className="hover:text-yellow-400 font-semibold">Contacto</a>
        </>
    );

    return (
        <header className="sticky top-0 w-full bg-gray-900 p-3">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <h1
                    className="text-3xl flex justify-center items-center"
                    style={{ fontFamily: 'Black Gumners, sans-serif' }}
                >
                    Barber Shop
                </h1>

                {/* Desktop */}
                <div className="hidden items-center gap-6 md:flex">
                    {NavLinks}
                    <button
                        className="bg-yellow-400 p-2 rounded-lg text-black font-bold hover:bg-yellow-500"
                    >
                        Reservar cita
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden rounded-lg p-2 hover:bg-black/5"
                    aria-label="Abrir menú"
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t bg-gray-900">
                    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
                        {NavLinks}
                        <button
                            className="bg-yellow-400 p-2 rounded-lg text-black font-bold hover:bg-yellow-500"
                        >
                            Reservar cita
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
