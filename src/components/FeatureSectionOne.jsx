import readTogetherMobile from "../assets/images/image-read-together-mobile.webp";
import readTogetherTablet from "../assets/images/image-read-together-tablet.webp";
import readTogetherDesktop from "../assets/images/image-read-together-desktop.webp";
import iconCheck from "../assets/images/icon-check.svg";

const features = [
  {
    id: 0,
    text: "Monthly curated tech reads selected by industry experts",
  },
  {
    id: 1,
    text: "Virtual and in-person meetups for deep-dive discussions",
  },
  {
    id: 2,
    text: "Early access to new tech book releases",
  },
  {
    id: 3,
    text: "Author Q&A sessions with tech thought leaders",
  },
];

export const FeatureSectionOne = () => {
  return (
    <section className=" desktop:px-[135px] flex flex-col-reverse gap-500 desktop:gap-1000 desktop:items-center py-800 px-200 tablet:px-400 desktop:flex-row desktop:py-0 desktop:mt-[120px]">
      <div className="flex-1">
        <img
          src={readTogetherMobile}
          alt="Read together Illustration"
          className="tablet:hidden rounded-8"
        />
        <img
          src={readTogetherTablet}
          alt="Read together Illustration"
          className="hidden tablet:block desktop:hidden rounded-16"
        />
        <img
          src={readTogetherDesktop}
          alt="Read together Illustration"
          className="hidden desktop:block rounded-12 h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-300 flex-1">
        <h2 className="text-xl-mobile desktop:text-2xl text-neutral-900 font-semibold font-martian-mono">
          Read together, grow together
        </h2>
        <div className="flex flex-col gap-200">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-[14px]  desktop:w-[431px]"
            >
              <span className="flex-shrink-0">
                <img src={iconCheck} alt="Check icon" />
              </span>
              <p className="text-md text-neutral-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
