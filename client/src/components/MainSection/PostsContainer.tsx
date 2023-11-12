"use client";
import { usePosts } from "@/hooks/usePosts";
import { useRedux } from "@/hooks/useRedux";
import { AnimatePresence, motion } from "framer-motion";
import { PostHeadContainer } from "./PostHeadContainer";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visibile: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const PostsContainer = () => {
  const { posts } = useRedux();
  const { setPage } = usePosts();

  return (
    <>
      <AnimatePresence>
        {posts.map((post, index) => {
          return (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate={"visible"}
              exit={"hidden"}
            >
              <PostHeadContainer authorId={post.author_id} image={post.image} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};
