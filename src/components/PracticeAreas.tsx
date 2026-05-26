"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const areas = [
  {
    slug: "drept-penal",
    num: "01",
    title: "Drept Penal",
    description:
      "Apărare în dosare penale complexe — de la infracțiuni economice și corupție până la dosare de drept comun. Experiență vastă în faza de urmărire penală și judecată.",
    tags: ["Urmărire penală", "Judecată", "Recursuri", "Achitare"],
  },
  {
    slug: "drept-civil",
    num: "02",
    title: "Drept Civil",
    description:
      "Litigii civile, contracte, răspundere civilă, moșteniri și partaje. Soluții juridice clare pentru situații complexe de drept privat.",
    tags: ["Contracte", "Litigii", "Moșteniri", "Partaje"],
  },
  {
    slug: "drept-administrativ",
    num: "03",
    title: "Drept Administrativ",
    description:
      "Contestarea actelor administrative, litigii cu autoritățile statului, răspunderea patrimonială a administrației publice.",
    tags: ["Contencios", "Acte administrative", "Autorități", "Despăgubiri"],
  },
  {
    slug: "drept-fiscal",
    num: "04",
    title: "Drept Fiscal",
    description:
      "Consultanță și reprezentare în litigii fiscale, contestarea deciziilor ANAF, dosare penale cu componentă fiscală.",
    tags: ["ANAF", "Contestații", "Evaziune fiscală", "TVA"],
  },
  {
    slug: "drept-comercial",
    num: "05",
    title: "Drept Comercial",
    description:
      "Înregistrare și restructurare societăților, litigii comerciale, recuperare creanțe, insolvență și faliment.",
    tags: ["Societăți", "Insolvență", "Creanțe", "Fuziuni"],
  },
];

export default function PracticeAreas() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="practici" className="py-28 px-6" style={{ background: "#F0EBE0" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8" style={{ background: "#6B4226" }} />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "#6B4226" }}
            >
              Domenii de expertiză
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
          >
            Arii de practică
          </motion.h2>
        </div>

        <div className="flex flex-col gap-3">
          {areas.map((area, i) => (
            <AreaRow key={area.slug} area={area} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaRow({
  area,
  delay,
}: {
  area: (typeof areas)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
      className="group"
    >
      <div
        className="relative overflow-hidden p-1 rounded-[1.5rem] transition-all duration-500"
        style={{
          border: "1px solid rgba(107,66,38,0.12)",
          background: "rgba(107,66,38,0.03)",
        }}
      >
        <div
          className="rounded-[1.25rem] px-7 py-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-8 transition-all duration-500 group-hover:bg-white/70"
          style={{
            background: "#FDFBF7",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Number */}
          <span
            className="text-[11px] font-bold tracking-widest shrink-0"
            style={{ color: "#9A958F" }}
          >
            {area.num}
          </span>

          {/* Title + description */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
            >
              {area.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#68635E" }}>
              {area.description}
            </p>
          </div>

          {/* Tags */}
          <div className="hidden lg:flex flex-wrap gap-1.5 max-w-[180px] shrink-0">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium"
                style={{
                  background: "rgba(27,58,45,0.07)",
                  color: "#1B3A2D",
                  border: "1px solid rgba(27,58,45,0.1)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/${area.slug}`}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "#1B3A2D", color: "#F0EBE0" }}
          >
            Citește mai mult
            <span className="text-xs opacity-70">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
