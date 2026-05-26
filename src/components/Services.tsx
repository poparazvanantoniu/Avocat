"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Apărare penală",
    description:
      "Reprezentare completă în dosare penale — de la prima audiere la pronunțarea sentinței. Strategie juridică riguroasă, adaptată fiecărui caz.",
  },
  {
    num: "02",
    title: "Urmărire penală",
    description:
      "Asistență în faza de urmărire penală: audierea ca suspect sau inculpat, prezența la percheziții, contestarea măsurilor preventive.",
  },
  {
    num: "03",
    title: "Recursuri și contestații",
    description:
      "Atacarea hotărârilor nelegale sau netemeinice. Analiza detaliată a dosarului și construirea argumentelor pentru instanțele superioare.",
  },
  {
    num: "04",
    title: "Consultanță juridică",
    description:
      "Evaluarea situației juridice, analiza riscurilor penale și sfaturi preventive pentru persoane fizice și entități juridice.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6" style={{ background: "#F5F0E6" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8" style={{ background: "#1B3A2D" }} />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "#1B3A2D" }}
            >
              Ce putem face pentru dumneavoastră
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
          >
            Servicii juridice
            <br />
            <span className="italic" style={{ color: "#2B4A3C" }}>specializate</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i * 0.1} />
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
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
      className="group relative p-1 rounded-[1.5rem] transition-all duration-500 hover:-translate-y-0.5"
      style={{
        background: "rgba(15,32,25,0.04)",
        border: "1px solid rgba(27,58,45,0.12)",
      }}
    >
      <div
        className="rounded-[1.25rem] p-7 h-full flex flex-col gap-4 transition-all duration-500"
        style={{
          background: "#FDFBF7",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <span
          className="text-[11px] font-bold tracking-widest"
          style={{ color: "#5A8F78" }}
        >
          {service.num}
        </span>
        <h3
          className="text-xl font-bold"
          style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
        >
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#68635E" }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
