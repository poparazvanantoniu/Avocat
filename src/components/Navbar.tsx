"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Palette ──────────────────────────────────────────── */
const C = {
  bg:       "#EDEAE3",
  bgAlt:    "#E5E1D8",
  bgGlass:  "rgba(237,234,227,0.92)",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

/* ─── Navigation links ─────────────────────────────────── */
const NAV_LINKS = [
  { label: "Acasă",           href: "#hero" },
  { label: "Arii de practică", href: "#practici" },
  { label: "Despre avocat",   href: "#despre" },
  { label: "Testimoniale",    href: "#testimoniale" },
  { label: "Contact",         href: "#contact" },
] as const;

/* ─── OET monogram / scales mark ──────────────────────── */
function OETMark() {
  return (
    <div
      aria-hidden="true"
      style={{
        width:           36,
        height:          36,
        background:      C.navy,
        color:           C.navyText,
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        flexShrink:      0,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical staff */}
        <line x1="10" y1="2"  x2="10" y2="17" stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        {/* Base */}
        <line x1="6"  y1="17" x2="14" y2="17" stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        {/* Crossbar */}
        <line x1="3"  y1="6"  x2="17" y2="6"  stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        {/* Left chain */}
        <line x1="3"  y1="6"  x2="3"  y2="10" stroke={C.navyText} strokeWidth="0.8" strokeLinecap="round" />
        {/* Right chain */}
        <line x1="17" y1="6"  x2="17" y2="10" stroke={C.navyText} strokeWidth="0.8" strokeLinecap="round" />
        {/* Left pan */}
        <path d="M1 10 Q3 13.5 5 10"  stroke={C.navyText} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        {/* Right pan */}
        <path d="M15 10 Q17 13.5 19 10" stroke={C.navyText} strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ─── Full-screen menu overlay ─────────────────────────── */
function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const scrollTo = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 320);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position:       "fixed",
            inset:          0,
            zIndex:         49,
            background:     C.bg,
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "flex-start",
            justifyContent: "center",
            padding:        "0 clamp(32px, 8vw, 120px)",
          }}
        >
          {/* Cabinet label — top right */}
          <span
            style={{
              position:       "absolute",
              top:            32,
              right:          "clamp(32px, 8vw, 120px)",
              fontSize:       11,
              letterSpacing:  "0.26em",
              textTransform:  "uppercase",
              color:          C.inkMuted,
              fontFamily:     '"Times New Roman", Times, serif',
            }}
          >
            Cabinet Avocat
          </span>

          {/* Thin top rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position:        "absolute",
              top:             72,
              left:            "clamp(32px, 8vw, 120px)",
              right:           "clamp(32px, 8vw, 120px)",
              height:          1,
              background:      C.rule,
              transformOrigin: "left",
            }}
          />

          {/* Nav items */}
          <nav aria-label="Meniu principal">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <motion.button
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -28 }}
                    transition={{
                      delay:    0.06 + i * 0.07,
                      duration: 0.46,
                      ease:     [0.32, 0.72, 0, 1],
                    }}
                    onClick={() => scrollTo(link.href)}
                    style={{
                      fontFamily:     "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                      fontSize:       "clamp(40px, 6vw, 82px)",
                      fontWeight:     300,
                      letterSpacing:  "-0.02em",
                      lineHeight:     1.08,
                      color:          C.ink,
                      background:     "none",
                      border:         "none",
                      cursor:         "pointer",
                      textAlign:      "left",
                      padding:        "2px 0",
                      display:        "block",
                      transition:     "color 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = C.inkMuted;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = C.ink;
                    }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ delay: 0.44, duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position:        "absolute",
              bottom:          48,
              left:            "clamp(32px, 8vw, 120px)",
              right:           "clamp(32px, 8vw, 120px)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "space-between",
              borderTop:       `1px solid ${C.rule}`,
              paddingTop:      24,
            }}
          >
            <a
              href="tel:+40745127656"
              style={{
                fontSize:       14,
                letterSpacing:  "0.04em",
                color:          C.inkMuted,
                textDecoration: "none",
                fontFamily:     '"Times New Roman", Times, serif',
                transition:     "color 0.18s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = C.ink;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = C.inkMuted;
              }}
            >
              +40 745 127 656
            </a>
            <span
              style={{
                fontSize:      11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         C.inkMuted,
                fontFamily:    '"Times New Roman", Times, serif',
              }}
            >
              Baroul Cluj
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Navbar ──────────────────────────────────────── */
export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detect scroll to show/hide border */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Lock body scroll when overlay is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Bar ────────────────────────────────────── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.32, 0.72, 0, 1] }}
        style={{
          position:              "sticky",
          top:                   0,
          left:                  0,
          right:                 0,
          zIndex:                50,
          background:            C.bgGlass,
          backdropFilter:        "blur(20px)",
          WebkitBackdropFilter:  "blur(20px)",
          borderBottom:          scrolled
            ? `1px solid ${C.rule}`
            : "1px solid transparent",
          transition:            "border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth:    1440,
            margin:      "0 auto",
            padding:     "0 clamp(20px, 4vw, 56px)",
            height:      64,
            display:     "flex",
            alignItems:  "center",
            gap:         12,
          }}
        >
          {/* ── Logo ─────────────────────────────── */}
          <Link
            href="/"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            12,
              textDecoration: "none",
              flexShrink:     0,
            }}
          >
            <OETMark />
            {/* Name — hidden on mobile */}
            <span
              className="nav-name"
              style={{
                fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize:      17,
                fontWeight:    500,
                letterSpacing: "0.01em",
                color:         C.ink,
                whiteSpace:    "nowrap",
              }}
            >
              Oancea Emil Teodor
            </span>
          </Link>

          {/* ── Spacer ───────────────────────────── */}
          <div style={{ flex: 1 }} />

          {/* ── Dark pill: phone ─────────────────── */}
          <a
            href="tel:+40745127656"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            7,
              background:     C.navy,
              color:          C.navyText,
              borderRadius:   9999,
              padding:        "10px 20px",
              fontSize:       13,
              fontWeight:     400,
              letterSpacing:  "0.02em",
              textDecoration: "none",
              whiteSpace:     "nowrap",
              flexShrink:     0,
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
            0745 127 656
            <span aria-hidden="true" style={{ fontSize: 13 }}>☎</span>
          </a>

          {/* ── Light pill: tagline (desktop only) ─ */}
          <button
            className="nav-tagline-pill"
            onClick={() => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              alignItems:    "center",
              gap:           6,
              background:    "transparent",
              color:         C.ink,
              border:        `1px solid ${C.rule}`,
              borderRadius:  9999,
              padding:       "10px 20px",
              fontSize:      13,
              cursor:        "pointer",
              whiteSpace:    "nowrap",
              letterSpacing: "0.01em",
              flexShrink:    0,
              fontFamily:    '"Times New Roman", Times, serif',
              transition:    "background 0.2s, border-color 0.2s",
              /* hidden by default — shown via CSS media query below */
              display:       "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = C.bgAlt;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Prima întâlnire, primul pas.
            <span style={{ fontSize: 15, lineHeight: 1 }} aria-hidden="true"> ›</span>
          </button>

          {/* ── Menu + toggle ─────────────────────── */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Închide meniu" : "Deschide meniu"}
            aria-expanded={open}
            style={{
              display:       "flex",
              alignItems:    "center",
              gap:           6,
              background:    "none",
              border:        `1px solid ${C.rule}`,
              borderRadius:  9999,
              padding:       "9px 16px",
              fontSize:      13,
              color:         C.ink,
              cursor:        "pointer",
              letterSpacing: "0.04em",
              flexShrink:    0,
              fontFamily:    '"Times New Roman", Times, serif',
              transition:    "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = C.bgAlt;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "none";
            }}
          >
            <span>{open ? "Închide" : "Meniu"}</span>
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              style={{ display: "inline-block", fontSize: 18, lineHeight: 1, fontWeight: 300 }}
              aria-hidden="true"
            >
              +
            </motion.span>
          </button>
        </div>
      </motion.header>

      {/* Responsive helpers */}
      <style>{`
        /* Show lawyer name on sm+ */
        @media (max-width: 479px) {
          .nav-name { display: none !important; }
        }
        /* Show tagline pill on md+ */
        @media (min-width: 768px) {
          .nav-tagline-pill { display: flex !important; }
        }
      `}</style>

      {/* Full-screen overlay */}
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ─── Extend React.CSSProperties for webkit prefix ──── */
declare module "react" {
  interface CSSProperties {
    WebkitBackdropFilter?: string;
  }
}
