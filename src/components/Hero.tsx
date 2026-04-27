import { motion } from 'motion/react';
import { AGENCY_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Placeholder (Luxury Monochrome) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492106084934-26380ea1904d?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Fashion Hero"
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-gold mb-6 block font-bold">
            ESTABLISHED • JANUARY 04 • 2026
          </span>
          <h1 className="text-[14vw] md:text-[120px] leading-[0.85] font-serif italic text-white tracking-tighter mb-8 opacity-90">
            Sartorial<br /><span className="not-italic font-sans font-light tracking-widest text-[4vw] md:text-[40px] uppercase block mt-4">Excellence</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs md:text-sm font-light tracking-[0.2em] text-muted leading-relaxed uppercase border-l border-gold/40 pl-6">
            {AGENCY_INFO.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
      
      {/* Vertical Side Text */}
      <div className="absolute left-8 bottom-24 hidden lg:block overflow-hidden">
        <p className="vertical-text text-[10px] tracking-[0.4em] text-white/40 uppercase">
          Elite Talent • Global Reach • Architectural Aesthetics
        </p>
      </div>
    </section>
  );
}
