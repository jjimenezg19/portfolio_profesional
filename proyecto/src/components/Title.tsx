type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className = "" }: TitleProps) {
  className = className ?? "";

  return (
    <div
      className={`flex flex-col items-center gap-3 text-center ${className}`}
    >
      <h1
        className="text-4xl md:text-5xl font-extrabold 
        text-[#6FD5B4] drop-shadow-[0_0_12px_#04AD93]"
      >
        {text}
      </h1>

      <div
        className="
        h-[3px] w-32 md:w-48 rounded-full
        bg-gradient-to-r from-[#04AD93] to-[#241B58]
        shadow-[0_0_10px_#04AD93]
      "
      ></div>
    </div>
  );
}
