import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import OurProcess from "../components/about/OurProcess";
import Testimonials from "../components/about/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Shaoor Enterprises",
  description:
    "Discover Shaoor Enterprises and our approach to energy and professional printing solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory/>
      <MissionVision/>
      <WhyChooseUs/>
      <OurProcess/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  );
}