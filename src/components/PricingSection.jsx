import iconCheck from "../assets/images/icon-check.svg";
import patternGlow from "../assets/images/pattern-glow.svg";
import { Button } from "../generalComponents/Button";

export const PricingSection = () => {
  return (
    <section className="mt-800 px-200 tablet:px-400 tablet:mt-1000 flex flex-col gap-300 tablet:gap-500 desktop:gap-800 desktop:max-w-[970px] desktop:mx-auto">
      <h2 className="text-xl-mobile tablet:text-2xl text-neutral-900 font-semibold font-martian-mono desktop:text-center">
        Membership options
      </h2>

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-300 items-center">
        {/* PRICING CARD START */}
        <div className="p-300 border border-neutral-200 rounded-8">
          {/* PRICING CARD HEADER START */}
          <div className="flex flex-col gap-300 items-start text-neutral-900">
            <p className="text-lg font-semibold font-martian-mono">Starter</p>
            <div className="flex items-center gap-100">
              <span className="text-xl font-semibold font-martian-mono">
                $19
              </span>
              <span className="text-md text-neutral-700 font-normal">
                /month
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-200 my-300"></div>
          {/* PRICING CARD HEADER END */}

          {/* PRICING CARD BODY START */}
          <div className="flex flex-col gap-200">
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                1 book/month
              </p>
            </div>
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                Online Forums
              </p>
            </div>
          </div>
          {/* PRICING BODY END */}

          <div className="mt-400">
            <Button
              label="Subscribe now"
              className="w-full flex justify-center"
            />
          </div>
        </div>
        {/* PRICING CARD END */}

        {/* PRICING CARD START */}
        <div className="p-300 border desktop:py-500 border-neutral-200 rounded-8 bg-neutral-100 relative overflow-hidden">
          <div className="absolute z-0 bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[684px] h-[684px]">
            <img src={patternGlow} alt="Glow pattern" />
          </div>

          {/* PRICING CARD HEADER START */}
          <div className="flex flex-col gap-300 items-start text-neutral-900 relative z-10">
            <p className="text-lg font-semibold font-martian-mono">Pro</p>
            <div className="flex items-center gap-100">
              <span className="text-xl font-semibold font-martian-mono">
                $29
              </span>
              <span className="text-md text-neutral-700 font-normal">
                /month
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-200 my-300"></div>
          {/* PRICING CARD HEADER END */}

          {/* PRICING CARD BODY START */}
          <div className="flex flex-col gap-200 relative z-10">
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                2 book/month
              </p>
            </div>
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                Virtual Meetups
              </p>
            </div>
          </div>
          {/* PRICING BODY END */}

          <div className="mt-400 relative z-10">
            <Button
              label="Subscribe now"
              className="w-full flex justify-center"
            />
          </div>
        </div>
        {/* PRICING CARD END */}

        {/* PRICING CARD START */}
        <div className="p-300 border border-neutral-200 rounded-8">
          {/* PRICING CARD HEADER START */}
          <div className="flex flex-col gap-300 items-start text-neutral-900">
            <p className="text-lg font-semibold font-martian-mono">
              Enterprise
            </p>
            <div className="flex items-center gap-100 text-xl font-semibold text-neutral-900 font-martian-mono">
              Custom
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-200 my-300"></div>
          {/* PRICING CARD HEADER END */}

          {/* PRICING CARD BODY START */}
          <div className="flex flex-col gap-200">
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                Team access
              </p>
            </div>
            <div className="flex items-center gap-150">
              <img
                src={iconCheck}
                alt="Check icon"
                className="w-250 h-250 flex-shrink-0"
              />
              <p className="text-md font-normal text-neutral-700">
                Private sessions
              </p>
            </div>
          </div>
          {/* PRICING BODY END */}

          <div className="mt-400">
            <Button label="Talk to us" className="w-full flex justify-center" />
          </div>
        </div>
        {/* PRICING CARD END */}
      </div>
    </section>
  );
};
