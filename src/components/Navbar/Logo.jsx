import logo from "@/assets/images/NFters.png";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"} className="col-span-2 flex items-center gap-2">
      <Image src={logo} alt="logo" className="  " />
    </Link>
  );
};

export default Logo;
