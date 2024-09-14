import user from "@/assets/images/Ellipse-95.png";
import Image from "next/image";
import Button from "../Buttons/Button";
const FeaturedCard = ({ item }) => {
  const { featureImg, img1, img2, img3 } = item || {};

  return (
    <section className=" my-8 space-y-4 py-2 ">
      <div className="grid grid-cols-4  gap-2 p-1">
        <div className="w-full  col-span-3">
          <Image className=" " src={featureImg} alt="" />
        </div>
        <div className="col-span-1 flex flex-col  gap-2 ">
          <Image
            src={img1}
            alt=""
            className="w-full flex-grow object-cover  rounded-xl "
          />

          <Image
            src={img2}
            alt=""
            className="w-full flex-grow  object-cover rounded-xl"
          />

          <Image
            src={img3}
            alt=""
            className="w-full flex-grow  object-cover  rounded-xl"
          />
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
          <Button className={"py-1 text-sm font-bold"} kind="secondary">
            Total 54 Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
