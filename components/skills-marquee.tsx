"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Adversarial Attack Detection",
  "Phishing Analysis",
  "Steganography",
  "Python",
  "React.js",
  "Next.js",
  "TensorFlow",
  "Penetration Testing",
  "Network Security",
];

export const SkillsMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/[0.02] py-8">
      {/* We use a 'looping' container. 
          The 'animate' x value must be exactly -50% to reset perfectly.
      */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 35, // Slow and professional
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {/* We map the skills twice to ensure there is no empty gap during the loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center mx-10" // 'mx-10' creates a 80px forced space between words
          >
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400 flex items-center gap-6">
              {/* This separator ensures words don't join visually */}
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};