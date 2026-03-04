import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <AnimatedBackground />
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Achievements />
            <Education />
            <Footer />
            
            {/* Custom Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-white"
              style={{ scaleX: 0 }} // This would normally use useScroll, but keeping it simple
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
