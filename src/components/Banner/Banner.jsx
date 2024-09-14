import { countUpData } from "@/assets/data/countUpData";
import banner1 from "@/assets/images/banner/banner1.png";
import banner2 from "@/assets/images/banner/banner2.png";
import banner3 from "@/assets/images/banner/banner3.png";
import banner4 from "@/assets/images/banner/banner4.png";
import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import ContentBanner from "./ContentBanner";
const Banner = () => {
  const data = {
    title: "Discover, and collect Digital Art NFTs",
    description:
      " Digital marketplace for crypto collectibles and non-fungible tokens(NFTs). Buy, Sell, and discover exclusive digital assets.",
    buttonText: "Explore Now",
    countUpData: countUpData,
  };
  return (
    <section className=" container flex flex-wrap-reverse md:flex-row items-center justify-between gap-6 md:gap-4 my-10">
      <div className=" basis-1/2">
        <ContentBanner data={data} />
      </div>

      <div className=" relative flex items-center justify-center px-10 md:px-1 ">
        <div className=" absolute -right-12 ">
          <Image src={banner3} alt="logo" />
        </div>
        <div className="  absolute -right-6">
          <Image src={banner2} alt="logo" />
        </div>
        <div className=" opacity-100 z-20 ">
          <Image src={banner1} alt="logo" />
        </div>
        <div className="z-30 absolute -left-16 bottom-28 ">
          <Image src={banner4} alt="logo" className="  " />
        </div>

        <div className=" absolute  inset-0 z-40 p-6 ">
          <div className="h-full flex flex-col justify-between  ">
            <div>
              <h1 className=" text-2xl font-bold text-white  ">
                Abstr Gradient NFT
              </h1>
              <div className="my-2 flex items-center gap-2 text-white">
                <Image src={user} />
                <p>Arkhan17</p>
              </div>
            </div>
            <div className="mt-auto bg-gradient-to-br from-[#35c5ec] via-[#38b9e4]  to-[#4d3ebe] py-4 rounded-lg px-2 w-full flex items-center justify-between gap-4">
              <div className="text-white  space-y-2 text-base font-medium ">
                <h3>Current Bid</h3>
                <span className=" flex items-center gap-1 ">
                  <FaEthereum size={20} />
                  <p>0.25 ETH</p>
                </span>
              </div>
              <div className="text-white text-sm  space-y-2">
                <h3>Ends in</h3>
                <span className=" flex items-center gap-1 text-base font-medium ">
                  <FaEthereum size={20} />
                  <p>12h 43m 42s</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
