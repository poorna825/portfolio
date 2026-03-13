import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Code2, Sparkles, Bot } from 'lucide-react';
import { resumeData } from '../data';
import { cn } from '../utils';

const Projects: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const getIcon = (title: string) => {
    if (title.includes('Serene')) return Sparkles;
    if (title.includes('exa')) return Code2;
    if (title.includes('Meme')) return Bot;
    return Code2;
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-white/40"
        >
          Portfolio & Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-4xl font-black tracking-tighter text-white sm:text-6xl"
        >
          Featured Projects
        </motion.h2>
      </div>

      <div className="space-y-6">
        {resumeData.projects.map((project, idx) => {
          const Icon = getIcon(project.title);
          const isExpanded = expandedIdx === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500",
                isExpanded 
                  ? "border-white/20 bg-white/[0.03] shadow-2xl shadow-white/5" 
                  : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
              )}
            >
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="flex w-full items-center justify-between p-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500",
                    isExpanded ? "bg-white text-black scale-110" : "bg-white/5 text-white group-hover:bg-white/10"
                  )}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-black text-white sm:text-2xl">{project.title}</h3>
                      {project.type && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
                          {project.type}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-white/40">
                      {project.bullets[0].substring(0, 60)}...
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  {isExpanded ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="border-t border-white/5 p-8 pt-0">
                      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Impact & Details</h4>
                          <ul className="space-y-4">
                            {project.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex gap-4 text-sm leading-relaxed text-white/60">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col justify-end gap-6">
                          {project.url && (
                            <div className="space-y-4">
                              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Source & Demo</h4>
                              <div className="flex flex-wrap gap-4">
                                <a 
                                  href={project.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-xs font-bold text-black transition-all hover:scale-105"
                                >
                                  <Github size={16} />
                                  GitHub Repository
                                </a>
                                {project.liveUrl && (
                                <a 
                                  href={project.liveUrl} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-white/10"
                                >
                                  <ExternalLink size={16} />
                                  Live Preview
                                </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
