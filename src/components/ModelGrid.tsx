import { useState } from 'react';
import { MODELS } from '../constants';
import ModelCard from './ModelCard';
import { motion } from 'motion/react';

export default function ModelGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Editorial', 'Runway', 'Commercial', 'Avant-Garde'];

  const filteredModels = activeCategory === 'All' 
    ? MODELS 
    : MODELS.filter(m => m.category === activeCategory);

  return (
    <section id="models" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif uppercase mb-2">Our Faces.</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">Curated Elite Talent</p>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all pb-1 border-b-2 ${
                activeCategory === cat ? 'border-gold text-white' : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model, idx) => (
          <div key={model.id}>
            <ModelCard model={model} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
