import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gamepad2, Bug, Camera, FileText, RotateCcw, CheckCircle } from 'lucide-react';

const workflowSteps = [
  {
    icon: Gamepad2,
    title: 'GAMEPLAY',
    description: 'Execute test cases and exploratory testing',
    color: 'primary',
  },
  {
    icon: Bug,
    title: 'BUG FOUND',
    description: 'Identify and reproduce the issue',
    color: 'destructive',
  },
  {
    icon: Camera,
    title: 'EVIDENCE',
    description: 'Capture screenshots and video proof',
    color: 'accent',
  },
  {
    icon: FileText,
    title: 'REPORT',
    description: 'Document in bug tracking system',
    color: 'neon-orange',
  },
  {
    icon: RotateCcw,
    title: 'RETEST',
    description: 'Verify fix after development',
    color: 'secondary',
  },
  {
    icon: CheckCircle,
    title: 'APPROVED',
    description: 'Confirm resolution and close',
    color: 'secondary',
  },
];

export const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="workflow" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-12 bg-neon-orange rounded-full" />
            <div>
              <span className="text-xs text-muted-foreground font-mono tracking-widest">
                // QA METHODOLOGY
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                TESTING PIPELINE
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-2xl mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Systematic approach to quality assurance following industry-standard bug lifecycle 
            management from detection to resolution.
          </motion.p>

          {/* Workflow Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                const colorClass = step.color === 'primary' ? 'text-primary' 
                  : step.color === 'destructive' ? 'text-destructive'
                  : step.color === 'accent' ? 'text-accent'
                  : step.color === 'neon-orange' ? 'text-neon-orange'
                  : 'text-secondary';

                return (
                  <motion.div
                    key={step.title}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Step Number */}
                      <motion.span
                        className={`text-xs font-mono ${colorClass} mb-2`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7 + index * 0.15 }}
                      >
                        STEP {String(index + 1).padStart(2, '0')}
                      </motion.span>

                      {/* Icon Circle */}
                      <motion.div
                        className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-card border-2 ${
                          step.color === 'primary' ? 'border-primary/50' 
                          : step.color === 'destructive' ? 'border-destructive/50'
                          : step.color === 'accent' ? 'border-accent/50'
                          : step.color === 'neon-orange' ? 'border-neon-orange/50'
                          : 'border-secondary/50'
                        } flex items-center justify-center z-10 bg-background`}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: step.color === 'primary' ? '0 0 30px hsl(185 100% 50% / 0.5)'
                            : step.color === 'secondary' ? '0 0 30px hsl(153 100% 50% / 0.5)'
                            : step.color === 'accent' ? '0 0 30px hsl(270 95% 65% / 0.5)'
                            : '0 0 30px hsl(25 100% 55% / 0.5)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={colorClass} size={28} />
                        
                        {/* Pulse effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl border-2 ${
                            step.color === 'primary' ? 'border-primary' 
                            : step.color === 'destructive' ? 'border-destructive'
                            : step.color === 'accent' ? 'border-accent'
                            : step.color === 'neon-orange' ? 'border-neon-orange'
                            : 'border-secondary'
                          }`}
                          initial={{ opacity: 0, scale: 1 }}
                          animate={isInView ? {
                            opacity: [0, 0.5, 0],
                            scale: [1, 1.2, 1.4],
                          } : {}}
                          transition={{
                            delay: 1 + index * 0.15,
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-foreground mt-4 text-sm">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
