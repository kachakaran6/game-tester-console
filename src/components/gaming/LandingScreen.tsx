import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { GlitchText } from './GlitchText';
import { ParticleBackground } from './ParticleBackground';

interface LandingScreenProps {
  onStart: () => void;
}

export const LandingScreen = ({ onStart }: LandingScreenProps) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = useCallback(() => {
    setIsExiting(true);
    setTimeout(onStart, 800);
  }, [onStart]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && showPrompt && !isExiting) {
        handleStart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPrompt, isExiting, handleStart]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background-deep scanlines"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <ParticleBackground />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ top: '-5%' }}
              animate={{ top: '105%' }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            {/* System initializing */}
            <motion.div
              className="text-xs text-muted-foreground mb-8 font-mono tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">[</span> SYSTEM INITIALIZING <span className="text-primary">]</span>
            </motion.div>

            {/* Player name */}
            <motion.div
              className="mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm text-muted-foreground font-mono tracking-wider">PLAYER:</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black neon-text-cyan mt-2">
                <GlitchText text="HARSHKUMAR PATEL" delay={800} />
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-sm text-muted-foreground font-mono tracking-wider">ROLE:</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mt-2">
                <GlitchText text="GAME QA TESTER" delay={1500} />
              </h2>
            </motion.div>

            {/* Status */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <span className="text-sm text-muted-foreground font-mono tracking-wider">STATUS:</span>
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-3 h-3 rounded-full bg-secondary"
                  animate={{ 
                    boxShadow: [
                      '0 0 5px hsl(153 100% 50%)',
                      '0 0 20px hsl(153 100% 50%)',
                      '0 0 5px hsl(153 100% 50%)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xl font-display font-bold neon-text-green">
                  <GlitchText text="READY" delay={2100} />
                </span>
              </div>
            </motion.div>

            {/* Press Enter prompt */}
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={handleStart}
                    className="btn-gaming group"
                  >
                    <span className="flex items-center gap-3">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ▶
                      </motion.span>
                      PRESS ENTER TO START
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ◀
                      </motion.span>
                    </span>
                  </button>
                  <p className="text-xs text-muted-foreground mt-4 font-mono">
                    or click to continue
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/50" />

          {/* Version number */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            v1.0.0 // PORTFOLIO_BUILD_2024
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
