import patterArrow from "../assets/images/pattern-arrow.svg";
import patternGlow from "../assets/images/pattern-glow.svg";

const steps = [
  {
    id: 0,
    text: "Choose your membership tier",
    hasArrow: true,
  },
  {
    id: 1,
    text: "Get your monthly book selection",
    hasArrow: true,
  },
  {
    id: 2,
    text: "Join our discussion forums",
    hasArrow: true,
  },
  {
    id: 3,
    text: "Attend exclusive meetups",
    hasArrow: false,
  },
];

export const ReadingJourneySection = () => {
  return (
    <section className="hidden mx-[135px] mt-[56px] mb-[120px] relative rounded-12 bg-neutral-100 py-1000 desktop:flex flex-col items-center gap-800 font-martian-mono bg-pattern-light overflow-hidden desktop:mt-[120px]">
      <div className="absolute w-[684px] h-[684px] right-0 bottom-0 translate-x-1/2 translate-y-1/2">
        <img src={patternGlow} alt="Glow pattern" />
      </div>

      <h2 className="text-2xl font-semibold text-[#062630] max-w-[512px] text-center">
        Your tech reading journey
      </h2>

      <div className="flex w-full justify-between px-500 gap-600">
        {steps.map((step) => (
          <div className="flex flex-col gap-300 text-neutral-900 relative">
            {step.hasArrow && (
              <span className="absolute top-0 right-0">
                <img src={patterArrow} alt="Arrow pattern" />
              </span>
            )}

            <span className="text-[24px] leading-[24px] tracking-[-0.24px] font-normal w-500 h-500 rounded-4 py-50 flex items-center justify-center border-2 border-neutral-900">
              {step.id + 1}
            </span>
            <p className="text-sm font-semibold">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
