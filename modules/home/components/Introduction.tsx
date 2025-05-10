// import { useTranslations } from "next-intl";

const Introduction = () => {
  // const t = useTranslations("HomePage");

  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        <h1>Hi, I'm Feri Adrian</h1>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-neutral-700 dark:text-neutral-400 md:flex-row">
          <li>Based in Balikpapan, Indonesia 🇮🇩</li>
          <li>Onsite</li>
        </ul>
        <p className="mt-6 leading-loose text-neutral-600 dark:text-neutral-300">
          Passionate and driven Mobile Developer with a strong foundation in modern mobile technologies. Proficient in Flutter and well-versed in building cross-platform applications with clean architecture and responsive UI. A collaborative team player committed to delivering efficient, scalable, and user-friendly mobile solutions.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
