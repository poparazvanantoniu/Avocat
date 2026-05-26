"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Andrei Moldovan",
    role: "Antreprenor, Cluj-Napoca",
    text: "Am apelat la dl. Oancea într-un dosar penal extrem de complicat. Profesionalismul, calmul și cunoașterea profundă a legii m-au convins că sunt în mâini sigure. Rezultatul a fost achitarea completă.",
    stars: 5,
    initials: "AM",
  },
  {
    id: 2,
    name: "Elena Popa",
    role: "Director financiar",
    text: "Într-un moment de maximă presiune, dl. avocat Oancea a gestionat totul cu discreție și eficiență. Mi-a explicat fiecare pas al procesului și a obținut soluția pe care o speram.",
    stars: 5,
    initials: "EP",
  },
  {
    id: 3,
    name: "Bogdan Iliescu",
    role: "Administrator de firmă",
    text: "Recomand cu toată încrederea. A rezolvat un dosar de evaziune fiscală care părea imposibil de câștigat. Argumentele juridice au fost impecabile, iar conduita față de client — exemplară.",
    stars: 5,
    initials: "BI",
  },
  {
    id: 4,
    name: "Mihaela Drăghici",
    role: "Medic specialist",
    text: "Dl. Oancea mi-a apărat onoarea și cariera profesională. A fost disponibil în orice moment, iar cunoașterea legii penale a fost impresionantă. Un avocat care luptă cu adevărat pentru tine.",
    stars: 5,
    initials: "MD",
  },
  {
    id: 5,
    name: "Răzvan Costea",
    role: "Inginer constructor",
    text: "Am trecut printr-o situație dificilă și nu știam unde să mă îndrept. Dl. Oancea m-a ghidat cu răbdare, mi-a explicat drepturile și a obținut clasarea dosarului. Îi sunt profund recunoscător.",
    stars: 5,
    initials: "RC",
  },
  {
    id: 6,
    name: "Cristina Varga",
    role: "Profesoară universitară",
    text: "Discreție absolută, strategie clară și rezultate concrete. Dl. avocat Oancea a demonstrat că experiența și dedicarea fac diferența în sala de judecată. Un profesionist autentic.",
    stars: 5,
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
    <div ref={ref} className="relative max-w-4xl mx-auto px-4">
      {/* Main card */}
      <div className="relative overflow-hidden rounded-[2rem] p-1" style={{
        background: "rgba(15,32,25,0.06)",
        border: "1px solid rgba(43,74,60,0.15)",
      }}>
        <div className="rounded-[1.625rem] overflow-hidden" style={{
          background: "#FDFBF7",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                x: i === active ? 0 : i < active ? -40 : 40,
                position: i === active ? "relative" : "absolute",
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="w-full p-8 md:p-12"
              style={{ top: 0, left: 0 }}
            >
              <div className="flex flex-col gap-6">
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(27,58,45,0.08)" }}
                >
                  <Quote size={18} style={{ color: "#1B3A2D" }} />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill="#6B4226"
                      stroke="none"
                      style={{ color: "#6B4226" }}
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif', fontStyle: "italic" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: "#1B3A2D" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#1A1714" }}>
                      {t.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#68635E" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 px-2">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setActive(i); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active ? "#1B3A2D" : "rgba(27,58,45,0.2)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => handleNav("prev")}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(27,58,45,0.08)",
              border: "1px solid rgba(27,58,45,0.12)",
              color: "#1B3A2D",
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handleNav("next")}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "#1B3A2D",
              color: "#F0EBE0",
            }}
            aria-label="Următor"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Stagger cards behind */}
      {isInView && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[1, 2].map((offset) => (
            <motion.div
              key={offset}
              initial={{ opacity: 0, y: offset * 12, scale: 1 - offset * 0.04 }}
              animate={{ opacity: 1 - offset * 0.3, y: offset * 12, scale: 1 - offset * 0.04 }}
              transition={{ duration: 0.6, delay: offset * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-x-0 rounded-[2rem] h-full"
              style={{
                background: "#FDFBF7",
                border: "1px solid rgba(43,74,60,0.1)",
                transformOrigin: "bottom center",
                top: 0,
                marginLeft: `${offset * 12}px`,
                marginRight: `${offset * 12}px`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
