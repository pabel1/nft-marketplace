import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center  p-2 px-4 divide-gray-300 col-span-2 relative bg-white rounded-full shadow ">
        <input
          type="text"
          placeholder="Search "
          //   value={searchQuery}
          className="text-gray-600 px-3 md:w-64 lg:w-80 bg-transparent focus:outline-none"
          //   onChange={(e) => setSearchQuery(e.target.value)}
          //   onFocus={() => setShowResult(true)}
          //   onBlur={() => setTimeout(() => setShowResult(false), 200)}
        />

        <CiSearch size={24} />
      </div>
    </div>
  );
};

export default SearchBar;
