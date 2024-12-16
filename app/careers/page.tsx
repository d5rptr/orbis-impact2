"use client";

import React from "react";
import { motion } from "framer-motion";

const CareerBenefit: React.FC<{ title: string; description: string; delay: number }> = ({ 
  title, 
  description, 
  delay 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-xl font-bold text-darkBlue mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Careers() {
  const benefits = [
    {
      title: "Mission-Driven Work",
      description: "Make a real impact on national security and business success through innovative solutions."
    },
    {
      title: "Professional Growth",
      description: "Access continuous learning opportunities, certifications, and career advancement paths."
    },
    {
      title: "Collaborative Environment",
      description: "Work alongside industry experts in a supportive, team-oriented atmosphere."
    },
    {
      title: "Work-Life Balance",
      description: "Enjoy flexible work arrangements and comprehensive benefits that support your wellbeing."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
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
            Join Our Mission
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be part of a team dedicated to solving complex challenges in national security and business.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Culture Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-darkBlue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Join Orbis?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <CareerBenefit
                  key={benefit.title}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              At Orbis Operations, we believe in empowering our team members to grow, innovate, and make a real difference. 
              Our collaborative environment combines cutting-edge technology with deep expertise in intelligence and analysis.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Open Positions Section */}
      <section id="careers-widget-section" className="py-20 px-4 bg-accent/50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-darkBlue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Career Opportunities at Orbis Operations
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-xl text-darkBlue">
                Career opportunities coming soon. Please check back later.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
