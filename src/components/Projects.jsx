"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    title: "Casa en el Bosque",
    location: "Bariloche, Río Negro",
    images: ["/arq1.jpg", "/arq2.jpg", "/arq3.jpg"],
  },
  {
    title: "Vivienda Urbana",
    location: "Palermo, Buenos Aires",
    images: ["/arq1.jpg", "/arq2.jpg", "/arq3.jpg"],
  },
  {
    title: "Oficinas Modulares",
    location: "Córdoba Capital",
    images: ["/arq1.jpg", "/arq2.jpg", "/arq3.jpg"],
  },
  {
    title: "Reforma Integral",
    location: "Rosario, Santa Fe",
    images: ["/arq1.jpg", "/arq2.jpg", "/arq3.jpg"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Una selección de obras que reflejan mi enfoque contemporáneo,
          funcional y sensible al entorno.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer hover:scale-105 transition duration-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            onClick={() => setSelected(project)}
            whileHover={{ boxShadow: "0 20px 20px rgba(0, 0, 0, 0.5)" }}
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover transform group-hover:scale-120 transition duration-400"
            />
            <div className="absolute bottom-0 left-0 bg-neutral-600 right-0 bg-opacity-40 p-4 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
