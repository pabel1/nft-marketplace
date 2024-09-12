import img from "@/assets/images/banner/banner1.png";
import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
const SignUpNFTCard = () => {
  return (
    <div className=" grid grid-cols-3">
      <div className=" relative  space-x-2 space-y-2">
        <Image className=" w-full" src={img} alt="" />
        <Image
          className="w-20 absolute -bottom-5  -right-5 ring-[4px] ring-white rounded-full "
          src={user}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUpNFTCard;
