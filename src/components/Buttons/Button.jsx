"use client";
import classnames from "classnames";
import { useState } from "react";

const buttonClassesMap = {
  common: "bg-primary text-white py-2 rounded-full px-6 text-base  ",
  primary:
    "bg-primary text-white py-2 rounded-full px-6 text-base hover:bg-transparent  border-2 border-primary hover:text-primary ",

  secondary:
    "text-primary py-2 rounded-full px-6 text-base hover:bg-primary bg-transparent  border-2 border-primary hover:text-white",

  badge:
    "text-primary py-2 rounded-full px-6 text-base hover:bg-primary bg-[#F2F2F4]   hover:text-white shadow-sm ",
};

let activeButtonGroup = {};
export default function Button({
  className,
  kind = "primary",
  loading,
  children,
  groupId,
  isActive = false,
  onClick,
  href,
  ...props
}) {
  const [active, setActive] = useState(isActive);

  const handleClick = (e) => {
    if (groupId) {
      activeButtonGroup[groupId]?.forEach((deactivate) => deactivate(false));
    }

    setActive(true);

    if (groupId) {
      if (!activeButtonGroup[groupId]) {
        activeButtonGroup[groupId] = [];
      }
      activeButtonGroup[groupId].push(setActive);
    }

    if (onClick) onClick(e);
  };
  return (
    <button
      disabled={loading || props.disabled}
      className={classnames(
        buttonClassesMap[kind],
        // buttonClassesMap.common,
        active ? "bg-blue-500 text-white" : "",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <div className="left-0 absolute w-full flex justify-center">
          <div
            className={classnames(`border-2 w-5 h-5 rounded-full animate-spin`)}
          />
        </div>
      )}
      <span
        className={
          loading
            ? "opacity-0 inline-flex items-center"
            : "inline-flex items-center"
        }
      >
        {children}
      </span>
    </button>
  );
}
