import FeaturedCard from "../Card/FeaturedCard";

const Featured = () => {
  return (
    <section className=" bg-[#F7F9FB] py-10">
      <div className=" container">
        <h1 className=" text-2xl font-extrabold uppercase">
          Collection Featured NFTs
        </h1>
        <div className=" py-4 grid grid-cols-3  gap-6">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
};

export default Featured;
