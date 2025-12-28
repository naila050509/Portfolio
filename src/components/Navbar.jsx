import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "My Project", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 text-white"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* logo */}
        <a href="#home" className="text-4xl font-bold italic text-white">
          Portfolio
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((Link) => (
            <a
              key={Link.id}
              href={Link.href}
              className="hover:text-gray-200 text-lg"
            >
              {Link.name}
            </a>
          ))}
          <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
            {" "}
            Contact{" "}
          </button>
        </nav>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>
        {/* Mobile Navigation */}
        {NavbarLinks.map((Link) => (
          <a
            key={Link.id}
            href={Link.href}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {Link.name}
          </a>
        ))}
        {/* Contact button */}
        <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg">
          Contact
        </button>z
      </div>
    </header>
  );
}
