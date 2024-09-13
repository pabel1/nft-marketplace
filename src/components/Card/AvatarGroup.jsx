import Image from "next/image";

const AvatarGroup = ({ avatars, maxAvatars = 5, size = 75 }) => {
  const displayAvatars = avatars.slice(0, maxAvatars);
  const remainingAvatars = avatars.length - maxAvatars;

  return (
    <div className="absolute  -bottom-5 left-3  flex -space-x-4">
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative z-0 hover:z-10 transition-transform hover:scale-110"
        >
          <Image
            className="rounded-full "
            src={avatar.user}
            alt={`User avatar ${index + 1}`}
            width={size}
            height={size}
          />
        </div>
      ))}
      {remainingAvatars > 0 && (
        <div
          className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-full ring-2 ring-white"
          style={{ width: size, height: size }}
        >
          <span className="text-xs font-medium">+{remainingAvatars}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
