"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-darkBlue to-black">
      {isClient ? (
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-8xl md:text-9xl font-bold text-orbitBlue mb-8">404</h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Page Not Found
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  The page you&apos;re looking for seems to be missing. Let&apos;s get you back on track.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-block bg-orbitBlue hover:bg-azureBlue text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Return to Homepage
              </Link>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-xl text-white/80">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default NotFound;
