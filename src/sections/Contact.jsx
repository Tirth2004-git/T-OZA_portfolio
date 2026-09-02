import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import GlowCard from "../components/GlowCard";
import AnimatedButton from "../components/AnimatedButton";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Communication"
          title="Let's"
          highlight="Connect"
          description="Open to discussing full-time opportunities, research collaborations, multi-agent systems, and freelance engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <GlowCard className="p-6 sm:p-7" accent="default">
              <h3 className="font-display font-bold text-lg text-theme-text mb-2">
                Get in Touch Directly
              </h3>
              <p className="font-sans text-xs sm:text-sm text-theme-muted leading-relaxed mb-6">
                Whether you have an inquiry regarding a role, an architecture question, or a project collaboration, feel free to reach out.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-md border border-theme-border bg-theme-surface-alt/70 hover:border-theme-accent hover:text-theme-accent transition-colors group"
                >
                  <div className="p-2 rounded bg-theme-surface text-theme-accent group-hover:scale-105 transition-transform">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-theme-muted block">EMAIL ADDRESS</span>
                    <span className="font-sans text-xs font-semibold text-theme-text group-hover:text-theme-accent transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-md border border-theme-border bg-theme-surface-alt/70 hover:border-theme-accent hover:text-theme-accent transition-colors group"
                >
                  <div className="p-2 rounded bg-theme-surface text-theme-accent group-hover:scale-105 transition-transform">
                    <FaLinkedin className="text-sm" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-theme-muted block">LINKEDIN NETWORK</span>
                    <span className="font-sans text-xs font-semibold text-theme-text group-hover:text-theme-accent transition-colors">
                      linkedin.com/in/ozatirth9124
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-md border border-theme-border bg-theme-surface-alt/70 hover:border-theme-accent hover:text-theme-accent transition-colors group"
                >
                  <div className="p-2 rounded bg-theme-surface text-theme-accent group-hover:scale-105 transition-transform">
                    <FaGithub className="text-sm" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-theme-muted block">GITHUB REPOSITORIES</span>
                    <span className="font-sans text-xs font-semibold text-theme-text group-hover:text-theme-accent transition-colors">
                      github.com/Tirth2004-git
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-md border border-theme-border bg-theme-surface-alt/70 text-theme-muted">
                  <div className="p-2 rounded bg-theme-surface text-theme-teal">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-theme-muted block">BASE LOCATION</span>
                    <span className="font-sans text-xs font-semibold text-theme-text">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <GlowCard className="p-6 sm:p-8" accent="teal">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="font-sans text-xs font-semibold text-theme-text block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-theme-surface-alt/80 border border-theme-border rounded-md px-3.5 py-2.5 text-sm text-theme-text placeholder-theme-muted/60 focus:border-theme-accent focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1 block font-sans">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-sans text-xs font-semibold text-theme-text block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-theme-surface-alt/80 border border-theme-border rounded-md px-3.5 py-2.5 text-sm text-theme-text placeholder-theme-muted/60 focus:border-theme-accent focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block font-sans">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-xs font-semibold text-theme-text block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project or opportunity..."
                    className="w-full bg-theme-surface-alt/80 border border-theme-border rounded-md px-3.5 py-2.5 text-sm text-theme-text placeholder-theme-muted/60 focus:border-theme-accent focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block font-sans">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <AnimatedButton
                  type="submit"
                  variant="primary"
                  className="w-full !py-3 font-semibold"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Transmitting Message..." : "Send Message"}
                </AnimatedButton>

                {/* Toast feedback */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-md bg-theme-surface-alt border border-theme-teal text-theme-teal flex items-center gap-2.5 text-xs font-sans font-medium"
                    >
                      <FaCheckCircle className="text-sm shrink-0" />
                      <span>Thank you! Your message was transmitted successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

