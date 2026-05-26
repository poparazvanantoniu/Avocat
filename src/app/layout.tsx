import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────────────────────
   Cormorant Garamond — editorial display typeface
   Exposed as CSS variable so any component can reference it
   via var(--font-cormorant).
───────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

/* ─────────────────────────────────────────────────────────
   Site-wide metadata — Oancea Emil Teodor, avocat penalist
───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Oancea Emil Teodor — Avocat Penalist | Cluj-Napoca",
  description:
    "Cabinet de avocatură specializat în drept penal. Apărare în dosare penale complexe, urmărire penală și instanță. Baroul Cluj. +40 745 127 656.",
  keywords:
    "avocat penal, Cluj-Napoca, drept penal, aparare penala, Oancea Emil Teodor, baroul Cluj",
  authors: [{ name: "Oancea Emil Teodor" }],
  openGraph: {
    title: "Oancea Emil Teodor — Avocat Penalist",
    description:
      "Apărare juridică profesionistă în dosare penale complexe. Baroul Cluj.",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oancea Emil Teodor — Avocat Penalist",
    description: "Apărare juridică profesionistă în dosare penale complexe.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}
