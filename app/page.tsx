import Image from "next/image";
import Hero from "./components/home/Hero";
import Introduction from "./components/home/Introduction";
import ServicesPreview from "./components/home/services";
import CallToAction from "./components/home/CallToAction";
import Footer from "./components/layout/Footer";

export default function Home() {
  return(
    <>
    <Hero/>
    <Introduction/>
    <ServicesPreview/>
    <CallToAction/>
    <Footer/>
    <section id="next-section" />
    </>
  )
}
