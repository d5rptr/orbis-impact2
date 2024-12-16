"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Reusable Card Component for Services and Core Values
interface CardProps {
  title: string;
  src: string;
  description: string;
  valueAdd?: string;
  alt: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, src, description, valueAdd, alt, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="mx-auto mb-4"
      loading="lazy"
    />
    <h3 className="text-xl font-bold text-darkBlue">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    {valueAdd && (
      <div className="mt-4 p-4 bg-darkBlue/5 rounded-lg border border-darkBlue/10">
        <p className="font-semibold text-darkBlue">{valueAdd}</p>
      </div>
    )}
  </motion.div>
);

// Add this new ServiceCard component after the existing Card component
const ServiceCard: React.FC<{
  title: string;
  description: string;
  valueAdd: string;
  index: number;
}> = ({ title, description, valueAdd, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  >
    <h3 className="text-xl font-bold text-darkBlue">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <div className="mt-4 p-4 bg-darkBlue/5 rounded-lg border border-darkBlue/10">
      <p className="font-semibold text-darkBlue">{valueAdd}</p>
    </div>
  </motion.div>
);

// Reusable Section Component
interface SectionProps {
  id?: string;
  bgColor: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ bgColor, children, id }) => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    id={id} 
    className={`relative ${bgColor} py-16 md:py-24 px-6`}
  >
    {children}
  </motion.section>
);

export default function Home() {
  const coreValues = [
    {
      title: "Commitment",
      src: "/icons/commitment.svg",
      description: "We are dedicated to our clients' missions and objectives.",
      alt: "Commitment Icon",
    },
    {
      title: "Innovation",
      src: "/icons/innovation.svg",
      description: "We craft creative and forward-leaning solutions.",
      alt: "Innovation Icon",
    },
    {
      title: "Agility",
      src: "/icons/agility.svg",
      description: "We adapt to complex and evolving challenges.",
      alt: "Agility Icon",
    },
    {
      title: "Integrity",
      src: "/icons/integrity.svg",
      description: "We uphold the highest standards in all we do.",
      alt: "Integrity Icon",
    },
  ];

  const products = [
    {
      title: "Discovery",
      src: "/products/discovery.png",
      description:
        "An AI-powered platform for digital intelligence and counter-disinformation.",
      alt: "Discovery Product Logo",
    },
    {
      title: "Landscape",
      src: "/products/landscape.png",
      description:
        "A dynamic tool for geospatial analytics and situational awareness.",
      alt: "Landscape Product Logo",
    },
    {
      title: "Catalyst",
      src: "/products/catalyst.png",
      description:
        "A secure platform for integrating complex systems and enabling real-time decision-making.",
      alt: "Catalyst Product Logo",
    },
  ];

  const services = [
    {
      title: "Search & Analysis",
      description:
        "Deep insights into global trends and challenges to inform decision-making.",
      valueAdd:
        "Empowers leaders to make informed decisions with strategic foresight in complex environments.",
    },
    {
      title: "Training",
      description:
        "Customized training programs to enhance skills and operational readiness.",
      valueAdd:
        "Improves operational readiness and skillsets critical for both national security and business resiliency.",
    },
    {
      title: "OSINT Advisory",
      description:
        "Expert guidance in leveraging open-source intelligence for actionable insights.",
      valueAdd:
        "Enhances intelligence capabilities, enabling quicker and more accurate decision-making.",
    },
    {
      title: "Strategic Communications",
      description:
        "Crafting narratives and communication strategies to achieve organizational goals.",
      valueAdd:
        "Strengthens organizational messaging to influence public perception and mitigate crises.",
    },
    {
      title: "Consulting",
      description:
        "Tailored consulting solutions to address unique challenges and objectives.",
      valueAdd:
        "Provides tailored solutions to complex challenges, aligning actions with long-term strategies.",
    },
    {
      title: "Data as a Service",
      description:
        "Secure and scalable solutions for real-time data access and analytics.",
      valueAdd:
        "Enables organizations to leverage real-time data for faster, data-driven decisions.",
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-r from-gray-900 to-gray-800 text-light min-h-screen">
      {/* Hero Section */}
      <Section bgColor="bg-gradient-to-b from-darkBlue to-black text-light">
        <div className="container mx-auto min-h-[80vh] flex flex-col justify-center items-center px-6">
          <motion.div
            className="text-center max-w-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100 
              }}
              className="mb-8"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-orbitBlue mb-6"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                Innovative Solutions
              </motion.h1>
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                for National Security and Business
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
            >
              Orbis provides technology, consulting, and training to national
              security and business clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="/contact"
                className="inline-block bg-orbitBlue py-4 px-8 rounded-full text-white font-semibold hover:bg-azureBlue transition-all duration-300 text-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section bgColor="bg-azureBlue text-light text-center">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
          >
            Based in Washington, D.C., Orbis is a firm comprising subject
            matter experts and leaders from government, defense, and the private sector.
            With deep knowledge of our clients and their challenges, we deliver bespoke
            and innovative solutions.
          </motion.p>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-darkBlue"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                index={index}
                {...value}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section bgColor="bg-accent">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-darkBlue"
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                index={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-white" id="services">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-darkBlue"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                valueAdd={service.valueAdd}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section bgColor="bg-gradient-to-b from-darkBlue to-black text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-orbitBlue"
          >
            Ready to Face Tomorrow's Security Challenges?
          </motion.h2>
          <motion.a
            href="/contact"
            className="inline-block bg-orbitBlue py-3 px-6 rounded-full text-white font-semibold hover:bg-azureBlue transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </Section>
    </div>
  );
}