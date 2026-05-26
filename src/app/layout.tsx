import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oancea Emil Teodor — Avocat Penalist | Cluj-Napoca",
  description: "Cabinet de avocatură specializat în drept penal. Apărare în dosare penale complexe, urmărire penală și instanță. Baroul Cluj. +40 745 127 656.",
  keywords: "avocat penal, Cluj-Napoca, drept penal, aparare penala, Oancea Emil Teodor, baroul Cluj",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
