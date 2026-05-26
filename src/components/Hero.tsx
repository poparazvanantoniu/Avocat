"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* ─── Palette ──────────────────────────────────────────── */
const C = {
  bg:       "#EDEAE3",
  bgAlt:    "#E5E1D8",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

/* ─── Shared easing ────────────────────────────────────── */
const ease = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  /* Ref for the whole section — drives scroll progress */
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax: image shifts 18% upward as the section scrolls out */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight:      "100dvh",
        background:     C.bg,
        display:        "flex",
        flexDirection:  "column",
        overflow:       "hidden",
      }}
    >
      {/* ══════════════════════════════════════════
          TOP — editorial split
      ══════════════════════════════════════════ */}
      <div
        className="hero-grid"
        style={{
          flex:                "1 0 auto",
          display:             "grid",
          gridTemplateColumns: "55fr 45fr",
          gap:                 0,
          padding:             "clamp(88px, 14vh, 152px) clamp(24px, 6vw, 96px) clamp(48px, 7vh, 88px)",
          alignItems:          "end",
        }}
      >
        {/* ── LEFT: display name ─────────────────── */}
        <div
          style={{
            paddingRight: "clamp(24px, 4vw, 64px)",
            borderRight:  `1px solid ${C.rule}`,
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease }}
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          14,
              marginBottom: "clamp(20px, 3vh, 40px)",
            }}
          >
            <div
              style={{
                width:      28,
                height:     1,
                background: C.inkMuted,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize:      11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color:         C.inkMuted,
                fontFamily:    '"Times New Roman", Times, serif',
              }}
            >
              Avocat Penalist · Baroul Cluj
            </span>
          </motion.div>

          {/* Massive display name */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            style={{
              fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize:      "clamp(72px, 10vw, 160px)",
              fontWeight:    300,
              letterSpacing: "-0.02em",
              lineHeight:    0.95,
              color:         C.ink,
            }}
          >
            Oancea Emil
            <br />
            Teodor
          </motion.h1>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58, ease }}
            style={{ marginTop: "clamp(24px, 3.5vh, 40px)" }}
          >
            <a
              href="tel:+40745127656"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            8,
                background:     C.navy,
                color:          C.navyText,
                borderRadius:   9999,
                padding:        "12px 28px",
                fontSize:       13,
                letterSpacing:  "0.04em",
                textDecoration: "none",
                fontFamily:     '"Times New Roman", Times, serif',
                transition:     "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.82";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Consultație gratuită →
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: italic quote ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.44, ease }}
          style={{
            paddingLeft:    "clamp(24px, 4vw, 64px)",
            display:        "flex",
            flexDirection:  "column",
            justifyContent: "flex-end",
            paddingBottom:  4,
          }}
        >
          <blockquote>
            <p
              style={{
                fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize:      "clamp(17px, 1.55vw, 22px)",
                fontWeight:    400,
                fontStyle:     "italic",
                lineHeight:    1.6,
                color:         C.ink,
                marginBottom:  22,
              }}
            >
              „Un avocat bun nu doar cunoaște legea, el o trăiește.
              Atunci când ai stat și de partea cealaltă a balanței,
              înveți să respecți greutatea fiecărui argument."
            </p>
            <footer
              style={{
                fontSize:      12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:         C.inkMuted,
                fontFamily:    '"Times New Roman", Times, serif',
              }}
            >
              — Oancea Emil Teodor
            </footer>
          </blockquote>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          Horizontal rule
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.05, delay: 0.62, ease: [0.32, 0.72, 0, 1] }}
        style={{
          height:          1,
          background:      C.rule,
          transformOrigin: "left",
          margin:          "0 clamp(24px, 6vw, 96px)",
          flexShrink:      0,
        }}
      />

      {/* ══════════════════════════════════════════
          BOTTOM — full-width image with parallax
      ══════════════════════════════════════════ */}
      <div
        className="hero-image-wrap"
        style={{
          position:   "relative",
          overflow:   "hidden",
          aspectRatio: "16 / 5",
          flexShrink: 0,
        }}
      >
        {/* Parallax layer */}
        <motion.div
          style={{
            position:            "absolute",
            inset:               "-12% 0",
            backgroundImage:     "url('/hero.jpg')",
            backgroundSize:      "cover",
            backgroundPosition:  "center 40%",
            backgroundRepeat:    "no-repeat",
            y:                   imageY,
          }}
        />

        {/* Top-edge scrim — blends image into paper */}
        <div
          style={{
            position:       "absolute",
            inset:          0,
            background:     `linear-gradient(to bottom, ${C.bg}28 0%, transparent 28%)`,
            pointerEvents:  "none",
          }}
        />

        {/* Floating info card — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.9, ease }}
          style={{
            position:   "absolute",
            bottom:     "clamp(16px, 3vw, 36px)",
            right:      "clamp(16px, 3vw, 36px)",
            background: C.bg,
            border:     `1px solid ${C.rule}`,
            padding:    "clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 32px)",
            maxWidth:   340,
            boxShadow:  "0 12px 48px rgba(0,0,0,0.13)",
          }}
        >
          <p
            style={{
              fontFamily:   "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize:     18,
              fontWeight:   400,
              lineHeight:   1.48,
              color:        C.ink,
              marginBottom: 16,
            }}
          >
            Fiecare caz merită atenție.
            Spuneți-ne situația dumneavoastră.
          </p>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            6,
              fontSize:       11,
              letterSpacing:  "0.16em",
              textTransform:  "uppercase",
              color:          C.inkMuted,
              textDecoration: "none",
              borderBottom:   `1px solid ${C.rule}`,
              paddingBottom:  2,
              fontFamily:     '"Times New Roman", Times, serif',
              transition:     "color 0.18s, border-color 0.18s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = C.ink;
              el.style.borderBottomColor = C.inkMuted;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.color = C.inkMuted;
              el.style.borderBottomColor = C.rule;
            }}
          >
            → Contact
          </Link>
        </motion.div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: clamp(100px, 16vh, 144px) !important;
          }
          .hero-grid > div:first-child {
            border-right: none !important;
            padding-right: 0 !important;
            border-bottom: 1px solid ${C.rule};
            padding-bottom: clamp(28px, 5vh, 48px);
            margin-bottom: clamp(28px, 5vh, 48px);
          }
          .hero-grid > div:last-child {
            padding-left: 0 !important;
          }
          .hero-image-wrap {
            aspect-ratio: 4 / 3 !important;
          }
        }
        @media (max-width: 479px) {
          .hero-image-wrap {
            aspect-ratio: 1 / 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
