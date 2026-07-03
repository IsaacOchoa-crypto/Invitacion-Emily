"use client";

import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Rsvp() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const attendance = formData.get('attendance') as string;
    const notes = formData.get('notes') as string;

    const isAttending = attendance === 'yes' ? '¡Sí, ahí estaremos con alegría!' : 'Lamentablemente no podremos asistir.';
    const notesText = notes ? `\n\nMensaje: ${notes}` : '';

    const message = `¡Hola! Confirmo mi asistencia a la fiesta de Emily.\n\nFamilia/Invitado: ${name}\n¿Asistirán?: ${isAttending}${notesText}`;

    // AQUÍ DEBES PONER TU NÚMERO DE TELÉFONO (CON CÓDIGO DE PAÍS, EJ. 52 PARA MÉXICO)
    const phoneNumber = "524271914416"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank');
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

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

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-great-vibes text-5xl md:text-7xl text-[#cda3ba] mb-4 drop-shadow-sm">Confirma tu Asistencia</h2>
          <div className="w-16 h-[1px] bg-[#f0e6eb] mx-auto mb-6"></div>
          <p className="font-montserrat text-slate-500 font-light">
            Nos encantaría compartir este día contigo. Por favor, confirma antes del 1 de Julio.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-[0_10px_50px_rgb(0,0,0,0.08)] rounded-3xl border border-white relative overflow-hidden">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 bg-[#fff7f9] rounded-full flex items-center justify-center mb-6">
                  <Heart size={36} className="text-[#cda3ba]" fill="#cda3ba" />
                </div>
                <h3 className="font-great-vibes text-4xl md:text-5xl text-slate-800 mb-4">¡Gracias por ser parte de este día tan especial!</h3>
                <p className="font-montserrat text-slate-500 mb-8 font-light">Tu confirmación ha sido enviada con éxito.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[#d4af37] font-montserrat text-xs uppercase tracking-widest hover:text-[#cda3ba] transition-colors"
                >
                  Enviar otra respuesta
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block font-montserrat text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                    Nombre de la Familia / Invitado
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-4 rounded-xl border border-[#f5f1ed] focus:ring-2 focus:ring-[#e6cda3] focus:border-[#e6cda3] transition-all font-montserrat outline-none bg-[#fcfbf9] focus:bg-white text-sm"
                    placeholder="Ej. Familia Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="attendance" className="block font-montserrat text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                    ¿Asistirán?
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    required
                    className="w-full px-4 py-4 rounded-xl border border-[#f5f1ed] focus:ring-2 focus:ring-[#e6cda3] focus:border-[#e6cda3] transition-all font-montserrat outline-none bg-[#fcfbf9] focus:bg-white appearance-none text-sm"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="yes">¡Sí, ahí estaremos con alegría!</option>
                    <option value="no">Lamentablemente no podremos asistir</option>
                  </select>
                </div>


                <div>
                  <label htmlFor="notes" className="block font-montserrat text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
                    Mensaje para Emily (Opcional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="w-full px-4 py-4 rounded-xl border border-[#f5f1ed] focus:ring-2 focus:ring-[#e6cda3] focus:border-[#e6cda3] transition-all font-montserrat outline-none bg-[#fcfbf9] focus:bg-white resize-none text-sm"
                    placeholder="Escribe aquí tus felicitaciones..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-5 px-6 rounded-xl bg-[#cda3ba] text-white font-montserrat text-xs tracking-[0.2em] uppercase hover:bg-[#b08b9f] transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_4px_20px_rgba(205,163,186,0.4)]"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Confirmar Asistencia'}
                  {status !== 'submitting' && <Send size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
