import { Link } from "react-router";
import { useState } from "react";

interface HeaderProps {
  siteName?: string;
  menuItems?: Array<{
    title: string;
    url: string;
    children?: Array<{ title: string; url: string }>;
  }>;
}

export function Header({ siteName = "Demo Virksomhed A/S", menuItems = [] }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = menuItems.length > 0
    ? menuItems
    : [
        { title: "Forside", url: "/" },
        { title: "Ydelser", url: "#ydelser" },
        { title: "Om os", url: "#om-os" },
        { title: "Kontakt", url: "#kontakt" },
      ];

  return (
    <header
      style={{
        backgroundColor: "#FFFEF7",
        borderBottom: "4px solid #000000",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "#000000",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          {siteName}
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "2rem", display: "flex" }}>
          {navItems.map((item) => {
            const href = item.url.startsWith("http") ? new URL(item.url).pathname : item.url;
            return (
              <a
                key={item.url}
                href={href}
                style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "#111111",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </a>
            );
          })}
        </nav>

        <a
          href="#kontakt"
          className="nb-btn nb-btn-black hidden md:inline-flex"
          style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}
        >
          Kontakt os →
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "2px solid #000000",
            padding: "0.5rem",
            cursor: "pointer",
            boxShadow: "3px 3px 0px #000000",
            lineHeight: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ borderTop: "2px solid #000000", backgroundColor: "#FFD600" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", flexDirection: "column" }}>
            {navItems.map((item) => {
              const href = item.url.startsWith("http") ? new URL(item.url).pathname : item.url;
              return (
                <a
                  key={item.url}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    fontFamily: '"Space Grotesk", system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#000000",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                  }}
                >
                  {item.title}
                </a>
              );
            })}
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="nb-btn nb-btn-black"
              style={{ marginTop: "0.75rem" }}
            >
              Kontakt os →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
