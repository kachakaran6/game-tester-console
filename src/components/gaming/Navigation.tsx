import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Crosshair,
  Briefcase,
  Workflow,
  Wrench,
  Trophy,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "profile", label: "PROFILE", icon: User },
  { id: "skills", label: "LOADOUT", icon: Crosshair },
  { id: "missions", label: "MISSIONS", icon: Briefcase },
  { id: "workflow", label: "PIPELINE", icon: Workflow },
  { id: "tools", label: "ARSENAL", icon: Wrench },
  { id: "achievements", label: "ACHIEVEMENTS", icon: Trophy },
  { id: "contact", label: "INVITE", icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 hidden lg:block transition-all duration-300 ${
          scrolled ? "glass-panel" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("profile")}
            >
              <div className="w-10 h-10 neon-border rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-primary">
                  {" "}
                  <img src="/profile_harsh.png" alt="logo" />
                </span>
              </div>
              <span className="font-display text-sm text-foreground">
                GAME<span className="text-primary">QA</span>
              </span>
            </motion.div>

            {/* Nav Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={14} />
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeNav"
                        style={{
                          boxShadow: "0 0 10px hsl(185 100% 50%)",
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      {/* ================= MOBILE NAVIGATION ================= */}
      <div className="lg:hidden">
        {/* Mobile Top HUD */}
        <motion.div
          className="
      fixed top-0 left-0 right-0 z-[55]
      h-16
      glass-panel
      border-b border-border
      flex items-center justify-between
      px-4
    "
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Logo / Title */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 neon-border rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-primary text-sm">
                <img src="/profile_harsh.png" alt="logo" />
              </span>
            </div>
            <span className="font-display text-sm text-foreground tracking-wide">
              GAME<span className="text-primary">QA</span>
            </span>
          </div>

          {/* Hamburger */}
          <motion.button
            className="
        w-10 h-10
        flex items-center justify-center
        rounded-lg
        bg-muted/30
        border border-border
      "
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="text-primary" size={20} />
            ) : (
              <Menu className="text-primary" size={20} />
            )}
          </motion.button>
        </motion.div>

        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 z-[50] bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <motion.div
          className="
      fixed inset-0 z-[54]
      glass-panel
      flex items-center justify-center
      pt-16
    "
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-4 px-8 py-3 font-display text-xl tracking-wider ${
                    isActive ? "text-primary neon-text-cyan" : "text-foreground"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : 30,
                  }}
                  transition={{ delay: isOpen ? index * 0.08 : 0 }}
                >
                  <Icon size={24} />
                  {item.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};
