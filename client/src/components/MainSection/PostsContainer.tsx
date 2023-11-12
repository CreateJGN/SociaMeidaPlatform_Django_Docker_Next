"use client";
import { usePosts } from "@/hooks/usePosts";
import { useRedux } from "@/hooks/useRedux";
import { AnimatePresence, motion } from "framer-motion";
import { PostHeadContainer } from "./PostHeadContainer";
import { PostDescription } from "./PostDescription";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const PostsContainer = () => {
  const { posts, userLogged } = useRedux();
  const { setPage } = usePosts();

  return (
    <>
      <AnimatePresence>
        {posts.map((post, index) => {
          return (
            <motion.div
              key={post.id}
              variants={variants}
              initial="hidden"
              animate={"visible"}
              exit={"hidden"}
            >
              <PostHeadContainer
                post={post}
                posts={posts}
                authorId={post.author_id ?? userLogged!.id}
                authorUsername={
                  typeof post.author === "number"
                    ? userLogged!.username
                    : post.author
                }
              />
              <PostDescription description={post.description} />

              {/* Image */}
              <Suspense fallback={<Loading />}>
                {post.image !== null && (
                  <div className="relative w-full max-w-[700px] h-[330px] mb-[5px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${post.image}`}
                      alt="#"
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/blur.webp"
                      sizes="(max-width: 720px) 100vw, 700px, 500px, 300px"
                      className="object-cover object-top cursor-pointer rounded-[5px]"
                    />
                  </div>
                )}
              </Suspense>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};
