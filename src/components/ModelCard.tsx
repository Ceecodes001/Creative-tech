import { motion } from 'motion/react';
import { Model } from '../types';
import { Link } from 'react-router-dom';

interface ModelCardProps {
  model: Model;
  index: number;
}

export default function ModelCard({ model, index }: ModelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative h-[650px] overflow-hidden cursor-pointer border border-border"
    >
      <Link to={`/model/${model.id}`} className="block h-full">
        {/* Image Container with Zoom */}
        <div className="relative h-full overflow-hidden">
          <img 
            src={model.imageUrl} 
            alt={model.name}
            className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
            referrerPolicy="no-referrer"
          />
          
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-dark-bg/40 opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
        
        {/* Content with Slide/Fade Animation */}
        <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
          <span className="text-[9px] uppercase tracking-[0.5em] font-medium text-gold mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {model.category}
          </span>
          <div className="flex justify-between items-end">
            <h3 className="text-4xl font-serif uppercase tracking-tight text-white group-hover:text-gold transition-colors duration-500">
              {model.name}
            </h3>
            <div className="text-[9px] text-right font-light tracking-[0.3em] text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
              {model.height} <br /> {model.bust}-{model.waist}-{model.hips}
            </div>
          </div>
          
          {/* Subtle line that expands on hover */}
          <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-700 ease-in-out opacity-40" />
        </div>
      </Link>
    </motion.div>
  );
}
