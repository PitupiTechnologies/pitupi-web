import { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  MoreVertical,
  Phone,
  Signal,
  Battery,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

/* ─── Chat data ─── */
import React from "react";
interface Message {
  id: number;
  type: "out" | "in";
  time: string;
  content: React.ReactNode;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    type: "out",
    time: "11:14 AM",
    content: "What's my balance? 👀",
  },
  {
    id: 2,
    type: "in",
    time: "11:16 AM",
    content: (
      <>
        <p>
          Your current balance:
          <br />
          <strong>USDT: 245.30</strong>
          <br />
          <strong>BTC: 0.0041</strong>
          <br />
          <strong>BNB: 1.20</strong>
        </p>
        <p className="mt-1.5 text-gray-500 text-[11px]">
          What would you like to do?
        </p>
      </>
    ),
  },
  {
    id: 3,
    type: "out",
    time: "11:16 AM",
    content: "Buy 50 USDT with Naira",
  },
  {
    id: 4,
    type: "in",
    time: "11:17 AM",
    content: (
      <p>
        Got it! Here's the quote:
        <br />
        <br />
        <strong>50 USDT</strong> → ₦82,500
        <br />
        Rate: ₦1,650/USDT
        <br />
        Fees: ₦0 (gas covered)
        <br />
        <br />
        Reply *CONFIRM* to proceed ✅
      </p>
    ),
  },
  {
    id: 5,
    type: "out",
    time: "11:18 AM",
    content: "Confirm",
  },
];

/* ─── Typing indicator dots ─── */
function TypingIndicator() {
  return (
    <div className="self-start max-w-[80%]">
      <div className="bg-white px-4 py-2.5 rounded-lg rounded-tl-none shadow-sm inline-flex items-center gap-1">
        <span
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "0ms", animationDuration: "600ms" }}
        />
        <span
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "150ms", animationDuration: "600ms" }}
        />
        <span
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
          style={{ animationDelay: "300ms", animationDuration: "600ms" }}
        />
      </div>
    </div>
  );
}

/* ─── Single chat bubble ─── */
function ChatBubble({
  message,
  visible,
}: {
  message: Message;
  visible: boolean;
}) {
  const isOut = message.type === "out";

  return (
    <div
      className={`flex flex-col transition-all duration-500 ease-out ${
        isOut ? "self-end items-end" : "self-start items-start"
      } max-w-[80%] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
      }`}
    >
      <div
        className={`px-2.5 pt-1.5 pb-1 rounded-lg shadow-sm text-[13px] leading-relaxed ${
          isOut
            ? "bg-[#E7FFDB] text-[#111] rounded-tr-none"
            : "bg-white text-[#111] rounded-tl-none"
        }`}
      >
        <div>{message.content}</div>
        <div className="flex justify-end mt-0.5 -mb-0.5">
          <span className="text-[9px] text-gray-400 leading-none">
            {message.time}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export function ValueProposition() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStarted = useRef(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Start the animation when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function startAnimation() {
    let currentIndex = 0;

    function showNext() {
      if (currentIndex >= MESSAGES.length) return;

      const msg = MESSAGES[currentIndex];
      const isIncoming = msg.type === "in";

      if (isIncoming) {
        // Show typing indicator, then message
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          currentIndex++;
          setVisibleCount(currentIndex);
          scrollToBottom();
          setTimeout(showNext, 400);
        }, 700);
      } else {
        // Outgoing messages appear after a short delay
        setTimeout(
          () => {
            currentIndex++;
            setVisibleCount(currentIndex);
            scrollToBottom();
            setTimeout(showNext, 600);
          },
          500 + Math.random() * 300,
        );
      }
    }

    // Kick off
    setTimeout(showNext, 600);
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (chatRef.current) {
        chatRef.current.scrollTo({
          top: chatRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  }

  return (
    <section ref={sectionRef} className="w-full bg-[#F8F5FF] sticky top-0 h-[130dvh] md:h-[100dvh] z-0 overflow-hidden">
      <motion.div 
        style={{ scale, opacity }} 
        className="w-full h-[100dvh] max-w-[1440px] mx-auto px-6 lg:px-[200px] pt-[80px] md:pt-[120px] flex flex-col items-center justify-between transform-gpu"
      >
        {/* Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col items-center text-center gap-4 mb-8 max-w-[700px]">
            <RevealText
              text="Just text. We'll do the rest"
              as="h2"
              className="text-4xl md:text-[48px] font-bold text-violet-800 tracking-[-0.04em] leading-[1.2] justify-center"
            />
            <p className="text-lg font-medium text-violet-400 mt-2 max-w-[540px] leading-[1.45]">
              Join thousands of Africans who trust us
              <br className="hidden md:block" />
              No Complex Dashboards. No Complex Charts.
              <br className="hidden md:block" />
              Just simple commands and Swift executions
            </p>
          </div>
        </RevealOnScroll>

        {/* Phone Container */}
        <div className="relative w-full max-w-[530px] mt-8">
          {/* Gold gradient background */}
          <div
            className="absolute inset-x-0 top-0 md:top-[60px] bottom-0 rounded-t-[48px] md:rounded-t-[64px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(249,199,1,1) 0%, rgba(254,249,230,1) 72%)",
            }}
          />

          {/* SECURE Badge */}
          <RevealOnScroll direction="left" delay={0.3}>
            <div className="absolute top-[380px] md:top-[400px] -left-2 sm:-left-8 md:-left-38 z-30 bg-white rounded-[16px] md:rounded-[24px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.08)] px-4 md:px-6 py-3 md:py-5 flex items-center gap-3 md:gap-4 scale-[0.85] md:scale-100 origin-left">
              <div className="w-[44px] md:w-[56px] h-[44px] md:h-[56px] bg-[#0BA642] rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 md:w-5"
                >
                  <path
                    d="M12 0L24 5V13C24 20 12 28 12 28C12 28 0 20 0 13V5L12 0Z"
                    fill="#E8E8F2"
                  />
                  <path
                    d="M7 14L10.5 17.5L17 11"
                    stroke="#0BA642"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5 min-w-[110px] md:min-w-[130px] pt-1">
                <span className="text-[15px] md:text-[17px] font-extrabold text-[#111111] tracking-wide">
                  SECURE
                </span>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <div className="h-1.5 md:h-2 bg-[#E1E1E1] rounded-full w-[90%]" />
                  <div className="h-1.5 md:h-2 bg-[#E1E1E1] rounded-full w-full" />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* FAST Badge */}
          <RevealOnScroll direction="right" delay={0.4}>
            <div className="absolute top-[180px] -right-12 sm:-right-24 md:-right-34 z-30 bg-white rounded-[16px] md:rounded-[24px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.08)] px-4 md:px-6 py-3 md:py-5 flex items-center gap-3 md:gap-4 scale-[0.85] md:scale-100 origin-right">
              <div className="w-[44px] md:w-[56px] h-[44px] md:h-[56px] bg-[#ED5935] rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="18"
                  height="26"
                  viewBox="0 0 18 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 md:w-[18px]"
                >
                  <path
                    d="M10.5 0L0 16H8.5L7.5 28L18 12H9.5L10.5 0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5 min-w-[110px] md:min-w-[130px] pt-1">
                <span className="text-[15px] md:text-[17px] font-extrabold text-[#111111] tracking-wide">
                  FAST
                </span>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <div className="h-1.5 md:h-2 bg-[#E1E1E1] rounded-full w-[90%]" />
                  <div className="h-1.5 md:h-2 bg-[#E1E1E1] rounded-full w-full" />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Phone */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div className="relative z-10 mx-auto w-[310px] sm:w-[350px] pt-8 md:pt-0">
              <div className="bg-gray-900 rounded-t-[46px] pt-[10px] px-[10px] pb-0">
                <div className="bg-[#F6EFE6] rounded-t-[40px] overflow-hidden flex flex-col h-[620px]">
                  {/* Status Bar */}
                  <div className="bg-white px-5 py-1.5 flex justify-between items-center text-[10px] font-medium text-black shrink-0">
                    <span>1:42</span>
                    <div className="flex items-center gap-1">
                      <Signal size={11} />
                      <Battery size={11} />
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="bg-white px-3 py-2.5 flex items-center justify-between border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2">
                      <ArrowLeft size={18} className="text-gray-600" />
                      <svg
                        width="218"
                        height="27"
                        viewBox="0 0 218 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_253_1260)">
                          <circle
                            cx="13.2117"
                            cy="13.2117"
                            r="13.2117"
                            fill="#3C003D"
                          />
                          <path
                            d="M13.0235 20.5645H6.60547V20.0862C6.60548 16.4935 9.47894 13.5811 13.0235 13.5811V20.5645Z"
                            fill="#F9C701"
                          />
                          <path
                            d="M14.2247 5.85864C17.7694 5.85864 20.6429 8.77106 20.6429 12.3637C20.6429 15.9563 17.7694 18.8688 14.2247 18.8688V12.3637H7.80667C7.80667 8.77106 10.6801 5.85865 14.2247 5.85864Z"
                            fill="#F9C701"
                          />
                        </g>
                        <path
                          d="M38.0877 14.9451H35.3952V13.2469H38.0877C38.5038 13.2469 38.8425 13.1791 39.1037 13.0436C39.365 12.9033 39.5561 12.7098 39.6771 12.4631C39.798 12.2163 39.8585 11.9381 39.8585 11.6285C39.8585 11.314 39.798 11.0213 39.6771 10.7503C39.5561 10.4794 39.365 10.2616 39.1037 10.0971C38.8425 9.93265 38.5038 9.8504 38.0877 9.8504H36.15V18.7117H33.9728V8.14491H38.0877C38.915 8.14491 39.6238 8.2949 40.2141 8.59487C40.8092 8.89 41.264 9.29883 41.5785 9.82137C41.893 10.3439 42.0502 10.9414 42.0502 11.6139C42.0502 12.2961 41.893 12.8864 41.5785 13.3847C41.264 13.8831 40.8092 14.2677 40.2141 14.5387C39.6238 14.8096 38.915 14.9451 38.0877 14.9451ZM45.6281 10.8592V18.7117H43.5307V10.8592H45.6281ZM43.4001 8.81259C43.4001 8.50778 43.5065 8.25619 43.7194 8.05782C43.9323 7.85945 44.2178 7.76027 44.5758 7.76027C44.929 7.76027 45.212 7.85945 45.4249 8.05782C45.6426 8.25619 45.7515 8.50778 45.7515 8.81259C45.7515 9.1174 45.6426 9.36899 45.4249 9.56736C45.212 9.76573 44.929 9.86491 44.5758 9.86491C44.2178 9.86491 43.9323 9.76573 43.7194 9.56736C43.5065 9.36899 43.4001 9.1174 43.4001 8.81259ZM51.2018 10.8592V12.3397H46.6296V10.8592H51.2018ZM47.7618 8.92145H49.8519V16.3458C49.8519 16.5732 49.881 16.7473 49.939 16.8683C50.0019 16.9892 50.0938 17.0739 50.2148 17.1223C50.3358 17.1658 50.4882 17.1876 50.672 17.1876C50.8026 17.1876 50.9188 17.1828 51.0204 17.1731C51.1268 17.1586 51.2163 17.1441 51.2889 17.1296L51.2961 18.6681C51.1171 18.7262 50.9236 18.7721 50.7156 18.806C50.5075 18.8399 50.2777 18.8568 50.0261 18.8568C49.5665 18.8568 49.1649 18.7818 48.8214 18.6318C48.4827 18.477 48.2214 18.2303 48.0376 17.8916C47.8537 17.5529 47.7618 17.1078 47.7618 16.5562V8.92145ZM57.0367 16.832V10.8592H59.1269V18.7117H57.1601L57.0367 16.832ZM57.269 15.2209L57.8859 15.2064C57.8859 15.7289 57.8254 16.2151 57.7044 16.6651C57.5835 17.1102 57.402 17.4973 57.1601 17.8263C56.9182 18.1504 56.6134 18.4044 56.2457 18.5883C55.878 18.7673 55.445 18.8568 54.9466 18.8568C54.5644 18.8568 54.2112 18.8036 53.887 18.6972C53.5677 18.5859 53.2919 18.4141 53.0597 18.1819C52.8323 17.9448 52.6533 17.6424 52.5226 17.2747C52.3969 16.9022 52.334 16.4546 52.334 15.9321V10.8592H54.4241V15.9466C54.4241 16.1788 54.4507 16.3748 54.5039 16.5345C54.562 16.6941 54.6418 16.8247 54.7434 16.9264C54.845 17.028 54.9636 17.1005 55.099 17.1441C55.2393 17.1876 55.3942 17.2094 55.5635 17.2094C55.9941 17.2094 56.3328 17.1223 56.5795 16.9481C56.8311 16.7739 57.0077 16.5369 57.1093 16.2369C57.2158 15.9321 57.269 15.5934 57.269 15.2209ZM64.9691 14.9451H62.2766V13.2469H64.9691C65.3852 13.2469 65.7238 13.1791 65.9851 13.0436C66.2464 12.9033 66.4375 12.7098 66.5584 12.4631C66.6794 12.2163 66.7399 11.9381 66.7399 11.6285C66.7399 11.314 66.6794 11.0213 66.5584 10.7503C66.4375 10.4794 66.2464 10.2616 65.9851 10.0971C65.7238 9.93265 65.3852 9.8504 64.9691 9.8504H63.0314V18.7117H60.8541V8.14491H64.9691C65.7964 8.14491 66.5052 8.2949 67.0955 8.59487C67.6906 8.89 68.1454 9.29883 68.4599 9.82137C68.7744 10.3439 68.9316 10.9414 68.9316 11.6139C68.9316 12.2961 68.7744 12.8864 68.4599 13.3847C68.1454 13.8831 67.6906 14.2677 67.0955 14.5387C66.5052 14.8096 65.7964 14.9451 64.9691 14.9451ZM72.5095 10.8592V18.7117H70.4121V10.8592H72.5095ZM70.2815 8.81259C70.2815 8.50778 70.3879 8.25619 70.6008 8.05782C70.8137 7.85945 71.0992 7.76027 71.4572 7.76027C71.8104 7.76027 72.0934 7.85945 72.3063 8.05782C72.524 8.25619 72.6329 8.50778 72.6329 8.81259C72.6329 9.1174 72.524 9.36899 72.3063 9.56736C72.0934 9.76573 71.8104 9.86491 71.4572 9.86491C71.0992 9.86491 70.8137 9.76573 70.6008 9.56736C70.3879 9.36899 70.2815 9.1174 70.2815 8.81259Z"
                          fill="#081015"
                        />
                        <g clip-path="url(#clip1_253_1260)">
                          <path
                            d="M90.2692 13.2119L88.926 11.676L89.1131 9.64472L87.1259 9.19332L86.0855 7.43176L84.2138 8.23547L82.3421 7.43176L81.3017 9.18781L79.3145 9.63371L79.5016 11.6705L78.1584 13.2119L79.5016 14.7477L79.3145 16.7845L81.3017 17.2359L82.3421 18.992L84.2138 18.1828L86.0855 18.9865L87.1259 17.2304L89.1131 16.779L88.926 14.7477L90.2692 13.2119ZM83.1624 15.8102L81.0705 13.7128L81.8852 12.8981L83.1624 14.1807L86.3827 10.9494L87.1974 11.7641L83.1624 15.8102Z"
                            fill="#0096DE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_253_1260">
                            <rect
                              width="26.4233"
                              height="26.4233"
                              fill="white"
                            />
                          </clipPath>
                          <clipPath id="clip1_253_1260">
                            <rect
                              width="13.2117"
                              height="13.2117"
                              fill="white"
                              transform="translate(77.3323 6.60583)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone size={16} />
                      <MoreVertical size={16} />
                    </div>
                  </div>

                  {/* Chat Messages — animated */}
                  <div
                    ref={chatRef}
                    className="flex-1 bg-[#EBE5DE] px-3 py-3 flex flex-col gap-2 overflow-y-auto"
                  >
                    {MESSAGES.map((msg, i) => (
                      <ChatBubble
                        key={msg.id}
                        message={msg}
                        visible={i < visibleCount}
                      />
                    ))}

                    {showTyping && <TypingIndicator />}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </motion.div>
    </section>
  );
}

