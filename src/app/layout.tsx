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
  title: "Confirmación y Graduación",
  description: "Acompáñanos a celebrar este día tan especial.",
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
