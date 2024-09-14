import Image from "next/image";

const MultipleAvater = ({ avaters }) => {
  return (
    <div className="absolute -bottom-5 left-3 flex  ">
      {avaters &&
        avaters.map(({ user }, i) => (
          <Image
            className=" rounded-full ring-2 ring-white "
            src={user}
            alt=" "
            key={i}
          />
        ))}
    </div>
  );
};

export default MultipleAvater;
