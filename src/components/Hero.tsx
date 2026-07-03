"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fcfbf9]">
      {/* Background with soft pastel overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-multiply"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&q=80&w=2000")' }}
      >
      </div>
      {/* Soft gradient to blend with the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#fcfbf9]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.2em] font-montserrat mb-6 text-slate-500"
        >
          Acompáñanos a celebrar la<br/>Confirmación y Graduación de
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 md:gap-12 mb-8"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-4 border-white flex-shrink-0 justify-self-end md:justify-self-auto">
            <img src="/images/img4.jpeg" alt="Confirmación" className="w-full h-full object-cover" />
          </div>
          
          <h1 className="font-great-vibes text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#d4af37] drop-shadow-sm px-2 col-span-2 order-last md:order-none text-center mt-4 md:mt-0">
            Emily Ochoa
          </h1>

          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-4 border-white flex-shrink-0 justify-self-start md:justify-self-auto">
            <img src="/images/img2.jpeg" alt="Graduación" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <p className="font-montserrat text-xl md:text-2xl text-slate-700 tracking-widest uppercase">
            Miércoles 8 de Julio 2026
          </p>
          <div className="w-20 h-[2px] bg-[#e6cda3] my-2"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase mb-2 font-montserrat">Descubre más</span>
        <ChevronDown className="text-[#d4af37]" size={24} />
      </motion.div>
    </section>
  );
}
