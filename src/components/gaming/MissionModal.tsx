import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Bug, Wrench, CheckCircle2 } from "lucide-react";

interface Mission {
  id: string;
  title: string;
  subtitle: string;
  status: "completed" | "in-progress";
  objectives: string[];
  testingScope: string[];
  bugsFound: string[];
  tools: string[];
  color: "cyan" | "green";
}

interface MissionModalProps {
  mission: Mission | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MissionModal = ({
  mission,
  isOpen,
  onClose,
}: MissionModalProps) => {
  if (!mission) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="
          fixed z-[100]
          glass-panel rounded-2xl
          inset-2 sm:inset-4
           top-[calc(64px+4vh)]
          md:inset-auto
          md:top-1/2 md:left-1/2
          md:-translate-x-1/2 md:-translate-y-1/2
          md:w-full md:max-w-2xl md:max-h-[80vh]
          overflow-y-auto
        "
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Header */}
            <div
              className="
            sticky top-0
            z-[110]
            bg-card/95 backdrop-blur-sm
            p-4 sm:p-6
            border-b border-border
            flex items-start justify-between gap-4
          "
            >
              <div className="min-w-0">
                <span
                  className={`text-[10px] sm:text-xs font-mono ${
                    mission.color === "cyan" ? "text-primary" : "text-secondary"
                  }`}
                >
                  // MISSION REPORT
                </span>
                <h2 className="text-lg sm:text-2xl font-display font-bold text-foreground mt-1 leading-tight">
                  {mission.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {mission.subtitle}
                </p>
              </div>

              {/* CLOSE BUTTON — FIXED */}
              <motion.button
                onClick={onClose}
                className="
              relative
              z-[120]
              mt-1
              w-9 h-9 sm:w-10 sm:h-10
              rounded-lg
              bg-muted/70
              flex items-center justify-center
              text-foreground
              hover:bg-muted
              transition-colors
              shrink-0
            "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} className="sm:hidden" />
                <X size={20} className="hidden sm:block" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
              {/* Objectives */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Target className="text-primary" size={16} />
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base">
                    OBJECTIVES
                  </h3>
                </div>
                <ul className="space-y-2">
                  {mission.objectives.map((obj, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle2
                        className="text-secondary mt-0.5 flex-shrink-0"
                        size={14}
                      />
                      {obj}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Testing Scope */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Target className="text-accent" size={16} />
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base">
                    TESTING SCOPE
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.testingScope.map((scope, i) => (
                    <motion.span
                      key={scope}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-mono"
                    >
                      {scope}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bugs Found */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Bug className="text-destructive" size={16} />
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base">
                    BUGS IDENTIFIED
                  </h3>
                </div>
                <ul className="space-y-2">
                  {mission.bugsFound.map((bug, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground p-3 rounded-lg bg-destructive/5 border border-destructive/20"
                    >
                      <Bug
                        className="text-destructive mt-0.5 flex-shrink-0"
                        size={14}
                      />
                      {bug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Wrench className="text-neon-orange" size={16} />
                  <h3 className="font-display font-bold text-foreground text-sm sm:text-base">
                    TOOLS DEPLOYED
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-neon-orange/10 text-neon-orange text-[10px] sm:text-xs font-mono"
                    >
                      {tool}
                    </span>
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
