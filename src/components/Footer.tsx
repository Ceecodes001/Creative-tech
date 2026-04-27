import { motion } from 'motion/react';
import { AGENCY_INFO } from '../constants';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 luxury-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif uppercase tracking-widest">{AGENCY_INFO.name}</h2>
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-xs">
              Redefining the landscape of luxury and creative representation since {AGENCY_INFO.creationDate}.
            </p>
            <div className="flex space-x-6 text-white/40">
              <Instagram size={20} className="hover:text-gold cursor-pointer" />
              <Mail size={20} className="hover:text-gold cursor-pointer" />
              <Phone size={20} className="hover:text-gold cursor-pointer" />
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Inquiries</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                <span className="tracking-widest">{AGENCY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold" />
                <span className="italic text-muted">contact@creativetech.agency</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Status</h4>
            <div className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white">Live Casting Active</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted underline decoration-gold underline-offset-8 cursor-pointer hover:text-white transition-colors">
              Terms of Prestige
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-white/20 pt-12 border-t border-white/5">
          <p>© 2026 {AGENCY_INFO.name}. All Rights Reserved.</p>
          <p>Created by Creative Tech • {AGENCY_INFO.creationDate}</p>
        </div>
      </div>
    </footer>
  );
}
