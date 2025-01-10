import notAverageMobile from "../assets/images/image-not-average-mobile.webp";
import notAverageTablet from "../assets/images/image-not-average-tablet.webp";
import notAverageDesktop from "../assets/images/image-not-average-desktop.webp";
import patternCircle from "../assets/images/pattern-circle.png";
import logosTech from "../assets/images/logos-tech.svg";

export const FeatureSectionTwo = () => {
  return (
    <section className=" desktop:px-[135px] flex flex-col-reverse gap-500 desktop:gap-1000 desktop:items-center py-800 px-200 tablet:px-400 desktop:flex-row-reverse pb-0 desktop:py-0 desktop:mt-[120px]">
      <div className="flex-1 relative desktop:h-[537]">
        {/* Tech logos  */}
        <div className="hidden desktop:block absolute bottom-[45px] -left-[90px]">
          <img src={logosTech} alt="Tech logos" />
        </div>

        <img
          src={notAverageMobile}
          alt="Read together Illustration"
          className="tablet:hidden rounded-8"
        />
        <img
          src={notAverageTablet}
          alt="Read together Illustration"
          className="hidden tablet:block desktop:hidden rounded-16"
        />
        <img
          src={notAverageDesktop}
          alt="Read together Illustration"
          className="hidden desktop:block rounded-12 h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-300 flex-1">
        <h2 className="text-xl-mobile text-neutral-900 font-semibold font-martian-mono desktop:text-2xl">
          Not your average book{" "}
          <span className="relative">
            <img
              src={patternCircle}
              alt="Circle pattern"
              className="absolute inset-0 scale-125"
            />
            club
          </span>
        </h2>
        <p className="text-md text-neutral-700">
          Connect with a community that speaks your language - from{" "}
          <span className="font-semibold">Python</span> to{" "}
          <span className="font-semibold">TypeScript</span> and everything in
          between. Our discussions blend technical depth with practical
          applications.
        </p>
      </div>
    </section>
  );
};
