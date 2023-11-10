"use client";
import { useAppSelector } from "@/redux/hooks";

const SearchPage = () => {
  const { users } = useAppSelector((state) => state.user);
  console.log(users);
  return <div>SearchPage</div>;
};

export default SearchPage;
