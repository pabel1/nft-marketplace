import Image from "next/image";
const SignUpNFTCard = ({ data, className, width, height }) => {
  const { img, user } = data || {};
  return (
    <div className=" relative  space-x-2 space-y-2">
      <Image className=" w-full" src={img} alt="" />
      <Image
        className="w-14 absolute -bottom-5  -right-5  rounded-full "
        src={user}
        alt=""
      />
    </div>
  );
};

export default SignUpNFTCard;
