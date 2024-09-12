import img from "@/assets/images/cardImage/active.png";
import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
const ActiveCard = () => {
  return (
    <section className=" my-12 space-y-4 ">
      <Image src={img} alt="" />
      <div className=" flex items-center justify-between gap-4 ">
        <div className=" flex items-center justify-center gap-2">
          <Image src={user} alt="" />
          <span>
            <h3 className=" text-xl font-semibold">The Futr Abstr</h3>
            <p className=" text-textPrimary">10 in the stock</p>
          </span>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <span>
            <h3 className=" text-base  font-medium">Highest Bid</h3>
            <span className=" flex items-center justify-center gap-1 text-base font-semibold">
              <FaEthereum />
              <p>0.25 ETH</p>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ActiveCard;
