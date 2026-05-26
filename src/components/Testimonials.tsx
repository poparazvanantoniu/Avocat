"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StaggerTestimonials from "@/components/ui/stagger-testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimoniale" style={{ background: "#E5E1D8", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} style={{ marginBottom: 56 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontSize: 11,
              color: "#6B6460",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontFamily: '"Times New Roman", Times, serif',
              margin: "0 0 16px 0",
            }}
          >
            Ce spun clienții
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontFamily: 'var(--font-cormorant), "Times New Roman", serif',
              fontSize: 64,
              fontWeight: 300,
              color: "#111111",
              margin: "0 0 24px 0",
              lineHeight: 1.05,
            }}
          >
            Testimoniale
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, originX: "0%" }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            style={{ height: 1, background: "#CCC8C0", transformOrigin: "0%" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          <StaggerTestimonials />
        </motion.div>
      </div>
    </section>
  );
}
