import dotImg from "@/assets/images/banner/Dot.png";
import Image from "next/image";
import Button from "../Buttons/Button";
import CountUp from "../CountUp/CountUp";
const ContentBanner = ({ data }) => {
  const { title, description, buttonText, countUpData } = data || {};
  return (
    <div className=" w-full space-y-5">
      <h1 className=" text-4xl font-extrabold text-borderText uppercase  ">
        {title}
      </h1>
      <div
        className={`${
          buttonText === "Sign Up Now" ? "w-full" : "md:w-[70%]"
        } w-full`}
      >
        <p className=" text-text text-base  tracking-wide my-6 text-left ">
          {description}
        </p>
        <div className=" relative ">
          <span className=" absolute -left-10 -bottom-5 -z-30 ">
            <Image className=" " src={dotImg} />
          </span>
          <span className=" z-50">
            <Button className={"px-8 py-4 z-50"}>{buttonText}</Button>
            <div className=" flex items-center justify-between gap-4 my-4">
              {countUpData &&
                countUpData.map(({ title, description, id }) => (
                  <CountUp title={title} description={description} key={id} />
                ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentBanner;
