import { motion } from "framer-motion";
import { useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Gamepad2,
  Bug,
  Camera,
  FileText,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

const workflowSteps = [
  {
    icon: Gamepad2,
    title: "GAMEPLAY",
    description: "Execute test cases and exploratory testing",
    color: "primary",
  },
  {
    icon: Bug,
    title: "BUG FOUND",
    description: "Identify and reproduce the issue",
    color: "destructive",
  },
  {
    icon: Camera,
    title: "EVIDENCE",
    description: "Capture screenshots and video proof",
    color: "accent",
  },
  {
    icon: FileText,
    title: "REPORT",
    description: "Document in bug tracking system",
    color: "neon-orange",
  },
  {
    icon: RotateCcw,
    title: "RETEST",
    description: "Verify fix after development",
    color: "secondary",
  },
  {
    icon: CheckCircle,
    title: "APPROVED",
    description: "Confirm resolution and close",
    color: "secondary",
  },
];

export const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeStep, setActiveStep] = useState(0);

  // 🔁 Auto-rotate carousel (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [workflowSteps.length]);

  return (
    <section id="workflow" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-neon-orange rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // QA METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                TESTING PIPELINE
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-10 sm:mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Systematic approach to quality assurance following industry-standard
            bug lifecycle management from detection to resolution.
          </motion.p>

          {/* ================= DESKTOP PIPELINE ================= */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const colorClass =
                  step.color === "primary"
                    ? "text-primary"
                    : step.color === "destructive"
                      ? "text-destructive"
                      : step.color === "accent"
                        ? "text-accent"
                        : step.color === "neon-orange"
                          ? "text-neon-orange"
                          : "text-secondary";

                return (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <span className={`text-xs font-mono ${colorClass} mb-2`}>
                      STEP {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-20 h-20 rounded-2xl bg-card border-2 border-muted flex items-center justify-center">
                      <Icon className={colorClass} size={28} />
                    </div>

                    <h3 className="font-display font-bold text-sm mt-4">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE CAROUSEL ================= */}
          <div className="lg:hidden mt-10">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden mb-6">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                animate={{
                  width: `${((activeStep + 1) / workflowSteps.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* Carousel */}
            <div className="relative h-[220px]">
              <AnimatePresence mode="wait">
                {workflowSteps.map((step, index) => {
                  if (index !== activeStep) return null;

                  const Icon = step.icon;
                  const colorClass =
                    step.color === "primary"
                      ? "text-primary"
                      : step.color === "destructive"
                        ? "text-destructive"
                        : step.color === "accent"
                          ? "text-accent"
                          : step.color === "neon-orange"
                            ? "text-neon-orange"
                            : "text-secondary";

                  return (
                    <motion.div
                      key={step.title}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className={`text-xs font-mono ${colorClass} mb-2`}>
                        STEP {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="w-16 h-16 rounded-2xl bg-card border-2 border-muted flex items-center justify-center mb-4">
                        <Icon className={colorClass} size={28} />
                      </div>

                      <h3 className="text-base font-display font-bold">
                        {step.title}
                      </h3>

                      <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
