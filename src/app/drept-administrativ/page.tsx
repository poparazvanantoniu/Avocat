import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Drept Administrativ | Oancea Emil Teodor — Avocat Cluj-Napoca",
  description:
    "Contencios administrativ, contestarea actelor autorităților, litigii cu statul. Avocat Oancea Emil Teodor, Baroul Cluj.",
};

export default function DreptAdministrativ() {
  return (
    <SubPageLayout
      eyebrow="Arie de practică"
      title="Drept Administrativ"
      subtitle="Apărarea drepturilor față de autoritățile statului."
      intro="Dreptul administrativ este domeniul în care cetățeanul se confruntă cu puterea publică. Ofer asistență juridică specializată pentru contestarea actelor administrative abuzive și obținerea despăgubirilor cuvenite."
      sections={[
        {
          title: "Contencios administrativ",
          content:
            "Acțiuni în anularea actelor administrative ilegale emise de autorități publice centrale și locale. Acțiuni în obligarea autorităților la emiterea actelor refuzate. Suspendarea executării actelor administrative contestate.",
        },
        {
          title: "Răspunderea patrimonială a statului",
          content:
            "Acțiuni în despăgubiri împotriva statului sau a unităților administrativ-teritoriale pentru prejudicii cauzate prin acte administrative ilegale sau prin refuzul nejustificat de soluționare a cererilor.",
        },
        {
          title: "Litigii cu autoritățile locale",
          content:
            "Contestarea hotărârilor consiliilor locale și județene, a dispozițiilor primarilor. Acțiuni privind autorizații de construire, certificate de urbanism și alte acte administrative cu impact direct asupra cetățenilor.",
        },
        {
          title: "Procedura administrativă",
          content:
            "Asistență în procedura prealabilă contestării actelor administrative. Formularea de plângeri prealabile, contestații și recursuri administrative. Reprezentare în fața instituțiilor și autorităților publice.",
        },
        {
          title: "Funcție publică și dreptul muncii în sectorul public",
          content:
            "Litigii privind raporturile de serviciu ale funcționarilor publici. Contestarea măsurilor disciplinare, a eliberărilor din funcție și a altor acte care afectează cariera profesională în sectorul public.",
        },
      ]}
    />
  );
}
