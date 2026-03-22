interface FooterProps {
  siteName?: string;
  siteDescription?: string;
}

export function Footer({ siteName = "Demo Virksomhed A/S", siteDescription }: FooterProps) {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Forside" },
    { href: "#ydelser", label: "Ydelser" },
    { href: "#om-os", label: "Om os" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const legalLinks = [
    { href: "/privatlivspolitik", label: "Privatlivspolitik" },
    { href: "/handelsbetingelser", label: "Handelsbetingelser" },
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: '"DM Sans", system-ui, sans-serif',
    color: "rgba(255,254,247,0.6)",
    textDecoration: "none",
    fontSize: "0.9375rem",
  };

  const colHeadStyle: React.CSSProperties = {
    fontFamily: '"Space Grotesk", system-ui, sans-serif',
    fontWeight: 700,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    color: "#FFD600",
    marginBottom: "1rem",
    margin: "0 0 1rem 0",
  };

  return (
    <footer
      id="kontakt"
      style={{ backgroundColor: "#000000", color: "#FFFEF7", borderTop: "4px solid #000000" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div
              style={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#FFD600",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {siteName}
            </div>
            <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgba(255,254,247,0.7)", maxWidth: "360px", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              {siteDescription ?? "Vi leverer professionelle løsninger til virksomheder i hele Danmark. Kvalitet og pålidelighed er vores fundament."}
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { icon: "📍", text: "Eksempelvej 1, 2100 København Ø" },
                { icon: "📞", text: "+45 12 34 56 78" },
                { icon: "✉️", text: "kontakt@demo.dk" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ fontSize: "0.875rem" }}>{icon}</span>
                  <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.9375rem", color: "rgba(255,254,247,0.7)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={colHeadStyle}>Navigation</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}><a href={href} style={linkStyle}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={colHeadStyle}>Juridisk</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {legalLinks.map(({ href, label }) => (
                <li key={href}><a href={href} style={linkStyle}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "2px solid rgba(255,254,247,0.15)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.875rem", color: "rgba(255,254,247,0.4)" }}>
            © {year} {siteName}. Alle rettigheder forbeholdes.
          </p>
          <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: "0.75rem", color: "rgba(255,254,247,0.3)" }}>
            CVR: 12 34 56 78
          </p>
        </div>
      </div>
    </footer>
  );
}
