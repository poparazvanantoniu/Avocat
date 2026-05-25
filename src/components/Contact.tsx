"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "", subject: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-6" style={{ background: "var(--gold)" }} />
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: "var(--gold)" }}>
                Contact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
            >
              Vorbim despre
              <br />
              <em>cazul tău</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              Prima consultație este gratuită și confidențială. Suntem disponibili să
              discutăm situația ta juridică și să identificăm cea mai bună soluție.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="space-y-5"
            >
              {[
                { icon: "📍", label: "Adresă", value: "Str. Aviatorilor 12, Sector 1, București" },
                { icon: "📞", label: "Telefon", value: "+40 721 234 567" },
                { icon: "✉️", label: "Email", value: "contact@ionescu-avocat.ro" },
                { icon: "🕐", label: "Program", value: "Lun–Vin: 09:00–18:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0"
                    style={{
                      background: "rgba(201,169,110,0.1)",
                      border: "1px solid rgba(201,169,110,0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "var(--muted)" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--navy)" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Emergency badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="mt-10 flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.25)",
              }}
            >
              <div className="text-xl">🚨</div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--gold)" }}>
                  Urgențe 24/7
                </div>
                <div className="text-sm" style={{ color: "var(--navy)" }}>
                  +40 721 234 500 — pentru rețineri sau restrângeri ale libertății
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div
              className="p-1.5 rounded-[2rem]"
              style={{
                background: "rgba(13,27,42,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
              }}
            >
              <div
                className="rounded-[1.5rem] p-8"
                style={{
                  background: "rgba(253,251,247,0.9)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)",
                }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-4xl mb-4">✅</div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
                    >
                      Mesaj trimis!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      Vă vom contacta în cel mult 2 ore lucrătoare.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
                    >
                      Trimite un mesaj
                    </h3>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                          Nume complet *
                        </label>
                        <input
                          required
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Ion Ionescu"
                          className="px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                          style={{
                            background: "rgba(13,27,42,0.04)",
                            border: "1px solid rgba(13,27,42,0.1)",
                            color: "var(--navy)",
                            outline: "none",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,27,42,0.1)")}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="ion@exemplu.ro"
                          className="px-4 py-3 rounded-xl text-sm"
                          style={{
                            background: "rgba(13,27,42,0.04)",
                            border: "1px solid rgba(13,27,42,0.1)",
                            color: "var(--navy)",
                            outline: "none",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(13,27,42,0.1)")}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+40 7xx xxx xxx"
                        className="px-4 py-3 rounded-xl text-sm"
                        style={{
                          background: "rgba(13,27,42,0.04)",
                          border: "1px solid rgba(13,27,42,0.1)",
                          color: "var(--navy)",
                          outline: "none",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(13,27,42,0.1)")}
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                        Domeniu juridic *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="px-4 py-3 rounded-xl text-sm appearance-none"
                        style={{
                          background: "rgba(13,27,42,0.04)",
                          border: "1px solid rgba(13,27,42,0.1)",
                          color: formState.subject ? "var(--navy)" : "var(--muted)",
                          outline: "none",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(13,27,42,0.1)")}
                      >
                        <option value="">Selectează domeniul</option>
                        <option value="civil">Drept Civil</option>
                        <option value="comercial">Drept Comercial</option>
                        <option value="penal">Drept Penal</option>
                        <option value="imobiliar">Drept Imobiliar</option>
                        <option value="munca">Dreptul Muncii</option>
                        <option value="european">Drept European</option>
                        <option value="altele">Altele</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                        Descrie situația ta *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Descrie pe scurt situația juridică cu care te confrunți..."
                        className="px-4 py-3 rounded-xl text-sm resize-none"
                        style={{
                          background: "rgba(13,27,42,0.04)",
                          border: "1px solid rgba(13,27,42,0.1)",
                          color: "var(--navy)",
                          outline: "none",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(13,27,42,0.1)")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 px-7 py-4 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-[1.02] mt-2"
                      style={{ background: "var(--navy)" }}
                    >
                      Solicită consultație gratuită
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ background: "rgba(201,169,110,0.3)" }}
                      >
                        →
                      </span>
                    </button>

                    <p className="text-[11px] text-center" style={{ color: "var(--muted)" }}>
                      🔒 Datele sunt confidențiale. Primul răspuns în max. 2 ore lucrătoare.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
