import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 text-right">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
        >
          Academic Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-6xl"
        >
          Education
        </motion.h2>
      </div>

      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-1/2" />

        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative flex flex-col sm:flex-row ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-white sm:left-1/2 sm:-translate-x-1/2" />

            <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:pl-16' : 'sm:pr-16'} pl-8`}>
              <div className="group rounded-3xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:border-white/10 hover:bg-white/[0.03]">
                <div className="mb-4 flex items-center gap-3 text-white/40">
                  <GraduationCap size={18} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{edu.dates}</span>
                </div>
                
                <h3 className="mb-2 text-xl font-black text-white">{edu.institution}</h3>
                <p className="mb-4 text-sm font-bold text-white/60">{edu.degree}</p>
                
                {edu.details && (
                  <p className="text-xs text-white/40 italic">{edu.details}</p>
                )}
              </div>
            </div>
            <div className="hidden w-1/2 sm:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
