import { navItem } from "@/assets/data/navData";
import Button from "../Buttons/Button";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const MobileNavBar = () => {
  return (
    <nav className="md:hidden container py-3 flex flex-col gap-4 justify-between">
      <div className=" flex items-center justify-between gap-2 ">
        <Logo />
        <div className=" flex items-center gap-4">
          <Button>Upload</Button>
          <Button kind={"secondary"}>Connect Wallet</Button>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-between gap-2">
        <NavItem items={navItem} />
        <SearchBar />
      </div>
    </nav>
  );
};

export default MobileNavBar;
