"use client";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation Link Interface
interface NavLink {
  href: string;
  label: string;
}

// Reusable Navigation Component
const Navigation: React.FC<{ links: NavLink[]; onLinkClick?: () => void }> = ({
  links,
  onLinkClick,
}) => (
  <ul className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8">
    {links.map(({ href, label }) => (
      <motion.li
        key={label}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Link
          href={href}
          className="text-white/90 hover:text-white transition-all duration-300 font-medium text-lg block md:inline-block py-2 md:py-0"
          onClick={onLinkClick}
        >
          {label}
        </Link>
      </motion.li>
    ))}
  </ul>
);

// Footer Section Component
const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <h3 className="text-lg font-semibold text-azureBlue mb-3">{title}</h3>
    {children}
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const navLinks: NavLink[] = [
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/offerings", label: "Offerings" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <head>
        <title>Orbis Operations | Innovative Solutions for National Security and Business</title>
        <meta name="description" content="Orbis provides technology, consulting, and training to national security and business clients worldwide. Discover our innovative solutions and expert services." />
        <meta property="og:title" content="Orbis Operations | Innovative Solutions for National Security and Business" />
        <meta property="og:description" content="Orbis provides technology, consulting, and training to national security and business clients worldwide. Discover our innovative solutions and expert services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.orbisops.com/" />
        <meta property="og:image" content="https://www.orbisops.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orbis Operations | Innovative Solutions for National Security and Business" />
        <meta name="twitter:description" content="Orbis provides technology, consulting, and training to national security and business clients worldwide. Discover our innovative solutions and expert services." />
        <meta name="twitter:image" content="https://www.orbisops.com/twitter-image.jpg" />
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <motion.header
          className={`fixed w-full top-0 z-50 transition-all duration-300 bg-darkBlue ${
            isScrolled ? 'py-2' : 'py-4 md:py-6'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
            {/* Logo */}
            <motion.div 
              className="relative w-32 md:w-40 lg:w-48"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/" aria-label="Orbis Home">
                <Image
                  src="/orbis-logo.png"
                  alt="Orbis Logo"
                  width={160}
                  height={40}
                  priority
                  className="transition-transform"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <Navigation links={navLinks} />
            </nav>

            {/* Hamburger Menu */}
            <motion.button
              className="md:hidden text-white/90 focus:outline-none rounded-lg p-2"
              onClick={() => setMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d={isMenuOpen 
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div 
                  className="px-4 py-4 bg-darkBlue shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Navigation links={navLinks} onLinkClick={() => setMenuOpen(false)} />
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Main Content */}
        <main className="flex-grow pt-[72px] md:pt-[96px] w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-darkBlue text-light py-8 mt-auto">
          <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
            <FooterSection title="Contact Us">
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:17036390911"
                  className="text-orbitBlue hover:text-azureBlue transition"
                >
                  1-703-639-0911
                </a>
              </p>
              <p>
                6862 Elm St. Ste 300 <br />
                McLean, VA 22101-3886
              </p>
            </FooterSection>

            <FooterSection title="Follow Us">
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/company/orbisoperations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orbitBlue hover:text-azureBlue transition"
                  aria-label="Follow us on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </FooterSection>

            <FooterSection title="Legal">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Orbis Operations LLC. All rights reserved.
              </p>
              <p>
                Contact us:{" "}
                <a
                  href="mailto:impact@orbisops.com"
                  className="text-orbitBlue hover:text-azureBlue transition"
                >
                  impact@orbisops.com
                </a>
              </p>
              <p>
                <Link href="/privacy" className="text-orbitBlue hover:text-azureBlue transition">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/terms" className="text-orbitBlue hover:text-azureBlue transition">
                  Terms of Use
                </Link>
              </p>
            </FooterSection>
          </div>
        </footer>
      </body>
    </html>
  );
}