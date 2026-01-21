import { useState } from "react";
import { LandingScreen } from "@/components/gaming/LandingScreen";
import { Navigation } from "@/components/gaming/Navigation";
import { ParticleBackground } from "@/components/gaming/ParticleBackground";
import { PlayerProfile } from "@/components/gaming/PlayerProfile";
import { SkillsSection } from "@/components/gaming/SkillsSection";
import { MissionsSection } from "@/components/gaming/MissionsSection";
import { WorkflowSection } from "@/components/gaming/WorkflowSection";
import { ToolsSection } from "@/components/gaming/ToolsSection";
import { AchievementsSection } from "@/components/gaming/AchievementsSection";
import { ContactSection } from "@/components/gaming/ContactSection";
import { Footer } from "@/components/gaming/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <LandingScreen onStart={() => setHasStarted(true)} />;
  }

  return (
    <motion.div
      className="
    min-h-screen bg-background relative
    overflow-x-hidden
  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <ParticleBackground />

      {/* Grid background (fixed but safe for mobile) */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main
        className="
      relative z-10
      px-4 sm:px-0
    "
      >
        <PlayerProfile />
        <SkillsSection />
        <MissionsSection />
        <WorkflowSection />
        <ToolsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
