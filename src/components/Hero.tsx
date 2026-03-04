import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Award, Code, Globe } from 'lucide-react';
import { resumeData } from '../data';

const Hero: React.FC = () => {
  const topImpacts = [
    { icon: Globe, label: "Sakura Science Program", context: "Represented school in Japan (2023)" },
    { icon: Award, label: "AWS Cloud Practitioner", context: "Foundational Cloud Certification" },
    { icon: Code, label: "SereneSpace Prototype", context: "React-based Mental Health App" }
  ];

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Intro Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80"></span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl"
        >
          {resumeData.basics.name}
        </motion.h1>

        {/* Role & Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl"
        >
          <h2 className="mb-4 text-xl font-medium text-white/80 sm:text-2xl">
            {resumeData.basics.title}
          </h2>
          <p className="text-sm leading-relaxed text-white/40 sm:text-base">
            {resumeData.basics.summary}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105 sm:w-auto"
          >
            View Experience
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#education"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>
      </div>

      {/* Impact Strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24 grid w-full max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3"
      >
        {topImpacts.map((impact, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/[0.05]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-black">
              <impact.icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{impact.label}</h3>
              <p className="text-xs text-white/40">{impact.context}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
