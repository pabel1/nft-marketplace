import img from "@/assets/images/cardImage/active.png";
import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
import Button from "../Buttons/Button";
const FeaturedCard = () => {
  return (
    <section className=" my-8 space-y-4 ">
      <div className="grid grid-cols-4  gap-2">
        <div className="w-full  col-span-3">
          <Image src={img} alt="" />
        </div>
        <div className=" col-span-1 space-y-2">
          <Image src={img} alt="" />
          <Image src={img} alt="" />
          <Image src={img} alt="" />
        </div>
      </div>

      <div className=" flex items-center justify-between gap-4 my-4 ">
        <div>
          <h3 className=" text-xl font-semibold">Amazing Collection</h3>
          <div className=" flex  gap-2 my-5">
            <Image src={user} alt="" />

            <p className=" text-textPrimary">by Arkhan</p>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-2">
          <Button kind="secondary">Total 54 Items</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
