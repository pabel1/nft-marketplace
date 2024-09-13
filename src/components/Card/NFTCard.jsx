import nftcard from "@/assets/images/nft-card/1.png";
import Image from "next/image";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import Button from "../Buttons/Button";
const NFTCard = () => {
  return (
    <div className=" bg-white shadow-sm rounded-xl p-2 mx-auto space-y-4">
      <Image src={nftcard} alt=" " />
      <div className=" px-4">
        <h1 className=" text-base font-semibold">ArtCrypto</h1>
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
