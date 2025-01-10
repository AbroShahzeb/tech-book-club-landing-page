import { StarIcon } from "./svgIcons/StarIcon";
import HeaderAvatars from "../assets/images/image-avatars.webp";

export const DevelopersJoined = ({ textColor = "text-neutral-700" }) => {
  return (
    <div className="flex items-center gap-150 mt-250">
      <div>
        <img src={HeaderAvatars} alt="avatars" className="h-500" />
      </div>
      <div className="flex flex-col gap-50">
        <div className="flex items-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className={`${textColor} text-xs font-martian-mono`}>
          200+ developers joined already
        </p>
      </div>
    </div>
  );
};
