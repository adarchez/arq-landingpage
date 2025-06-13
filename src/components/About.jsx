"use client";

import { motion } from "framer-motion";
import { Zap, Leaf, Award } from "lucide-react"; // íconos: innovación, sostenibilidad, experiencia

export default function About() {
  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-600 mb-3" />,
      title: "Innovación",
      description:
        "Incorporamos las últimas tendencias y tecnologías para ofrecer soluciones arquitectónicas únicas y modernas.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600 mb-3" />,
      title: "Sostenibilidad",
      description:
        "Nos comprometemos con prácticas eco-amigables para minimizar el impacto ambiental y promover el desarrollo sustentable.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500 mb-3" />,
      title: "Experiencia",
      description:
        "Más de 30 años diseñando proyectos residenciales, comerciales y urbanos con excelencia y profesionalismo.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto px-6 py-20 md:py-32 text-gray-800 bg-gradient-to-b from-white-900 via-neutral-400 to-white-900"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-700">
          Sobre Nosotros
        </h2>
        <p className="text-lg leading-relaxed text-neutral-600">
          Somos un estudio de arquitectura apasionado por diseñar espacios que
          combinan funcionalidad y estética, creando ambientes que inspiran y
          perduran en el tiempo. Nuestra filosofía se basa en el detalle, la
          innovación y la sostenibilidad.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
        {cards.map(({ icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
            className="rounded-lg p-6 shadow-md cursor-pointer select-none bg-white hover:shadow-lg"
          >
            {icon}
            <h3 className="text-xl font-semibold mb-3 text-neutral-700">
              {title}
            </h3>
            <p className="text-neutral-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

//VERSION CON FOTO EN 2 COLUMNAS
// 'use client'

// import { motion } from 'framer-motion'
// import { Zap, Leaf, Award } from 'lucide-react'
// import Image from 'next/image'

// export default function About() {
//   const cards = [
//     {
//       icon: <Zap className="w-6 h-6 text-indigo-600" />,
//       title: 'Innovación',
//       description:
//         'Aplicamos tecnología y diseño contemporáneo en cada proyecto.',
//     },
//     {
//       icon: <Leaf className="w-6 h-6 text-green-600" />,
//       title: 'Sostenibilidad',
//       description:
//         'Diseños conscientes con el medio ambiente y el uso responsable de recursos.',
//     },
//     {
//       icon: <Award className="w-6 h-6 text-yellow-500" />,
//       title: 'Experiencia',
//       description:
//         'Más de una década liderando proyectos residenciales y comerciales.',
//     },
//   ]

//   return (
//     <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-gray-800">
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         {/* Imagen */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-full"
//         >
//           <div className="overflow-hidden rounded-2xl shadow-xl">
//             <Image
//               src="/arquitecta.jpg"
//               alt="Arquitecta a cargo"
//               width={600}
//               height={700}
//               className="object-cover w-full h-full"
//               priority
//             />
//           </div>
//         </motion.div>

//         {/* Texto y tarjetas */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
//           <p className="text-lg leading-relaxed mb-8">
//             Soy arquitecta con una visión integral del diseño, enfocada en crear espacios que armonicen estética, funcionalidad y entorno. Mi compromiso es acompañar a cada cliente desde la idea hasta la concreción del proyecto.
//           </p>

//           <div className="grid gap-6">
//             {cards.map(({ icon, title, description }, i) => (
//               <motion.div
//                 key={title}
//                 className="flex items-start gap-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.2 }}
//               >
//                 <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
//                 <div>
//                   <h3 className="text-lg font-semibold">{title}</h3>
//                   <p className="text-sm text-gray-600">{description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
