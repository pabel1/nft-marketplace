import { navItem } from "@/assets/data/navData";
import Button from "../Buttons/Button";
import Logo from "./Logo";
import MobileNavBar from "./MobileNavBar";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-white py-2 shadow ">
      <div className="hidden container py-3 md:flex items-center justify-between">
        <Logo />
        <NavItem items={navItem} />
        <SearchBar />
        <div className="flex items-center gap-4">
          <Button>Upload</Button>
          <Button kind={"secondary"}>Connect Wallet</Button>
        </div>
      </div>
      <MobileNavBar />
    </nav>
  );
};

export default Navbar;
