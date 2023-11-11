import {
  AiFillCamera,
  AiFillVideoCamera,
  AiOutlineComment,
} from "react-icons/ai";

const logos = [
  { text: "Pictures", icon: <AiFillCamera /> },
  { text: "Video", icon: <AiFillVideoCamera /> },
  { text: "Comments", icon: <AiOutlineComment /> },
];

export const Multimedia = () => {
  return (
    <div className="flex">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="items-center flex mr-5 text-[13px] text-slate-500 gap-1"
        >
          {logo.icon} {logo.text}
        </div>
      ))}
    </div>
  );
};
