import { Hero } from '../components/sections/Hero';
import { ValueProposition } from '../components/sections/ValueProposition';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';
import { PreFooterCTA } from '../components/sections/PreFooterCTA';

export function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Features />
      <FAQ />
      <PreFooterCTA />
    </main>
  );
}
