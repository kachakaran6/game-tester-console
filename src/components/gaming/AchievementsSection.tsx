import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Medal } from "lucide-react";

const achievements = [
  {
    id: "agile",
    title: "Agile for Beginners",
    issuer: "Great Learning",
    icon: Trophy,
    color: "primary",
    rarity: "RARE",
  },
  {
    id: "dbms",
    title: "DBMS",
    issuer: "Scaler Topics",
    icon: Award,
    color: "secondary",
    rarity: "EPIC",
  },
  {
    id: "web",
    title: "Web Designing",
    issuer: "IIHT",
    icon: Medal,
    color: "accent",
    rarity: "LEGENDARY",
  },
];

const rarityColors = {
  RARE: "from-primary/20 to-primary/5 border-primary/50",
  EPIC: "from-secondary/20 to-secondary/5 border-secondary/50",
  LEGENDARY: "from-accent/20 to-accent/5 border-accent/50",
};

const rarityTextColors = {
  RARE: "text-primary",
  EPIC: "text-secondary",
  LEGENDARY: "text-accent",
};

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-accent rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // UNLOCKED REWARDS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                ACHIEVEMENTS
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Professional certifications and educational milestones unlocked
            throughout the quality assurance journey.
          </motion.p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const rarity = achievement.rarity as keyof typeof rarityColors;

              return (
                <motion.div
                  key={achievement.id}
                  className={`
                relative
                p-4 sm:p-6
                rounded-2xl
                bg-gradient-to-br ${rarityColors[rarity]}
                border
                overflow-hidden
                group
                cursor-pointer
              `}
                  initial={{ opacity: 0, y: 40, rotateX: -10 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, rotateX: 0 }
                      : { opacity: 0, y: 40, rotateX: -10 }
                  }
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.6,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Unlock animation */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ opacity: 1 }}
                    animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.2 + 0.3,
                      duration: 0.5,
                    }}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: "-200%" }}
                    animate={isInView ? { x: "200%" } : { x: "-200%" }}
                    transition={{
                      delay: 0.5 + index * 0.2 + 0.5,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />

                  {/* Rarity Badge */}
                  <div
                    className={`
                  absolute top-3 right-3
                  px-2 py-1
                  rounded
                  text-[10px] sm:text-xs
                  font-mono
                  ${rarityTextColors[rarity]}
                  bg-background/50
                `}
                  >
                    {achievement.rarity}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`
                  w-16 h-16 sm:w-20 sm:h-20
                  rounded-2xl
                  ${rarityTextColors[rarity]}
                  bg-background/30
                  flex items-center justify-center
                  mb-3 sm:mb-4
                `}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={32} className="sm:hidden" />
                    <Icon size={40} className="hidden sm:block" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-mono block mb-1">
                      ACHIEVEMENT UNLOCKED
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1 sm:mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Issued by {achievement.issuer}
                    </p>
                  </div>

                  {/* Particles (desktop hover only) */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none hidden sm:block"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${rarityTextColors[rarity]}`}
                        style={{
                          left: `${20 + i * 15}%`,
                          bottom: "10%",
                        }}
                        animate={{
                          y: [-20, -40],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
