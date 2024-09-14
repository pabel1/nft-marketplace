"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "../Buttons/Button";
import SearchBar from "./SearchBar";

const MobileNavbarDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-bold text-textPrimary hover:text-primary"
      >
        Menu
        {isOpen ? (
          <ChevronUp className="ml-2 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-2 h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 py-2 w-[300px] absolute right-0 z-50 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none space-y-4">
          <div className="py-1">
            {items &&
              items.map(({ title, link, id }) => (
                <Link
                  key={id}
                  href={link}
                  className="block px-4 py-2 text-sm text-textPrimary hover:bg-gray-100 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              ))}
          </div>
          <div className=" flex flex-col w-fit gap-4 ">
            <Button>Upload</Button>
            <Button kind={"secondary"}>Connect Wallet</Button>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default MobileNavbarDropdown;
