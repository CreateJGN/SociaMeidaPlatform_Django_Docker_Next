"use client";
import { Form } from "@/interfaces/interface";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const AuthForm = ({ process }: { process: string }) => {
  const [form, setForm] = useState<Form>({});
  const [image, setImage] = useState<File>();
  const [prevImage, setPrevImage] = useState();
  const imgRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
      className="h-screen w-screen flex items-center justify-center"
      style={{
        background:
          "url(https://i.imgur.com/5xJiRFp.jpeg) center/cover no-repeat",
      }}
    >
      <form
        className="relative flex flex-col w-[580px] justify-center gap-y-5 bg-white/[.03] py-10 px-12
      backdrop-blur-[3px]"
      >
        <h1 className="text-5xl font-bold text-white">{process}</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="input"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          className="input"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          className="input"
          onChange={handleChange}
        />
        <textarea
          placeholder="Bio"
          name="bio"
          rows={5}
          className="input resize-none"
          onChange={handleChange}
        />
        <input
          type="file"
          className="hidden"
          name="image"
          required
          onChange={fileSelected}
          ref={imgRef}
        />
        {image === undefined && (
          <BsFillImageFill
            className="inputImage"
            onClick={() => imgRef.current?.click()}
          />
        )}

        {prevImage && (
          <div className="w-full max-w-[80px] h-[80px] self-end mr-5 top-8 absolute">
            <Image
              src={prevImage}
              alt="prevImage"
              fill
              placeholder="blur"
              blurDataURL="/blur.webp"
              className="rounded-full object-cover cursor-pointer"
              onClick={() => imgRef.current?.click()}
            />
          </div>
        )}

        {pathname === "/login" ? (
          <Link href={"/register"}>No account? Register Here.</Link>
        ) : (
          <Link href={"/login"}>Already have an account? Login Here.</Link>
        )}

        <button className="formButton">{process}</button>
      </form>
    </div>
  );
};
