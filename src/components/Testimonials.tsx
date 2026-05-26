"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StaggerTestimonials from "@/components/ui/stagger-testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimoniale" className="py-28 px-6" style={{ background: "#F5F0E6" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-8" style={{ background: "#1B3A2D" }} />
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "#1B3A2D" }}
            >
              Ce spun clienții
            </span>
            <div className="h-px w-8" style={{ background: "#1B3A2D" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: "#1A1714", fontFamily: '"Times New Roman", Times, serif' }}
          >
            Testimoniale
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        >
          <StaggerTestimonials />
        </motion.div>
      </div>
    </section>
  );
}
