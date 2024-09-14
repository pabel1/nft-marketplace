import img2 from "@/assets/images/cardImage/22.png";
import img3 from "@/assets/images/cardImage/23.png";
import img from "@/assets/images/cardImage/active.png";
import img1 from "@/assets/images/cardImage/banner2.png";
import ActiveCard from "../Card/ActiveCard";
import FlexCard from "../Card/FlexCard";
import UserCard from "../Card/UserCard";
// import user from "@/assets/images/Ellipse-95.png";
const CollectionOver = () => {
  const galleryData = [
    { featureImg: img, img1: img1, img2: img2, img3: img3 },
    { featureImg: img, img1: img1, img2: img2, img3: img3 },
    { featureImg: img, img1: img1, img2: img2, img3: img3 },
  ];
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 py-10">
      <div className=" flex">
        <ActiveCard />
      </div>
      <div className=" space-y-5">
        {Array(3)
          .fill()
          .map((item, i) => (
            <FlexCard key={i} />
          ))}
      </div>

      <div className=" border-l px-6 ">
        <h1 className=" text-xl font-extrabold uppercase">
          Top Collections over{" "}
        </h1>
        <p className=" text-primary font-bold text-sm ">Last 7 days</p>
        <div className=" space-y-5 py-2 ">
          {Array(5)
            .fill()
            .map((item, i) => (
              <div className={`${i < 4 ? "border-b" : ""}`} key={i}>
                <UserCard index={i + 1} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionOver;
