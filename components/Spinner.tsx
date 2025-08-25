import Image from "next/image";

export const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 z-2 text-[black] bg-[#ffff] w-full  flex flex-col items-center justify-center min-h-screen">
      <Image
        priority={true}
        src="/image/Rolling@1x-1.0s-200px-200px.svg"
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};
