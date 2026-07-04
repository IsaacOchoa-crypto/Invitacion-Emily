"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with soft pastel overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url("/images/gallery-bg.png")' }}
      >
      </div>
      {/* Soft gradient/overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#b08b9f] mb-4 drop-shadow-md">Nuestros Momentos Especiales</h2>
          <div className="w-16 h-[1px] bg-[#f0e6eb] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Foto Confirmación */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.08)] border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/img1.jpeg" 
                alt="Confirmación" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-great-vibes text-3xl text-slate-800 mt-6 text-center drop-shadow-sm font-bold">Mi Confirmación</p>
          </motion.div>

          {/* Foto Graduación */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center mt-8 md:mt-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.08)] border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/img4.jpeg" 
                alt="Graduación" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-great-vibes text-3xl text-slate-800 mt-6 text-center drop-shadow-sm font-bold">Mi Graduación</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
