import { useEffect, useState } from "react";
import { RevealOnScroll } from "../components/animations/RevealOnScroll";

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "what-we-collect", label: "What Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "voice-image", label: "Voice & Image Processing" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "your-rights", label: "Your Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact", label: "Contact" },
];

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

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
            <h1 className="text-4xl md:text-[48px] font-bold text-[#130D13] tracking-tight">Privacy Policy</h1>
            <p className="text-[#666666] font-medium">Last updated: June 4, 2026</p>
          </div>

          <div className="flex flex-col gap-16 text-[#666666] leading-[1.6] text-[17px]">
            
            {/* Sections */}
            <section id="introduction" className="scroll-mt-32 flex flex-col gap-4">
              <p>
                Welcome to PituPi. As an AI-powered financial assistant on WhatsApp, we know your privacy is important to you. This Privacy Policy outlines what data we collect, why, and how we protect your personal information when you use our services.
              </p>
            </section>

            <section id="what-we-collect" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">What Information We Collect</h2>
              <p>When you use PituPi through WhatsApp, we may collect the following information:</p>
              <ul className="flex flex-col gap-3 mt-1">
                <li><strong className="text-[#130D13]">Personal Information</strong>: Name, phone number, email (if provided via WhatsApp)</li>
                <li><strong className="text-[#130D13]">Identity Verification Data</strong>: NIN (National Identification Number) or BVN (Bank Verification Number) when you verify your account</li>
                <li><strong className="text-[#130D13]">Transaction Information</strong>: Details of cryptocurrency purchases, sales, swaps, gift card trades, and airtime/data purchases</li>
                <li><strong className="text-[#130D13]">Financial Information</strong>: Bank account details for payouts</li>
                <li><strong className="text-[#130D13]">Usage Data</strong>: Chat interactions, usage patterns, and troubleshooting data</li>
              </ul>
            </section>

            <section id="how-we-use" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-1">
                <li>Facilitate transactions and provide our services</li>
                <li>Verify your identity (via Dojah API for NIN/BVN verification)</li>
                <li>Generate and maintain your virtual bank account (via Monnify)</li>
                <li>Process payouts to your bank account</li>
                <li>Improve our AI service and user experience</li>
                <li>Detect and prevent fraud, money laundering, and abuse</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section id="voice-image" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Voice & Image Processing</h2>
              <p>
                When you send an image or voice note through our system (for example, a gift card photo), we use automated AI processing (such as Google Cloud Vision AI) to extract relevant data. We do not retain voice or image files longer than necessary to process them securely.
              </p>
            </section>

            <section id="third-party" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Third-Party Services</h2>
              <p>We share your information with trusted third-party services to deliver our services securely and effectively:</p>
              <ul className="flex flex-col gap-3 mt-2 mb-2">
                <li><strong className="text-[#130D13]">Dojah</strong>: For NIN/BVN verification and KYC compliance</li>
                <li><strong className="text-[#130D13]">Monnify</strong>: For virtual bank account creation and payment processing</li>
                <li><strong className="text-[#130D13]">Reloadly/DingConnect</strong>: For airtime and data top-ups</li>
                <li><strong className="text-[#130D13]">Google Cloud Vision AI</strong>: For gift card image recognition</li>
                <li><strong className="text-[#130D13]">Threshold MPC</strong>: For non-custodial wallet infrastructure</li>
              </ul>
              <p>These third parties are bound by their own privacy policies and are required to protect your data according to their agreements with us.</p>
            </section>

            <section id="your-rights" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Your Rights</h2>
              <p>Under Nigerian data protection law (NDPR), you have the right to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 mt-1">
                <li>Access the personal data we hold about you</li>
                <li>Request an update to your personal information</li>
                <li>Request deletion of your data</li>
                <li>Object to certain types of processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section id="childrens-privacy" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Children's Privacy</h2>
              <p>
                PituPi is not intended for use by individuals under 18. We do not knowingly collect data from minors. If you become aware of any underage users, we will delete their data immediately.
              </p>
            </section>

            <section id="policy-updates" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Policy Updates</h2>
              <p>
                We may revise this policy from time to time. If we make significant changes, we will notify you through WhatsApp or by updating the "Last Updated" date above.
              </p>
            </section>

            <section id="contact" className="scroll-mt-32 flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-[#130D13] mb-1">Contact</h2>
              <p>If you have questions or concerns about your privacy, you can reach us at:</p>
              <p><strong className="text-[#130D13]">Email: privacy@pitupi.co</strong></p>
              <div className="text-[14px] text-[#888888] mt-4 leading-relaxed">
                <p>PituPi is operated by Golden Xchange Limited, a company duly registered in Nigeria.</p>
                <p>CAC Registration Number: RC 9564579</p>
                <p>Office: No. 5, Olufunmilola Okikiolu Str, Ikeja, Lagos, Nigeria</p>
              </div>
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
