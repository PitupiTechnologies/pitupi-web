import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const FAQS = [
  {
    question: "What if I lose my phone?",
    answer:
      "Your funds are safe. You can simply recover your account using your secure PIN and identity verification on a new device.",
  },
  {
    question: "Do I need a foreign passport?",
    answer:
      "No. We are built for Nigeria. All you need is your NIN or BVN to unlock unlimited transactions.",
  },
  {
    question: "Why use WhatsApp instead of an app?",
    answer:
      "WhatsApp is faster, uses less data, and requires no extra storage space on your phone. Plus, you already know how to use it!",
  },
  {
    question: "How secure is my money?",
    answer:
      "We use bank-grade encryption and secure smart contracts to ensure your funds are always safe and accessible only by you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section id="faq" className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[200px] py-[120px] flex flex-col lg:flex-row gap-16 items-start">
        {/* Left column */}
        <RevealOnScroll direction="left" className="flex flex-col gap-4 lg:w-[400px] shrink-0">
          <RevealText
            text="Frequently Asked Questions"
            as="h2"
            className="text-4xl md:text-[44px] font-bold text-[#111111] tracking-[-0.04em] leading-[1.1]"
          />
          <p className="text-[16px] font-medium text-[#666666] mt-2 leading-[1.5]">
            Answers to common concerns about security and usage
          </p>
        </RevealOnScroll>

        {/* Accordion */}
        <RevealOnScroll
          direction="up"
          delay={0.2}
          className="flex flex-col w-full max-w-[800px] gap-4"
        >
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
