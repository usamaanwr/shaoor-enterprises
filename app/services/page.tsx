import type { Metadata } from "next";
import ServicesHero from "../components/services/ServicesHero";
import ServicesOverview from "../components/services/ServicesOverview";
import SolarServices from "../components/services/SolarServices";
import PrintingServices from "../components/services/PrintingServices";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Services | Shaoor Enterprises",
  description:
    "Explore residential and commercial solar installation and professional panaflex printing solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview/>
      <SolarServices/>
      <PrintingServices/>
      <Footer/>
    </>
  );
}