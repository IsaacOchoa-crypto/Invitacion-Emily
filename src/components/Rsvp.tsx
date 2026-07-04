"use client";

import React from 'react';
import { Send } from 'lucide-react';

export default function Rsvp() {
  const message = '¡Hola! Confirmo mi asistencia a la fiesta de Emily.';
  const mamaUrl = `https://wa.me/524271914416?text=${encodeURIComponent(message)}`;
  const papaUrl = `https://wa.me/524272775846?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with soft pastel overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url("/images/rsvp-bg.png")' }}
      >
      </div>
      {/* Soft gradient/overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-great-vibes text-5xl md:text-7xl text-[#b08b9f] mb-4 drop-shadow-md">Confirma tu Asistencia</h2>
          <div className="w-16 h-[1px] bg-[#f0e6eb] mx-auto mb-6"></div>
          <p className="font-montserrat text-slate-800 font-medium max-w-lg mx-auto">
            Nos encantaría compartir este día contigo. Por favor, confirma tu asistencia directamente por WhatsApp.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-[0_10px_50px_rgb(0,0,0,0.08)] rounded-3xl border border-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={mamaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-5 px-6 rounded-xl bg-[#cda3ba] text-white font-montserrat text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#b08b9f] transition-all duration-300 flex items-center justify-center group shadow-[0_4px_20px_rgba(205,163,186,0.4)]"
          >
            Confirmar con mi Mamá
            <Send size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={papaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-5 px-6 rounded-xl bg-white border border-[#e6cda3] text-[#b89528] font-montserrat text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-300 flex items-center justify-center group shadow-[0_4px_20px_rgba(230,205,163,0.4)]"
          >
            Confirmar con mi Papá
            <Send size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
