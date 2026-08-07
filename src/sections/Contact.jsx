import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import confetti from "canvas-confetti";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "ID Required (Name)";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Signal Address Required (Email)";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid Signal Address Format";
    }

    if (!formData.message.trim()) tempErrors.message = "Payload Required (Message)";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setToast({
        type: "error",
        message: "Signal connection failed: Validate payload parameters.",
      });
      setTimeout(() => setToast(null), 4000);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setToast({
        type: "success",
        message: "Message successfully transmitted to Tirth Oza's terminal!",
      });

      // Confetti feedback!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#7b2fff", "#00ff88"],
      });

      setTimeout(() => setToast(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="GET IN TOUCH"
          title="Let's"
          highlight="Connect"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-orbitron font-extrabold text-xl text-cyber-text tracking-wide mb-3 leading-snug">
                Open to Opportunities
              </h3>
              <p className="text-cyber-muted text-xs md:text-sm leading-relaxed mb-8 font-medium">
                I'm actively looking for internships and full-stack development roles. Whether you have a project idea, a position, or just want to say hello — my inbox is always open.
              </p>
            </div>

            {/* Direct Connect Grid */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-sm border border-cyber-border bg-cyber-surface/60 hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:translate-x-2 transition-all duration-300"
              >
                <div className="text-cyber-cyan text-base">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-cyber-muted uppercase tracking-wider">EMAIL CHANNEL</div>
                  <div className="text-xs font-mono text-cyber-text">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-sm border border-cyber-border bg-cyber-surface/60 hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:translate-x-2 transition-all duration-300"
              >
                <div className="text-cyber-cyan text-base">
                  <FaLinkedin />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-cyber-muted uppercase tracking-wider">LINKEDIN CORE</div>
                  <div className="text-xs font-mono text-cyber-text">linkedin.com/in/oza-tirth</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-sm border border-cyber-border bg-cyber-surface/60 hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:translate-x-2 transition-all duration-300"
              >
                <div className="text-cyber-cyan text-base">
                  <FaGithub />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-cyber-muted uppercase tracking-wider">GITHUB HOST</div>
                  <div className="text-xs font-mono text-cyber-text">github.com/Tirth2004-git</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-sm border border-cyber-border bg-cyber-surface/60 hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:translate-x-2 transition-all duration-300"
              >
                <div className="text-cyber-cyan text-base">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-cyber-muted uppercase tracking-wider">TELECOM AUDIO</div>
                  <div className="text-xs font-mono text-cyber-text">{personalInfo.phone}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlowCard borderGlow="cyan" className="p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-cyber-bg/50 border border-cyber-border/60 hover:border-cyber-cyan/45 focus:border-cyber-cyan p-4 rounded-sm text-xs font-mono text-cyber-text placeholder-transparent focus:outline-none transition-all"
                  />
                  <label className="absolute left-4 top-4 text-[10px] font-mono text-cyber-muted tracking-widest uppercase transition-all duration-300 pointer-events-none origin-[0_0] 
                    input-sibling-focus-label">
                    NAME //
                  </label>
                  {errors.name && (
                    <span className="text-[9px] font-mono text-cyber-pink mt-1 block tracking-wider uppercase">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-cyber-bg/50 border border-cyber-border/60 hover:border-cyber-cyan/45 focus:border-cyber-cyan p-4 rounded-sm text-xs font-mono text-cyber-text placeholder-transparent focus:outline-none transition-all"
                  />
                  <label className="absolute left-4 top-4 text-[10px] font-mono text-cyber-muted tracking-widest uppercase transition-all duration-300 pointer-events-none origin-[0_0] 
                    input-sibling-focus-label">
                    EMAIL ADDRESS //
                  </label>
                  {errors.email && (
                    <span className="text-[9px] font-mono text-cyber-pink mt-1 block tracking-wider uppercase">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows="5"
                    className="w-full bg-cyber-bg/50 border border-cyber-border/60 hover:border-cyber-cyan/45 focus:border-cyber-cyan p-4 rounded-sm text-xs font-mono text-cyber-text placeholder-transparent focus:outline-none transition-all resize-none"
                  />
                  <label className="absolute left-4 top-4 text-[10px] font-mono text-cyber-muted tracking-widest uppercase transition-all duration-300 pointer-events-none origin-[0_0] 
                    input-sibling-focus-label">
                    TRANSMISSION PAYLOAD (MESSAGE) //
                  </label>
                  {errors.message && (
                    <span className="text-[9px] font-mono text-cyber-pink mt-1 block tracking-wider uppercase">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <AnimatedButton
                  type="submit"
                  variant="primary"
                  className="w-full !py-4 flex items-center justify-center font-bold tracking-[0.2em]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "TRANSMITTING..." : "SEND SIGNAL //"}
                </AnimatedButton>

              </form>
            </GlowCard>
          </motion.div>

        </div>

        {/* Floating Toast Notification Banner */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 border rounded-sm font-mono text-xs shadow-2xl backdrop-blur-md max-w-sm
                ${toast.type === "success" 
                  ? "bg-cyber-bg/90 border-cyber-green text-cyber-green shadow-[0_0_20px_rgba(0,255,136,0.2)]" 
                  : "bg-cyber-bg/90 border-cyber-pink text-cyber-pink shadow-[0_0_20px_rgba(255,45,120,0.2)]"
                }
              `}
            >
              {toast.type === "success" 
                ? <FaCheckCircle className="text-base shrink-0" /> 
                : <FaExclamationTriangle className="text-base shrink-0" />
              }
              <span>{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Contact;
