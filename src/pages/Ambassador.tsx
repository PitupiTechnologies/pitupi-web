import { AmbassadorHero } from '../components/ambassador/AmbassadorHero';
import { AmbassadorStats } from '../components/ambassador/AmbassadorStats';
import { AmbassadorBenefits } from '../components/ambassador/AmbassadorBenefits';
import { AmbassadorRewards } from '../components/ambassador/AmbassadorRewards';
import { AmbassadorAudience } from '../components/ambassador/AmbassadorAudience';
import { AmbassadorSteps } from '../components/ambassador/AmbassadorSteps';
import { AmbassadorTestimonials } from '../components/ambassador/AmbassadorTestimonials';
import { AmbassadorFAQ } from '../components/ambassador/AmbassadorFAQ';
import { AmbassadorCTA } from '../components/ambassador/AmbassadorCTA';

export function Ambassador() {
  return (
    <main className="w-full bg-[#F8F5FF] overflow-hidden">
      <AmbassadorHero />
      <AmbassadorStats />
      <AmbassadorRewards />
      <AmbassadorAudience />
      <AmbassadorSteps />
      <AmbassadorBenefits />
      <AmbassadorTestimonials />
      <AmbassadorFAQ />
      <AmbassadorCTA />
    </main>
  );
}
