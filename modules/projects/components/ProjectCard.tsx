import Image from "next/image";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";

import Card from "@/common/components/elements/Card";
import { STACKS } from "@/common/constants/stacks";
import { ProjectItem } from "@/common/types/projects";

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
}: ProjectItem) => {
  const trimmedContent =
    description

  return (
    <Card className="group relative cursor-default flex flex-col h-full">
      {is_featured && (
        <div className="absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl-lg rounded-tr-lg bg-cyan-500 px-2 py-1 text-sm font-medium text-neutral-900">
          <PinIcon size={15} />
          <span>Featured</span>
        </div>
      )}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={450}
          height={300}
          className="aspect-[3/2] w-full rounded-t-xl object-cover"
          priority
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80">
          {/* <span>view_project</span> */}
          {/* <ViewIcon size={20} /> */}
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-2 p-5 min-h-[180px]">
        <div>
          <h3 className="text-lg text-neutral-700 dark:text-neutral-300">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
            {trimmedContent}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {stacks.map((stack: string, index: number) => (
            <div key={index}>{STACKS[stack]}</div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;