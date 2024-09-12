import { footerLink, myAccountLink } from "@/assets/data/footerData";
import Button from "../Buttons/Button";
import Logo from "../Navbar/Logo";
import SocialMedia from "../Shared/SocialMedia";
import Ullist from "../Shared/Ullist";

const Footer = () => {
  return (
    <section className=" py-10">
      <div className="container  grid grid-cols-6 items-start justify-start gap-4">
        <div className="col-span-2 space-y-4">
          <Logo />
          <p className=" text-textPrimary">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <SocialMedia />
        </div>
        <div className="col-span-1 space-y-4">
          <h1 className=" text-xl font-semibold ">Market Place </h1>
          {footerLink && <Ullist data={footerLink} />}
        </div>
        <div className="col-span-1 space-y-4">
          <h1 className=" text-xl font-semibold ">My Account </h1>
          {myAccountLink && <Ullist data={myAccountLink} />}
        </div>
        <div className=" col-span-2 space-y-4 ">
          <h1 className=" text-xl font-semibold ">Stay in the loop </h1>
          <p className=" text-textPrimary">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="w-full  flex items-center justify-between gap-1 shadow border rounded-full py-2 px-2 ">
            <input
              type="text"
              placeholder="Enter your email address.."
              className=" placeholder:text-sm text-gray-500  px-2 outline-none "
            />
            <Button
              kind="common"
              className={" whitespace-pre hover:bg-primary hover:text-white"}
            >
              Subscibe Now
            </Button>
          </div>
        </div>
      </div>
      <div className=" container py-8 flex flex-col items-center justify-center  gap-5 text-textPrimary">
        <hr className=" w-full mx-auto  " />
        <p>Copyright © 2022 Avi Yansah</p>
      </div>
    </section>
  );
};

export default Footer;
