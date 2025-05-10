import { staticAbout } from "@/common/constants/about";

const Introduction = () => {
  return (
    <section className="space-y-4">
      {staticAbout.map((paragraph, index) => (
        <p
          key={index}
          className="leading-loose text-neutral-600 dark:text-neutral-300"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default Introduction;
