"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "#0F2019" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8" style={{ background: "rgba(212,232,222,0.4)" }} />
              <span
                className="text-[10px] uppercase tracking-[0.3em] font-medium"
                style={{ color: "rgba(212,232,222,0.5)" }}
              >
                Luați legătura
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-white"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Contact
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col gap-5"
            >
              {[
                {
                  label: "Telefon",
                  value: "+40 745 127 656",
                  href: "tel:+40745127656",
                },
                {
                  label: "Adresă",
                  value: "Strada Eroilor Nr. 10, Cluj-Napoca",
                  href: "https://maps.google.com/?q=Strada+Eroilor+10+Cluj-Napoca",
                },
                {
                  label: "Baroul",
                  value: "Baroul Cluj",
                  href: null,
                },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: "rgba(212,232,222,0.35)" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base font-medium transition-colors duration-200 hover:opacity-80"
                      style={{ color: "#D4E8DE" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-base font-medium" style={{ color: "#D4E8DE" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="mt-8 rounded-[1.25rem] overflow-hidden"
              style={{
                border: "1px solid rgba(212,232,222,0.1)",
                height: 220,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.2814548584095!2d23.58851731564441!3d46.77068117913823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1e0b765a73%3A0x6b83a5a271ed7bc9!2sStrada%20Eroilor%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1620000000000!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div
              className="rounded-[2rem] p-1"
              style={{
                background: "rgba(212,232,222,0.06)",
                border: "1px solid rgba(212,232,222,0.1)",
              }}
            >
              <div
                className="rounded-[1.625rem] p-7"
                style={{
                  background: "rgba(21,46,33,0.6)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="flex flex-col items-center justify-center py-10 text-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ background: "rgba(212,232,222,0.12)" }}
                    >
                      ✓
                    </div>
                    <p className="text-lg font-medium text-white" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                      Mesaj trimis cu succes
                    </p>
                    <p className="text-sm" style={{ color: "rgba(212,232,222,0.5)" }}>
                      Voi lua legătura cu dumneavoastră în cel mai scurt timp.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      Solicitați o consultație
                    </h3>

                    {[
                      { name: "name", label: "Nume complet", type: "text", placeholder: "Ioan Popescu" },
                      { name: "phone", label: "Telefon", type: "tel", placeholder: "+40 7xx xxx xxx" },
                      { name: "email", label: "Email", type: "email", placeholder: "email@exemplu.ro" },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label
                          htmlFor={field.name}
                          className="text-[11px] uppercase tracking-wider"
                          style={{ color: "rgba(212,232,222,0.4)" }}
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 placeholder:opacity-30"
                          style={{
                            background: "rgba(212,232,222,0.06)",
                            border: "1px solid rgba(212,232,222,0.12)",
                            color: "#F0EBE0",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "rgba(212,232,222,0.35)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(212,232,222,0.12)";
                          }}
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-[11px] uppercase tracking-wider"
                        style={{ color: "rgba(212,232,222,0.4)" }}
                      >
                        Descriere situație
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Descrieți pe scurt situația dumneavoastră..."
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none placeholder:opacity-30"
                        style={{
                          background: "rgba(212,232,222,0.06)",
                          border: "1px solid rgba(212,232,222,0.12)",
                          color: "#F0EBE0",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(212,232,222,0.35)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(212,232,222,0.12)";
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="relative flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                      style={{ background: "#F0EBE0", color: "#1B3A2D" }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
                          />
                          Se trimite...
                        </>
                      ) : (
                        "Trimite mesajul"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
