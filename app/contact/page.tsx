"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-white to-accent relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/contact-bg.jpg')" }}></div>

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-b from-darkBlue to-black text-white py-20 md:py-32 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-orbitBlue"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Connect
          </motion.h1>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="card glass p-8 rounded-xl shadow-lg">
                {isClient ? (
                  <iframe
                    src="https://forms.monday.com/forms/embed/6ef74c676b5d71e91afa5618ee167d58?r=use1"
                    className="w-full h-[1352px]"
                    title="Contact Form"
                    aria-label="Contact Us Form"
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-xl text-darkBlue">Loading form...</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-darkBlue">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl text-orbitBlue mr-4" />
                  <p className="text-lg">
                    <a href="mailto:impact@orbisops.com" className="text-darkBlue hover:text-orbitBlue transition-colors">
                      impact@orbisops.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-2xl text-orbitBlue mr-4" />
                  <p className="text-lg">
                    <a href="tel:17036390911" className="text-darkBlue hover:text-orbitBlue transition-colors">
                      1-703-639-0911
                    </a>
                  </p>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-2xl text-orbitBlue mr-4 mt-1" />
                  <p className="text-lg">
                    6862 Elm St. Ste 300<br />
                    McLean, VA 22101-3886
                  </p>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-2xl text-orbitBlue mr-4" />
                  <p className="text-lg">
                    <a href="https://www.linkedin.com/company/orbisoperations" target="_blank" rel="noopener noreferrer" className="text-darkBlue hover:text-orbitBlue transition-colors">
                      Connect on LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
