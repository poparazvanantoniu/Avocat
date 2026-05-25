"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(201,169,110,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 60%),
            var(--navy)
          `,
        }}
      />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-8" style={{ background: "var(--gold)" }} />
          <span
            className="text-[11px] uppercase tracking-[0.25em] font-medium"
            style={{ color: "var(--gold)" }}
          >
            Cabinet de Avocatură
          </span>
          <div className="h-px w-8" style={{ background: "var(--gold)" }} />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Dreptul tău,{" "}
          <span className="italic" style={{ color: "var(--gold)" }}>
            apărat
          </span>
          <br />
          cu dedicare.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Peste 20 de ani de experiență în drept civil, comercial și penal.
          Reprezentare juridică de excelență pentru persoane fizice și companii.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-3 px-7 py-4 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            Consultație Gratuită
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ background: "rgba(13,27,42,0.15)" }}
            >
              →
            </span>
          </button>
          <button
            onClick={() => scrollTo("#servicii")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium border transition-all duration-300 hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.15)" }}
          >
            Descoperă serviciile
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className="mt-20 flex items-center gap-8 sm:gap-16"
        >
          {[
            { value: "20+", label: "Ani de experiență" },
            { value: "98%", label: "Cazuri câștigate" },
            { value: "500+", label: "Clienți mulțumiți" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
