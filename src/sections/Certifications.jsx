import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaExternalLinkAlt, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          label="Credentials"
          title="Verified Certifications &amp;"
          highlight="Merits"
          description="NPTEL IIT elite distinctions in Machine Learning and Computer Networks, along with industry internship credentials."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
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
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Close backdrop clicking */}
              <div className="absolute inset-0" onClick={handleCloseModal} />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-theme-surface border border-theme-border rounded-lg max-w-3xl w-full relative z-10 flex flex-col max-h-[90vh] overflow-hidden shadow-2xl"
              >
                {/* Header */}
                <div className="p-4 border-b border-theme-border flex justify-between items-center bg-theme-surface-alt/70">
                  <div>
                    <h3 className="font-display font-bold text-base text-theme-text">
                      {selectedCert.title}
                    </h3>
                    <p className="font-sans text-xs text-theme-muted mt-0.5">
                      {selectedCert.issuer} &middot; {selectedCert.year}
                    </p>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 border border-theme-border text-theme-muted hover:text-theme-text bg-theme-surface rounded-md transition-colors cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* ImageViewer Workspace */}
                <div className="flex-1 bg-black/40 overflow-auto flex items-center justify-center p-4 relative group/viewer min-h-[300px]">
                  {/* Floating Zoom Controls */}
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                    <button
                      onClick={handleZoomIn}
                      className="p-2 rounded-md bg-theme-surface border border-theme-border text-theme-text hover:text-theme-accent transition-colors cursor-pointer"
                      title="Zoom In"
                    >
                      <FaSearchPlus className="text-xs" />
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="p-2 rounded-md bg-theme-surface border border-theme-border text-theme-text hover:text-theme-accent transition-colors cursor-pointer"
                      title="Zoom Out"
                    >
                      <FaSearchMinus className="text-xs" />
                    </button>
                  </div>

                  {/* Certificate Image */}
                  <div className="overflow-auto max-h-[65vh] flex items-center justify-center">
                    <motion.img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      style={{ transform: `scale(${zoomScale})` }}
                      className="max-w-full max-h-full object-contain rounded border border-theme-border shadow-md transition-transform duration-200"
                    />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 border-t border-theme-border bg-theme-surface-alt/70 flex flex-wrap gap-3 justify-between items-center">
                  <span className="font-mono font-semibold text-xs text-theme-accent">
                    {selectedCert.score}
                  </span>

                  <div className="flex gap-2.5">
                    <AnimatedButton
                      variant="secondary"
                      href={selectedCert.image}
                      download={`${selectedCert.title.replace(/\s+/g, "_")}.jpg`}
                      className="!px-3.5 !py-2 !text-xs"
                    >
                      <FaDownload className="text-xs" /> Download Image
                    </AnimatedButton>
                    <AnimatedButton
                      variant="primary"
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      className="!px-3.5 !py-2 !text-xs"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Verify Credential
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

