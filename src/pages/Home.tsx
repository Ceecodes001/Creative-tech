import Hero from '../components/Hero';
import ModelGrid from '../components/ModelGrid';
import { motion } from 'motion/react';
import { AGENCY_INFO } from '../constants';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      
      {/* Side Meta Label (Hidden on small screens) */}
      <div className="fixed left-0 top-0 h-full w-20 border-r border-border hidden lg:flex flex-col justify-center items-center z-40 pointer-events-none">
        <div className="rotate-[-90deg] whitespace-nowrap text-[10px] uppercase tracking-[0.6em] text-meta font-semibold">
          ESTABLISHED • JANUARY 04 • 2026
        </div>
      </div>
      
      {/* Agency Philosophy Section */}
      <section className="py-32 px-6 lg:pl-32 bg-white text-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted mb-4 block font-bold">The Collective</span>
              <h2 className="text-6xl md:text-7xl font-serif leading-tight">
                A new paradigm in <br /><span className="italic font-serif">high-fashion</span> representation.
              </h2>
            </div>
            <p className="text-lg font-light leading-relaxed max-w-md text-black/60">
              Bridging the gap between technological precision and human artistry. Our models are assets of high aesthetic value, curated for the elite global market.
            </p>
            <div className="flex gap-12 py-8 border-y border-black/10">
              <div>
                <p className="text-4xl font-serif">180</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium">Height Avg</p>
              </div>
              <div>
                <p className="text-4xl font-serif">PAR</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium">Global Hub</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
             <div className="aspect-[4/5] bg-neutral-100 overflow-hidden grayscale border border-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68ec25d43d?q=80&w=1000&auto=format&fit=crop"
                  alt="Agency Interior"
                  className="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      <div className="lg:pl-20">
        <ModelGrid />
      </div>
    </motion.div>
  );
}
