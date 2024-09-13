import Image from "next/image";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import Button from "../Buttons/Button";
import AvatarGroup from "./AvatarGroup";
const NFTCard = ({ item }) => {
  const { img, id, title, avaters } = item || {};
  return (
    <div className=" bg-white shadow-sm rounded-xl p-2 mx-auto space-y-4">
      <div className=" relative ">
        <Image src={img} alt=" " />

        <AvatarGroup avatars={avaters} maxAvatars={4} size={40} />
      </div>

      <div className="pt-4 px-4">
        <h1 className=" text-base font-semibold">{title}</h1>
        <div className="py-3 border-b flex items-center justify-between gap-2 font-medium ">
          <span className="flex items-center gap-2  py-1  rounded-md text-[#00AC4F]">
            <FaEthereum />
            <p>0.25 ETH</p>
          </span>
          <p className=" text-textPrimary ">1 of 321</p>
        </div>
        <div className=" py-2 flex items-center justify-between gap-4">
          <Button kind="badge" className={" text-xs"}>
            3h 50m 2s left
          </Button>
          <Link href={"/"} className={"py-2 text-primary text-sm"}>
            Place a bid
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
