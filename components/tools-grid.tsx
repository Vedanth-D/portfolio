"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Binary } from "lucide-react";

export const ToolsGrid = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-12 flex items-center gap-3 text-gray-400">
        <span className="w-8 h-[1px] bg-gray-700"></span> Security Arsenal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Large Box */}
        <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-end relative overflow-hidden group">
          <Terminal className="absolute top-8 left-8 text-blue-500" size={32} />
          <h3 className="text-2xl font-bold">Research Lab</h3>
          <p className="text-gray-500 text-sm mt-2">Deep packet inspection and adversarial noise generation using custom Python scripts.</p>
        </div>

        {/* Medium Box */}
        <div className="md:col-span-2 p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center gap-6">
          <Shield className="text-purple-500" size={32} />
          <div>
            <h3 className="font-bold text-lg">Defensive AI</h3>
            <p className="text-gray-500 text-sm">Building robust ML models that resist data poisoning.</p>
          </div>
        </div>

        {/* Small Box 1 */}
        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-center items-center text-center">
          <Binary className="text-green-500 mb-2" size={24} />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stegano</span>
        </div>

        {/* Small Box 2 */}
        <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col justify-center items-center text-center">
          <Cpu className="text-orange-500 mb-2" size={24} />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Core AI</span>
        </div>
      </div>
    </section>
  );
};