import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Drept Penal | Oancea Emil Teodor — Avocat Cluj-Napoca",
  description:
    "Apărare în dosare penale complexe la Cluj-Napoca. Urmărire penală, judecată, recursuri. Avocat penalist Oancea Emil Teodor, Baroul Cluj.",
};

export default function DreptPenal() {
  return (
    <SubPageLayout
      eyebrow="Arie de practică"
      title="Drept Penal"
      subtitle="Apărare dedicată în cele mai complexe dosare penale."
      intro="Dreptul penal este domeniul în care miza este maximă — libertatea, reputația și viitorul dumneavoastră. Abordez fiecare dosar cu rigoare, strategie clară și o pregătire temeinică a apărării."
      sections={[
        {
          title: "Urmărire penală",
          content:
            "Asistarea și reprezentarea clientului din momentul primei audieri ca suspect sau inculpat. Contestarea măsurilor preventive (reținere, arest preventiv, control judiciar), cereri de clasare și soluții de neurmărire. Prezența obligatorie a avocatului garantează că drepturile dumneavoastră sunt respectate de la primul contact cu organele de urmărire penală.",
        },
        {
          title: "Judecată în fond",
          content:
            "Reprezentare completă în fața instanțelor penale. Formularea de cereri de probatoriu, interogarea martorilor, contradictoriu cu parchetul și concluzii orale. Strategia de apărare este construită individual pentru fiecare cauză, plecând de la analiza detaliată a dosarului de urmărire penală.",
        },
        {
          title: "Căi de atac",
          content:
            "Formularea de apeluri, contestații și recursuri împotriva hotărârilor nefavorabile. Identificarea motivelor de nelegalitate sau netemeinicie și construirea unui dosar solid pentru instanțele superioare. Experiență în recursuri la Înalta Curte de Casație și Justiție.",
        },
        {
          title: "Infracțiuni economice și corupție",
          content:
            "Apărare în dosare complexe cu component economico-financiară: evaziune fiscală, delapidare, abuz în serviciu, dare/luare de mită, spălare de bani. Colaborare cu experți contabili și financiari pentru analiza laturii civile și penale a cauzei.",
        },
        {
          title: "Reabilitare și executarea pedepsei",
          content:
            "Cereri de liberare condiționată, contestații la executare, cereri de reabilitare judecătorească. Asistență în procedura de supraveghere și îndeplinirea condițiilor impuse de instanță.",
        },
      ]}
    />
  );
}
