import { motion } from 'motion/react';
import { AGENCY_INFO } from '../constants';
import { Send, Calendar, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Booking() {
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitted');
  };

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-black relative">
       {/* Background accents */}
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full" />

       <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 block font-bold font-sans">RESERVATION & INQUIRY</span>
                <h1 className="text-7xl font-serif uppercase tracking-tight leading-none text-white">
                  Acquire the <br /> <span className="italic text-gold">Exceptional.</span>
                </h1>
              </div>

              <div className="space-y-6 text-white/60 font-light leading-relaxed max-w-md">
                <p>
                  To maintain the exclusivity of our roster, all booking requests are vetted through our private inquiry system.
                </p>
                <p>
                  For immediate assistance regarding urgent projects, our agents are available via direct encrypted channel.
                </p>
              </div>

              <div className="p-8 glass-morphism inline-flex flex-col space-y-4">
                 <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-bold">DIRECT CHANNEL</p>
                 <p className="text-2xl font-serif tracking-[0.1em]">{AGENCY_INFO.phone}</p>
                 <p className="text-[10px] uppercase tracking-[0.1em] text-white/30">WhatsApp / International Call Only</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-morphism p-10 md:p-16 relative"
            >
              {formState === 'idle' ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60">Company / Brand</label>
                       <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-gold transition-colors text-white" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60">Direct Contact Name</label>
                       <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-gold transition-colors text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60">Email Address</label>
                     <input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-gold transition-colors text-white" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60">Desired Booking Date</label>
                     <div className="relative">
                        <input required type="date" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-gold transition-colors text-white" />
                        <Calendar className="absolute right-0 top-3 text-white/20" size={16} />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/60">Inquiry Essence (Message)</label>
                     <textarea required rows={4} className="w-full bg-transparent border border-white/10 p-4 outline-none focus:border-gold transition-colors text-white resize-none" />
                  </div>

                  <button type="submit" className="w-full py-5 bg-white text-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all flex items-center justify-center gap-3">
                    Transmit Inquiry <Send size={14} />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-24 text-center space-y-8"
                >
                   <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold text-gold mb-4">
                      <CheckCircle size={32} />
                   </div>
                   <h3 className="text-3xl font-serif uppercase tracking-widest">Inquiry Received.</h3>
                   <p className="text-sm font-light text-white/60 max-w-xs mx-auto leading-relaxed">
                      Your request has been successfully transmitted to our executive curation team. We will respond via a secure channel within 24 hours.
                   </p>
                   <button 
                    onClick={() => setFormState('idle')}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold hover:text-white transition-colors underline underline-offset-8"
                   >
                     Return to Request
                   </button>
                </motion.div>
              )}
            </motion.div>
          </div>
       </div>

       {/* Decorative horizontal lines */}
       <div className="absolute left-0 bottom-1/4 w-full h-[1px] bg-white/5 z-[-1]" />
    </div>
  );
}
