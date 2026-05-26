"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const C = {
  bg:       "#EDEAE3",
  bgAlt:    "#E5E1D8",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

const inputStyle = {
  width: "100%",
  padding: "12px 0",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${C.rule}`,
  color: C.ink,
  fontSize: 15,
  fontFamily: '"Times New Roman", Times, serif',
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: C.inkMuted,
  fontFamily: '"Times New Roman", Times, serif',
  display: "block",
  marginBottom: 4,
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: C.navy, padding: "96px 24px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          style={{
            fontSize: 11,
            color: "rgba(237,234,227,0.45)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontFamily: '"Times New Roman", Times, serif',
            margin: "0 0 16px 0",
          }}
        >
          Luați legătura
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          style={{
            fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
            fontSize: 64,
            fontWeight: 300,
            color: C.navyText,
            margin: "0 0 24px 0",
            lineHeight: 1.05,
          }}
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          style={{
            height: 1,
            background: "rgba(237,234,227,0.18)",
            transformOrigin: "0%",
            marginBottom: 64,
          }}
        />

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            {[
              { label: "Telefon", value: "+40 745 127 656", href: "tel:+40745127656" },
              { label: "Adresă", value: "Strada Eroilor Nr. 10, Cluj-Napoca", href: null },
              { label: "Baroul", value: "Baroul Cluj", href: null },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  borderBottom: "1px solid rgba(237,234,227,0.12)",
                  padding: "24px 0",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(237,234,227,0.35)",
                    fontFamily: '"Times New Roman", Times, serif',
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontSize: 17,
                      fontFamily: '"Times New Roman", Times, serif',
                      color: C.navyText,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: 17,
                      fontFamily: '"Times New Roman", Times, serif',
                      color: C.navyText,
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
              style={{
                marginTop: 32,
                height: 200,
                overflow: "hidden",
                border: "1px solid rgba(237,234,227,0.12)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.2814548584095!2d23.58851731564441!3d46.77068117913823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1e0b765a73%3A0x6b83a5a271ed7bc9!2sStrada%20Eroilor%2C%20Cluj-Napoca!5e0!3m2!1sro!2sro!4v1620000000000!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) brightness(0.5) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            style={{
              background: C.navyText,
              padding: "48px",
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "48px 0",
                  textAlign: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    border: `1px solid ${C.rule}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    color: C.inkMuted,
                  }}
                >
                  ✓
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
                    fontSize: 28,
                    fontWeight: 300,
                    color: C.ink,
                  }}
                >
                  Mesaj trimis
                </p>
                <p style={{ fontSize: 14, color: C.inkMuted, fontFamily: '"Times New Roman", Times, serif' }}>
                  Voi lua legătura cu dumneavoastră în cel mai scurt timp.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
                    fontSize: 28,
                    fontWeight: 300,
                    color: C.ink,
                    margin: 0,
                  }}
                >
                  Solicitați o consultație
                </h3>

                {[
                  { name: "name", label: "Nume complet", type: "text", placeholder: "Ioan Popescu" },
                  { name: "phone", label: "Telefon", type: "tel", placeholder: "+40 7xx xxx xxx" },
                  { name: "email", label: "Email", type: "email", placeholder: "email@exemplu.ro" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} style={labelStyle}>{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = C.inkMuted; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = C.rule; }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" style={labelStyle}>Descriere situație</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Descrieți pe scurt situația dumneavoastră..."
                    required
                    style={{
                      ...inputStyle,
                      resize: "none",
                      paddingTop: 12,
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderBottomColor = C.inkMuted; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderBottomColor = C.rule; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: C.navy,
                    color: C.navyText,
                    border: "none",
                    padding: "14px 32px",
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: '"Times New Roman", Times, serif',
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "0.82"; }}
                  onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                >
                  {loading ? (
                    <>
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          border: `2px solid ${C.navyText}`,
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Se trimite...
                    </>
                  ) : (
                    "Trimite mesajul →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
