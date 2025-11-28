type NeonTitleProps = {
  className?: string;
};

export default function JohanTitle({ className = "" }: NeonTitleProps) {
  return (
    <h1
      className={`
        neon-title
        text-3xl md:text-5xl
        font-bold
        tracking-[0.25em]
        uppercase
        ${className}
      `}
    >
      Johan&nbsp;Jimenez
    </h1>
  );
}
