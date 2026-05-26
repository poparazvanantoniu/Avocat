"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="despre"
      className="py-28 px-6 overflow-hidden"
      style={{ background: "#0F2019" }}
    >
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: text */}
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
                Persoana din spatele dosarului
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-6 text-white"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Oancea
              <br />
              <span className="italic" style={{ color: "#D4E8DE" }}>Emil Teodor</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Avocat înscris în Baroul Cluj, cu o practică solidă în drept penal.
              Am ales să profesez în domeniu nu dintr-un calcul, ci dintr-o convingere:
              că fiecare persoană merită o apărare corectă, indiferent de circumstanțe.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Abordez fiecare dosar cu atenție la detalii, comunicare transparentă
              și angajamentul de a obține cel mai bun rezultat posibil pentru clientul meu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <Link
                href="/despre-avocat"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(212,232,222,0.1)",
                  color: "#D4E8DE",
                  border: "1px solid rgba(212,232,222,0.2)",
                }}
              >
                Află mai multe
                <span className="text-xs opacity-60">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-[2rem] p-2"
              style={{
                background: "rgba(212,232,222,0.06)",
                border: "1px solid rgba(212,232,222,0.12)",
              }}
            >
              <div
                className="rounded-[1.5rem] overflow-hidden aspect-[4/5] flex flex-col justify-end"
                style={{
                  background: "linear-gradient(160deg, #152E21 0%, #0B1A12 100%)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Decorative gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse 70% 50% at 40% 30%, rgba(90,143,120,0.12) 0%, transparent 70%)",
                  }}
                />

                {/* Bottom info card */}
                <div
                  className="relative m-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(15,32,25,0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(212,232,222,0.1)",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#D4E8DE", fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    Oancea Emil Teodor
                  </p>
                  <p className="text-xs mb-3" style={{ color: "rgba(212,232,222,0.45)" }}>
                    Avocat Penalist · Baroul Cluj
                  </p>
                  <div className="flex gap-4">
                    {[
                      { v: "Baroul Cluj", l: "Înregistrat" },
                      { v: "Penalist", l: "Specializare" },
                    ].map((item) => (
                      <div key={item.l}>
                        <div className="text-xs font-semibold mb-0.5" style={{ color: "#D4E8DE" }}>
                          {item.v}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(212,232,222,0.35)" }}>
                          {item.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
