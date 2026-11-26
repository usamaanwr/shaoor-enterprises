import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function OurStory() {
  return (
    <section
      className="w-full bg-white"
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
            gap: "clamp(28px, 4vw, 64px)",
          }}
        >
          {/* Left Content */}
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
              OUR STORY
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
              Built with Purpose.
              <br />
              Driven by Progress.
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "24px",
                maxWidth: "520px",
              }}
            >
              At Shaoor Enterprises, we believe that the right
              solutions can make a meaningful difference in
              everyday life and business.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "16px",
                maxWidth: "520px",
              }}
            >
              Our focus is on bringing reliable energy
              solutions and professional printing services
              together under one roof, addressing the diverse
              requirements of homes and businesses.
            </p>

            {/* Highlight */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderTop: "1px solid #e2e8f0",
                paddingTop: "24px",
                marginTop: "28px",
              }}
            >
              <div
                className="bg-secondary text-primary"
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={26} strokeWidth={1.7} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  Built Around Your Needs.
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "4px",
                    lineHeight: 1.6,
                  }}
                >
                  Practical solutions. Professional approach.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            <Image
              src="/images/vission.jpg"
              alt="Solar engineering professionals discussing a project"
              width={800}
              height={650}
              sizes="(max-width: 850px) 100vw, 50vw"
              style={{
                display: "block",
                width: "100%",
                height: "clamp(340px, 38vw, 480px)",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Image Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "linear-gradient(to top, rgba(16,42,67,0.85), transparent 60%)",
              }}
            />

            {/* Image Caption */}
            <div
              className="text-white"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(20px, 3vw, 32px)",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                One Vision.
                <br />
                Multiple Solutions.
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  marginTop: "8px",
                  letterSpacing: "1px",
                }}
              >
                SHAOOR ENTERPRISES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}