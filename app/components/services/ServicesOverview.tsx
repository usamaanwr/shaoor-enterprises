import Image from "next/image";
import { Sun, Printer, ArrowDownRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Solar Energy Solutions",
    description:
      "Reliable solar installations for residential and commercial properties, designed around your energy requirements.",
    image: "/images/services1.jpg",
    icon: Sun,
    href: "#solar-services",
  },
  {
    id: "02",
    title: "Panaflex Printing Solutions",
    description:
      "Professional printing solutions designed to support business promotion and improve brand visibility.",
    image: "/images/services2.jpg",
    icon: Printer,
    href: "#printing-services",
  },
];

export default function ServicesOverview() {
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
            WHAT WE OFFER
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
            Professional Solutions.
            <br />
            Real Impact.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              marginTop: "16px",
            }}
          >
            Discover solutions designed around your home
            and business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "28px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group bg-white text-primary transition-shadow duration-300 hover:shadow-xl"
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                {/* Service Image */}
                <div
                  style={{
                    position: "relative",
                    height: "clamp(230px, 25vw, 340px)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(16,42,67,0.25), transparent 60%)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    padding: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  {/* Icon and Number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      className="bg-secondary text-primary"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "58px",
                        height: "58px",
                        borderRadius: "16px",
                      }}
                    >
                      <Icon size={30} strokeWidth={1.6} />
                    </span>

                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: "36px",
                        fontWeight: 700,
                        opacity: 0.18,
                      }}
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3
                    style={{
                      fontSize: "clamp(25px, 2.5vw, 32px)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.025em",
                      marginTop: "24px",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.75,
                      marginTop: "14px",
                      marginBottom: "28px",
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Discover More */}
                  <a
                    href={service.href}
                    aria-label={`Discover more about ${service.title}`}
                    className="group/link text-primary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      paddingTop: "20px",
                      borderTop: "1px solid #e2e8f0",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Discover More

                    <span
                      className="bg-primary text-white transition-colors duration-300 group-hover/link:bg-accent"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      <ArrowDownRight
                        size={21}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:translate-y-0.5"
                      />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}