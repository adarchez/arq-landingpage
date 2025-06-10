"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollSpy from "@/hooks/useScrollSpy";

const sections = ["hero", "about", "projects", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSpy(sections, 80);

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Nosotros", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray/10 bg-opacity-10 backdrop-blur-md shadow-md text-gray">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <motion.a
            href="#hero"
            className="text-xl font-bold text-primary"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            EstudioArq
          </motion.a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 relative">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-1 py-1 cursor-pointer text-white hover:text-black transition font-medium"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-white rounded shadow"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    layout
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black bg-opacity-90 text-white flex flex-col px-4 py-4 space-y-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
