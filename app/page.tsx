"use client";

import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { Navbar } from '../components/navbar'; 
import { Mail, Eye, ArrowUpRight, Download, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillsMarquee } from '../components/skills-marquee';
import { ToolsGrid } from '../components/tools-grid';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 flex flex-col items-center text-center">
        
        {/* Profile Image Container - Hard locked at 160px maximum */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 p-1 mb-8 bg-gradient-to-b from-white/10 to-transparent flex-shrink-0"
        >
          {/* This wrapper ensures the image stays a circle and never expands */}
          <div className="relative w-full h-full rounded-full bg-[#1a1a1a] overflow-hidden">
            {/* We use 'fill' to make the image fit the container perfectly.
                The 'object-cover' ensures it crops into a circle without stretching.
            */}
            <Image 
              src="/my-profile.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
              priority // Loads the image faster
            />
            
            {/* Fallback Initial - only visible if image is deleted or fails */}
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-500 -z-10">
              V
            </span> 
          </div>
          
          {/* Status Indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-4 border-[#0a0a0a] rounded-full z-10"></div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <h2 className="text-blue-500 font-medium tracking-widest uppercase text-xs mb-4">
            Cybersecurity Researcher & AI Developer
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Hi, I&apos;m <span className="text-white">Ved</span>. <br />
            I secure systems against <span className="text-gray-500 italic font-serif">Adversarial Threats.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed mb-10"
        >
          I specialize in building defensive tools like **Phishing Email Analyzers** and researching hidden data exfiltration through **Steganography**. Currently focused on detecting adversarial attacks in AI systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all active:scale-95">
            <Download size={18} /> Download CV
          </button>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-all active:scale-95">
            <MessageSquare size={18} /> Let&apos;s Talk
          </button>
        </motion.div>
      </section>
      <SkillsMarquee />

      {/* Projects Preview Section */}
      <section id="work" className="px-6 py-20 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-12 flex items-center gap-3 text-gray-400"
        >
          <span className="w-8 h-[1px] bg-gray-700"></span> Selected Research
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Phishing Analyzer Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all overflow-hidden"
          >
            <Mail className="mb-6 text-blue-500 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-bold mb-2">Phishing Email Analyzer</h3>
            <p className="text-gray-500 mb-6">Deep header analysis and URL reputation scoring using machine learning.</p>
            <div className="flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all cursor-pointer">
              Live Demo <ArrowUpRight size={16} />
            </div>
          </motion.div>

          {/* Stegano-Keylogger Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all overflow-hidden"
          >
            <Eye className="mb-6 text-purple-500 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-bold mb-2">Stegano-Keylogger</h3>
            <p className="text-gray-500 mb-6">Advanced data exfiltration through image-based steganography visualization.</p>
            <div className="flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all cursor-pointer">
              Live Demo <ArrowUpRight size={16} />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <ToolsGrid />
    </main>
  );
}