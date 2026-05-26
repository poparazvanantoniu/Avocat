"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section {
  title: string;
  content: string;
}

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: Section[];
  showPortrait?: boolean;
}

export default function SubPageLayout({ eyebrow, title, subtitle, intro, sections, showPortrait }: Props) {
  return (
    <>
      <Navbar />
      <main>
        <SubPageHero eyebrow={eyebrow} title={title} subtitle={subtitle} showPortrait={showPortrait} />
        <SubPageContent intro={intro} sections={sections} />
      </main>
      <Footer />
    </>
  );
}

function SubPageHero({ eyebrow, title, subtitle, showPortrait }: {
  eyebrow: string; title: string; subtitle: string; showPortrait?: boolean;
}) {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ background: "#0B1A12" }}>
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 10% 90%, rgba(43,74,60,0.35) 0%, transparent 60%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 40% at 90% 20%, rgba(27,58,45,0.2) 0%, transparent 60%)",
      }} />

      {/* Portrait bg for despre-avocat */}
      {showPortrait && (
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block pointer-events-none overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0B1A12 0%, rgba(11,26,18,0.5) 40%, transparent 100%)", zIndex: 1 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0B1A12 0%, transparent 30%)", zIndex: 1 }} />
          <Image src="/avocat.jpg" alt="Oancea Emil Teodor" fill className="object-cover object-top opacity-20" sizes="45vw" />
        </div>
      )}

      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,232,222,0.2), transparent)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm group"
            style={{ color: "rgba(212,232,222,0.35)" }}>
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Înapoi la pagina principală
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ background: "rgba(212,232,222,0.25)" }} />
          <span className="text-[10px] uppercase tracking-[0.35em] font-medium"
            style={{ color: "rgba(212,232,222,0.4)" }}>{eyebrow}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg sm:text-xl max-w-xl leading-relaxed italic mb-10"
          style={{ color: "rgba(212,232,222,0.5)" }}>
          {subtitle}
        </motion.p>

        {/* CTA row */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-wrap items-center gap-3">
          <a href="tel:+40745127656"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "#1B3A2D", color: "#F0EBE0", border: "1px solid rgba(212,232,222,0.12)" }}>
            +40 745 127 656
          </a>
          <Link href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-70"
            style={{ color: "rgba(212,232,222,0.45)", border: "1px solid rgba(212,232,222,0.1)" }}>
            Solicitați consultație
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SubPageContent({ intro, sections }: { intro: string; sections: Section[] }) {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6" style={{ background: "#F0EBE0" }}>
      <div className="max-w-4xl mx-auto">

        {/* Intro card */}
        <motion.div ref={introRef}
          initial={{ opacity: 0, y: 20 }} animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 p-8 rounded-[1.5rem]"
          style={{
            background: "#0F2019",
            border: "1px solid rgba(212,232,222,0.08)",
          }}>
          <p className="text-xl leading-relaxed italic text-white"
            style={{ fontFamily: '"Times New Roman", Times, serif', color: "rgba(255,255,255,0.8)" }}>
            {intro}
          </p>
        </motion.div>

        {/* Section cards grid */}
        <div className="flex flex-col gap-4">
          {sections.map((section, i) => (
            <SectionCard key={section.title} section={section} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
}

function SectionCard({ section, index }: { section: Section; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
      className="group"
    >
      <div className="rounded-[1.5rem] p-1"
        style={{ background: "rgba(27,58,45,0.06)", border: "1px solid rgba(27,58,45,0.1)" }}>
        <div className="rounded-[1.25rem] p-7 transition-all duration-300 group-hover:bg-white/60"
          style={{ background: "#FDFBF7", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}>
          <div className="flex items-start gap-5">
            {/* Number badge */}
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold tracking-widest"
              style={{ background: "rgba(27,58,45,0.08)", color: "#1B3A2D" }}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold mb-3"
                style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}>
                {section.title}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#68635E" }}>
                {section.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BottomCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className="mt-14 rounded-[2rem] p-1"
      style={{ background: "rgba(11,26,18,0.08)", border: "1px solid rgba(27,58,45,0.12)" }}>
      <div className="rounded-[1.625rem] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ background: "#0B1A12" }}>
        <div>
          <p className="text-2xl font-bold mb-2 text-white"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Aveți nevoie de asistență juridică?
          </p>
          <p className="text-sm" style={{ color: "rgba(212,232,222,0.4)" }}>
            Primul pas este o discuție confidențială despre situația dumneavoastră.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href="tel:+40745127656"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "#F0EBE0", color: "#1B3A2D" }}>
            +40 745 127 656
          </a>
          <Link href="/#contact"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
            style={{ background: "rgba(212,232,222,0.08)", color: "#D4E8DE", border: "1px solid rgba(212,232,222,0.12)" }}>
            Mesaj
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
