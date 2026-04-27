import { useParams, Link } from 'react-router-dom';
import { MODELS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Send } from 'lucide-react';

export default function ModelProfile() {
  const { id } = useParams();
  const model = MODELS.find(m => m.id === id);

  if (!model) return <div className="min-h-screen flex items-center justify-center">Model not found.</div>;

  return (
    <div className="min-h-screen bg-black pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-gold mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={model.imageUrl} 
                alt={model.name}
                className="w-full h-full object-cover grayscale brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Architectural accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold/20 invisible md:block z-[-1]" />
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[12px] uppercase tracking-[0.5em] text-gold mb-4 block font-bold">{model.category}</span>
            <h1 className="text-7xl md:text-8xl font-serif uppercase leading-tight mb-8 tracking-tighter">
              {model.name}
            </h1>
            
            <p className="text-lg font-light text-white/70 italic mb-12 border-l-2 border-gold pl-8 leading-relaxed max-w-lg">
              {model.bio}
            </p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-16 border-t border-white/10 pt-12">
              {[
                { label: 'Height', value: model.height },
                { label: 'Bust', value: model.bust },
                { label: 'Waist', value: model.waist },
                { label: 'Hips', value: model.hips },
                { label: 'Eyes', value: model.eyes },
                { label: 'Hair', value: model.hair },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-1">{stat.label}</p>
                  <p className="text-xl font-serif tracking-widest">{stat.value}</p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center justify-center gap-3 w-full md:w-auto py-5 px-12 glass-morphism text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gold hover:text-black transition-all group">
              Request Exclusive Booking <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        {/* Additional Storytelling Section */}
        <div className="mt-32 border-t border-white/10 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-serif italic text-white/30 uppercase">Curated Collection</h3>
              <p className="text-sm font-light text-white/60 leading-relaxed max-w-md">
                Every asset in the {model.name} portfolio has been meticulously curated to represent the highest standards of luxury and technical precision.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-full md:w-2/3 h-[400px] bg-neutral-900 overflow-hidden relative grayscale">
                 <img 
                  src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?q=80&w=1000&auto=format&fit=crop" 
                  alt="Portfolio Piece"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">Digital Portfolio Restricted</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
