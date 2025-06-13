"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-primary relative h-screen bg-cover bg-center text-white py-24 px-6"
      style={{ backgroundImage: "url('/arq5.jpg')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-100 [text-shadow:_1px_1px_2px_black]"
        >
          Diseño que trasciende el tiempo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 [text-shadow:_1px_1px_2px_black]"
        >
          Estudio de arquitectura enfocado en la funcionalidad, la estética y el
          detalle.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 px-6 py-3 bg-white text-black hover:text-neutral-100 rounded-full text-lg font-medium hover:bg-gray-800 transition flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Ver proyectos </span>
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 px-6 py-3 bg-white text-black hover:text-neutral-100 rounded-full text-lg font-medium hover:bg-gray-800 transition flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Mail size={18} />
            <span>Contactarme</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
