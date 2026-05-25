"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "⚖️",
    eyebrow: "01",
    title: "Drept Civil",
    description:
      "Contracte, moșteniri, divorțuri, partaje și litigii civile complexe. Protejăm drepturile și interesele tale în instanță cu argumentație solidă.",
    tags: ["Contracte", "Moșteniri", "Divorț", "Litigii"],
  },
  {
    icon: "🏢",
    eyebrow: "02",
    title: "Drept Comercial",
    description:
      "Constituirea și restructurarea societăților, contracte comerciale, insolvență și recuperare de creanțe pentru antreprenori și companii.",
    tags: ["SRL/SA", "Insolvență", "Creanțe", "Fuziuni"],
  },
  {
    icon: "🛡️",
    eyebrow: "03",
    title: "Drept Penal",
    description:
      "Apărare în dosare penale, reprezentare în faza de urmărire și judecată, recursuri și contestații. Confidențialitate absolută garantată.",
    tags: ["Apărare", "Recursuri", "Urmărire", "Judecată"],
  },
  {
    icon: "🏠",
    eyebrow: "04",
    title: "Drept Imobiliar",
    description:
      "Verificarea actelor de proprietate, tranzacții imobiliare, litigii de grănicuire și evacuare, retrocedări și recuperarea proprietăților.",
    tags: ["Proprietate", "Tranzacții", "Evacuare", "Retrocedare"],
  },
  {
    icon: "👥",
    eyebrow: "05",
    title: "Dreptul Muncii",
    description:
      "Contracte de muncă, litigii de muncă, concedieri abuzive, clauze de neconcurență și protecția drepturilor angajaților și angajatorilor.",
    tags: ["Contracte", "Concedieri", "Litigii", "GDPR"],
  },
  {
    icon: "🌍",
    eyebrow: "06",
    title: "Drept European",
    description:
      "Consultanță în drept european, reprezentare la CJUE, aplicarea regulamentelor și directivelor europene în litigii naționale.",
    tags: ["CJUE", "Regulamente", "Directive", "CEDO"],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicii" className="py-32 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="mb-3 flex items-center gap-2"
            >
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-medium"
                style={{ color: "var(--gold)" }}
              >
                Arii de Practică
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
            >
              Servicii juridice
              <br />
              <span className="italic">complete</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Fiecare caz este abordat cu atenție maximă, strategie clară și angajament total față de succesul clientului.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.eyebrow} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
      className="group relative p-1.5 rounded-[1.5rem] transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(13,27,42,0.04)",
        border: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      {/* Inner card */}
      <div
        className="relative rounded-[1.25rem] p-6 h-full flex flex-col gap-4 transition-all duration-500 group-hover:bg-white/80"
        style={{
          background: "rgba(253,251,247,0.8)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)",
        }}
      >
        {/* Number + icon */}
        <div className="flex items-start justify-between">
          <span
            className="text-[11px] font-bold tracking-widest"
            style={{ color: "var(--gold)" }}
          >
            {service.eyebrow}
          </span>
          <span className="text-2xl">{service.icon}</span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide font-medium"
              style={{
                background: "rgba(201,169,110,0.12)",
                color: "var(--gold)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <div
          className="absolute bottom-6 right-6 w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
          style={{ background: "var(--navy)", color: "white" }}
        >
          →
        </div>
      </div>
    </motion.div>
  );
}
