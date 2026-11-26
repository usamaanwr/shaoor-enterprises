import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  const whatsappNumber = "923XXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Shaoor Enterprises, I would like to discuss your services."
  );

  return (
    <section
      className="w-full bg-white"
      style={{
        paddingBlock: "clamp(24px, 3vw, 48px)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">

        {/* CTA Container */}
        <div
          className="text-white"
          style={{
            position: "relative",
            isolation: "isolate",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            padding: "clamp(28px, 4vw, 56px)",
            borderRadius: "24px",
            background:
              "rgba(16, 42, 67, 0.85)",
          }}
        >
          {/* Decorative Background */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -1,
              pointerEvents: "none",
              backgroundImage: `
                repeating-radial-gradient(
                  circle at 100% 100%,
                  transparent 0px,
                  transparent 38px,
                  rgba(255,255,255,0.08) 39px,
                  transparent 40px
                )
              `,
            }}
          />

          {/* Left Content */}
          <div
            style={{
              flex: "1 1 420px",
              minWidth: 0,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                color: "#DCE8F5",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#91C9FF",
                }}
              />

              LET&apos;S WORK TOGETHER
            </span>

            <h2
              className="font-bold text-white"
              style={{
                fontSize: "clamp(30px, 3.5vw, 48px)",
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
                marginTop: "18px",
              }}
            >
              Your Next Project
              <br />
              Starts Here.
            </h2>

            <p
              style={{
                maxWidth: "460px",
                marginTop: "18px",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#DCE8F5",
              }}
            >
              Let&apos;s find the right solution for your
              home or business.
            </p>
          </div>

          {/* Right WhatsApp Button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              maxWidth: "100%",
            }}
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary transition-colors duration-200 hover:bg-blue-50"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                padding: "8px 24px 8px 8px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                maxWidth: "100%",
              }}
            >
              {/* Original WhatsApp Icon */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  backgroundColor: "#128C7E",
                  color: "#ffffff",
                }}
              >
                <FaWhatsapp size={25} />
              </span>

              Chat on WhatsApp
            </a>

            <span
              style={{
                fontSize: "12px",
                color: "#DCE8F5",
              }}
            >
              Discuss your requirements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}