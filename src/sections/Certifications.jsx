import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaExternalLinkAlt, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import confetti from "canvas-confetti";
import SectionTitle from "../components/SectionTitle";
import CertificationCard from "../components/CertificationCard";
import { certificationsData } from "../data/portfolioData";
import AnimatedButton from "../components/AnimatedButton";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setZoomScale(1);
    
    // Shoot confetti for a premium credential reveal feel!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00f0ff", "#7b2fff", "#ff2d78"],
    });
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <SectionTitle
          label="CREDENTIALS"
          title="Certifications &amp;"
          highlight="Achievements"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <CertificationCard
                cert={cert}
                onClick={() => handleOpenModal(cert)}
              />
            </motion.div>
          ))}
        </div>

        {/* Credentials Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#020408]/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Close backdrop clicking */}
              <div className="absolute inset-0" onClick={handleCloseModal} />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-cyber-surface border border-cyber-border rounded-sm max-w-[850px] w-full relative z-10 flex flex-col max-h-[90vh] overflow-hidden"
              >
                {/* Header */}
                <div className="p-4 border-b border-cyber-border/40 flex justify-between items-center bg-cyber-bg/60">
                  <div>
                    <h3 className="font-orbitron font-extrabold text-sm text-cyber-cyan tracking-wide">
                      {selectedCert.title}
                    </h3>
                    <p className="font-mono text-[9px] text-cyber-muted uppercase tracking-wider mt-0.5">
                      {selectedCert.issuer} · {selectedCert.year}
                    </p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 border border-cyber-border/30 hover:border-cyber-pink/50 text-cyber-muted hover:text-cyber-pink bg-transparent rounded-xs transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* ImageViewer Workspace */}
                <div className="flex-1 bg-[#000] overflow-auto flex items-center justify-center p-4 relative group/viewer">
                  
                  {/* Floating Zoom Controls */}
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <button
                      onClick={handleZoomIn}
                      className="p-2.5 rounded-sm bg-cyber-surface border border-cyber-border/40 text-cyber-cyan hover:bg-cyber-cyan/10"
                      title="Zoom In"
                    >
                      <FaSearchPlus className="text-xs" />
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="p-2.5 rounded-sm bg-cyber-surface border border-cyber-border/40 text-cyber-cyan hover:bg-cyber-cyan/10"
                      title="Zoom Out"
                    >
                      <FaSearchMinus className="text-xs" />
                    </button>
                  </div>

                  {/* Certificate Image */}
                  <div className="overflow-auto max-h-[75vh] flex items-center justify-center">
                    <motion.img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      style={{ transform: `scale(${zoomScale})` }}
                      className="max-w-full max-h-full object-contain rounded-xs border border-cyber-border/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-200"
                    />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 border-t border-cyber-border/40 bg-cyber-bg/60 flex flex-wrap gap-3 justify-between items-center">
                  <span className="font-orbitron font-bold text-xs text-cyber-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.2)]">
                    {selectedCert.score}
                  </span>
                  
                  <div className="flex gap-3">
                    <AnimatedButton
                      variant="ghost"
                      href={selectedCert.image}
                      download={`${selectedCert.title.replace(/\s+/g, "_")}.jpg`}
                      className="!px-4 !py-2 flex items-center gap-2 !text-[9px]"
                    >
                      <FaDownload /> Download Image
                    </AnimatedButton>
                    <AnimatedButton
                      variant="primary"
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      className="!px-4 !py-2 flex items-center gap-2 !text-[9px]"
                    >
                      <FaExternalLinkAlt /> Verify Credential
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certifications;
