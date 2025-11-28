type GoToTopButtonProps = {
  show: boolean;
  onClick: () => void;
};

export default function ScrollTop({ show, onClick }: GoToTopButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go to top"
      className={`
        fixed right-4 md:right-6
        ${
          show
            ? "bottom-6 opacity-100"
            : "-bottom-16 opacity-0 pointer-events-none"
        }
        z-40
        group
        size-11 md:size-14
        rounded-full
        flex flex-col items-center justify-center
        bg-[#241B58]
        border border-[#6FD5B4]/70
        shadow-[0_0_20px_rgba(4,173,147,0.85)]
        transition-all duration-300
        hover:shadow-[0_0_30px_rgba(138,0,196,0.75)]
        hover:border-[var(--color-accent-400)]
        cursor-pointer
      `}
    >
      <i
        className="
          fas fa-arrow-up
          text-lg md:text-2xl
          text-[#6FD5B4]
          drop-shadow-[0_0_10px_#04AD93]
          transition-transform duration-300
          group-hover:-translate-y-1
        "
      />

      {/* Texto pequeño solo en desktop */}
      <span
        className="
          hidden md:block
          mt-1
          text-[0.65rem]
          font-semibold
          tracking-wide
          text-[var(--color-neutral-100)]
          opacity-0 h-0
          group-hover:opacity-100 group-hover:h-3 group-hover:-mt-1
          transition-all duration-300
        "
      >
        Go to top
      </span>
    </button>
  );
}
