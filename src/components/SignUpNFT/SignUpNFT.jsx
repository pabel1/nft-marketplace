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
    <section className=" container my-8 grid grid-cols-2 gap-4 items-center justify-center">
      <div className="  flex items-center justify-center gap-10 py-10 ">
        <div className=" flex flex-col items-end gap-12">
          <div className="">
            <SignUpNFTCard />
          </div>
          <div className="w-1/2">
            <SignUpNFTCard />
          </div>
        </div>

        <div className="w-1/2">
          <SignUpNFTCard />
        </div>
      </div>
      <div className=" w-[90%] container">
        <ContentBanner data={data} />
      </div>
    </section>
  );
};

export default SignUpNFT;
