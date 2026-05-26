"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image + overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(11,26,18,0.72) 0%, rgba(11,26,18,0.55) 40%, rgba(11,26,18,0.80) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 0%, transparent 40%, rgba(11,26,18,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* Decorative top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,232,222,0.4), transparent)" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-10" style={{ background: "rgba(212,232,222,0.5)" }} />
          <span
            className="text-[11px] uppercase tracking-[0.3em] font-medium"
            style={{ color: "rgba(212,232,222,0.7)" }}
          >
            Avocat Penalist · Baroul Cluj
          </span>
          <div className="h-px w-10" style={{ background: "rgba(212,232,222,0.5)" }} />
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-sm uppercase tracking-[0.4em] mb-4"
          style={{ color: "rgba(212,232,222,0.55)" }}
        >
          Oancea Emil Teodor
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Dreptul tău,{" "}
          <span className="italic" style={{ color: "#D4E8DE" }}>
            apărat
          </span>
          <br />
          cu fermitate.
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mt-7 text-base sm:text-lg max-w-xl leading-relaxed italic"
          style={{ color: "rgba(255,255,255,0.50)" }}
        >
          &ldquo;Salus populi suprema lex esto.&rdquo;
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className="mt-4 text-sm sm:text-base max-w-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Specializat în drept penal, cu o experienţă solidă în apărarea persoanelor
          acuzate în dosare complexe, urmărire penală și judecată. Cluj-Napoca.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="tel:+40745127656"
            className="group flex items-center gap-3 px-7 py-4 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105"
            style={{ background: "#1B3A2D", color: "#F0EBE0", border: "1px solid rgba(212,232,222,0.2)" }}
          >
            +40 745 127 656
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ background: "rgba(212,232,222,0.15)" }}
            >
              ↗
            </span>
          </a>
          <button
            onClick={() => scrollTo("#practici")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium border transition-all duration-300 hover:bg-white/8"
            style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(255,255,255,0.18)" }}
          >
            Arii de practică
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(212,232,222,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
