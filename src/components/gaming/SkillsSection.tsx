import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SkillCard } from './SkillCard';
import { 
  Brain, 
  Wrench, 
  Monitor, 
  Code, 
  FileText 
} from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'QA Concepts',
    description: 'Core testing methodologies and frameworks',
    items: ['GDLC', 'GTLC', 'Agile/Scrum', 'E2E Testing'],
    color: 'cyan' as const,
  },
  {
    icon: Wrench,
    title: 'Testing Tools',
    description: 'Industry-standard QA and tracking tools',
    items: ['JIRA', 'Bugzilla', 'TestRail', 'Trello'],
    color: 'green' as const,
  },
  {
    icon: Monitor,
    title: 'Platforms',
    description: 'Gaming platforms and distributions',
    items: ['Steam', 'Epic Games', 'Unity', 'Unreal'],
    color: 'purple' as const,
  },
  {
    icon: Code,
    title: 'Programming',
    description: 'Development languages for automation',
    items: ['C', 'C++'],
    color: 'orange' as const,
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Recording and reporting tools',
    items: ['OBS Studio', 'Screen Recorder', 'Google Docs'],
    color: 'cyan' as const,
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="min-h-screen py-32 relative">
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
            <div className="w-2 h-12 bg-secondary rounded-full" />
            <div>
              <span className="text-xs text-muted-foreground font-mono tracking-widest">
                // SKILL TREE
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                LOADOUT
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Equipped with essential skills and tools for comprehensive game quality assurance. 
            Each skill node represents mastery in critical testing domains.
          </motion.p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                {...skill}
                index={index}
              />
            ))}
          </div>

          {/* Additional Skills Bar */}
          <motion.div
            className="mt-12 glass-panel p-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-xs text-muted-foreground font-mono mb-4 tracking-wider">
              // SPECIALIZED ABILITIES
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                'Gameplay Test Coverage',
                'Feature-to-Test Case Traceability',
                'Regression Testing',
                'Cross-Platform Testing',
                'Performance Profiling',
                'Exploratory Testing',
                'Usability Feedback',
                'Bug Reproduction',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-muted/50 text-foreground text-sm font-mono border border-border hover:border-primary hover:text-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
