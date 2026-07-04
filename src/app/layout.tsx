import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Confirmación y Graduación - Emily Ochoa",
  description: "Tenemos el honor de invitarte a celebrar este día tan especial. Con cariño, Familia Ochoa.",
  openGraph: {
    title: "Confirmación y Graduación - Emily Ochoa",
    description: "Tenemos el honor de invitarte a celebrar este día tan especial. ¡Toca aquí para ver los detalles y confirmar tu asistencia!",
    images: [
      {
        url: "/images/img4.jpeg",
        width: 800,
        height: 800,
        alt: "Emily Ochoa - Confirmación y Graduación",
      }
    ],
    locale: "es_MX",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${greatVibes.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-montserrat text-slate-800 antialiased bg-[#fcfbf9]">
        {children}
      </body>
    </html>
  );
}
