import { card, nftCategories } from "@/assets/data/nftCardData";
import { MdOutlineFilterList } from "react-icons/md";
import Button from "../Buttons/Button";
import NFTCard from "../Card/NFTCard";
const DiscoverMoreNFT = () => {
  return (
    <section className=" bg-[#F7F9FB] py-10">
      <div className=" container ">
        <h1 className=" text-3xl font-extrabold uppercase">
          Discover more NFTs
        </h1>
        <div className=" my-8 flex items-center justify-between gap-8">
          <div className=" flex items-center justify-start gap-4 ">
            {nftCategories &&
              nftCategories.map(({ title, id }) => (
                <Button
                  className={``}
                  kind="badge"
                  groupId="nftGroup"
                  isActive={id === 7}
                  key={id}
                >
                  {title}
                </Button>
              ))}
          </div>
          <div>
            <Button kind="badge">
              {" "}
              <span className=" flex items-center gap-2 text-sm ">
                <MdOutlineFilterList />
                All Filters
              </span>
            </Button>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-4 gap-x-8  ">
          {card && card.map((item, i) => <NFTCard item={item} key={i} />)}
        </div>

        <div className=" pt-14 pb-10 flex items-center justify-center">
          <Button kind="secondary" className={"py-3 px-5"}>
            {" "}
            More NFTs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMoreNFT;
