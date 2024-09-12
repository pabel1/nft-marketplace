import AmazeNFT from "@/components/AmazeNFT/AmazeNFT";
import Banner from "@/components/Banner/Banner";
import CollectionOver from "@/components/CollectionOver/CollectionOver";

export default function Home() {
  return (
    <main className=" ">
      <Banner />
      <AmazeNFT />
      <CollectionOver />
    </main>
  );
}
