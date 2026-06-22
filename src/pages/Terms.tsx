import { useEffect, useState } from "react";
import { RevealOnScroll } from "../components/animations/RevealOnScroll";

const SECTIONS = [
  { id: "overview", label: "Overview of the Service" },
  { id: "eligibility", label: "User Eligibility" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "data-privacy", label: "Data and Privacy" },
  { id: "service-limitations", label: "Service Limitations" },
  { id: "transactions", label: "Transactions & Responsibility" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "termination", label: "Termination" },
  { id: "contact", label: "Contact" },
];

export function Terms() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for sticky header
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full bg-white pb-32 pt-12 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] flex flex-col md:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sidebar */}
        <aside className="w-full md:w-[250px] shrink-0">
          <div className="md:sticky md:top-[120px] flex flex-col gap-2">
            <span className="text-[13px] font-bold text-[#666666] uppercase tracking-wider mb-2 px-4">Contents</span>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-[#3C003D] text-white shadow-sm"
                    : "text-[#666666] hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 max-w-[780px] flex flex-col gap-12">
          
          <div className="flex flex-col gap-3 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-[48px] font-bold text-[#130D13] tracking-tight">Terms</h1>
            <p className="text-[#666666] font-medium">Last updated: June 4, 2026</p>
          </div>

          <div className="flex flex-col gap-16 text-[#666666] leading-[1.6] text-[17px]">
            
            {/* Intro */}
            <div className="flex flex-col gap-4">
              <p>
                Please read these terms and conditions carefully before using the services we distribute and a support line the following terms. If you do not agree to these terms, you should not access this service or to not use a support line our application with any applicable law.
              </p>
            </div>

            {/* Sections */}
            <section id="overview" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Overview of the Service</h2>
              <p>
                Pitupi is an automated assistant that operates through WhatsApp to help you manage your finances. You can send cryptocurrency, buy or sell digital assets, trade gift cards, purchase airtime and data, and use all our platform features—all via our WhatsApp-based system.
              </p>
            </section>

            <section id="eligibility" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">User Eligibility</h2>
              <p>To use Pitupi, you must:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <li>Be at least 18 years old</li>
                <li>Have a valid Nigerian phone number</li>
                <li>Complete the WhatsApp onboarding process</li>
                <li>Authorized and signed up from a financial institution or as a customer</li>
              </ul>
            </section>

            <section id="acceptable-use" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Acceptable Use</h2>
              <p>You agree NOT to use Pitupi for:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <li>Illegal activities or fraudulent purposes</li>
                <li>Money laundering or terrorist financing</li>
                <li>Selling counterfeit or stolen gift cards</li>
                <li>Any engagement in abuse or provide false identity</li>
                <li>Hacking, spamming, or disrupting the service</li>
                <li>Circumventing verification procedures</li>
                <li>Any use that we have prohibited or in any activity that is not consistent with the use of the service, or in any other misuses</li>
              </ul>
            </section>

            <section id="data-privacy" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Data and Privacy</h2>
              <p>
                Your use of Pitupi is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data. By using the service, you consent to data processing as described in that policy.
              </p>
            </section>

            <section id="service-limitations" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Service Limitations</h2>
              <p>
                Pitupi is a non-custodial service. We do not hold your assets. You are solely responsible for safeguarding your recovery phrase and PIN. Loss of these credentials means permanent loss of access to your wallet. We cannot recover lost funds.
              </p>
            </section>

            <section id="transactions" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Transactions & Responsibility</h2>
              <p>
                You are fully responsible for validating the correctness of transactions you initiate. Once you confirm a transaction (e.g., sending crypto to an address or purchasing airtime for a phone number), that action is final. Pitupi is not liable for errors you make when entering transaction details.
              </p>
            </section>

            <section id="intellectual-property" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Intellectual Property</h2>
              <p>
                All materials, branding, code, and technology used in the service are the intellectual property of Pitupi Technologies. You may not copy, reproduce, distribute, or reverse engineer any part of the Service.
              </p>
            </section>

            <section id="termination" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to Pitupi at any time if you violate these Terms or engage in conduct we deem harmful to our platform, other users, or us ourselves.
              </p>
            </section>

            <section id="contact" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Contact</h2>
              <p>If you have questions or concerns about these Terms, please contact us at:</p>
              <p><strong className="text-[#130D13]">Email: legal@pitupi.co</strong></p>
            </section>

          </div>

          {/* Secure Account Card */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div className="mt-8 bg-[#F8F5FF] border border-[#E9DFED] rounded-[24px] p-8 md:p-10 flex flex-col gap-5">
              <h3 className="text-[22px] md:text-2xl font-bold text-[#130D13] tracking-tight">Lost Your Phone? Secure Your Account Instantly</h3>
              <p className="text-[#666666] leading-[1.6] text-[17px] max-w-[640px]">
                If you ever lose access to your device, you can instantly freeze your PituPi account and recover your funds using your security question. We've got your back.
              </p>
              <button className="bg-[#3C003D] text-white font-medium px-8 py-3.5 rounded-xl w-fit mt-2 hover:bg-[#2A002A] transition-colors shadow-sm">
                Secure Account
              </button>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </main>
  );
}
