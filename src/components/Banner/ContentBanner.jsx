import { countUpData } from "@/assets/data/countUpData";
import Button from "../Buttons/Button";
import CountUp from "../CountUp/CountUp";

const ContentBanner = () => {
  return (
    <div className=" w-full space-y-5">
      <h1 className=" text-4xl font-bold text-borderText uppercase  ">
        Discover, and collect Digital Art NFTs
      </h1>
      <div className="md:w-[70%] w-full">
        <p className=" text-text text-base  tracking-wide my-6 text-left">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <Button className={"px-8 py-2"}>Explore Now</Button>
        <div className=" flex items-center justify-between gap-4 my-4">
          {countUpData &&
            countUpData.map(({ title, description, id }) => (
              <CountUp title={title} description={description} key={id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
