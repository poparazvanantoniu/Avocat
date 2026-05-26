import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Despre Avocat | Oancea Emil Teodor — Cluj-Napoca",
  description:
    "Oancea Emil Teodor, avocat penalist în Baroul Cluj. Experiență, formare profesională și filosofia de lucru.",
};

export default function DespreAvocat() {
  return (
    <SubPageLayout
      eyebrow="Persoana din spatele dosarului"
      title="Oancea Emil Teodor"
      subtitle="Avocat penalist înscris în Baroul Cluj."
      intro="Cred că fiecare persoană, indiferent de circumstanțe, merită o apărare juridică riguroasă și corectă. Această convingere mă ghidează în fiecare dosar pe care îl preiau."
      sections={[
        {
          title: "Formare profesională",
          content:
            "Am absolvit Facultatea de Drept și am parcurs stagiul de avocatură înainte de a deveni avocat definitiv înscris în Baroul Cluj. Pregătirea continuă face parte din practica mea — dreptul este un domeniu în continuă evoluție, iar a fi la curent cu jurisprudența națională și europeană este esențial pentru o apărare eficientă.",
        },
        {
          title: "Specializarea în drept penal",
          content:
            "Dreptul penal este domeniul în care am ales să mă specializez, deoarece implică responsabilitatea cea mai mare față de client — în joc se află libertatea și reputația persoanei. Experiența acumulată în dosare de toate tipurile, de la infracțiuni de drept comun la dosare complexe de corupție și evaziune fiscală, mi-a permis să dezvolt o abordare strategică și adaptabilă.",
        },
        {
          title: "Filosofia de lucru",
          content:
            "Tratez fiecare client cu respect, discreție și atenție. Comunicarea clară și onestă este principiul fundamental al relației cu clientul: vă informez despre situația reală a dosarului, despre riscuri și despre opțiunile disponibile, fără a crea așteptări false. Strategia de apărare este întotdeauna construită individual, plecând de la particularitățile fiecărei cauze.",
        },
        {
          title: "Cabinet",
          content:
            "Cabinetul individual de avocat Oancea Emil Teodor este situat în Cluj-Napoca, Strada Eroilor Nr. 10. Activez exclusiv în raza Baroului Cluj, cu reprezentare în fața tuturor instanțelor din circumscripția Curții de Apel Cluj, precum și în fața instanțelor superioare.",
        },
      ]}
    />
  );
}
