"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const areas = [
  {
    slug: "drept-penal",
    num: "01",
    title: "Drept Penal",
    description:
      "Apărare în dosare penale complexe — de la infracțiuni economice și corupție până la dosare de drept comun. Experiență vastă în faza de urmărire penală și judecată.",
  },
  {
    slug: "drept-civil",
    num: "02",
    title: "Drept Civil",
    description:
      "Litigii civile, contracte, răspundere civilă, moșteniri și partaje. Soluții juridice clare pentru situații complexe de drept privat.",
  },
  {
    slug: "drept-administrativ",
    num: "03",
    title: "Drept Administrativ",
    description:
      "Contestarea actelor administrative, litigii cu autoritățile statului, răspunderea patrimonială a administrației publice.",
  },
  {
    slug: "drept-fiscal",
    num: "04",
    title: "Drept Fiscal",
    description:
      "Consultanță și reprezentare în litigii fiscale, contestarea deciziilor ANAF, dosare penale cu componentă fiscală.",
  },
  {
    slug: "drept-comercial",
    num: "05",
    title: "Drept Comercial",
    description:
      "Înregistrare și restructurare societăților, litigii comerciale, recuperare creanțe, insolvență și faliment.",
  },
];

export default function PracticeAreas() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="practici"
      style={{ background: "#E5E1D8", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section heading */}
        <div ref={headingRef} style={{ marginBottom: 0 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
              fontSize: 64,
              fontWeight: 300,
              color: "#111111",
              margin: "0 0 24px 0",
              lineHeight: 1.05,
            }}
          >
            Arii de practică
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, originX: "0%" }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            style={{ height: 1, background: "#CCC8C0", marginBottom: 0, transformOrigin: "0%" }}
          />
        </div>

        {/* Area rows */}
        <div>
          {areas.map((area, i) => (
            <AreaRow key={area.slug} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaRow({
  area,
  index,
}: {
  area: (typeof areas)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.32, 0.72, 0, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #CCC8C0",
        background: hovered ? "rgba(26,25,40,0.04)" : "transparent",
        transition: "background 0.25s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 24,
          padding: "32px 0",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontSize: 12,
            color: "#6B6460",
            fontFamily: '"Times New Roman", Times, serif',
            letterSpacing: "0.05em",
            flexShrink: 0,
            width: 28,
            paddingTop: 8,
          }}
        >
          {area.num}
        </span>

        {/* Title + expandable description */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
              fontSize: 32,
              fontWeight: 400,
              color: "#111111",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {area.title}
          </h3>

          <AnimatePresence initial={false}>
            {hovered && (
              <motion.p
                key="desc"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  fontSize: 14,
                  color: "#6B6460",
                  lineHeight: 1.75,
                  fontFamily: '"Times New Roman", Times, serif',
                  margin: 0,
                  overflow: "hidden",
                  maxWidth: 560,
                }}
              >
                {area.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Link — right-aligned */}
        <Link
          href={`/${area.slug}`}
          style={{
            flexShrink: 0,
            fontSize: 14,
            color: "#111111",
            fontFamily: '"Times New Roman", Times, serif',
            textDecoration: "none",
            letterSpacing: "0.02em",
            paddingTop: 8,
            opacity: hovered ? 1 : 0.45,
            transition: "opacity 0.25s ease",
            whiteSpace: "nowrap",
          }}
        >
          Citește mai mult →
        </Link>
      </div>
    </motion.div>
  );
}
