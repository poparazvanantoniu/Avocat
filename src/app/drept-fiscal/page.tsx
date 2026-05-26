import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Drept Fiscal | Oancea Emil Teodor — Avocat Cluj-Napoca",
  description:
    "Litigii fiscale, contestarea deciziilor ANAF, dosare penale cu componentă fiscală. Avocat Oancea Emil Teodor, Baroul Cluj.",
};

export default function DreptFiscal() {
  return (
    <SubPageLayout
      eyebrow="Arie de practică"
      title="Drept Fiscal"
      subtitle="Reprezentare eficientă în litigii fiscale și dosare cu componentă penală."
      intro="Presiunea fiscală și complexitatea legislației fac ca raportul cu ANAF să fie adesea o sursă de stres și risc. Ofer asistență juridică specializată, atât în contestarea deciziilor fiscale, cât și în apărarea în dosarele penale cu componentă fiscală."
      sections={[
        {
          title: "Contestarea deciziilor ANAF",
          content:
            "Formularea contestațiilor administrative împotriva deciziilor de impunere și a actelor de control fiscal. Reprezentare în procedura de contestare și în litigiile fiscale în fața instanțelor de contencios administrativ.",
        },
        {
          title: "Inspecție fiscală și control vamal",
          content:
            "Asistență juridică pe durata inspecțiilor fiscale. Contestarea actelor de control, a proceselor-verbale de contravenție și a deciziilor de impunere emise ca urmare a controlului. Protejarea drepturilor contribuabililor față de abuzuri ale organelor de control.",
        },
        {
          title: "Evaziune fiscală — apărare penală",
          content:
            "Apărare în dosare penale de evaziune fiscală, fraudă vamală și alte infracțiuni cu componentă fiscală. Colaborare cu experți contabili și fiscali pentru evaluarea situației financiare și construirea unei apărări solide.",
        },
        {
          title: "TVA și impozit pe profit",
          content:
            "Contestarea rambursărilor refuzate de TVA, a recalculărilor de impozit pe profit și a altor obligații fiscale suplimentare stabilite prin control. Asistență în procedura de regularizare voluntară.",
        },
        {
          title: "Executare silită fiscală",
          content:
            "Contestarea la executare a titlurilor executorii fiscale. Suspendarea executării silite până la soluționarea contestației. Negocierea eșalonărilor și a înlesnirilor la plată cu organele fiscale.",
        },
      ]}
    />
  );
}
