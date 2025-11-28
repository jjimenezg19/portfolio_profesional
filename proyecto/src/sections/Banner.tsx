import SocialNetwork from "@/components/SocialNetwork";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import bannerUrl from "~/Banner.svg?url";

import "@/assets/styles/banner.css"; // si aún lo ocupas; si no, lo quitamos luego

type BannerContent = {
  titleOne: string;
  titleTwo: string;
  subtitleOne: string;
  aboutMe: string;
};

type BannerProps = {
  id?: string;
  className?: string;
  content: BannerContent;
};

export default function Banner({
  id = "banner",
  className = "",
  content,
}: BannerProps) {
  const networks = [
    {
      to: "https://github.com/jjimenezg19",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      to: "https://www.linkedin.com/in/jjimenezg242/",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      to: "mailto:johan.jimenezg.17@gmail.com",
      icon: "fa fa-envelope",
      label: "Email",
    },
    {
      to: "https://wa.me/+13646431273",
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
    },
  ];

  return (
    <section
      id={id}
      className={`
        relative w-full
        min-h-screen   /* altura completa */
        flex flex-col items-center justify-center
        bg-cover bg-center bg-no-repeat
        px-4
        pt-[18rem] md:pt-[20rem] lg:pt-[19rem]
        ${className}
      `}
      style={{ backgroundImage: `url(${bannerUrl})` }}
    >
      {/* Todo dentro del banner */}
      <div className="relative z-[2] max-w-[80rem] w-full px-4 md:px-10">
        <Hero content={content} />

        <div className="johan-socials grid grid-cols-4 sm:grid-cols-4 gap-6 sm:gap-10 md:gap-12 px-30 mt-20 place-items-center justify-center ">
          {networks.map((n, i) => (
            <SocialNetwork
              key={i}
              {...n}
              className="text-2xl sm:text-3xl text-neutral-100/90 hover:text-secondary transition"
            />
          ))}
        </div>

        <AboutMe text={content.aboutMe} />
      </div>

      <div className="absolute inset-0 bg-black/10 z-[1]" />
    </section>
  );
}
