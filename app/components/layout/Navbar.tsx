"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Sun } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 lg:px-10">
      {" "}
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 sm:px-6 ${
          isHome
            ? "border-white/20 bg-[#102A43]/85 text-white backdrop-blur-xl shadow-lg"
            : "border-slate-200 bg-white text-primary shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Sun size={32} strokeWidth={1.6} />

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-wide sm:text-xl">
              SHAOOR
            </span>

            <span className="mt-1 text-[8px] font-medium tracking-[0.24em]">
              ENTERPRISES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? isHome
                      ? "bg-white text-primary"
                      : "bg-primary text-white"
                    : isHome
                      ? "text-white hover:bg-white/15"
                      : "text-primary hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`hidden items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 lg:inline-flex ${
            isHome
              ? "bg-white text-primary hover:bg-blue-50"
              : "bg-primary text-white hover:bg-accent"
          }`}
        >
          Get a Quote
          <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            isHome ? "bg-white text-primary" : "bg-primary text-white"
          }`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-100 bg-white p-4 text-primary shadow-xl lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-5 py-4 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white"
          >
            Get a Quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      )}
    </header>
  );
}
