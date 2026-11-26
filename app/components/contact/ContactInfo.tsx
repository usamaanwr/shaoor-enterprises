export default function ContactInfo() {
  return (
    <section
      className="w-full bg-white"
      style={{
        paddingBlock: "clamp(32px, 5vw, 64px)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-12 lg:px-8">
        <iframe
          src="https://maps.google.com/maps?q=Karachi,Pakistan&z=12&output=embed"
          title="Shaoor Enterprises Location"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "clamp(300px, 35vw, 450px)",
            border: 0,
            display: "block",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}