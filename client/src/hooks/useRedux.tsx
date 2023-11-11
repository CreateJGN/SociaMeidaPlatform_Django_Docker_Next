import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useRedux = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.post);
  const { user: userLogged } = useAppSelector((state) => state.auth);
  const { users } = useAppSelector((state) => state.user);

  return { posts, userLogged, dispatch, users };
};
