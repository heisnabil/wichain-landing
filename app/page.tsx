import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Content from "@/components/sections/content";
import Pricing from "@/components/sections/pricing";
import Faqs from "@/components/sections/faqs";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Content />
      <Pricing />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}
