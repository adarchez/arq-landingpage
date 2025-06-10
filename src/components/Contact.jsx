"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim())
      newErrors.message = "El mensaje no puede estar vacío";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
    setSendError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSending(true);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setSending(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setSending(false);
          setSendError("Error al enviar el mensaje, intenta más tarde.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Contacto</h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Campos */}
            {["name", "email", "message"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field === "name"
                    ? "Nombre"
                    : field === "email"
                    ? "Email"
                    : "Mensaje"}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows="4"
                    value={formData[field]}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 text-neutral-900 ${
                      errors[field]
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-black"
                    }`}
                    placeholder="Escribe tu mensaje aquí"
                    disabled={sending}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 text-neutral-900 ${
                      errors[field]
                        ? "border-red-500 focus:ring-red-800"
                        : "border-gray-300 focus:ring-black"
                    }`}
                    placeholder={
                      field === "name" ? "Tu nombre" : "tu@email.com"
                    }
                    disabled={sending}
                  />
                )}
                {errors[field] && (
                  <p className="mt-1 text-sm text-red-800">{errors[field]}</p>
                )}
              </div>
            ))}

            {/* Botón */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition disabled:opacity-50"
              disabled={sending}
            >
              {sending ? "Enviando..." : "Enviar"}
            </motion.button>

            {/* Mensajes */}
            {submitted && (
              <p className="mt-4 text-green-600 font-semibold">
                ¡Gracias por contactarnos, te responderemos pronto!
              </p>
            )}
            {sendError && (
              <p className="mt-4 text-red-600 font-semibold">{sendError}</p>
            )}
          </form>
        </div>

        {/* Información + Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6 text-gray-700"
        >
          <h3 className="text-2xl font-semibold">Información de contacto</h3>
          <p>
            <strong>Teléfono:</strong> +54 9 11 1234 5678
          </p>
          <p>
            <strong>Email:</strong> contacto@estudioarq.com
          </p>
          <p>
            <strong>Dirección:</strong> Alberti 607 Esq. Pueyrredón - Coronel
            Brandsen, Buenos Aires
          </p>

          {/* Mapa animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-64 rounded-xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.6315445624614!2d-58.237555330108414!3d-35.16580879807278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c9d35e38d237%3A0x785843aeca0af963!2sM.%20M.%20Alberti%20607%2C%20B1980DYN%20Coronel%20Brandsen%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1749511063527!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
