"use client";
import ReactCountUp from "react-countup";
const CountUp = ({ title, description }) => {
  const match = title.match(/(\d+)(.+)?/);
  const number = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] || "" : "";
  return (
    <div>
      <h3 className="font-extrabold text-borderText text-2xl md:text-4xl">
        <ReactCountUp end={number} duration={3} />
        <span className=" font-semibold">{suffix}</span>
      </h3>
      <p className="text-textPrimary text-[16px] font-[400]">{description}</p>
    </div>
  );
};

export default CountUp;
