import Link from "next/link";
import {
  ShieldCheck,
  Handshake,
  Layers,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const strengths = [
  {
    id: "01",
    title: "Quality Commitment",
    description:
      "Attention to detail and quality in every project we undertake.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Customer First",
    description:
      "Understanding your requirements and delivering the right solutions.",
    icon: Handshake,
  },
  {
    id: "03",
    title: "Multiple Expertise",
    description:
      "Energy and professional printing solutions under one roof.",
    icon: Layers,
  },
  {
    id: "04",
    title: "Professional Approach",
    description:
      "Clear communication and responsible project execution.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full bg-surface"
      style={{
        paddingBlock: "clamp(48px, 6vw, 96px)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(32px, 4vw, 64px)",
          }}
        >
          {/* Left Content */}
          <div
            className="text-primary"
            style={{
              flex: "1 1 340px",
              minWidth: 0,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
              WHY CHOOSE US
            </span>

            <h2
              className="font-bold text-primary"
              style={{
                fontSize: "clamp(30px, 3.5vw, 48px)",
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                marginTop: "24px",
              }}
            >
              The Difference Is
              <br />
              in the Details.
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "20px",
                maxWidth: "440px",
              }}
            >
              We believe great service begins with understanding
              your needs and delivering practical solutions
              that create meaningful value.
            </p>

            <Link
              href="/services"
              className="group inline-flex items-center rounded-full bg-primary text-white transition-colors duration-200 hover:bg-accent"
              style={{
                marginTop: "28px",
                padding: "8px 8px 8px 24px",
                gap: "20px",
                fontSize: "14px",
                fontWeight: 600,
                maxWidth: "100%",
              }}
            >
              Explore Our Services

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-200 group-hover:rotate-12"
                />
              </span>
            </Link>
          </div>

          {/* Right Cards */}
          <div
            style={{
              flex: "1.5 1 460px",
              minWidth: 0,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "20px",
            }}
          >
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="group bg-white text-primary transition-shadow duration-300 hover:shadow-lg"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    padding: "clamp(20px, 2.5vw, 28px)",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {/* Icon and Number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <span
                      className="bg-secondary text-primary"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={25} strokeWidth={1.7} />
                    </span>

                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        opacity: 0.2,
                      }}
                    >
                      {item.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginTop: "22px",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      marginTop: "12px",
                    }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}