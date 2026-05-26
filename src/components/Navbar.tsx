"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Arii de practică", href: "#practici" },
  { label: "Despre mine", href: "#despre" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center justify-between gap-6 md:gap-10 px-5 py-3 rounded-full transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(253,251,247,0.90)"
              : "rgba(253,251,247,0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: scrolled
              ? "1px solid rgba(180,170,160,0.4)"
              : "1px solid rgba(180,170,160,0.2)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(11,26,18,0.10), 0 1px 0 rgba(255,255,255,0.8) inset"
              : "0 4px 16px rgba(11,26,18,0.05)",
          }}
        >
          {/* OET monogram */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tracking-wide"
              style={{
                background: "#1B3A2D",
                color: "#F0EBE0",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              OET
            </div>
            <span
              className="text-sm font-semibold tracking-wide hidden sm:block"
              style={{ color: "#1B3A2D", fontFamily: '"Times New Roman", Times, serif' }}
            >
              Oancea Emil Teodor
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-forest-700/8"
                style={{ color: "#1B3A2D" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+40745127656"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "#1B3A2D", color: "#F0EBE0" }}
            >
              +40 745 127 656
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Meniu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="block w-5 h-px rounded-full"
                style={{ background: "#1B3A2D" }}
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-px rounded-full"
                style={{ background: "#1B3A2D" }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="block w-5 h-px rounded-full"
                style={{ background: "#1B3A2D" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(253,251,247,0.97)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="text-3xl font-medium tracking-tight"
                  style={{ color: "#1B3A2D", fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="tel:+40745127656"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="mt-4 px-8 py-3 rounded-full text-sm font-medium"
                style={{ background: "#1B3A2D", color: "#F0EBE0" }}
              >
                +40 745 127 656
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
