import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const tools = [
  {
    name: "JIRA",
    category: "Bug Tracking",
    description: "Issue tracking and project management",
  },
  {
    name: "Bugzilla",
    category: "Bug Tracking",
    description: "Open-source bug tracking system",
  },
  {
    name: "TestRail",
    category: "Test Management",
    description: "Test case management platform",
  },
  {
    name: "Trello",
    category: "Project Management",
    description: "Visual project organization",
  },
  {
    name: "Unity Profiler",
    category: "Performance",
    description: "Game performance analysis tool",
  },
  {
    name: "Unreal Tools",
    category: "Development",
    description: "Unreal Engine debugging suite",
  },
  {
    name: "Steam",
    category: "Platform",
    description: "PC gaming distribution platform",
  },
  {
    name: "Epic Games",
    category: "Platform",
    description: "Game store and launcher",
  },
  {
    name: "OBS Studio",
    category: "Recording",
    description: "Screen capture and streaming",
  },
  {
    name: "Google Docs",
    category: "Documentation",
    description: "Collaborative document editing",
  },
];

const ToolIcon = ({ name }: { name: string }) => {
  const initial = name.charAt(0);
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-display font-bold text-primary text-lg">
      {initial}
    </div>
  );
};

export const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="tools" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-primary rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // EQUIPMENT LOADOUT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                ARSENAL
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Essential tools and platforms utilized for comprehensive game
            testing, bug tracking, and quality documentation.
          </motion.p>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <motion.div
                  className="
                p-3 sm:p-4
                rounded-xl
                bg-card/50
                border border-border
                hover:border-primary/50
                transition-all duration-300
                cursor-pointer
                h-full
              "
                  animate={
                    hoveredTool === tool.name
                      ? {
                          y: -5,
                          boxShadow: "0 0 30px hsl(185 100% 50% / 0.2)",
                        }
                      : { y: 0 }
                  }
                >
                  {/* Floating Icon */}
                  <motion.div
                    animate={hoveredTool === tool.name ? { y: [0, -5, 0] } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ToolIcon name={tool.name} />
                  </motion.div>

                  <h3 className="font-display font-bold text-foreground mt-3 text-xs sm:text-sm">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-primary font-mono">
                    {tool.category}
                  </span>

                  {/* Tooltip (desktop hover only) */}
                  <motion.div
                    className="
                  absolute bottom-full left-1/2 -translate-x-1/2
                  mb-2 px-3 py-2
                  bg-card border border-primary/30
                  rounded-lg
                  text-[10px] sm:text-xs
                  text-muted-foreground
                  whitespace-nowrap
                  z-10
                  pointer-events-none
                  hidden sm:block
                "
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      hoveredTool === tool.name
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    {tool.description}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
