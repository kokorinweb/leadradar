import { BeforeAfter } from "@/components/BeforeAfter";
import { Calculator } from "@/components/Calculator";
import { Contacts } from "@/components/Contacts";
import { Directions } from "@/components/Directions";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { RepairTypes } from "@/components/RepairTypes";
import { Reviews } from "@/components/Reviews";
import { Stages } from "@/components/Stages";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Calculator />
        <Directions />
        <RepairTypes />
        <Packages />
        <Works />
        <BeforeAfter />
        <Stages />
        <Process />
        <Reviews />
        <Faq />
        <Contacts />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
