"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Apărare Penală",
    description:
      "Reprezentare completă în dosare penale — de la prima audiere la pronunțarea sentinței. Strategie juridică riguroasă, adaptată fiecărui caz în parte.",
  },
  {
    num: "02",
    title: "Urmărire Penală",
    description:
      "Asistență în faza de urmărire penală: audierea ca suspect sau inculpat, prezența la percheziții, contestarea măsurilor preventive.",
  },
  {
    num: "03",
    title: "Recursuri și Contestații",
    description:
      "Atacarea hotărârilor nelegale sau netemeinice. Analiza detaliată a dosarului și construirea argumentelor pentru instanțele superioare.",
  },
  {
    num: "04",
    title: "Consultanță Juridică",
    description:
      "Evaluarea situației juridice, analiza riscurilor penale și sfaturi preventive pentru persoane fizice și entități juridice.",
  },
  {
    num: "05",
    title: "Reprezentare în Instanță",
    description:
      "Prezență activă și pledoarie susținută în fața instanțelor de judecată, cu pregătire temeinică a fiecărei etape procesuale.",
  },
];

export default function Services() {
  return (
    <section
      id="servicii"
      style={{ background: "#EDEAE3", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top rule */}
        <div style={{ height: 1, background: "#CCC8C0", marginBottom: 0 }} />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 0,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT: sticky column */}
          <div
            style={{
              width: "35%",
              flexShrink: 0,
              position: "sticky",
              top: 128,
              paddingTop: 40,
              paddingRight: 48,
              paddingBottom: 40,
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
                fontSize: 52,
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#111111",
                margin: "0 0 20px 0",
              }}
            >
              Cum vă
              <br />
              ajutăm
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B6460",
                lineHeight: 1.7,
                fontFamily: '"Times New Roman", Times, serif',
                margin: 0,
                maxWidth: 240,
              }}
            >
              Experiență complexă în apărarea intereselor dumneavoastră juridice.
            </p>
          </div>

          {/* RIGHT: scrolling service rows */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {services.map((service, i) => (
              <ServiceRow key={service.num} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.32, 0.72, 0, 1],
      }}
      style={{
        borderTop: "1px solid #CCC8C0",
        paddingTop: 40,
        paddingBottom: 40,
        display: "flex",
        alignItems: "flex-start",
        gap: 24,
      }}
    >
      {/* Circle number badge */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid #CCC8C0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 4,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "#6B6460",
            fontFamily: '"Times New Roman", Times, serif',
            letterSpacing: "0.05em",
          }}
        >
          {service.num}
        </span>
      </div>

      {/* Text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
            fontSize: 28,
            fontWeight: 500,
            color: "#111111",
            margin: "0 0 12px 0",
            lineHeight: 1.2,
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "#6B6460",
            lineHeight: 1.75,
            fontFamily: '"Times New Roman", Times, serif',
            margin: 0,
            maxWidth: 520,
          }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
