import { getPosts } from "@/services/post";
import { useEffect, useState } from "react";

let PAGE_SIZE = 3;

export const usePosts = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts(page, PAGE_SIZE);
      console.log(response);
    }
    fetchPosts();
  }, [page]);
  return { setPage };
};
