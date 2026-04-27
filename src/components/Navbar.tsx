import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "py-4 glass-morphism" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex items-baseline space-x-2 group">
          <span className="text-[22px] font-light tracking-[0.3em] uppercase text-white group-hover:text-gold transition-colors">Creative</span>
          <span className="text-[22px] font-serif italic text-gold">Tech</span>
          <span className="text-[11px] uppercase tracking-[0.5em] text-muted ml-2">Community</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {['Talent', 'Editorial', 'Booking', 'Agency'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Talent' ? '/' : `/${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors pb-1 border-b border-transparent hover:border-gold"
            >
              {item}
            </Link>
          ))}
          
          <Link 
            to="/booking"
            className="px-6 py-2 border border-gold text-gold text-[9px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-300"
          >
            Client Inquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 border-t border-white/10 p-8 flex flex-col space-y-6 md:hidden"
        >
          {['Models', 'Agency', 'Booking', 'Portal'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Models' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] hover:text-gold"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
