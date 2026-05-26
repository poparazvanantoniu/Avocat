"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const credentials = [
  {
    title: "Judecător",
    body: "Experiență directă în sistemul judiciar. Cunoaște cum gândește un judecător, ce argumente contează și cum sunt luate deciziile în sala de judecată.",
  },
  {
    title: "Procuror",
    body: "A construit dosare de acuzare. Știe exact ce caută parchetul, cum sunt evaluate probele și unde pot fi identificate vulnerabilitățile acuzării.",
  },
  {
    title: "Avocat Penalist",
    body: "Toate acestea puse în slujba apărării dumneavoastră. O viziune completă a sistemului juridic, de la toate unghiurile.",
  },
];

export default function About() {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });

  const credentialsRef = useRef<HTMLDivElement>(null);
  const credentialsInView = useInView(credentialsRef, { once: true, margin: "-80px" });

  return (
    <div id="despre" style={{ background: "#EDEAE3" }}>
      {/* ── SUBSECTION A: Ce ne definește ── */}
      <section style={{ padding: "96px 24px", background: "#EDEAE3" }}>
        <div
          ref={philosophyRef}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontSize: 11,
                color: "#6B6460",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontFamily: '"Times New Roman", Times, serif',
                margin: "0 0 16px 0",
              }}
            >
              Despre avocat
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
                fontSize: 56,
                fontWeight: 300,
                color: "#111111",
                lineHeight: 1.1,
                margin: "0 0 28px 0",
              }}
            >
              Ce ne definește
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontSize: 16,
                color: "#6B6460",
                lineHeight: 1.8,
                fontFamily: '"Times New Roman", Times, serif',
                margin: 0,
                maxWidth: 480,
              }}
            >
              Dreptul nu este doar o profesie — este o responsabilitate. Tot ceea
              ce facem este ghidat de principii clare: onestitate față de client,
              pregătire temeinică a cazului și reprezentare dedicată în fiecare
              moment al procesului.
            </motion.p>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={philosophyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            style={{
              flexShrink: 0,
              width: 340,
              aspectRatio: "3/4",
              position: "relative",
              boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/hero.jpg"
              alt="Avocat — Ce ne definește"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── SUBSECTION B: Experiență unică (navy) ── */}
      <section style={{ background: "#1A1928", padding: "96px 24px" }}>
        <div
          ref={credentialsRef}
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
              fontSize: 48,
              fontWeight: 300,
              color: "#EDEAE3",
              textAlign: "center",
              margin: "0 0 48px 0",
              lineHeight: 1.15,
            }}
          >
            O perspectivă pe care puțini avocați o au
          </motion.h2>

          {/* Two-column: credentials grid + portrait */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 64,
              alignItems: "flex-start",
            }}
          >
            {/* Left: three credential cards */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 32,
                }}
              >
                {credentials.map((cred, i) => (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.12,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      borderTop: "2px solid rgba(237,234,227,0.2)",
                      paddingTop: 24,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
                        fontSize: 28,
                        fontWeight: 400,
                        color: "#EDEAE3",
                        margin: "0 0 14px 0",
                        lineHeight: 1.2,
                      }}
                    >
                      {cred.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "rgba(237,234,227,0.6)",
                        lineHeight: 1.75,
                        fontFamily: '"Times New Roman", Times, serif',
                        margin: 0,
                      }}
                    >
                      {cred.body}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA link */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.32, 0.72, 0, 1] }}
                style={{ marginTop: 40 }}
              >
                <Link
                  href="/despre-avocat"
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(237,234,227,0.3)",
                    color: "#EDEAE3",
                    padding: "12px 32px",
                    borderRadius: 9999,
                    fontSize: 14,
                    fontFamily: '"Times New Roman", Times, serif',
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    transition: "background 0.25s ease, border-color 0.25s ease",
                  }}
                >
                  Află mai multe →
                </Link>
              </motion.div>
            </div>

            {/* Right: portrait */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={credentialsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              style={{
                flexShrink: 0,
                width: 240,
                height: 300,
                position: "relative",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/avocat.jpg"
                alt="Avocat Oancea Emil Teodor"
                fill
                sizes="240px"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
