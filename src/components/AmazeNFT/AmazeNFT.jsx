import card from "@/assets/images/icon/card-tick-1.png";
import cart from "@/assets/images/icon/chart-square2.png";
import Image from "next/image";
const AmazeNFT = () => {
  return (
    <div className="bg-[#F7F9FB] py-10 md:py-14 ">
      <div className="container grid grid-cols-3 items-start justify-between gap-4 py-10">
        <h1 className="w-full text-xl md:text-3xl font-extrabold uppercase">
          The amazing NFT art of the world here
        </h1>
        <div className="flex items-start gap-2 ">
          <Image src={card} alt="" />
          <span className="space-y-3 ">
            <h3 className="text-base md:text-xl font-semibold">
              Fast Transaction
            </h3>
            <p className="text-sm md:text-base text-textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </span>
        </div>
        <div className="flex items-start gap-2 ">
          <Image src={cart} alt="" />
          <span className="space-y-3 ">
            <h3 className=" text-base md:text-xl  font-semibold">
              Growth Transaction
            </h3>
            <p className="text-sm md:text-base text-textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AmazeNFT;
