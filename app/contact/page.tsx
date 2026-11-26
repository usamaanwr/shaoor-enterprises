import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Shaoor Enterprises",
  description:
    "Contact Shaoor Enterprises for solar energy solutions, panaflex printing and project quotations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      {/* <ContactInfo /> */}
      <ContactForm />
      <Footer/>
    </>
  );
}
