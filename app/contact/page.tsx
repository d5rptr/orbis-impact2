"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-white to-accent">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-b from-darkBlue to-black text-white py-20 md:py-32"
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We&apos;d love to hear from you! Fill out the form below, and we&apos;ll get back to you shortly.
          </motion.p>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {isClient ? (
              <div className="card glass overflow-hidden">
                <iframe
                  src="https://forms.monday.com/forms/embed/6ef74c676b5d71e91afa5618ee167d58?r=use1"
                  className="w-full h-[500px] md:h-[500px]"
                  title="Contact Form"
                  aria-label="Contact Us Form"
                />
              </div>
            ) : (
              <div className="card glass p-8 text-center">
                <p className="text-xl text-darkBlue">Loading form...</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
