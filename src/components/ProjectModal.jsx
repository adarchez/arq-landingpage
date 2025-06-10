"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!project) return null;

  const goToSlide = (idx) => {
    instanceRef.current?.moveToIdx(idx);
  };

  const nextSlide = () => {
    instanceRef.current?.next();
  };

  const prevSlide = () => {
    instanceRef.current?.prev();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-neutral-300 rounded-xl shadow-xl p-6 max-w-5xl w-full relative overflow-y-auto max-h-[95vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Cerrar */}
          <button
            onClick={onClose}
            className="absolute top-2 right-1 bg-black text-white hover:bg-neutral-700 hover:text-white rounded-full shadow"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Flechas */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="keen-slider rounded-lg overflow-hidden"
            >
              {project.images.map((img, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <Image
                    src={img}
                    alt={`Slide ${idx}`}
                    width={1000}
                    height={600}
                    className="object-cover w-full h-[400px] sm:h-[500px]"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-300 z-10"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-300 z-10"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex mt-4 gap-2 justify-center">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`cursor-pointer border-2 rounded-md overflow-hidden transition ${
                  idx === currentSlide
                    ? "border-black"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  width={100}
                  height={60}
                  className="object-cover w-[100px] h-[60px]"
                />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{project.location}</p>
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              fringilla euismod sem, a finibus lorem pharetra sed. Praesent in
              dignissim purus. Donec non lectus neque. Pellentesque ut nisi in
              justo sodales fermentum nec sed erat. Morbi ultricies nulla vitae
              lacus fermentum, quis laoreet odio aliquam.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
