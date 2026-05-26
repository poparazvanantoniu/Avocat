"use client";

import Link from "next/link";

const C = {
  bg:       "#EDEAE3",
  ink:      "#111111",
  inkMuted: "#6B6460",
  rule:     "#CCC8C0",
  navy:     "#1A1928",
  navyText: "#EDEAE3",
} as const;

const practiceLinks = [
  { label: "Drept Penal",        href: "/drept-penal" },
  { label: "Drept Civil",        href: "/drept-civil" },
  { label: "Drept Administrativ",href: "/drept-administrativ" },
  { label: "Drept Fiscal",       href: "/drept-fiscal" },
  { label: "Drept Comercial",    href: "/drept-comercial" },
];

function OETMark() {
  return (
    <div
      style={{
        width:          36,
        height:         36,
        background:     C.navy,
        color:          C.navyText,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        flexShrink:     0,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="10" y1="2"  x2="10" y2="17" stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        <line x1="6"  y1="17" x2="14" y2="17" stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        <line x1="3"  y1="6"  x2="17" y2="6"  stroke={C.navyText} strokeWidth="1"   strokeLinecap="round" />
        <line x1="3"  y1="6"  x2="3"  y2="10" stroke={C.navyText} strokeWidth="0.8" strokeLinecap="round" />
        <line x1="17" y1="6"  x2="17" y2="10" stroke={C.navyText} strokeWidth="0.8" strokeLinecap="round" />
        <path d="M1 10 Q3 13.5 5 10"    stroke={C.navyText} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M15 10 Q17 13.5 19 10" stroke={C.navyText} strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background:  C.navy,
        borderTop:   `1px solid rgba(237,234,227,0.08)`,
        padding:     "64px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap:                 48,
            paddingBottom:       48,
            borderBottom:        "1px solid rgba(237,234,227,0.1)",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <OETMark />
              <div>
                <div
                  style={{
                    fontFamily:    "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize:      17,
                    fontWeight:    400,
                    color:         C.navyText,
                    letterSpacing: "0.01em",
                  }}
                >
                  Oancea Emil Teodor
                </div>
                <div
                  style={{
                    fontSize:      10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color:         "rgba(237,234,227,0.35)",
                    fontFamily:    '"Times New Roman", Times, serif',
                    marginTop:     3,
                  }}
                >
                  Avocat · Baroul Cluj
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize:   14,
                lineHeight: 1.75,
                color:      "rgba(237,234,227,0.4)",
                fontFamily: '"Times New Roman", Times, serif',
                maxWidth:   300,
              }}
            >
              Cabinet de avocatură specializat în drept penal,
              cu sediul în Cluj-Napoca. Fostă experiență ca judecător și procuror.
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h4
              style={{
                fontSize:      10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:         "rgba(237,234,227,0.35)",
                fontFamily:    '"Times New Roman", Times, serif',
                margin:        "0 0 20px 0",
              }}
            >
              Arii de practică
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize:       13,
                      fontFamily:     '"Times New Roman", Times, serif',
                      color:          "rgba(237,234,227,0.5)",
                      textDecoration: "none",
                      transition:     "color 0.18s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.navyText; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.5)"; }}
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
              style={{
                fontSize:      10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:         "rgba(237,234,227,0.35)",
                fontFamily:    '"Times New Roman", Times, serif',
                margin:        "0 0 20px 0",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="tel:+40745127656"
                style={{
                  fontSize:       13,
                  fontFamily:     '"Times New Roman", Times, serif',
                  color:          "rgba(237,234,227,0.5)",
                  textDecoration: "none",
                  transition:     "color 0.18s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.navyText; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.5)"; }}
              >
                +40 745 127 656
              </a>
              <p
                style={{
                  fontSize:   13,
                  fontFamily: '"Times New Roman", Times, serif',
                  color:      "rgba(237,234,227,0.5)",
                  margin:     0,
                  lineHeight: 1.6,
                }}
              >
                Strada Eroilor Nr. 10
                <br />
                Cluj-Napoca
              </p>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  display:       "inline-flex",
                  alignItems:    "center",
                  gap:           6,
                  background:    "transparent",
                  border:        "1px solid rgba(237,234,227,0.2)",
                  color:         C.navyText,
                  padding:       "8px 18px",
                  fontSize:      11,
                  letterSpacing: "0.08em",
                  cursor:        "pointer",
                  fontFamily:    '"Times New Roman", Times, serif',
                  transition:    "border-color 0.2s ease",
                  marginTop:     4,
                  borderRadius:  9999,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(237,234,227,0.45)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(237,234,227,0.2)"; }}
              >
                Consultație gratuită →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop:     24,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            12,
          }}
        >
          <p
            style={{
              fontSize:   11,
              color:      "rgba(237,234,227,0.22)",
              fontFamily: '"Times New Roman", Times, serif',
              margin:     0,
            }}
          >
            © {new Date().getFullYear()} Oancea Emil Teodor — Cabinet de Avocatură. Toate drepturile rezervate.
          </p>
          <Link
            href="/despre-avocat"
            style={{
              fontSize:       11,
              color:          "rgba(237,234,227,0.22)",
              textDecoration: "none",
              fontFamily:     '"Times New Roman", Times, serif',
              transition:     "color 0.18s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.5)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(237,234,227,0.22)"; }}
          >
            Despre avocat
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
