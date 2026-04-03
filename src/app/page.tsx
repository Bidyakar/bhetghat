import Hero from "@/components/hero";
import PromotionSection from "@/components/promotionsection";
import SignatureSection from "@/components/signaturesection";


export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/*Promo Section */}
        <PromotionSection />

        {/*Signature Section */}
        <SignatureSection />
      </main>
    </>
  );
}