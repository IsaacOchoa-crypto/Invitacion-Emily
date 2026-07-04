import React from 'react';
import { MapPin, GlassWater } from 'lucide-react';

export default function Itinerary() {
  return (
    <section className="relative py-32 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background with soft pastel overlay (Confirmation theme) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url("/images/itinerary-bg.png")' }}
      >
      </div>
      {/* Soft gradient/overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="font-great-vibes text-5xl md:text-7xl text-[#d4af37] mb-6 drop-shadow-sm">Cuándo y Dónde</h2>
          <div className="w-16 h-[1px] bg-[#e6cda3] mx-auto"></div>
        </div>

        {/* Card: Reception */}
        <div className="bg-white/80 backdrop-blur-md p-10 md:p-12 shadow-[0_10px_40px_rgb(0,0,0,0.08)] rounded-3xl border border-white flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-500 max-w-xl mx-auto">
          <div className="w-16 h-16 bg-[#fff7f9] rounded-full flex items-center justify-center mb-6 text-[#cda3ba]">
            <GlassWater size={32} strokeWidth={1.5} />
          </div>
          <h3 className="font-great-vibes text-4xl text-slate-800 mb-2">Recepción y Fiesta</h3>
          <p className="font-montserrat text-sm tracking-[0.1em] text-[#d4af37] uppercase mb-8">3:00 PM</p>
          
          <div className="flex-grow">
            <p className="font-montserrat font-medium text-slate-700 mb-2">Tepozanes #5, Ojo de Agua</p>
            <p className="font-montserrat text-sm text-slate-500">San Juan del Río</p>
          </div>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center w-full py-4 px-6 rounded-full bg-white border border-[#e6cda3] text-[#d4af37] font-montserrat text-xs tracking-widest uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-300 group shadow-sm"
          >
            Ver en el Mapa
            <MapPin size={14} className="ml-2 group-hover:animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
