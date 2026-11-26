import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  House,
  Building2,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Residential Solar",
    description:
      "Solar installation solutions tailored to everyday household energy needs.",
    icon: House,
  },
  {
    title: "Commercial Solar",
    description:
      "Solar energy solutions designed around commercial property requirements.",
    icon: Building2,
  },
  {
    title: "Energy Consultation",
    description:
      "Understanding your energy requirements to identify a suitable solar solution.",
    icon: Zap,
  },
];

export default function SolarServices() {
  return (
    <section
      id="solar-services"
      className="w-full bg-surface"
      style={{
        paddingBlock: "clamp(48px, 6vw, 96px)",
        scrollMarginTop: "110px",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(32px, 5vw, 64px)",
          }}
        >
          {/* Left Image */}
          <div
            className="group"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            <Image
              src="/images/services1.jpg"
              alt="Residential and commercial solar energy installation"
              width={800}
              height={900}
              sizes="(max-width: 850px) 100vw, 50vw"
              className="transition-transform duration-700 group-hover:scale-105"
              style={{
                display: "block",
                width: "100%",
                height: "clamp(380px, 48vw, 600px)",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Image Overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(16,42,67,0.85), transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Image Bottom Content */}
            <div
              className="text-white"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(20px, 3vw, 32px)",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "56px",
                  height: "56px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Sun size={30} strokeWidth={1.6} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "clamp(20px, 2.2vw, 28px)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  Smarter Energy.
                  <br />
                  Better Future.
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "8px",
                    opacity: 0.85,
                  }}
                >
                  Residential & Commercial
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className="text-primary"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
            }}
          >
            {/* Section Label */}
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
              01 — SOLAR ENERGY SOLUTIONS
            </span>

            {/* Heading */}
            <h2
              className="font-bold text-primary"
              style={{
                fontSize: "clamp(30px, 3.5vw, 48px)",
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                marginTop: "24px",
              }}
            >
              Power Your Future
              <br />
              with Solar.
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "20px",
              }}
            >
              Shaoor Enterprises provides solar energy
              solutions for residential and commercial
              properties, helping customers explore a
              more efficient and sustainable approach
              to their energy needs.
            </p>

            {/* Service Features */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                marginTop: "28px",
                paddingTop: "28px",
                borderTop: "1px solid #e2e8f0",
              }}
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <div
                      className="bg-secondary text-primary"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          lineHeight: 1.3,
                        }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.65,
                          marginTop: "6px",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Request a Quote Button */}
            <Link
              href="/contact?service=solar"
              className="group inline-flex items-center rounded-full text-white transition-colors duration-300 hover:bg-accent"
              style={{
                backgroundColor: "#344A5F",
                marginTop: "32px",
                padding: "8px 8px 8px 24px",
                gap: "24px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              Request a Quote

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}