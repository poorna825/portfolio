import React, { useState } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { cn } from '../utils';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(resumeData.skills[0].category);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
        >
          Technical Arsenal
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-6xl"
        >
          Skills & Expertise
        </motion.h2>
      </div>

      {/* Category Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {resumeData.skills.map((skillGroup) => (
          <button
            key={skillGroup.category}
            onClick={() => setActiveCategory(skillGroup.category)}
            className={cn(
              "rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300",
              activeCategory === skillGroup.category
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            )}
          >
            {skillGroup.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {resumeData.skills
          .find((s) => s.category === activeCategory)
          ?.items.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 text-center text-sm font-bold text-white/80 group-hover:text-white">
                {item}
              </span>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
