import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
      <div className="flex items-center gap-2 text-white font-bold tracking-tight">
        <ShieldAlert size={20} className="text-blue-500" />
        <span>CYBER.LAB</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="px-4 py-1.5 rounded-full bg-white text-black hover:bg-gray-200 transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
};