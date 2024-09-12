import user from "@/assets/images/user/1.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
const UserCard = ({ index }) => {
  return (
    <div className=" flex items-center justify-between gap-4 pb-2 border-b w-fit">
      <h1 className=" font-semibold text-xl">{index}</h1>
      <Image src={user} alt="" />
      <div>
        <h4 className=" font-semibold text-base">CryptoFunks</h4>
        <span className=" flex items-center gap-1 text-base">
          <FaEthereum />
          <p>0.25 ETH</p>
        </span>
      </div>
      <p className=" text-[#14C8B0] font-medium">+26.52%</p>
    </div>
  );
};

export default UserCard;
