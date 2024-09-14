import img1 from "@/assets/images/cardImage/11.png";
import img2 from "@/assets/images/cardImage/22.png";
import img3 from "@/assets/images/cardImage/23.png";
import active from "@/assets/images/cardImage/active.png";
import active2 from "@/assets/images/cardImage/banner1.png";
import active3 from "@/assets/images/cardImage/banner2.png";
import FeaturedCard from "../Card/FeaturedCard";
const Featured = () => {
  const galleryData = [
    { featureImg: active, img1: img1, img2: img2, img3: img3 },
    { featureImg: active2, img1: img3, img2: img1, img3: img1 },
    { featureImg: active3, img1: img1, img2: img2, img3: img3 },
  ];
  return (
    <section className=" bg-[#F7F9FB] py-10">
      <div className=" container">
        <h1 className=" text-2xl font-extrabold uppercase">
          Collection Featured NFTs
        </h1>
        <div className="py-1 md:py-4 grid grid-cols-1  md:grid-cols-3 gap-2  md:gap-6 ">
          {galleryData.map((item, i) => (
            <FeaturedCard item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
