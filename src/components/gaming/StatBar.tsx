import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: 'cyan' | 'green' | 'purple' | 'orange';
  delay?: number;
}

const colorClasses = {
  cyan: 'from-primary to-primary-glow',
  green: 'from-secondary to-secondary-glow',
  purple: 'from-accent to-accent-glow',
  orange: 'from-neon-orange to-neon-orange-glow',
};

const glowClasses = {
  cyan: 'shadow-neon-cyan',
  green: 'shadow-neon-green',
  purple: 'shadow-neon-purple',
  orange: '0 0 20px hsl(25 100% 55% / 0.5)',
};

export const StatBar = ({ 
  label, 
  value, 
  maxValue = 100, 
  color = 'cyan',
  delay = 0 
}: StatBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const percentage = (value / maxValue) * 100;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <span className="text-sm font-display font-bold text-primary">
          {value}/{maxValue}
        </span>
      </div>
      <div className="stat-bar">
        <motion.div
          className={`stat-bar-fill bg-gradient-to-r ${colorClasses[color]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            boxShadow: color === 'orange' 
              ? '0 0 20px hsl(25 100% 55% / 0.5)'
              : undefined,
          }}
        />
      </div>
    </div>
  );
};
