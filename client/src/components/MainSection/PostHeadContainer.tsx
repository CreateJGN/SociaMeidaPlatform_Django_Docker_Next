import Link from "next/link";
import Image from "next/image";

interface Props {
  authorId: number;
  image: string;
}

export const PostHeadContainer = ({ authorId, image }: Props) => {
  console.log(image);
  return (
    <div>
      <div>
        <Link href={`/profile/${authorId}`}>
          <div className="w-[50px] h-[50px] aspect-square relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${image}`}
              alt="#"
              fill
              loading="lazy"
              sizes="(max-width: 50px) 100vw, 30px"
              className="rounded-full object-cover object-top"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
