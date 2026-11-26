import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Introduction() {
  return (
    <section
      id="next-section"
      className="w-full bg-white"
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
            gap: "clamp(28px, 4vw, 64px)",
          }}
        >
          {/* Left Image */}
          <div
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <Image
              src="/images/about.jpg"
              alt="Solar panel installation"
              width={800}
              height={600}
              sizes="(max-width: 850px) 100vw, 50vw"
              style={{
                display: "block",
                width: "100%",
                height: "clamp(260px, 30vw, 400px)",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div
            className="text-primary"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
              <span className="h-2 w-2 rounded-full bg-accent" />
              WHO WE ARE
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
              One Partner.
              <br />
              Multiple Solutions.
            </h2>

            <p
              className="text-primary"
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "20px",
                maxWidth: "480px",
              }}
            >
              Shaoor Enterprises provides reliable solar energy
              and professional printing solutions for homes
              and businesses.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center rounded-full bg-primary text-white transition-colors hover:bg-accent"
              style={{
                marginTop: "28px",
                padding: "8px 8px 8px 24px",
                gap: "24px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              About Our Company

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                <ArrowUpRight size={19} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}