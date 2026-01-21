import Header from "../components/Header";
import Hero from "../components/Hero";
import SelectionSection from "../components/SelectionSection";
import ExcellenceSection from "../components/ExcellenceSection";
import StepsSection from "../components/StepsSection";
import CompanionCtaSection from "../components/CompanionCtaSection";
import TestimonialSection from "../components/TestimonialSection";
import FaqSection from "../components/FaqSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--shell)]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col gap-16 px-6 pb-16 pt-10 sm:px-10 lg:px-16">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      <div className="mt-20">
        <SelectionSection />
      </div>
      <ExcellenceSection />
      <StepsSection />
      <CompanionCtaSection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
