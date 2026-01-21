import { motion } from 'framer-motion';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  color?: 'cyan' | 'green' | 'purple' | 'orange';
  index: number;
}

const colorConfig = {
  cyan: {
    border: 'border-primary/50 hover:border-primary',
    glow: 'hover:shadow-neon-cyan',
    text: 'text-primary',
    bg: 'from-primary/10 to-transparent',
  },
  green: {
    border: 'border-secondary/50 hover:border-secondary',
    glow: 'hover:shadow-neon-green',
    text: 'text-secondary',
    bg: 'from-secondary/10 to-transparent',
  },
  purple: {
    border: 'border-accent/50 hover:border-accent',
    glow: 'hover:shadow-neon-purple',
    text: 'text-accent',
    bg: 'from-accent/10 to-transparent',
  },
  orange: {
    border: 'border-neon-orange/50 hover:border-neon-orange',
    glow: '',
    text: 'text-neon-orange',
    bg: 'from-neon-orange/10 to-transparent',
  },
};

export const SkillCard = ({ 
  icon: Icon, 
  title, 
  description, 
  items, 
  color = 'cyan',
  index 
}: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = colorConfig[color];

  return (
    <motion.div
      className={`relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border ${config.border} ${config.glow} transition-all duration-300 cursor-pointer overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 ${config.text}`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={28} />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-display font-bold text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>

        {/* Items */}
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <motion.span
              key={item}
              className={`text-xs px-2 py-1 rounded-md bg-muted/50 ${config.text} font-mono`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${config.text}`}
              style={{
                left: `${20 + i * 30}%`,
                bottom: '20%',
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -30, opacity: [0, 1, 0] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};
