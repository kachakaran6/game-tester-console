import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-8 neon-border rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">HP</span>
            </div>
            <span className="font-display text-sm text-muted-foreground">
              GAME<span className="text-primary">QA</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-muted-foreground font-mono text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            © 2024 HARSHKUMAR PATEL // ALL RIGHTS RESERVED
          </motion.p>

          {/* Version */}
          <motion.div
            className="text-xs text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            v1.0.0 // PORTFOLIO_BUILD
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
