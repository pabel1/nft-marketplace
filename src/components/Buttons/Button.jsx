import classnames from "classnames";

const buttonClassesMap = {
  common: "bg-primary text-white py-2 rounded-full px-6 text-base  ",
  primary:
    "bg-primary text-white py-2 rounded-full px-6 text-base hover:bg-transparent  border-2 border-primary hover:text-primary ",

  secondary:
    "text-primary py-2 rounded-full px-6 text-base hover:bg-primary bg-transparent  border-2 border-primary hover:text-white",
};

export default function Button({
  className,
  kind = "primary",
  loading,
  children,
  onClick,
  href,
  ...props
}) {
  return (
    <button
      disabled={loading || props.disabled}
      className={classnames(
        buttonClassesMap[kind],
        buttonClassesMap.common,
        className
      )}
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
