import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useRedux = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.post);
  const { user } = useAppSelector((state) => state.auth);

  return { posts, user, dispatch };
};
