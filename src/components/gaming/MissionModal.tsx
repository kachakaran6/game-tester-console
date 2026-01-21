import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Bug, Wrench, CheckCircle2 } from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'in-progress';
  objectives: string[];
  testingScope: string[];
  bugsFound: string[];
  tools: string[];
  color: 'cyan' | 'green';
}

interface MissionModalProps {
  mission: Mission | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MissionModal = ({ mission, isOpen, onClose }: MissionModalProps) => {
  if (!mission) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[80vh] overflow-y-auto z-50 glass-panel rounded-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/90 backdrop-blur-sm p-6 border-b border-border flex items-start justify-between">
              <div>
                <span className={`text-xs font-mono ${mission.color === 'cyan' ? 'text-primary' : 'text-secondary'}`}>
                  // MISSION REPORT
                </span>
                <h2 className="text-2xl font-display font-bold text-foreground mt-1">
                  {mission.title}
                </h2>
                <p className="text-sm text-muted-foreground">{mission.subtitle}</p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Objectives */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-primary" size={18} />
                  <h3 className="font-display font-bold text-foreground">OBJECTIVES</h3>
                </div>
                <ul className="space-y-2">
                  {mission.objectives.map((obj, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2 className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      {obj}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Testing Scope */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-accent" size={18} />
                  <h3 className="font-display font-bold text-foreground">TESTING SCOPE</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.testingScope.map((scope, i) => (
                    <motion.span
                      key={scope}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      {scope}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bugs Found */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="text-destructive" size={18} />
                  <h3 className="font-display font-bold text-foreground">BUGS IDENTIFIED</h3>
                </div>
                <ul className="space-y-2">
                  {mission.bugsFound.map((bug, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-destructive/5 border border-destructive/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Bug className="text-destructive mt-0.5 flex-shrink-0" size={14} />
                      {bug}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="text-neon-orange" size={18} />
                  <h3 className="font-display font-bold text-foreground">TOOLS DEPLOYED</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.tools.map((tool, i) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-neon-orange/10 text-neon-orange text-xs font-mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
