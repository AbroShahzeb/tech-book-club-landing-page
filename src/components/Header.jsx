import { Button } from "../generalComponents/Button";
import { Navigation } from "./Navigation";
import { IconArrowDown } from "../generalComponents/svgIcons/IconArrowDown";

import HeroImageMobile from "../assets/images/image-hero-mobile.webp";
import HeroImageTablet from "../assets/images/image-hero-tablet.webp";
import HeroImageDesktop from "../assets/images/image-hero-desktop.webp";
import { DevelopersJoined } from "../generalComponents/DevelopersJoined";

export const Header = () => {
  return (
    <header className="relative w-full bg-neutral-100 px-200 pt-300 pb-1000 tablet:px-400 desktop:px-[135px] overflow-hidden desktop:pt-400">
      {/* Background Pattern */}
      <div className="absolute z-0 top-0 left-0 h-[820px] tablet:h-[1127px] w-full bg-pattern-light bg-no-repeat bg-cover"></div>

      {/* Glow SVG */}
      <div className="absolute z-20 bottom-0 right-0 translate-x-1/2 translate-y-1/2  bg-glow bg-no-repeat bg-cover w-[684px] h-[684px] hidden tablet:block"></div>

      <Navigation />
      <div className="flex flex-col gap-800 relative z-10 desktop:flex-row desktop:items-center mt-600 tablet:mt-800 desktop:mt-1000">
        <div className="flex flex-col justify-center desktop:flex-1">
          <div className="">
            <h1 className="text-3xl-mobile tablet:text-3xl font-bold bg-text-gradient bg-clip-text text-transparent font-martian-mono">
              Join the ultimate tech book club
            </h1>
            <p className="mt-300 text-neutral-700 text-md">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <div className="mt-400">
              <Button
                label="Review membership options"
                icon={<IconArrowDown />}
              />
            </div>
          </div>

          <DevelopersJoined />
        </div>

        <div className="flex items-center self-stretch desktop:flex-1">
          {/* FOR MOBILE SCREENS */}
          <img
            src={HeroImageMobile}
            alt="Hero Image"
            className="rounded-8 tablet:hidden"
          />

          {/* FOR TABLET SCREENS */}
          <img
            src={HeroImageTablet}
            alt="Hero Image"
            className="rounded-8 hidden tablet:block desktop:hidden w-full"
          />

          {/* FOR DESKTOP SCREENS */}
          <img
            src={HeroImageDesktop}
            alt="Hero Image"
            className="rounded-8 hidden desktop:block w-full h-full flex-shrink-0"
          />
        </div>
      </div>
    </header>
  );
};
