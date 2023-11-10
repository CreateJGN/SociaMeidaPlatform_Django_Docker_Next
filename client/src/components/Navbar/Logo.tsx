import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <div className="flex items-center py-1 cursor-pointer">
          <div className="max-w-[50px] h-[50px] w-[40px] relative aspect-auto">
            <Image
              src={"/logo.png"}
              alt="blood splatter"
              fill
              sizes={"40px"}
              loading="lazy"
            />
            <h2 className="text-[28px] font-bold ml-3 text-white/90">PostIt</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
