"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Type Definitions
interface Product {
  title: string;
  description: string;
  image: string;
  alt: string;
  problems: string[];
}

interface Service {
  title: string;
  description: string;
  details: string[];
  valueAdd: string; // BLUF for national security or business
}

// Reusable Card Component with motion
const Card: React.FC<{
  title: string;
  description: string;
  children?: React.ReactNode;
  image?: string;
  alt?: string;
  index: number;
}> = ({ title, description, children, image, alt, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
  >
    {image && alt && (
      <div className="flex justify-center mb-6">
        <Image 
          src={image} 
          alt={alt} 
          width={96} 
          height={96}
          className="rounded-lg"
        />
      </div>
    )}
    <h3 className="text-xl font-bold mb-3 text-darkBlue">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    {children && <div className="mt-4">{children}</div>}
  </motion.div>
);

// Reusable List Component
const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="text-orbitBlue mr-2">•</span>
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

// Section Component with motion
const Section: React.FC<{ 
  bgColor: string; 
  children: React.ReactNode;
  className?: string;
}> = ({
  bgColor,
  children,
  className = "py-16"
}) => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`${bgColor} ${className}`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);

export default function Products() {
  const products: Product[] = [
    {
      title: "Discovery",
      description:
        "An AI-powered platform for digital intelligence and counter-disinformation.",
      image: "/products/discovery.png",
      alt: "Discovery Product",
      problems: [
        "Identifying and combating disinformation in digital spaces.",
        "Providing real-time intelligence for decision-making.",
      ],
    },
    {
      title: "Landscape",
      description:
        "A dynamic tool for geospatial analytics and situational awareness.",
      image: "/products/landscape.png",
      alt: "Landscape Product",
      problems: [
        "Lack of situational awareness in geospatial contexts.",
        "Inability to visualize and analyze geospatial data in real time.",
      ],
    },
    {
      title: "Catalyst",
      description:
        "A secure platform for integrating complex systems and enabling real-time decision-making.",
      image: "/products/catalyst.png",
      alt: "Catalyst Product",
      problems: [
        "Difficulty integrating multiple systems for cohesive decision-making.",
        "Lack of secure data flows and real-time processing in complex environments.",
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "Research & Analysis",
      description:
        "Deep insights into global trends and challenges to inform decision-making.",
      details: [
        "Comprehensive analysis of global events and trends.",
        "Expert insights into political, economic, and social factors.",
        "Custom reports and briefings tailored to organizational needs.",
        "Use of advanced data analysis and modeling techniques to forecast trends.",
      ],
      valueAdd:
        "Empowers leaders to make informed decisions with strategic foresight in complex environments.",
    },
    {
      title: "Training",
      description:
        "Customized training programs to enhance skills and operational readiness.",
      details: [
        "Tailored training modules for different levels of expertise.",
        "Interactive learning experiences focused on real-world scenarios.",
        "Comprehensive curricula on intelligence gathering, analysis, and decision-making.",
        "Workshops and hands-on training with real tools and systems.",
      ],
      valueAdd:
        "Improves operational readiness and skillsets critical for both national security and business resiliency.",
    },
    {
      title: "OSINT Advisory",
      description:
        "Expert guidance in leveraging open-source intelligence for actionable insights.",
      details: [
        "Guidance on how to collect, analyze, and use open-source data.",
        "Support in implementing OSINT frameworks and tools.",
        "Best practices for data validation and cross-referencing.",
        "Tailored strategies to use OSINT for specific operational goals.",
      ],
      valueAdd:
        "Enhances intelligence capabilities, enabling quicker and more accurate decision-making.",
    },
    {
      title: "Strategic Communications",
      description:
        "Crafting narratives and communication strategies to achieve organizational goals.",
      details: [
        "Development of tailored communication strategies aligned with goals.",
        "Support in crafting key messages and narratives for different audiences.",
        "Crisis communication management and media training.",
        "Guidance on using digital platforms and social media for effective outreach.",
      ],
      valueAdd:
        "Strengthens organizational messaging to influence public perception and mitigate crises.",
    },
    {
      title: "Consulting",
      description:
        "Tailored consulting solutions to address unique challenges and objectives.",
      details: [
        "In-depth consultation sessions to understand client needs.",
        "Strategy development and roadmap creation for operational goals.",
        "Expert advice on organizational and technical challenges.",
        "Execution support to implement strategies and ensure alignment with business goals.",
      ],
      valueAdd:
        "Provides tailored solutions to complex challenges, aligning actions with long-term strategies.",
    },
    {
      title: "Data as a Service",
      description:
        "Secure and scalable solutions for real-time data access and analytics.",
      details: [
        "Access to real-time data streams for critical operational needs.",
        "Scalable data infrastructure to handle large data volumes.",
        "Integration of disparate data sources into a cohesive platform.",
        "Advanced data analytics tools and dashboards for decision-making.",
      ],
      valueAdd:
        "Enables organizations to leverage real-time data for faster, data-driven decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <Section 
        bgColor="bg-gradient-to-b from-darkBlue to-black" 
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-orbitBlue drop-shadow-lg"
          >
            Solutions That Drive Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Tailored products and services for national security and business excellence.
          </motion.p>
        </div>
      </Section>

      {/* Products Section */}
      <Section bgColor="bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-darkBlue"
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              index={index}
              title={product.title}
              description={product.description}
              image={product.image}
              alt={product.alt}
            >
              <h3 className="text-lg font-bold mb-3 text-orbitBlue">Problems Solved:</h3>
              <List items={product.problems} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-accent">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-darkBlue"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              index={index}
              title={service.title}
              description={service.description}
            >
              <h3 className="text-lg font-bold mb-3 text-orbitBlue">
                What This Service Includes:
              </h3>
              <List items={service.details} />
              <div className="mt-4 p-4 bg-darkBlue/5 rounded-lg border border-darkBlue/10">
                <h4 className="font-bold text-orbitBlue mb-2">Value Add:</h4>
                <p className="text-darkBlue">{service.valueAdd}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}