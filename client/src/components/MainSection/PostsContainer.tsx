"use client";
import { usePosts } from "@/hooks/usePosts";
import { useRedux } from "@/hooks/useRedux";
import { AnimatePresence, motion } from "framer-motion";
import { PostHeadContainer } from "./PostHeadContainer";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const PostsContainer = () => {
  const { posts, userLogged } = useRedux();
  console.log(posts);
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
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};
