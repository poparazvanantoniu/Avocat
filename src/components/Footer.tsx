"use client";

import Link from "next/link";

const practiceLinks = [
  { label: "Drept Penal", href: "/drept-penal" },
  { label: "Drept Civil", href: "/drept-civil" },
  { label: "Drept Administrativ", href: "/drept-administrativ" },
  { label: "Drept Fiscal", href: "/drept-fiscal" },
  { label: "Drept Comercial", href: "/drept-comercial" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="px-6 py-16"
      style={{
        background: "#0B1A12",
        borderTop: "1px solid rgba(212,232,222,0.08)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold tracking-wide"
                style={{
                  background: "rgba(212,232,222,0.08)",
                  color: "#D4E8DE",
                  border: "1px solid rgba(212,232,222,0.15)",
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                OET
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  style={{ color: "#D4E8DE", fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Oancea Emil Teodor
                </div>
                <div className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(212,232,222,0.35)" }}>
                  Avocat · Baroul Cluj
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(212,232,222,0.35)" }}>
              Cabinet de avocatură specializat în drept penal,
              cu sediul în Cluj-Napoca.
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h4
              className="text-[10px] uppercase tracking-[0.25em] mb-4 font-medium"
              style={{ color: "rgba(212,232,222,0.35)" }}
            >
              Arii de practică
            </h4>
            <ul className="flex flex-col gap-2">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: "rgba(212,232,222,0.55)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] uppercase tracking-[0.25em] mb-4 font-medium"
              style={{ color: "rgba(212,232,222,0.35)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+40745127656"
                className="text-sm transition-colors duration-200 hover:opacity-80"
                style={{ color: "rgba(212,232,222,0.55)" }}
              >
                +40 745 127 656
              </a>
              <p className="text-sm" style={{ color: "rgba(212,232,222,0.55)" }}>
                Strada Eroilor Nr. 10
                <br />
                Cluj-Napoca
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(212,232,222,0.08)",
                  color: "#D4E8DE",
                  border: "1px solid rgba(212,232,222,0.12)",
                }}
              >
                Solicitați consultație
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(212,232,222,0.07)" }}
        >
          <p className="text-[11px]" style={{ color: "rgba(212,232,222,0.25)" }}>
            © {new Date().getFullYear()} Oancea Emil Teodor — Cabinet de Avocatură. Toate drepturile rezervate.
          </p>
          <Link
            href="/despre-avocat"
            className="text-[11px] transition-colors duration-200 hover:opacity-70"
            style={{ color: "rgba(212,232,222,0.25)" }}
          >
            Despre avocat
          </Link>
        </div>
      </div>
    </footer>
  );
}
