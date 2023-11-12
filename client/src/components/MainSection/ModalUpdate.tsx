import { Post } from "@/interfaces/interface";
import { ChangeEvent, useRef, FormEvent } from "react";
import { BsFillImageFill } from "react-icons/bs";
import Image from "next/image";
import { updatePost } from "@/services/post";
import toast from "react-hot-toast";
import { useRedux } from "@/hooks/useRedux";
import { updatePostRedux } from "@/redux/reducers/post.slice";

interface Props {
  image: File | undefined;
  description: string;
  setImage: (image: File | undefined) => void;
  setDescription: (descrption: string) => void;
  prevImage: string | undefined;
  setPrevImage: (newPrevImage: string | undefined) => void;
  handleCloseUpdateModal: any;
  post: Post;
}

export const ModalUpdate = ({
  image,
  description,
  setImage,
  setDescription,
  setPrevImage,
  prevImage,
  handleCloseUpdateModal,
  post,
}: Props) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useRedux();

  const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files![0]);

    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files![0]);

    reader.onloadend = () => {
      setPrevImage(reader.result);
    };
  };

  const handleSubmit = async (e: FormEvent, postId: number) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", description || "");
      formData.append("image", image || "");

      const { data: postUpdated, message } = await updatePost(formData, postId);
      toast.success(message, { duration: 2500 });
      dispatch(updatePostRedux(postUpdated));

      setDescription("");
      setImage(undefined);
      setPrevImage(undefined);
      handleCloseUpdateModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-black/80 flex items-center justify-center z-[60]"
      onClick={handleCloseUpdateModal}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <form className="form" onSubmit={(e) => handleSubmit(e, post.id)}>
          <textarea
            rows={5}
            className="input resize-none"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="file"
            className="hidden"
            ref={imageRef}
            onChange={fileSelected}
          />

          {image === undefined && (
            <BsFillImageFill
              className="inputImage"
              onClick={() => imageRef.current!.click()}
            />
          )}

          {prevImage && (
            <div className="w-[600px] max-w-[620px] h-[300px] mx-auto relative cursor-pointer">
              <Image
                src={prevImage}
                alt="#"
                fill
                loading="lazy"
                className="object-top object-cover"
                sizes="(max-width: 620px) 100vw, 550px"
                onClick={() => imageRef.current!.click()}
              />
            </div>
          )}
          <button className="formButton">Submit</button>
        </form>
      </div>
    </div>
  );
};
