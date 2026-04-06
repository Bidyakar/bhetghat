import Hero from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import PromotionSection from "@/components/promotionsection";
import SignatureSection from "@/components/signaturesection";
import DeliverySection from "@/components/deliverysection";
import Gallery from "@/components/galleryteaser";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <PromotionSection />
        <SignatureSection />
        <Gallery />
        <DeliverySection />
      </main>
    </>
  );
}