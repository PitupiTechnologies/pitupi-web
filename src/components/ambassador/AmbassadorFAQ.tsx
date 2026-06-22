import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const FAQS = [
  {
    question: "How do I get paid?",
    answer: "You will be paid directly to your PituPi wallet in USDT, which you can easily swap and withdraw to your local bank account anytime.",
  },
  {
    question: "Do I need to be a student?",
    answer: "No, anyone can join! While many of our ambassadors are students, the program is open to all who want to share PituPi and earn.",
  },
  {
    question: "Do I need to pay to join?",
    answer: "Absolutely not! The PituPi Ambassador program is 100% free to join.",
  },
  {
    question: "Can I join while in school or during NYSC?",
    answer: "Yes! The program is extremely flexible and designed so you can earn passively while focusing on your studies or service.",
  },
];

export function AmbassadorFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[100px] flex flex-col items-center">
        {/* Header */}
        <RevealOnScroll direction="up" className="flex flex-col gap-4 items-center text-center mb-12">
          <RevealText
            text="Frequently Asked Questions"
            as="h2"
            className="text-4xl md:text-[44px] font-bold text-[#111111] tracking-[-0.04em] leading-[1.1] justify-center"
          />
          <p className="text-[16px] font-medium text-[#666666] mt-2 leading-[1.5]">
            Answers to common concerns about security and usage
          </p>
        </RevealOnScroll>

        {/* Accordion */}
        <RevealOnScroll direction="up" delay={0.2} className="flex flex-col w-full max-w-[800px] gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[16px] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-[15px] font-semibold text-[#111111] leading-6">
                    {faq.question}
                  </span>
                  <div className="shrink-0">
                    {isOpen ? (
                      <ChevronUp className="text-gray-600" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-600" size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-[14px] font-normal text-[#666666] leading-[24px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
