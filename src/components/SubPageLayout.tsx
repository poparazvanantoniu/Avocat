"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const C = {
  bg:       "#EDEAE3",
  bgAlt:    "#E5E1D8",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

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
    <section
      style={{
        position:   "relative",
        background: C.navy,
        padding:    "clamp(120px, 18vh, 180px) clamp(24px, 6vw, 96px) clamp(64px, 10vh, 100px)",
        overflow:   "hidden",
      }}
    >
      {/* Portrait bleed for about page */}
      {showPortrait && (
        <div
          style={{
            position:   "absolute",
            inset:      0,
            overflow:   "hidden",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position:   "absolute",
              inset:      0,
              zIndex:     1,
              background: `linear-gradient(to right, ${C.navy} 45%, rgba(26,25,40,0.6) 70%, transparent 100%)`,
            }}
          />
          <Image
            src="/avocat.jpg"
            alt="Oancea Emil Teodor"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "top right", opacity: 0.18 }}
          />
        </div>
      )}

      {/* Animated top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        style={{
          position:        "absolute",
          top:             0,
          left:            "clamp(24px, 6vw, 96px)",
          right:           "clamp(24px, 6vw, 96px)",
          height:          1,
          background:      "rgba(237,234,227,0.15)",
          transformOrigin: "left",
          zIndex:          2,
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{ marginBottom: 48 }}
        >
          <Link
            href="/"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            8,
              fontSize:       12,
              letterSpacing:  "0.1em",
              textTransform:  "uppercase",
              color:          "rgba(237,234,227,0.35)",
              textDecoration: "none",
              fontFamily:     '"Times New Roman", Times, serif',
              transition:     "color 0.18s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.7)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.35)"; }}
          >
            ← Pagina principală
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
          style={{
            fontSize:      11,
            color:         "rgba(237,234,227,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontFamily:    '"Times New Roman", Times, serif',
            margin:        "0 0 20px 0",
          }}
        >
          {eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.32, 0.72, 0, 1] }}
          style={{
            fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize:      "clamp(56px, 8vw, 112px)",
            fontWeight:    300,
            color:         C.navyText,
            lineHeight:    1.0,
            margin:        "0 0 28px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.32, 0.72, 0, 1] }}
          style={{
            fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize:      "clamp(17px, 1.6vw, 22px)",
            fontStyle:     "italic",
            fontWeight:    400,
            color:         "rgba(237,234,227,0.55)",
            lineHeight:    1.6,
            maxWidth:      600,
            margin:        "0 0 40px 0",
          }}
        >
          {subtitle}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease: [0.32, 0.72, 0, 1] }}
          style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
        >
          <a
            href="tel:+40745127656"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            8,
              background:     C.navyText,
              color:          C.navy,
              borderRadius:   9999,
              padding:        "11px 28px",
              fontSize:       13,
              fontFamily:     '"Times New Roman", Times, serif',
              letterSpacing:  "0.04em",
              textDecoration: "none",
              transition:     "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.82"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            +40 745 127 656
          </a>
          <Link
            href="/#contact"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            8,
              background:     "transparent",
              color:          "rgba(237,234,227,0.55)",
              border:         "1px solid rgba(237,234,227,0.2)",
              borderRadius:   9999,
              padding:        "11px 28px",
              fontSize:       13,
              fontFamily:     '"Times New Roman", Times, serif',
              letterSpacing:  "0.04em",
              textDecoration: "none",
              transition:     "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = C.navyText;
              el.style.borderColor = "rgba(237,234,227,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = "rgba(237,234,227,0.55)";
              el.style.borderColor = "rgba(237,234,227,0.2)";
            }}
          >
            Solicitați consultație →
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
    <section style={{ background: C.bg, padding: "80px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Intro pull-quote */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 20 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          style={{
            borderLeft:  `3px solid ${C.navy}`,
            paddingLeft: 32,
            marginBottom: 72,
          }}
        >
          <p
            style={{
              fontFamily:  "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize:    "clamp(20px, 2vw, 26px)",
              fontStyle:   "italic",
              fontWeight:  400,
              lineHeight:  1.6,
              color:       C.ink,
              margin:      0,
            }}
          >
            {intro}
          </p>
        </motion.div>

        {/* Section rows */}
        <div>
          {sections.map((section, i) => (
            <SectionRow key={section.title} section={section} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
}

function SectionRow({ section, index }: { section: Section; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      style={{
        display:      "flex",
        gap:          32,
        alignItems:   "flex-start",
        padding:      "40px 0",
        borderBottom: `1px solid ${C.rule}`,
      }}
    >
      {/* Number */}
      <span
        style={{
          fontSize:      12,
          color:         C.inkMuted,
          fontFamily:    '"Times New Roman", Times, serif',
          letterSpacing: "0.05em",
          flexShrink:    0,
          width:         28,
          paddingTop:    6,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2
          style={{
            fontFamily:   "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize:     28,
            fontWeight:   400,
            color:        C.ink,
            margin:       "0 0 14px 0",
            lineHeight:   1.2,
          }}
        >
          {section.title}
        </h2>
        <p
          style={{
            fontSize:   15,
            lineHeight: 1.8,
            color:      C.inkMuted,
            fontFamily: '"Times New Roman", Times, serif',
            margin:     0,
          }}
        >
          {section.content}
        </p>
      </div>
    </motion.div>
  );
}

function BottomCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      style={{
        marginTop:  72,
        background: C.navy,
        padding:    "48px",
        display:    "flex",
        flexDirection: "column",
        gap:        24,
      }}
    >
      <div>
        <p
          style={{
            fontFamily:  "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize:    36,
            fontWeight:  300,
            color:       C.navyText,
            margin:      "0 0 12px 0",
            lineHeight:  1.2,
          }}
        >
          Aveți nevoie de asistență juridică?
        </p>
        <p
          style={{
            fontSize:   14,
            fontFamily: '"Times New Roman", Times, serif',
            color:      "rgba(237,234,227,0.45)",
            margin:     0,
          }}
        >
          Primul pas este o discuție confidențială despre situația dumneavoastră.
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <a
          href="tel:+40745127656"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            background:     C.navyText,
            color:          C.navy,
            borderRadius:   9999,
            padding:        "12px 28px",
            fontSize:       13,
            fontFamily:     '"Times New Roman", Times, serif',
            textDecoration: "none",
            letterSpacing:  "0.04em",
            transition:     "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.82"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          +40 745 127 656
        </a>
        <Link
          href="/#contact"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            background:     "transparent",
            color:          "rgba(237,234,227,0.55)",
            border:         "1px solid rgba(237,234,227,0.2)",
            borderRadius:   9999,
            padding:        "12px 28px",
            fontSize:       13,
            fontFamily:     '"Times New Roman", Times, serif',
            textDecoration: "none",
            letterSpacing:  "0.04em",
            transition:     "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = C.navyText;
            el.style.borderColor = "rgba(237,234,227,0.45)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "rgba(237,234,227,0.55)";
            el.style.borderColor = "rgba(237,234,227,0.2)";
          }}
        >
          Trimiteți un mesaj →
        </Link>
      </div>
    </motion.div>
  );
}
