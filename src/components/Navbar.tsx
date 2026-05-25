"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Acasă", href: "#hero" },
  { label: "Servicii", href: "#servicii" },
  { label: "Despre", href: "#despre" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating pill nav */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(253,251,247,0.85)"
              : "rgba(253,251,247,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,169,110,0.2)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(13,27,42,0.08), 0 1px 0 rgba(255,255,255,0.8) inset"
              : "0 4px 16px rgba(13,27,42,0.04)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleLink("#hero"); }}
            className="flex items-center gap-2 shrink-0"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "var(--gold)" }}
            >
              AI
            </div>
            <span
              className="text-sm font-semibold tracking-wide hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
            >
              Alexandru Ionescu
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-black/5"
                style={{ color: "var(--navy)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLink("#contact"); }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              style={{ background: "var(--navy)" }}
            >
              Consultație
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{ background: "rgba(201,169,110,0.3)" }}
              >
                ↗
              </span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 relative"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="block w-5 h-px rounded-full"
                style={{ background: "var(--navy)" }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="block w-5 h-px rounded-full"
                style={{ background: "var(--navy)" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "rgba(253,251,247,0.95)",
              backdropFilter: "blur(24px)",
            }}
          >
            <nav className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                  className="text-3xl font-medium tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.06, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                onClick={(e) => { e.preventDefault(); handleLink("#contact"); }}
                className="mt-4 px-8 py-3 rounded-full text-white text-sm font-medium"
                style={{ background: "var(--navy)" }}
              >
                Consultație Gratuită
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
