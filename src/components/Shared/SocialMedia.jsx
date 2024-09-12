import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <div className="my-4 py-5 flex items-center gap-4 text-white">
      <Link href={"/"} className=" p-3 bg-[#007AB9] rounded-full ">
        <FaFacebookF />
      </Link>
      <Link href={"/"} className=" p-3 bg-[#55ACEE] rounded-full ">
        <TfiTwitter />
      </Link>
      <Link href={"/"} className=" p-3 bg-[#007AB9] rounded-full ">
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default SocialMedia;
