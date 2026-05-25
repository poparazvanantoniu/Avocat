"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "Barou București — Avocat Definitiv",
  "Master în Drept European, Universitatea București",
  "Doctorand în Drept Civil",
  "Membru al Uniunii Naționale a Barourilor",
  "Cursuri internaționale: Paris, Viena, Bruxelles",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="despre"
      className="py-32 px-6 overflow-hidden"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            {/* Double-bezel portrait */}
            <div
              className="relative rounded-[2rem] p-2"
              style={{
                background: "rgba(13,27,42,0.06)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <div
                className="relative rounded-[1.5rem] overflow-hidden aspect-[3/4] flex items-end"
                style={{
                  background: "linear-gradient(160deg, var(--navy-mid) 0%, var(--navy) 100%)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.1)",
                }}
              >
                {/* Decorative gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 50% at 40% 30%, rgba(201,169,110,0.15) 0%, transparent 70%)",
                  }}
                />

                {/* Abstract law scales SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48 opacity-20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    style={{ color: "var(--gold)" }}
                  >
                    <circle cx="100" cy="100" r="80" />
                    <line x1="100" y1="20" x2="100" y2="180" />
                    <line x1="60" y1="60" x2="40" y2="120" />
                    <line x1="140" y1="60" x2="160" y2="120" />
                    <path d="M40 120 Q30 130 40 140 Q50 150 60 140 Q70 130 60 120 Z" />
                    <path d="M160 120 Q150 130 160 140 Q170 150 180 140 Q190 130 180 120 Z" />
                    <circle cx="100" cy="60" r="5" fill="currentColor" />
                  </svg>
                </div>

                {/* Name card at bottom */}
                <div
                  className="relative z-10 w-full p-6 m-3 rounded-[1rem]"
                  style={{
                    background: "rgba(13,27,42,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(201,169,110,0.15)",
                  }}
                >
                  <div className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: "var(--gold)" }}>
                    Fondator & Avocat
                  </div>
                  <div
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Alexandru Ionescu
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Barou București · din 2004
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="absolute -bottom-6 -right-4 lg:-right-8 px-5 py-4 rounded-2xl shadow-xl"
              style={{
                background: "var(--gold)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}>
                98%
              </div>
              <div className="text-[10px] uppercase tracking-wide font-medium" style={{ color: "rgba(13,27,42,0.6)" }}>
                Rată de succes
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-medium"
                style={{ color: "var(--gold)" }}
              >
                Despre Cabinet
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
            >
              Expertiză dovedită.
              <br />
              <em>Rezultate reale.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              Cabinetul de avocatură Alexandru Ionescu a fost fondat în 2004 cu misiunea
              de a oferi reprezentare juridică de cel mai înalt nivel, combinând rigoarea
              academică cu experiența practică solidă.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.32, 0.72, 0, 1] }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--muted)" }}
            >
              Fiecare client beneficiază de atenție personalizată, comunicare transparentă
              și o strategie juridică construită exclusiv pentru situația sa specifică.
              Nu suntem o firmă de volum — suntem partenerii tăi în momentele care contează.
            </motion.p>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="space-y-2.5"
            >
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--charcoal)" }}>
                    {cred}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 group flex items-center gap-3 px-7 py-4 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-105"
              style={{ background: "var(--navy)" }}
            >
              Programează consultație
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5"
                style={{ background: "rgba(201,169,110,0.25)" }}
              >
                →
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
