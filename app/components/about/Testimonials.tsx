import { Quote, Star, UserRound } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Residential Client",
    service: "Solar Installation",
    review: "Verified customer feedback will be displayed here.",
    rating: 0,
  },
  {
    id: "02",
    name: "Commercial Client",
    service: "Commercial Solar",
    review: "Verified customer feedback will be displayed here.",
    rating: 0,
  },
  {
    id: "03",
    name: "Business Client",
    service: "Printing Solutions",
    review: "Verified customer feedback will be displayed here.",
    rating: 0,
  },
];

export default function Testimonials() {
  return (
    <section
      className="w-full bg-surface"
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
            maxWidth: "720px",
            marginInline: "auto",
            marginBottom: "48px",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent" />
            CLIENT EXPERIENCES
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
            Trust Built Through
            <br />
            Every Project.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            Customer experiences across our energy
            and printing services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="bg-white text-primary transition-shadow duration-300 hover:shadow-lg"
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                padding: "clamp(24px, 3vw, 32px)",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Quote
                  size={38}
                  strokeWidth={1.5}
                  color="#344A5F"
                />

                <span
                  aria-hidden="true"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    opacity: 0.2,
                  }}
                >
                  {item.id}
                </span>
              </div>

              {/* Rating */}
              <div
                aria-label={
                  item.rating > 0
                    ? `${item.rating} out of 5 stars`
                    : "Rating pending"
                }
                style={{
                  display: "flex",
                  gap: "5px",
                  marginTop: "24px",
                }}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={17}
                    color={
                      index < item.rating
                        ? "#EAB308"
                        : "#B6C5D4"
                    }
                    fill={
                      index < item.rating
                        ? "#EAB308"
                        : "none"
                    }
                    strokeWidth={1.7}
                  />
                ))}
              </div>

              {/* Review */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  marginTop: "20px",
                  marginBottom: "28px",
                  flex: 1,
                }}
              >
                {item.review}
              </p>

              {/* Client Information */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "24px",
                }}
              >
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    backgroundColor: "#344A5F",
                    color: "#ffffff",
                  }}
                >
                  <UserRound size={23} strokeWidth={1.6} />
                </span>

                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: "4px",
                      opacity: 0.75,
                    }}
                  >
                    {item.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Demo Disclosure */}
        <p
          className="text-primary"
          style={{
            textAlign: "center",
            fontSize: "12px",
            opacity: 0.65,
            marginTop: "24px",
          }}
        >
          Demo layout — customer feedback pending.
        </p>
      </div>
    </section>
  );
}