import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { resumeData } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black/50 py-20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl font-black tracking-tighter text-black">
              PT
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              Building the future of web and AI, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-white/40 transition-colors hover:text-white">Home</a></li>
              <li><a href="#projects" className="text-sm text-white/40 transition-colors hover:text-white">Projects</a></li>
              <li><a href="#skills" className="text-sm text-white/40 transition-colors hover:text-white">Skills</a></li>
              <li><a href="#achievements" className="text-sm text-white/40 transition-colors hover:text-white">Achievements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail size={16} />
                {resumeData.basics.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone size={16} />
                {resumeData.basics.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <MapPin size={16} />
                {resumeData.basics.location}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Social Connect</h4>
            <div className="flex gap-4">
              <a href={resumeData.basics.links[1].url} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
                <Github size={18} />
              </a>
              <a href={resumeData.basics.links[0].url} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">
            © 2024 Poornima Taley. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/20">
            Designed for the Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
