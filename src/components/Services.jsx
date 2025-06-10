"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    "Diseño de viviendas a medida",
    "Proyectos comerciales y oficinas",
    "Gestiones en barrios cerrados zona sur",
    "Habilitaciones comerciales",
    "Gestiones municipales",
    "Proyecto y Dirección",
    "Obras no declaradas (empadronamientos)",
    "Declaraciones juradas Arba (avalúos)",
    "Asesoramiento técnico y normativo",
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Collage de imágenes */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="row-span-2">
            <Image
              src="/obra1.jpg"
              alt="Obra 1"
              width={600}
              height={800}
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>
          <Image
            src="/obra2.jpg"
            alt="Obra 2"
            width={300}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
          <Image
            src="/obra3.jpg"
            alt="Obra 3"
            width={300}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </motion.div>

        {/* Lista de servicios */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicios</h2>
          <p className="text-lg text-gray-600 mb-6">
            Acompaño cada etapa del proyecto arquitectónico, combinando visión
            creativa, conocimiento técnico y compromiso con el resultado.
          </p>
          <ul className="space-y-4">
            {services.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                <span className="text-base text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
