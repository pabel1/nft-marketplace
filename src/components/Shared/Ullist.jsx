import Link from "next/link";

const Ullist = ({ data }) => {
  return (
    <ul className=" text-textPrimary  space-y-2">
      {data &&
        data.map(({ title, link, id }) => (
          <li key={id} className=" text-base  font-medium ">
            <Link href={link}>{title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Ullist;
