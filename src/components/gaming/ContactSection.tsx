import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Download, Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showTerminal, setShowTerminal] = useState(false);

  const runTerminalAnimation = async (lines: string[]) => {
    setTerminalLines([]);
    setShowTerminal(true);

    for (let i = 0; i < lines.length; i++) {
      await new Promise((res) => setTimeout(res, 500));
      setTerminalLines((prev) => [...prev, lines[i]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await runTerminalAnimation([
      "> initializing connection...",
      "> encrypting payload...",
      "> transmitting data...",
    ]);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      await runTerminalAnimation([
        "> transmission successful ✔",
        "> session closed",
      ]);

      setFormData({ name: "", email: "", message: "" });
    } catch {
      await runTerminalAnimation([
        "> transmission failed ❌",
        "> retry recommended",
      ]);
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setShowTerminal(false);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-1.5 sm:w-2 h-10 sm:h-12 bg-secondary rounded-full" />
            <div>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-widest">
                // JOIN PARTY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
                MULTIPLAYER INVITE
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ready to team up? Send an invite to discuss game quality assurance
            opportunities, collaborations, or just to connect.
          </motion.p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              className="glass-panel p-5 sm:p-8"
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <Send className="text-primary" size={18} />
                SEND INVITE TO PLAYER
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Player Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="
                  w-full px-4 py-3
                  bg-muted/50 border border-border
                  rounded-lg
                  text-foreground
                  placeholder-muted-foreground
                  focus:outline-none focus:border-primary
                  transition-colors
                  font-mono
                "
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="
                  w-full px-4 py-3
                  bg-muted/50 border border-border
                  rounded-lg
                  text-foreground
                  placeholder-muted-foreground
                  focus:outline-none focus:border-primary
                  transition-colors
                  font-mono
                "
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="
                  w-full px-4 py-3
                  bg-muted/50 border border-border
                  rounded-lg
                  text-foreground
                  placeholder-muted-foreground
                  focus:outline-none focus:border-primary
                  transition-colors
                  font-mono resize-none
                "
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gaming w-full disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          ⟳
                        </motion.span>
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        SEND INVITE
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {showTerminal && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
      mt-6 p-4 rounded-lg
      bg-black text-green-400
      font-mono text-xs
      border border-green-500/30
      shadow-[0_0_20px_rgba(34,197,94,0.2)]
    "
                >
                  {terminalLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span>{line}</span>
                      {i === terminalLines.length - 1 && (
                        <motion.span
                          className="ml-1"
                          animate={{ opacity: [0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        >
                          ▋
                        </motion.span>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Quick Links & Resume */}
            <motion.div
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Resume */}
              <div className="glass-panel p-5 sm:p-8">
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-3 sm:mb-4">
                  EXPORT PLAYER DATA
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  Download complete player profile including skills, missions,
                  and achievements.
                </p>
                <motion.button
                  className="btn-gaming w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    toast({
                      title: "Download Started",
                      description: "Resume download initiated.",
                    })
                  }
                >
                  <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Download size={16} />
                    DOWNLOAD RESUME
                  </span>
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="glass-panel p-5 sm:p-8">
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-4 sm:mb-6">
                  CONNECT
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <motion.a
                    href="mailto:harshkumar@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <span className="text-foreground font-mono text-sm block">
                        Email
                      </span>
                      <span className="text-xs text-muted-foreground">
                        harshkumar@example.com
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077B5]/20 flex items-center justify-center">
                      <Linkedin className="text-[#0077B5]" size={18} />
                    </div>
                    <div>
                      <span className="text-foreground font-mono text-sm block">
                        LinkedIn
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Professional Profile
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                      <Github className="text-foreground" size={18} />
                    </div>
                    <div>
                      <span className="text-foreground font-mono text-sm block">
                        GitHub
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Code Repository
                      </span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
