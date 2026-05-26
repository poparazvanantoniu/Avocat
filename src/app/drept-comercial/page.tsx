import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Drept Comercial | Oancea Emil Teodor — Avocat Cluj-Napoca",
  description:
    "Litigii comerciale, insolvență, societăți comerciale. Avocat Oancea Emil Teodor, Baroul Cluj.",
};

export default function DreptComercial() {
  return (
    <SubPageLayout
      eyebrow="Arie de practică"
      title="Drept Comercial"
      subtitle="Soluții juridice pentru antreprenori și companii."
      intro="Mediul de afaceri implică riscuri juridice care necesită o abordare specializată. Asist antreprenorii și companiile în structurarea activității, în litigii comerciale și în proceduri de insolvență."
      sections={[
        {
          title: "Litigii comerciale",
          content:
            "Reprezentare în litigii între comercianți privind executarea contractelor, vicii ascunse, litigii privind titluri de valoare și efecte de comerț. Acțiuni în daune, penalități contractuale și recuperarea creanțelor comerciale.",
        },
        {
          title: "Societăți comerciale",
          content:
            "Asistență la înregistrarea, modificarea și dizolvarea societăților comerciale. Litigii între asociați sau acționari, contestarea hotărârilor adunărilor generale, excluderea asociaților. Litigii privind activele societăților.",
        },
        {
          title: "Insolvență și faliment",
          content:
            "Reprezentarea creditorilor și a debitorilor în proceduri de insolvență. Formularea cererilor de deschidere a procedurii, contestarea tabelului de creanțe, participarea la ședințele comitetului creditorilor. Acțiuni în anularea actelor frauduloase.",
        },
        {
          title: "Recuperare creanțe",
          content:
            "Asistență completă în procedura de recuperare a creanțelor — de la somație și notificare până la executare silită. Ordonanțe de plată și acțiuni în pretenții. Monitorizarea dosarelor de executare.",
        },
        {
          title: "Contracte comerciale",
          content:
            "Redactarea, negocierea și verificarea contractelor comerciale. Clauze de confidențialitate, neconcurență și penalități. Asistență în renegocierea contractelor și rezolvarea pe cale amiabilă a disputelor comerciale.",
        },
      ]}
    />
  );
}
