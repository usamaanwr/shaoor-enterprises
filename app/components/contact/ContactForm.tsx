"use client";

import { useState } from "react";
import type { FormEvent, CSSProperties } from "react";
import { ArrowUpRight, MessagesSquare } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const WHATSAPP_NUMBER = "";

const services = [
  { value: "solar", label: "Solar Energy Solutions" },
  { value: "printing", label: "Panaflex Printing Solutions" },
  { value: "general", label: "General Inquiry" },
];

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  backgroundColor: "#f5f7fa",
  fontSize: "15px",
  color: "#102A43",
  marginTop: "8px",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 600,
};

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: services.some((item) => item.value === initialService)
      ? initialService
      : "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!/^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER)) {
      setError("Demo mode: Business WhatsApp number is not configured yet.");
      return;
    }

    const selectedService = services.find(
      (item) => item.value === formData.service,
    )?.label;

    const message = `Hello Shaoor Enterprises,

I would like to request a quotation.

*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim() || "Not provided"}
*Service:* ${selectedService}

*Project Requirements:*
${formData.message.trim()}

Looking forward to your response.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  return (
    <section
      id="contact-form"
      className="w-full bg-surface"
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
            alignItems: "flex-start",
            gap: "clamp(32px, 5vw, 64px)",
          }}
        >
          {/* Left Content */}
          <div
            className="text-primary"
            style={{
              flex: "1 1 340px",
              minWidth: 0,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium tracking-wider">
              <span className="h-2 w-2 rounded-full bg-accent" />
              LET&apos;S WORK TOGETHER
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
              Tell Us About Your Next Project.
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.75,
                marginTop: "20px",
                maxWidth: "460px",
              }}
            >
              From solar installations to professional printing, let&apos;s find
              the right solution for your requirements.
            </p>

            {/* Social Contact Options */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginTop: "32px",
                paddingTop: "28px",
                borderTop: "1px solid #e2e8f0",
              }}
            >
              {/* WhatsApp */}
              <a
                href={
                  WHATSAPP_NUMBER
                    ? `https://wa.me/${WHATSAPP_NUMBER}`
                    : "#contact-form"
                }
                className="group flex items-center gap-4"
              >
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "56px",
                    height: "56px",
                    flexShrink: 0,
                    borderRadius: "16px",
                    backgroundColor: "#E0F4E8",
                    color: "#128C7E",
                  }}
                >
                  <FaWhatsapp size={30} />
                </span>

                <div style={{ flex: 1 }}>
                  <h3 className="text-lg font-bold">Chat on WhatsApp</h3>

                  <p className="mt-1 text-sm opacity-75">
                    Discuss your project directly.
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shaoor_enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <span
                  className="bg-secondary text-primary"
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "56px",
                    height: "56px",
                    flexShrink: 0,
                    borderRadius: "16px",
                  }}
                >
                  <FaInstagram size={27} />
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 className="text-lg font-bold">Follow Our Journey</h3>

                  <p className="mt-1 break-all text-sm opacity-75">
                    @shaoor_enterprises
                  </p>
                </div>

                <ArrowUpRight size={20} />
              </a>
            </div>

            {/* Decorative Content Card */}
            {/* Google Maps */}
<div
  style={{
    marginTop: "36px",
    width: "100%",
    maxWidth: "100%",
    height: "clamp(280px, 30vw, 380px)",
    borderRadius: "24px",
    overflow: "hidden",
  }}
>
  <iframe
    src="https://maps.google.com/maps?q=Karachi,Pakistan&z=12&output=embed"
    title="Shaoor Enterprises Location"
    style={{
      width: "100%",
      height: "100%",
      border: 0,
      display: "block",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>

          {/* Right Contact Form */}
          <div
            className="bg-white text-primary"
            style={{
              flex: "1.3 1 400px",
              minWidth: 0,
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              padding: "clamp(24px, 4vw, 44px)",
              boxShadow: "0 12px 40px rgba(16,42,67,0.04)",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Request a Quote
            </h3>

            <p className="mt-2 text-sm opacity-75">
              Tell us what you&apos;re looking for.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                marginTop: "30px",
              }}
            >
              {/* Full Name */}
              <label style={labelStyle}>
                Full Name *
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>

              {/* Phone Number */}
              <label style={labelStyle}>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  maxLength={25}
                  placeholder="03XX XXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>

              {/* Email */}
              <label style={labelStyle}>
                Email Address (Optional)
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  maxLength={150}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>

              {/* Service Selection */}
              <label style={labelStyle}>
                Select Service *
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* Project Requirements */}
              <label style={labelStyle}>
                Project Requirements *
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={1500}
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "130px",
                  }}
                />
              </label>

              {/* Validation Error */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 p-3 text-sm text-red-600"
                >
                  {error}
                </p>
              )}

              {/* Submit Button */}
              
              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-between rounded-full bg-primary text-white transition-colors duration-300 hover:bg-accent"
                style={{
                  padding: "8px 8px 8px 24px",
                  gap: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Submit Inquiry
                <span
                  className="flex items-center justify-center rounded-full bg-white text-primary"
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                  }}
                >
                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </span>
              </button>
              <p className="text-center text-xs leading-relaxed opacity-70">
                Your inquiry will open in WhatsApp. You can review it before
                sending.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
