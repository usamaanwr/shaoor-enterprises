import Link from "next/link";
import { Sun, ArrowUpRight, ArrowUp } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="w-full text-white"
      style={{
        backgroundColor: "rgba(16, 42, 67, 0.85)",
        paddingTop: "64px",
        overflow: "hidden",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">
        {/* Main Footer */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "48px",
            paddingBottom: "48px",
          }}
        >
          {/* Company Branding */}
          <div style={{ flex: "1.5 1 280px", minWidth: 0 }}>
            <Link href="/" className="inline-flex items-center gap-3">
              <Sun size={38} strokeWidth={1.6} />

              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none tracking-wide">
                  SHAOOR
                </span>

                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "3px",
                    marginTop: "5px",
                  }}
                >
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p
              style={{
                maxWidth: "320px",
                fontSize: "15px",
                lineHeight: 1.8,
                marginTop: "24px",
                color: "#DCE8F5",
              }}
            >
              Reliable energy solutions and professional printing services
              designed for homes and businesses.
            </p>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              <a
                href="https://www.instagram.com/shaoor_enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors duration-200 hover:bg-white hover:text-primary"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://wa.me/923XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors duration-200 hover:bg-white hover:text-primary"
              >
                <FaWhatsapp size={21} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1 1 160px", minWidth: 0 }}>
            <h3
              className="font-semibold"
              style={{
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 transition-colors hover:text-white"
                  style={{ fontSize: "15px" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div style={{ flex: "1 1 180px", minWidth: 0 }}>
            <h3
              className="font-semibold"
              style={{
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              Our Expertise
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "Residential Solar",
                "Commercial Solar",
                "Panaflex Printing",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-white/80 transition-colors hover:text-white"
                  style={{ fontSize: "15px" }}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div style={{ flex: "1 1 220px", minWidth: 0 }}>
            <h3
              className="font-semibold"
              style={{
                fontSize: "18px",
                marginBottom: "24px",
              }}
            >
              Let&apos;s Connect
            </h3>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#DCE8F5",
              }}
            >
              Have a project in mind? Get in touch with our team to discuss your
              requirements.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white text-primary transition-colors hover:bg-blue-50"
              style={{
                gap: "16px",
                padding: "8px 8px 8px 20px",
                marginTop: "24px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Contact Us
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        {/* Footer Bottom */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingBlock: "24px",
          }}
        >
          {/* Copyright */}
          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#DCE8F5",
              lineHeight: 1.6,
            }}
          >
            © 2026 Shaoor Enterprises. All rights reserved.
            reserved.
          </p>

          {/* Developer Credit & Back to Top */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            {/* Developer Credit */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "6px",
                fontSize: "13px",
                color: "#DCE8F5",
              }}
            >
              <span>Designed &amp; Developed by</span>

              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white transition-colors hover:text-blue-200"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Osama
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Back to Top */}
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        {/* Large Brand Typography */}
        <div aria-hidden="true">
          <svg viewBox="0 0 1200 130" className="block w-full">
            <text
              x="0"
              y="108"
              fill="rgba(255,255,255,0.10)"
              fontFamily="inherit"
              fontSize="110"
              fontWeight="800"
              textLength="1200"
              lengthAdjust="spacingAndGlyphs"
            >
              SHAOOR ENTERPRISES
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
