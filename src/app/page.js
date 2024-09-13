import AmazeNFT from "@/components/AmazeNFT/AmazeNFT";
import Banner from "@/components/Banner/Banner";
import CollectionOver from "@/components/CollectionOver/CollectionOver";
import Featured from "@/components/Featured/Featured";
import SignUpNFT from "@/components/SignUpNFT/SignUpNFT";

export default function Home() {
  return (
    <main className=" ">
      <Banner />
      <AmazeNFT />
      <CollectionOver />
      <Featured />
      <SignUpNFT />
    </main>
  );
}
