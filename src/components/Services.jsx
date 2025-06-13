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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-6 auto-rows-[140px] gap-4 w-full max-w-xl mx-auto"
        >
          {/* Imagen vertical grande */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative col-span-3 row-span-3 rounded-xl overflow-hidden shadow-lg group"
            whileHover={{
              scale: 1.04,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <Image
              src="/services/serv1.jpg"
              alt="1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Imagen horizontal */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative col-span-3 row-span-2 rounded-xl overflow-hidden shadow-md group"
            whileHover={{
              scale: 1.04,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/services/serv2.jpg"
              alt="2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Imagen cuadrada */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative col-span-3 row-span-2 rounded-xl overflow-hidden shadow-md group"
            whileHover={{
              scale: 1.04,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/services/serv3.jpg"
              alt="3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Imagen pequeña debajo de la vertical */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative col-span-3 row-span-1 col-start-1 row-start-4 rounded-xl overflow-hidden shadow-md group"
            whileHover={{
              scale: 1.04,
              rotate: 1,
              transition: { duration: 0.2 },
            }}
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/services/serv4.jpg"
              alt="4"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Lista de servicios */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-700">
            Servicios
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-neutral-600">
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
                <span className="text-base text-gray-600">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
