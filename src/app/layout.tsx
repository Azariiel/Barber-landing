import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barber - landing",
  description: "Demo de una landing page",
  metadataBase: new URL('https://barber-landing-demo.vercel.app/'),
  openGraph: {
    title: "Barbershop",
    description: "Cortes y arreglo de barba profesional al mejor servicio. Agenda sin esperas. Ver dirección y horarios",
    url: 'https://barber-landing-demo.vercel.app/',
    siteName: "Barbershop Demo",
    locale: "es_MX",
    type: "website"
  }
};
function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Barbershop",
    name: "Barbershop Demo",
    url: "https://barber-landing-demo.vercel.app/",
    priceRange: "$$",
    openingHours: ["Mo-Sa 10:00-20:00"]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/black-gumners"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
