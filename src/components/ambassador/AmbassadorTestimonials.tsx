import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const testimonials = [
  {
    name: "Chidi Okafor",
    location: "Lagos, Nigeria",
    quote: `"I've earned over ₦200,000 just by sharing Pitupi with my Twitter followers. Best side hustle ever! The commission keeps rolling in every week."`,
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Amaka Nwosu",
    location: "Abuja, Nigeria",
    quote: `"As a content creator, this program helps me monetize while solving real problems for my audience. My followers love how easy Pitupi is to use."`,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Emeka Igwe",
    location: "Port Harcourt, Nigeria",
    quote: `"I referred my entire campus fellowship. Now I'm earning passive income every month! It's amazing how much this has helped my finances."`,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Blessing Adeyemi",
    location: "Ibadan, Nigeria",
    quote: `"I started with just 10 referrals. Three months later, I'm making ₦80k monthly from commissions alone. This is life-changing!"`,
    image: "https://i.pravatar.cc/150?img=9",
  },
];

export function AmbassadorTestimonials() {
  return (
    <section className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto py-[100px]">
        {/* Header */}
        <div className="px-6 lg:px-[120px]">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#111111] tracking-[-0.04em] leading-[1.1] mb-16 text-center">
            Ambassador<br />Success Stories
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 lg:px-[120px] pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((testimonial, i) => (
            <RevealOnScroll
              key={i}
              direction="up"
              delay={i * 0.1}
              className="shrink-0 snap-start"
            >
              <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-8 flex flex-col gap-6 w-[340px] h-full">
                {/* Profile info */}
                <div className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-bold text-[#111111]">
                      {testimonial.name}
                    </span>
                    <span className="text-[13px] text-gray-500 font-medium mt-0.5">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
                
                {/* Quote */}
                <p className="text-[15px] text-[#666666] leading-[1.6]">
                  {testimonial.quote}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          <div className="w-6 h-2.5 rounded-full bg-[#3C003D]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
        </div>
      </div>
    </section>
  );
}
