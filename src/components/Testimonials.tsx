"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Mihai Constantin",
    role: "Director General, TechVenture SRL",
    text: "Dl. Ionescu ne-a reprezentat într-un litigiu comercial complex de 2 ani. Strategia sa juridică a fost impecabilă, iar comunicarea constantă ne-a ținut mereu informați. Am câștigat cazul și am recuperat integral suma disputată.",
    stars: 5,
    initials: "MC",
  },
  {
    name: "Elena Dumitrescu",
    role: "Antreprenor",
    text: "Am apelat la cabinet pentru un dosar de divorț cu partaj complex. Profesionalismul și empatia cu care am fost tratată m-au impresionat profund. Totul a decurs rapid și cu rezultate excelente pentru mine și copiii mei.",
    stars: 5,
    initials: "ED",
  },
  {
    name: "Radu Popescu",
    role: "Arhitect",
    text: "Cabinet de excepție pentru dosarele penale. Dl. Ionescu a gestionat situația cu discreție totală și competență remarcabilă. Achitarea completă a confirmat că am ales cel mai bun avocat posibil.",
    stars: 5,
    initials: "RP",
  },
  {
    name: "Andreea Marinescu",
    role: "Medic",
    text: "Am recuperat o proprietate retrocedată greșit printr-un proces de 3 ani. Fără experiența și tenacitatea cabinetului Ionescu, nu aș fi reușit. Recomand cu toată încrederea pentru orice litigiu imobiliar.",
    stars: 5,
    initials: "AM",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimoniale"
      className="py-32 px-6 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-6" style={{ background: "var(--gold)" }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: "var(--gold)" }}>
              Ce spun clienții
            </span>
            <div className="h-px w-6" style={{ background: "var(--gold)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Încrederea clienților
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>
              vorbește pentru noi
            </span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              onMouseEnter={() => setActive(i)}
              className="relative p-1.5 rounded-[1.5rem] transition-all duration-500 cursor-default"
              style={{
                background:
                  active === i
                    ? "linear-gradient(135deg, rgba(201,169,110,0.4), rgba(201,169,110,0.1))"
                    : "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="rounded-[1.25rem] p-6 h-full flex flex-col gap-4"
                style={{
                  background: "rgba(13,27,42,0.6)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span key={si} className="text-sm" style={{ color: "var(--gold)" }}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mt-14 text-center"
        >
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            Alătură-te celor peste 500 de clienți mulțumiți
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            Solicită o consultație
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
              style={{ background: "rgba(13,27,42,0.2)" }}
            >
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
