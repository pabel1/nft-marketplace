import img from "@/assets/images/cardImage/Group 88.png";
import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import Button from "../Buttons/Button";
const FlexCard = () => {
  return (
    <div className=" flex items-start justify-center gap-4 ">
      <Image src={img} alt="" />
      <div className="space-y-3">
        <h3 className=" text-xl font-semibold">The Futr Abstr</h3>
        <div className=" flex items-center gap-2 space-y-2">
          <Image src={user} alt="" />
          <div className="flex items-center gap-2 px-1 py-1 border-2 border-[#00AC4F] rounded-md text-[#00AC4F] text-sm font-semibold">
            <FaEthereum />
            <p>0.25 ETH</p>
          </div>
          <p className=" text-textPrimary">1 of 8</p>
        </div>
        <Button kind="primary">Place a bid</Button>
      </div>
    </div>
  );
};

export default FlexCard;
