import iconStar from "../assets/images/icon-star.svg";

export const ReviewSection = () => {
  return (
    <section className="mt-800 tablet:mt-1000 desktop:mt-[120px] px-200 tablet:px-400 desktop:max-w-[970px] desktop:mx-auto">
      <div className="flex items-start flex-col desktop:items-center">
        <div className="flex items-center">
          <img src={iconStar} alt="Star icon" />
          <img src={iconStar} alt="Star icon" />
          <img src={iconStar} alt="Star icon" />
          <img src={iconStar} alt="Star icon" />
          <img src={iconStar} alt="Star icon" />
        </div>

        <div className="flex flex-col mt-400 gap-400 items-start desktop:items-center">
          <h2 className="text-lg text-neutral-900 font-semibold tablet:text-xl font-martian-mono desktop:text-center">
            "This book club transformed my technical reading from a solitary
            activity into an enriching community experience. The discussions are
            gold!"
          </h2>
          <p className="text-md text-neutral-700 font-normal">
            Sarah Chen, Software Architect
          </p>
        </div>
      </div>
    </section>
  );
};
