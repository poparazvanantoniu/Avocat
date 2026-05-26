"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const C = {
  bg:       "#EDEAE3",
  bgAlt:    "#E5E1D8",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

const testimonials = [
  {
    id: 1,
    name: "Andrei Moldovan",
    role: "Antreprenor, Cluj-Napoca",
    text: "Am apelat la dl. Oancea într-un dosar penal extrem de complicat. Profesionalismul, calmul și cunoașterea profundă a legii m-au convins că sunt în mâini sigure. Rezultatul a fost achitarea completă.",
    initials: "AM",
  },
  {
    id: 2,
    name: "Elena Popa",
    role: "Director financiar",
    text: "Într-un moment de maximă presiune, dl. avocat Oancea a gestionat totul cu discreție și eficiență. Mi-a explicat fiecare pas al procesului și a obținut soluția pe care o speram.",
    initials: "EP",
  },
  {
    id: 3,
    name: "Bogdan Iliescu",
    role: "Administrator de firmă",
    text: "Recomand cu toată încrederea. A rezolvat un dosar de evaziune fiscală care părea imposibil de câștigat. Argumentele juridice au fost impecabile, iar conduita față de client — exemplară.",
    initials: "BI",
  },
  {
    id: 4,
    name: "Mihaela Drăghici",
    role: "Medic specialist",
    text: "Dl. Oancea mi-a apărat onoarea și cariera profesională. A fost disponibil în orice moment, iar cunoașterea legii penale a fost impresionantă. Un avocat care luptă cu adevărat pentru tine.",
    initials: "MD",
  },
  {
    id: 5,
    name: "Răzvan Costea",
    role: "Inginer constructor",
    text: "Am trecut printr-o situație dificilă și nu știam unde să mă îndrept. Dl. Oancea m-a ghidat cu răbdare, mi-a explicat drepturile și a obținut clasarea dosarului. Îi sunt profund recunoscător.",
    initials: "RC",
  },
  {
    id: 6,
    name: "Cristina Varga",
    role: "Profesoară universitară",
    text: "Discreție absolută, strategie clară și rezultate concrete. Dl. avocat Oancea a demonstrat că experiența și dedicarea fac diferența în sala de judecată. Un profesionist autentic.",
    initials: "CV",
  },
];

export default function StaggerTestimonials() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, active]);

  const handleNav = (dir: "prev" | "next") => {
    setAutoplay(false);
    setActive((prev) =>
      dir === "next"
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div ref={ref} style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
      {/* Stagger cards behind */}
      {isInView && [2, 1].map((offset) => (
        <motion.div
          key={offset}
          initial={{ opacity: 0, y: offset * 10, scale: 1 - offset * 0.03 }}
          animate={{ opacity: 1 - offset * 0.35, y: offset * 10, scale: 1 - offset * 0.03 }}
          transition={{ duration: 0.6, delay: offset * 0.08, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: C.bg,
            border: `1px solid ${C.rule}`,
            transformOrigin: "bottom center",
            marginLeft: offset * 10,
            marginRight: offset * 10,
            zIndex: -offset,
          }}
        />
      ))}

      {/* Main card */}
      <div
        style={{
          background: C.bg,
          border: `1px solid ${C.rule}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              x: i === active ? 0 : i < active ? -32 : 32,
            }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: i === active ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              padding: "clamp(32px, 5vw, 56px)",
            }}
          >
            {/* Opening mark */}
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: 72,
                lineHeight: 0.7,
                color: C.rule,
                marginBottom: 20,
                fontWeight: 300,
              }}
            >
              &ldquo;
            </p>

            {/* Quote */}
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(19px, 2vw, 24px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: C.ink,
                marginBottom: 32,
              }}
            >
              {t.text}
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: C.navy,
                  color: C.navyText,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  fontFamily: '"Times New Roman", Times, serif',
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: '"Times New Roman", Times, serif',
                    color: C.ink,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: C.inkMuted,
                    fontFamily: '"Times New Roman", Times, serif',
                    marginTop: 2,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          paddingTop: 20,
          borderTop: `1px solid ${C.rule}`,
        }}
      >
        {/* Dots */}
        <div style={{ display: "flex", gap: 8 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setActive(i); }}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active ? C.navy : C.rule,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => handleNav("prev")}
            style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: `1px solid ${C.rule}`,
              color: C.inkMuted,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = C.inkMuted; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = C.rule; }}
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handleNav("next")}
            style={{
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: C.navy,
              border: "none",
              color: C.navyText,
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.82"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
            aria-label="Următor"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
