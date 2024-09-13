import { countUpData } from "@/assets/data/countUpData";
import banner1 from "@/assets/images/banner/banner1.png";
import banner2 from "@/assets/images/banner/banner2.png";
import banner3 from "@/assets/images/banner/banner3.png";
import Image from "next/image";
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
    <section className="container flex items-center justify-between gap-4 my-10">
      <div className=" basis-1/2">
        <ContentBanner data={data} />
      </div>
      <div className="  ">
        <div className=" relative ">
          <Image
            src={banner3}
            alt="logo"
            className="w-[80%] absolute  inset-0  -right-10"
          />
          <Image
            src={banner2}
            alt="logo"
            className="w-[90%] absolute -right-4 opacity-50"
          />
          <Image
            src={banner1}
            alt="logo"
            className="w-full absolute  inset-0 opacity-100"
          />

          {/* <Image src={banner4} alt="logo" className="  " /> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
