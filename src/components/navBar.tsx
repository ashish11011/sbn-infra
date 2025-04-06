'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavElement = {
  label: string;
  path: string;
};

const navElements: NavElement[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full bg-white md:shadow-md fixed top-0 left-0 z-[999]">
      <div className="flex items-center justify-between w-full py-4 md:py-6 px-6 md:px-10">
        {/* Logo */}
        <div className="relative h-8 w-auto min-w-36 md:min-w-44">
          <Image src="/logo.png" fill alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navElements.map((element) => (
            <Link
              key={element.path}
              href={element.path}
              className="text-black text-lg hover:underline underline-offset-4"
            >
              {element.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // initial="hidden"
            // animate="visible"
            // exit="hidden"
            // transition={{ duration: 0.3 }}
            className="md:hidden flex last:border-b last:border-gray-600-700 flex-col items-center gap-4 bg-white pt-4 pb-6"
          >
            {navElements.map((element, index) => (
              <motion.div
                key={element.path}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Link
                  href={element.path}
                  className="text-black text-lg font-semibold hover:text-gray-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {element.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
