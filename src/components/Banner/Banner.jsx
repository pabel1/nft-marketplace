import banner1 from "@/assets/images/banner/banner1.png";
import Image from "next/image";
import ContentBanner from "./ContentBanner";
const Banner = () => {
  return (
    <section className=" flex items-center justify-between gap-4 my-10">
      <div className=" basis-1/2">
        <ContentBanner />
      </div>
      <div>
        <Image src={banner1} alt="logo" className="  " />
      </div>
    </section>
  );
};

export default Banner;
