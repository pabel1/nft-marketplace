import img1 from "@/assets/images/banner/banner1.png";
import img3 from "@/assets/images/banner/banner2.png";
import img2 from "@/assets/images/banner/banner3.png";
import user2 from "@/assets/images/Ellipse-96.png";
import user1 from "@/assets/images/Ellipse.png";

import ContentBanner from "../Banner/ContentBanner";
import SignUpNFTCard from "../Card/SignUpNFTCard";
const SignUpNFT = () => {
  const data = {
    title: "Create and sell your NFTs",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.",
    buttonText: "Sign Up Now",
  };

  return (
    <section className=" container my-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
      <div className="  flex items-center justify-center gap-10 py-10 ">
        <div className=" flex flex-col items-end gap-12">
          <div className="w-full">
            <SignUpNFTCard data={{ img: img1, user: user1 }} />
          </div>
          <div className="w-1/2">
            <SignUpNFTCard data={{ img: img2, user: user2 }} />
          </div>
        </div>

        <div className=" ">
          <SignUpNFTCard data={{ img: img3, user: user2 }} />
        </div>
      </div>
      <div className="w-full md:w-[90%] container">
        <ContentBanner data={data} />
      </div>
    </section>
  );
};

export default SignUpNFT;
