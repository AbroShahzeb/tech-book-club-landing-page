import { Button } from "../generalComponents/Button";
import { DevelopersJoined } from "../generalComponents/DevelopersJoined";
import { IconArrowUp } from "../generalComponents/svgIcons/iconArrowUp";
import logoBlueSky from "../assets/images/logo-bluesky.svg";
import logoLinkedin from "../assets/images/logo-linkedin.svg";

export const Footer = () => {
  return (
    <footer className="mt-800 tablet:mt-1000 desktop:mt-[120px] bg-neutral-900 rounded-t-16 pt-600 px-200 tablet:pt-800 tablet:px-400 desktop:pt-1000 bg-pattern-dark desktop:px-[135px] ">
      <div className="flex flex-col items-center desktop:max-w-[753px] mx-auto">
        <h2 className=" text-neutral-0 text-center text-xl-mobile font-semibold tablet:text-2xl font-martian-mono">
          Ready to debug your reading list?
        </h2>
        <div className="mt-500">
          <Button
            label="Review membership options"
            icon={<IconArrowUp />}
            variant="secondary"
          />
        </div>
        <div className="mt-50">
          <DevelopersJoined textColor="text-neutral-0" />
        </div>
      </div>

      <div className="py-300 px-400 border-t border-neutral-700 flex flex-col gap-200 items-center text-center mt-800 tablet:flex-row tablet:justify-between">
        <p className="text-xs text-neutral-0 font-normal">
          &copy; {new Date().getFullYear()} – Tech Book Club
        </p>
        <div className="flex items-center gap-300">
          <img src={logoBlueSky} alt="Bluesky Logo" />
          <img src={logoLinkedin} alt="LinkedIn Logo" />
        </div>
      </div>
    </footer>
  );
};
