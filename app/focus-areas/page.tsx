"use client";

import React from "react";
import { motion } from "framer-motion";

// Mark the page for dynamic rendering
export const dynamic = "force-dynamic";

interface FocusArea {
  title: string;
  description: string;
  problemsSolved: string[];
  question: string;
}

const FocusAreaCard: React.FC<{ area: FocusArea; index: number }> = ({ area, index }) => (
  <motion.article
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02]"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    aria-labelledby={`focus-area-title-${index}`}
  >
    <h2
      id={`focus-area-title-${index}`}
      className="text-2xl font-bold text-darkBlue mb-4"
    >
      {area.title}
    </h2>
    
    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
      {area.description.trim()}
    </p>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-azureBlue mb-3 flex items-center gap-2">
          <span className="text-xl">🎯</span> Key Solutions:
        </h3>
        <ul className="space-y-2">
          {area.problemsSolved.map((problem, idx) => (
            <motion.li 
              key={idx}
              className="flex items-start gap-3 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-azureBlue mt-1 text-xl">✓</span>
              <span className="leading-relaxed">{problem}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="pt-4 border-t border-gray-200"
      >
        <p className="text-lg font-semibold text-azureBlue italic leading-relaxed flex items-center gap-2">
          <span className="text-xl">💡</span>
          {area.question}
        </p>
      </motion.div>
    </div>
  </motion.article>
);

const FocusAreas: React.FC = () => {
  const areas: FocusArea[] = [
    {
      title: "Data Integration",
      description: `
        Data Integration focuses on securely and seamlessly connecting various systems, enabling organizations 
        to unify their data for better decision-making. By addressing interoperability and ensuring efficient 
        data flows, this focus area lays the foundation for all subsequent operations.
      `,
      problemsSolved: [
        "Streamlining data flows across disparate systems.",
        "Ensuring secure and scalable data interoperability.",
        "Eliminating silos for unified organizational insights.",
        "Facilitating real-time data sharing and processing.",
      ],
      question: "How well are your systems integrated to handle seamless and secure data exchange?",
    },
    {
      title: "Digital Intelligence",
      description: `
        Digital Intelligence leverages AI-driven tools to monitor, analyze, and interpret vast digital landscapes. 
        This focus area helps identify disinformation, monitor social media sentiment, and detect emerging threats 
        in real time, enabling organizations to stay ahead in a fast-paced digital world.
      `,
      problemsSolved: [
        "Countering disinformation campaigns in real time.",
        "Analyzing trends in digital behaviors and sentiments.",
        "Detecting and mitigating emerging digital threats.",
        "Enhancing situational awareness through actionable insights.",
      ],
      question: "Are you confident in your ability to detect and respond to digital threats as they emerge?",
    },
    {
      title: "Operational Analytics",
      description: `
        Operational Analytics transforms raw, real-time data into actionable insights, helping organizations evaluate 
        dynamic environments and implement timely strategies. By enabling scenario forecasting and predictive modeling, 
        this focus area supports mission-critical operations.
      `,
      problemsSolved: [
        "Providing real-time data visualizations for situational awareness.",
        "Supporting operational decision-making during critical events.",
        "Streamlining analytics for predictive scenario planning.",
        "Enhancing collaboration with data-driven insights.",
      ],
      question: "Are you leveraging data analytics to make fast, informed decisions during critical operations?",
    },
    {
      title: "Strategic Consulting",
      description: `
        Strategic Consulting focuses on using integrated data and analytics to guide high-level decision-making. 
        By delivering expert insights and customized strategies, this focus area empowers organizations to align 
        their actions with long-term goals and adapt to complex challenges.
      `,
      problemsSolved: [
        "Developing customized strategies for organizational growth.",
        "Guiding decision-making with integrated data insights.",
        "Ensuring alignment between operational goals and long-term vision.",
        "Addressing complex challenges with expert consulting services.",
      ],
      question: "How do you ensure that your strategies are informed by integrated data and tailored insights?",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent via-white to-accent">
      <div className="container mx-auto px-6 py-20">
        <motion.section
          aria-label="Focus Areas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-darkBlue mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Focus Areas
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our focus areas represent the journey of data through Orbis&apos; solutions—from integration 
              to actionable intelligence, analytics, and strategic insights. Together, they empower 
              organizations to solve complex challenges and achieve their goals.
            </motion.p>
          </div>

          {/* Focus Areas Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {areas.map((area, index) => (
              <FocusAreaCard key={area.title} area={area} index={index} />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default FocusAreas;