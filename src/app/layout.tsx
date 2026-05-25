import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandru Ionescu — Cabinet de Avocatură",
  description: "Cabinet de avocatură specializat în drept civil, comercial și penal. Experiență de peste 20 de ani în apărarea drepturilor clienților noștri.",
  keywords: "avocat, cabinet avocatura, drept civil, drept comercial, drept penal, Bucuresti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
