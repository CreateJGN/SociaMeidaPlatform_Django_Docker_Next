"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Head } from "./Head";
import { Multimedia } from "./Multimedia";

export const CreatePost = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <Head id={user!.id} image={user!.image} author={user!.username} />
      <div className="px-[15px] pt-[20px]">
        <button>What's on your mind?</button>
        <Multimedia />
      </div>
    </div>
  );
};
