import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, Zap } from 'lucide-react';
import { resumeData } from '../data';

const Achievements: React.FC = () => {
  const icons = [Trophy, Award, Star, Zap];

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
        >
          Milestones
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-6xl"
        >
          Achievements
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {resumeData.achievements.map((achievement, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-10 transition-all hover:border-white/10 hover:bg-white/[0.03]"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-all group-hover:bg-white/10" />
              
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <Icon size={24} />
                </div>
                
                <span className="mb-2 inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {achievement.type}
                </span>
                <h3 className="mb-4 text-2xl font-black text-white leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
