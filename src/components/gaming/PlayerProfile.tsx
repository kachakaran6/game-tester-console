import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StatBar } from "./StatBar";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

import ElectricBorder from "../ElectricBorder";

export const PlayerProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Bug Detection", value: 92, color: "cyan" as const },
    { label: "Gameplay Coverage", value: 88, color: "green" as const },
    { label: "Documentation", value: 85, color: "purple" as const },
    { label: "Tool Expertise", value: 90, color: "orange" as const },
  ];

  return (
    <section id="profile" className="min-h-screen py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-primary rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // PLAYER DATA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                PROFILE
              </h2>
            </div>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Character Card */}
            <motion.div
              className="glass-panel p-5 sm:p-8 hud-corners"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Avatar area */}
              <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16 }}
                >
                  <motion.div
                    className="
                w-20 h-20
                sm:w-24 sm:h-24
                md:w-32 md:h-32
                rounded-xl
                bg-gradient-to-br from-primary/20 to-accent/20
                flex items-center justify-center
                neon-border relative overflow-hidden
              "
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">
                      <img src="/profile_harsh1.png" alt="" />
                    </span>

                    {/* Scanline effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </ElectricBorder>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs text-primary font-mono">
                      LVL 27
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-[10px] sm:text-xs text-secondary font-mono">
                      ONLINE
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-1 sm:mb-2">
                    HARSHKUMAR PATEL
                  </h3>
                  <p className="text-primary font-mono text-xs sm:text-sm">
                    GAME QA TESTER / GAMEPLAY TESTER
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-[10px] sm:text-xs text-muted-foreground font-mono mb-2 tracking-wider">
                  // BIO
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Aspiring MCA student with strong foundations in game testing,
                  defect management, and automation basics. Passionate about
                  ensuring game quality through structured gameplay testing and
                  bug reporting.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-wider">
                  // EDUCATION
                </h4>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <GraduationCap
                    className="text-primary mt-1 shrink-0"
                    size={18}
                  />
                  <div>
                    <h5 className="font-display font-bold text-foreground">
                      MCA (Big Data Analytics)
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Parul University
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> Gujarat, India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <GraduationCap
                    className="text-secondary mt-1 shrink-0"
                    size={18}
                  />
                  <div>
                    <h5 className="font-display font-bold text-foreground">
                      B.Com
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      South Gujarat University
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> 2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Panel */}

            <motion.div
              className="glass-panel p-5 sm:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-[10px] sm:text-xs text-muted-foreground font-mono mb-6 sm:mb-8 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                // PLAYER STATS
              </h4>

              <div className="space-y-5 sm:space-y-6">
                {stats.map((stat, index) => (
                  <StatBar
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    color={stat.color}
                    delay={0.8 + index * 0.2}
                  />
                ))}
              </div>

              {/* Additional stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl sm:text-3xl font-display font-bold neon-text-cyan">
                    2+
                  </span>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    MISSIONS COMPLETED
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl sm:text-3xl font-display font-bold neon-text-green">
                    50+
                  </span>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    BUGS DETECTED
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl sm:text-3xl font-display font-bold neon-text-purple">
                    3
                  </span>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    CERTIFICATIONS
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 text-center">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-neon-orange">
                    10+
                  </span>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    TOOLS MASTERED
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
