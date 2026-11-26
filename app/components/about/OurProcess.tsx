import {
  MessagesSquare,
  ClipboardList,
  Wrench,
  CircleCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "We begin by understanding your requirements, expectations and goals.",
    icon: MessagesSquare,
  },
  {
    id: "02",
    title: "Planning",
    description:
      "We identify a practical solution tailored to your specific needs.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "Execution",
    description:
      "We carry out the agreed work with attention to quality and detail.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Completion",
    description:
      "We review the results and ensure the agreed requirements are addressed.",
    icon: CircleCheck,
  },
];

export default function OurProcess() {
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
            maxWidth: "720px",
            marginInline: "auto",
            marginBottom: "56px",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
            <span className="h-2 w-2 rounded-full bg-accent" />
            HOW WE WORK
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
            A Simple Process.
            <br />
            Reliable Results.
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            From understanding your needs to delivering
            the right solution.
          </p>
        </div>

        {/* Process Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="text-primary"
                style={{
                  position: "relative",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "16px 8px",
                }}
              >
                {/* Icon Wrapper */}
                <div
                  style={{
                    position: "relative",
                    display: "grid",
                    placeItems: "center",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#E5F0FF",
                  }}
                >
                  {/* Main Icon */}
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: "76px",
                      height: "76px",
                      borderRadius: "50%",
                      backgroundColor: "#344A5F",
                      color: "#ffffff",
                    }}
                  >
                    <Icon size={32} strokeWidth={1.6} />
                  </div>

                  {/* Step Number */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: "1px solid #dbe5ef",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#102A43",
                    }}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontSize: "23px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginTop: "26px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  style={{
                    maxWidth: "240px",
                    fontSize: "15px",
                    lineHeight: 1.75,
                    marginTop: "12px",
                  }}
                >
                  {step.description}
                </p>

                {/* Bottom Decorative Line */}
                <div
                  aria-hidden="true"
                  style={{
                    width: "36px",
                    height: "2px",
                    backgroundColor: "#205DA8",
                    marginTop: "24px",
                    borderRadius: "2px",
                  }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}