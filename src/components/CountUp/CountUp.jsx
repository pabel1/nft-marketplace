const CountUp = ({ title, description }) => {
  return (
    <div>
      <h3 className="font-extrabold text-borderText text-[36px]">{title}</h3>
      <p className="text-textPrimary text-[16px] font-[400]">{description}</p>
    </div>
  );
};

export default CountUp;
