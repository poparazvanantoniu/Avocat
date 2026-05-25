"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6 border-t"
      style={{
        background: "var(--navy)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "var(--gold)" }}
              >
                AI
              </div>
              <span
                className="font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Alexandru Ionescu
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cabinet de avocatură cu experiență de 20+ ani, specializat în apărarea drepturilor
              persoanelor fizice și juridice.
            </p>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.2em] mb-4 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Servicii
            </div>
            <ul className="space-y-2">
              {["Drept Civil", "Drept Comercial", "Drept Penal", "Drept Imobiliar", "Dreptul Muncii"].map((s) => (
                <li key={s} className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.2em] mb-4 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Contact Rapid
            </div>
            <ul className="space-y-2">
              <li className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                📞 +40 721 234 567
              </li>
              <li className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                ✉️ contact@ionescu-avocat.ro
              </li>
              <li className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                📍 Str. Aviatorilor 12, București
              </li>
              <li className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                🕐 Lun–Vin: 09:00–18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {currentYear} Cabinet Avocat Alexandru Ionescu. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            {["Politică confidențialitate", "Termeni servicii"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] transition-colors duration-200 hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
