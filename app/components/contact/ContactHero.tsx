import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-primary text-white"
      style={{
        position: "relative",
        minHeight: "clamp(340px, 35vw, 460px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "110px",
        paddingBottom: "48px",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Modern corporate office building"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Background Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(120deg, rgba(16,42,67,0.88), rgba(16,42,67,0.65))",
        }}
      />

      {/* Hero Content */}
      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8"
        style={{
          textAlign: "center",
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          <Link
            href="/"
            className="text-white/80 transition-colors hover:text-white"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <span aria-current="page">Contact Us</span>
        </nav>

        {/* Heading */}
        <h1
          className="font-bold text-white"
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            marginTop: "24px",
          }}
        >
          Let&apos;s Start a Conversation.
        </h1>

        {/* Description */}
        <p
          style={{
            maxWidth: "580px",
            marginInline: "auto",
            marginTop: "18px",
            fontSize: "clamp(15px, 1.4vw, 19px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Have a project in mind? Let&apos;s find the
          right solution together.
        </p>

        {/* Decorative Line */}
        <div
          aria-hidden="true"
          style={{
            width: "48px",
            height: "2px",
            backgroundColor: "#ffffff",
            marginInline: "auto",
            marginTop: "28px",
            opacity: 0.7,
          }}
        />
      </div>
    </section>
  );
}