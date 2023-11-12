import Link from "next/link";
import Image from "next/image";

interface Props {
  authorId: number;
  image: string;
  authorUsername: string;
}

export const PostHeadContainer = ({
  authorId,
  image,
  authorUsername,
}: Props) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <Link href={`/profile/${authorId}`}>
          <div className="w-[50px] h-[50px] aspect-square relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${image}`}
              alt="#"
              fill
              loading="lazy"
              sizes="(max-width: 50px) 100vw, 30px"
              className="rounded-full object-cover object-top"
            />
          </div>
        </Link>
        <div>
          <p>{authorUsername}</p>

          <span></span>
        </div>
      </div>
    </div>
  );
};
