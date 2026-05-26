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

function SubPageHero({ eyebrow, title, subtitle, showPortrait }: { eyebrow: string; title: string; subtitle: string; showPortrait?: boolean }) {
  return (
    <section
      className="relative pt-36 pb-20 px-6 overflow-hidden"
      style={{ background: "#0F2019" }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(90,143,120,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Portrait for despre-avocat page */}
      {showPortrait && (
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0F2019 0%, transparent 30%, transparent 70%, #0F2019 100%)",
              zIndex: 1,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, #0F2019 0%, transparent 15%, transparent 75%, #0F2019 100%)",
              zIndex: 1,
            }}
          />
          <Image
            src="/avocat.jpg"
            alt="Oancea Emil Teodor"
            fill
            className="object-cover object-top opacity-25"
            sizes="50vw"
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-70"
            style={{ color: "rgba(212,232,222,0.45)" }}
          >
            <span className="text-xs">←</span>
            Înapoi la pagina principală
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-8" style={{ background: "rgba(212,232,222,0.3)" }} />
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-medium"
            style={{ color: "rgba(212,232,222,0.45)" }}
          >
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5 text-white"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg sm:text-xl max-w-2xl"
          style={{ color: "rgba(212,232,222,0.55)", fontStyle: "italic" }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8"
        >
          <a
            href="tel:+40745127656"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "#1B3A2D", color: "#F0EBE0", border: "1px solid rgba(212,232,222,0.15)" }}
          >
            +40 745 127 656
            <span className="text-xs opacity-60">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SubPageContent({ intro, sections }: { intro: string; sections: Section[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6" style={{ background: "#F0EBE0" }}>
      <div className="max-w-3xl mx-auto">
        {/* Intro */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg sm:text-xl leading-relaxed mb-14"
          style={{
            color: "#1A1714",
            fontFamily: '"Times New Roman", Times, serif',
            fontStyle: "italic",
          }}
        >
          {intro}
        </motion.p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <SectionBlock key={section.title} section={section} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-[1.5rem] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            background: "#0F2019",
            border: "1px solid rgba(212,232,222,0.08)",
          }}
        >
          <div>
            <p
              className="text-lg font-bold mb-1 text-white"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Aveți nevoie de asistență juridică?
            </p>
            <p className="text-sm" style={{ color: "rgba(212,232,222,0.45)" }}>
              Contactați-mă pentru o consultație.
            </p>
          </div>
          <a
            href="tel:+40745127656"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: "#F0EBE0", color: "#1B3A2D" }}
          >
            +40 745 127 656
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center gap-2 shrink-0">
        <span
          className="text-[11px] font-bold tracking-widest"
          style={{ color: "#5A8F78" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="w-px flex-1 min-h-[40px]" style={{ background: "rgba(27,58,45,0.12)" }} />
      </div>
      <div className="pb-4">
        <h2
          className="text-xl font-bold mb-3"
          style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
        >
          {section.title}
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#68635E" }}>
          {section.content}
        </p>
      </div>
    </motion.div>
  );
}
