import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Target, Bug, Wrench, CheckCircle } from "lucide-react";

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

interface MissionCardProps {
  mission: Mission;
  index: number;
  onSelect: (mission: Mission) => void;
}

const colorConfig = {
  cyan: {
    border: "border-primary/30 hover:border-primary",
    accent: "text-primary",
    bg: "from-primary/5 to-transparent",
  },
  green: {
    border: "border-secondary/30 hover:border-secondary",
    accent: "text-secondary",
    bg: "from-secondary/5 to-transparent",
  },
};

export const MissionCard = ({ mission, index, onSelect }: MissionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = colorConfig[mission.color];

  return (
    <motion.div
      className={`
    relative
    p-4 sm:p-6
    rounded-xl
    bg-card/50 backdrop-blur-sm
    border ${config.border}
    cursor-pointer
    overflow-hidden
    group
  `}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onClick={() => onSelect(mission)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${config.bg}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
          <div className="min-w-0">
            <span
              className={`text-[10px] sm:text-xs font-mono ${config.accent} mb-1 block`}
            >
              MISSION {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground leading-tight">
              {mission.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {mission.subtitle}
            </p>
          </div>

          <div
            className={`
          shrink-0
          flex items-center gap-1.5
          px-2.5 py-1
          sm:px-3
          rounded-full
          text-[10px] sm:text-xs
          font-mono uppercase
          ${
            mission.status === "completed"
              ? "bg-secondary/20 text-secondary"
              : "bg-neon-orange/20 text-neon-orange"
          }
        `}
          >
            <CheckCircle size={12} className="sm:hidden" />
            <CheckCircle size={14} className="hidden sm:block" />
            {mission.status === "completed" ? "COMPLETE" : "ACTIVE"}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
            <Target className={`mx-auto mb-1 ${config.accent}`} size={16} />
            <span className="text-base sm:text-lg font-bold text-foreground">
              {mission.objectives.length}
            </span>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Objectives
            </p>
          </div>

          <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
            <Bug className="mx-auto mb-1 text-destructive" size={16} />
            <span className="text-base sm:text-lg font-bold text-foreground">
              {mission.bugsFound.length}
            </span>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Bugs Found
            </p>
          </div>

          <div className="text-center p-2 sm:p-3 rounded-lg bg-muted/30">
            <Wrench className="mx-auto mb-1 text-accent" size={16} />
            <span className="text-base sm:text-lg font-bold text-foreground">
              {mission.tools.length}
            </span>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Tools Used
            </p>
          </div>
        </div>

        {/* View Details */}
        <motion.div
          className={`flex items-center gap-2 ${config.accent} font-mono text-xs sm:text-sm`}
          animate={isHovered ? { x: 10 } : { x: 0 }}
        >
          VIEW MISSION REPORT
          <ChevronRight size={14} className="sm:hidden" />
          <ChevronRight size={16} className="hidden sm:block" />
        </motion.div>
      </div>

      {/* Scan line effect */}
      <motion.div
        className={`absolute left-0 right-0 h-px ${config.accent} opacity-30`}
        initial={{ top: "0%" }}
        animate={isHovered ? { top: ["0%", "100%"] } : { top: "0%" }}
        transition={{ duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
};
