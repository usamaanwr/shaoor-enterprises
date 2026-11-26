import { Target, Eye } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Our Mission.",
    description:
      "To deliver reliable, accessible and practical solutions that create lasting value for homes and businesses.",
    tagline: "PURPOSE IN EVERY PROJECT",
    icon: Target,
    background: "#344A5F",
    color: "#FFFFFF",
    iconBackground: "rgba(255,255,255,0.12)",
    borderColor: "rgba(255,255,255,0.20)",
  },
  {
    id: "02",
    title: "Our Vision.",
    description:
      "To become a trusted multi-service enterprise recognized for quality, innovation and customer satisfaction.",
    tagline: "BUILDING A BETTER TOMORROW",
    icon: Eye,
    background: "#E5F0FF",
    color: "#102A43",
    iconBackground: "#FFFFFF",
    borderColor: "rgba(16,42,67,0.15)",
  },
];

export default function MissionVision() {
  return (
    <section
      className="w-full bg-white"
      style={{
        paddingBlock: "clamp(48px, 6vw, 96px)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">

        {/* Section Header */}
        <div
          className="text-primary"
          style={{
            textAlign: "center",
            maxWidth: "760px",
            marginInline: "auto",
            marginBottom: "48px",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent" />
            OUR PURPOSE & DIRECTION
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
            Driven by Purpose.
            <br />
            Inspired by the Future.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            The principles behind everything we do.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            gap: "28px",
          }}
        >
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                style={{
                  flex: "1 1 360px",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: item.background,
                  color: item.color,
                  borderRadius: "24px",
                  padding: "clamp(24px, 3.5vw, 48px)",
                  overflow: "hidden",
                }}
              >
                {/* Icon & Number */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      backgroundColor: item.iconBackground,
                    }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "48px",
                      fontWeight: 700,
                      lineHeight: 1,
                      opacity: 0.25,
                    }}
                  >
                    {item.id}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    marginTop: "32px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    marginTop: "18px",
                    marginBottom: "36px",
                    maxWidth: "460px",
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>

                {/* Bottom Tagline */}
                <div
                  style={{
                    borderTop: `1px solid ${item.borderColor}`,
                    paddingTop: "22px",
                    marginTop: "auto",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "1.4px",
                  }}
                >
                  {item.tagline}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}