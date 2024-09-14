import { navItem } from "@/assets/data/navData";
import Logo from "./Logo";
import MobileNavbarDropdown from "./MobileNavItem";

const MobileNavBar = () => {
  return (
    <nav className="md:hidden container py-3 flex  gap-4 justify-between">
      <div className=" flex items-center justify-between gap-2 ">
        <Logo />
      </div>

      <div className=" flex flex-col items-center justify-between gap-2">
        <MobileNavbarDropdown items={navItem} />
      </div>
    </nav>
  );
};

export default MobileNavBar;
