import ActiveCard from "../Card/ActiveCard";
import FlexCard from "../Card/FlexCard";

const CollectionOver = () => {
  return (
    <div className=" container grid grid-cols-3 items-center justify-center gap-4 py-10">
      <div>
        <ActiveCard />
      </div>
      <div className=" space-y-5">
        {Array(3)
          .fill()
          .map((item, i) => (
            <FlexCard key={i} />
          ))}
      </div>

      <div className=" border-l ">
        <h1 className=" text-xl font-semibold">Top Collections over </h1>
        <p className=" text-primary font-bold text-sm">Last 7 days</p>
      </div>
    </div>
  );
};

export default CollectionOver;
