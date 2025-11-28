// src/sections/Education.tsx
import Title from "@/components/Title";
import Timeline from "@/components/Timeline";

type EducationItem = {
  time: string;
  title: string;
  subtitle: string;
  text: string;
};

type EducationContent = {
  title: string;
  content: EducationItem[];
};

type EducationProps = {
  id?: string;
  className?: string;
  content: EducationContent;
};

export default function Education({
  id = "education",
  className = "",
  content,
}: EducationProps) {
  return (
    <section
      id={id}
      className={`
        flex flex-col items-center
        gap-10 md:gap-16
        py-16 md:py-24
        px-4
        ${className}
      `}
    >
      <Title text={content.title} />

      {/* Timeline a la derecha del eje, como el de Harold */}
      <Timeline data={content.content} onRight />
    </section>
  );
}
