import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Drept Civil | Oancea Emil Teodor — Avocat Cluj-Napoca",
  description:
    "Litigii civile, contracte, moșteniri și partaje în Cluj-Napoca. Avocat Oancea Emil Teodor, Baroul Cluj.",
};

export default function DreptCivil() {
  return (
    <SubPageLayout
      eyebrow="Arie de practică"
      title="Drept Civil"
      subtitle="Soluții juridice clare pentru litigii civile complexe."
      intro="Dreptul civil acoperă un spectru larg de situații — de la conflicte contractuale la moșteniri disputate. Ofer asistență juridică riguroasă și reprezentare eficientă în fața instanțelor civile."
      sections={[
        {
          title: "Litigii civile",
          content:
            "Reprezentare în procese civile de toate tipurile: acțiuni în pretenții, acțiuni în rectificare de carte funciară, acțiuni posesorii, acțiuni în constatare. Formularea cererii de chemare în judecată, administrarea probatoriului și susținerea fondului cauzei.",
        },
        {
          title: "Contracte civile",
          content:
            "Redactarea, verificarea și negocierea contractelor civile. Acțiuni în anularea sau rezilierea contractelor. Răspunderea civilă contractuală și extra-contractuală, recuperarea prejudiciilor și daunelor-interese.",
        },
        {
          title: "Dreptul familiei",
          content:
            "Divorțuri, partaje de bunuri comune, stabilirea domiciliului minorilor și a programului de vizită. Acțiuni în tăgăduirea sau stabilirea paternității. Pensie de întreținere și majorarea acesteia.",
        },
        {
          title: "Succesiuni și moșteniri",
          content:
            "Dezbaterea succesiunilor, partaje succesorale, acțiuni în reducțiunea liberalităților excesive, petiție de ereditate. Asistență în procedura succesorală notarială și în litigii succesorale.",
        },
        {
          title: "Drept imobiliar",
          content:
            "Verificarea titlurilor de proprietate, litigii de grănițuire, acțiuni în revendicare, evacuare și uzucapiune. Contestarea cărților funciare și proceduri de retrocedare.",
        },
      ]}
    />
  );
}
