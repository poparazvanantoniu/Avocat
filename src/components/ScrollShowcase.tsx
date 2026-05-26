"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="overflow-hidden" style={{ background: "#F0EBE0" }}>
      <ContainerScroll
        titleComponent={
          <div ref={ref} className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8" style={{ background: "#1B3A2D" }} />
              <span
                className="text-[10px] uppercase tracking-[0.3em] font-medium"
                style={{ color: "#1B3A2D" }}
              >
                Abordare
              </span>
              <div className="h-px w-8" style={{ background: "#1B3A2D" }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
            >
              Fiecare dosar,{" "}
              <span className="italic" style={{ color: "#2B4A3C" }}>
                o strategie unică
              </span>
            </motion.h2>
          </div>
        }
      >
        {/* Card content — process steps */}
        <div
          className="h-full w-full p-6 md:p-8 flex flex-col justify-between"
          style={{ color: "#D4E8DE" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
            {[
              {
                num: "01",
                title: "Consultație",
                desc: "Analiza situației juridice, evaluarea riscurilor și stabilirea strategiei de apărare.",
              },
              {
                num: "02",
                title: "Documentare",
                desc: "Studiul dosarului, identificarea probelor favorabile și construirea argumentației.",
              },
              {
                num: "03",
                title: "Reprezentare",
                desc: "Apărare activă în fața organelor de urmărire penală și a instanțelor de judecată.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-3 p-5 rounded-2xl"
                style={{
                  background: "rgba(212,232,222,0.06)",
                  border: "1px solid rgba(212,232,222,0.1)",
                }}
              >
                <span
                  className="text-[11px] font-bold tracking-widest"
                  style={{ color: "#5A8F78" }}
                >
                  {step.num}
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: '"Times New Roman", Times, serif', color: "#D4E8DE" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(212,232,222,0.55)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl"
            style={{ background: "rgba(212,232,222,0.04)", border: "1px solid rgba(212,232,222,0.08)" }}
          >
            <span
              className="text-sm italic"
              style={{ color: "rgba(212,232,222,0.4)", fontFamily: '"Times New Roman", Times, serif' }}
            >
              Oancea Emil Teodor — Avocat Penalist · Baroul Cluj
            </span>
            <a
              href="tel:+40745127656"
              className="text-sm font-medium px-4 py-1.5 rounded-full transition-all hover:scale-105"
              style={{ background: "rgba(212,232,222,0.1)", color: "#D4E8DE" }}
            >
              +40 745 127 656
            </a>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
