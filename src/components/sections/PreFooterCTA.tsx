import { MessageCircle } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

export function PreFooterCTA() {
  return (
    <section className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[120px]">
        <div className="w-full bg-pitupu-purple-500 rounded-3xl px-8 md:px-12 py-16 flex flex-col items-center text-center gap-8 relative overflow-hidden border border-[rgba(245,158,11,0.2)]">
          {/* Decorative blurs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-pitupu-purple-700/40 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pitupu-purple-700/40 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4 max-w-[600px]">
              <RevealText
                text="Ready to get started?"
                as="h2"
                className="text-3xl md:text-[40px] font-semibold text-pitupu-purple-50 tracking-[-0.04em] leading-[1.2] justify-center text-center"
              />
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="text-lg font-medium text-violet-100 leading-[1.45]">
                Join thousands of Africans who trust Pitupi for their daily
                transactions.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" delay={0.35}>
          <a
            href="#"
            className="relative z-10 bg-pitupi-gold-500 text-[#111111] font-semibold text-lg h-[60px] px-8 rounded-[16px] flex items-center gap-3 hover:brightness-105 transition-all shadow-lg"
          >
            <MessageCircle size={20} />
            <span>Start Chatting on WhatsApp</span>
          </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
