import { Hero } from '../components/sections/Hero';
import { ValueProposition } from '../components/sections/ValueProposition';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';
import { PreFooterCTA } from '../components/sections/PreFooterCTA';

export function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <div className="relative w-full z-0">
        <ValueProposition />
        <HowItWorks />
      </div>
      <Features />
      <FAQ />
      <PreFooterCTA />
    </main>
  );
}
