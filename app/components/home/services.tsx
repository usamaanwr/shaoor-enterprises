import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sun, Printer } from "lucide-react";

const services = [
  {
    id: "01",
    category: "ENERGY",
    title: "Solar Energy Solutions",
    description:
      "Reliable solar installations for residential and commercial spaces.",
    image: "/images/services1.jpg",
    icon: Sun,
    href: "/services",
  },
  {
    id: "02",
    category: "PRINTING",
    title: "Printing Solutions",
    description:
      "Professional panaflex printing for your business and promotional needs.",
    image: "/images/services2.jpg",
    icon: Printer,
    href: "/services",
  },
];

export default function ServicesPreview() {
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            className="text-primary"
            style={{ flex: "1 1 340px" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
              <span className="h-2 w-2 rounded-full bg-accent" />
              OUR EXPERTISE
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
              Solutions Built
              <br />
              Around Your Needs.
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                marginTop: "16px",
              }}
            >
              Practical solutions for homes and businesses.
            </p>
          </div>

          {/* View All Button */}
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-primary text-white transition-colors hover:bg-accent"
            style={{
              padding: "8px 8px 8px 24px",
              gap: "24px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            View All Services

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <ArrowUpRight size={19} />
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group bg-white text-primary"
                style={{
                  flex: "1 1 360px",
                  minWidth: 0,
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Service Image */}
                <div style={{ overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    sizes="(max-width: 850px) 100vw, 50vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "clamp(220px, 23vw, 320px)",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: "clamp(20px, 3vw, 30px)",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* Category and Icon */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      className="text-accent"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "1px",
                      }}
                    >
                      {service.id} / {service.category}
                    </span>

                    <span
                      className="bg-secondary text-accent"
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                      }}
                    >
                      <Icon size={23} strokeWidth={1.7} />
                    </span>
                  </div>

                  <h3
                    className="font-bold text-primary"
                    style={{
                      fontSize: "clamp(22px, 2.2vw, 30px)",
                      lineHeight: 1.2,
                      marginTop: "18px",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      marginTop: "12px",
                      marginBottom: "24px",
                    }}
                  >
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="text-primary transition-colors hover:text-accent"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginTop: "auto",
                    }}
                  >
                    Explore Service
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}