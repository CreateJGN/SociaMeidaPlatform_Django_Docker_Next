import { useState, ChangeEvent, useRef } from "react";
import { BsFillImageFill } from "react-icons/bs";
import Image from "next/image";

interface Props {
  image: File | undefined;
  description: string;
  setImage: (image: File | undefined) => void;
  setDescription: (descrption: string) => void;
  prevImage: string | undefined;
  setPrevImage: (newPrevImage: string | undefined) => void;
  handleCloseUpdateModal: any;
}

export const ModalUpdate = ({
  image,
  description,
  setImage,
  setDescription,
  setPrevImage,
  prevImage,
  handleCloseUpdateModal,
}: Props) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files![0]);

    const reader: any = new FileReader();
    reader.readAsDataURL(e.target.files![0]);

    reader.onloadend = () => {
      setPrevImage(reader.result);
    };
  };

  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-black/80 flex items-center justify-center z-[60]"
      onClick={handleCloseUpdateModal}
    >
      <div>
        <form className="form">
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
