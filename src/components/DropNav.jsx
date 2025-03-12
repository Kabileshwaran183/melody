import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 p-4 flex justify-between items-center transition-all duration-300 
        ${isScrolled ? "bg-teal-400" : "bg-transparent"} px-6 md:pr-28 pl-10 z-50`}
    >
      
      <span className="text-white text-xl font-bold">Photography</span>

      
      <ul className="hidden md:flex items-center gap-6 text-white">
        <li>
          <a href="/" className="hover:text-gray-900 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#events" className="hover:text-gray-900 transition">
            Events
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-900 transition">
            About Us
          </a>
        </li>

        
        
        <li>
          <a href="#book" className="hover:text-gray-900 transition">
            Book Now
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </li>
      </ul>

     
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white text-2xl"
      >
        {isMobileMenuOpen ? <MdClose /> : <FiMenu />}
      </button>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-6 flex flex-col gap-4 z-50"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-3xl self-end hover:text-teal-400"
            >
              <MdClose />
            </button>
            <ul className="hidden md:flex items-center gap-6 text-white">
              <li>
                <a href="/" className="hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-gray-900 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-900 transition">
                  About Us
                </a>
              </li>



              <li>
                <a href="#book" className="hover:text-gray-900 transition">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
