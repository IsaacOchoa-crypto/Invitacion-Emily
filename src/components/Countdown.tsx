"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  const targetDate = new Date('2026-07-08T10:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isMounted) return null;

  const timeBlocks = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-32 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background with soft pastel overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url("/images/countdown-bg.png")' }}
      >
      </div>
      {/* Soft gradient/overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        <h2 className="font-great-vibes text-5xl md:text-7xl text-[#cda3ba] mb-6 drop-shadow-md">
          Ya falta poco...
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/60 shadow-lg flex items-center justify-center bg-white/80 backdrop-blur-sm mb-4">
                <span className="font-montserrat font-medium text-3xl md:text-5xl text-slate-800">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] text-slate-800 font-semibold bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
