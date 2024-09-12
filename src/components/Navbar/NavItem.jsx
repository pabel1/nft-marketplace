import Link from "next/link";

const NavItem = ({ items }) => {
  return (
    <div className=" flex items-center gap-4">
      {items &&
        items.map(({ title, link, id }) => (
          <Link
            className=" hover:text-primary px-4 py-1 font-medium  "
            href={link}
            key={id}
          >
            {title}
          </Link>
        ))}
    </div>
  );
};

export default NavItem;
