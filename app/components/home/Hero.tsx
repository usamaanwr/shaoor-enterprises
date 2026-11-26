import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Solar energy solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,42,67,0.88) 0%, rgba(16,42,67,0.55) 50%, rgba(16,42,67,0.10) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-36 sm:px-10 md:px-12 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl text-white">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 backdrop-blur-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-white" />

            <span className="text-[10px] font-medium uppercase tracking-[0.14em] sm:text-xs">
              Energy & Business Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-bold leading-[1.08] tracking-tight text-white"
            style={{
              fontSize: "clamp(34px, 5vw, 76px)",
            }}
          >
            Powering Progress.
            <br />
            Building Possibilities.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-white/85 sm:text-lg lg:mt-8 lg:text-xl">
            Reliable solar installations, professional printing, and practical
            business solutions designed for homes and enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center justify-between gap-5 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-blue-50 sm:pl-6 sm:text-base"
            >
              Explore Services
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-200 group-hover:rotate-12"
                />
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-primary sm:text-base"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-white/20 px-6 py-6 text-white sm:px-10 lg:px-8">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] sm:text-xs">
            Energy. Printing. Solutions.
          </span>

          <a
            href="#next-section"
            aria-label="Scroll to next section"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors duration-200 hover:bg-white hover:text-primary"
          >
            <ArrowDown size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
