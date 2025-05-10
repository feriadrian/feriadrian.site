"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import { HiChevronRight as ChevronIcon } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { differenceInMonths, differenceInYears, format } from "date-fns";

import Card from "@/common/components/elements/Card";
import { CareerProps } from "@/common/types/careers";

const CareerCard = ({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
  type,
  location_type,
  responsibilities,
}: CareerProps) => {
  const [isShowResponsibility, setIsShowResponsibility] = useState(false);

  const isValidDate = (date: string | Date | null): boolean => {
    if (!date) return false;
    return !isNaN(new Date(date).getTime());
  };

  const startDate = isValidDate(start_date) ? new Date(start_date as string) : new Date();
  const endDate = end_date && isValidDate(end_date) ? new Date(end_date) : null;

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return "Present";
    return format(date, "MMM yyyy");
  };

  const calculateDuration = () => {
    const end = endDate || new Date();
    const durationYears = differenceInYears(end, startDate);
    const durationMonths = differenceInMonths(end, startDate) % 12;

    const yearText = `year${durationYears > 1 ? "s" : ""}`;
    const monthText = `month${durationMonths > 1 ? "s" : ""}`;

    let durationText = "";
    if (durationYears > 0) {
      durationText += `${durationYears} ${yearText} `;
    }
    if (durationMonths > 0 || durationYears === 0) {
      durationText += `${durationMonths} ${monthText}`;
    }

    return durationText.trim();
  };

  const durationText = calculateDuration();

  return (
    <Card className="flex items-start gap-5 px-6 py-4">
      {logo ? (
        <Image width={70} height={70} src={logo} alt={company} />
      ) : (
        <CompanyIcon size={65} />
      )}

      <div className="space-y-1">
        <h5>{position}</h5>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row">
            <Link href={link || "#"} target="_blank">
              <span className="cursor-pointer hover:text-neutral-900 hover:underline hover:dark:text-neutral-50">
                {company}
              </span>
            </Link>
            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span>{location}</span>
          </div>

          <div className="flex flex-col gap-2 text-[13px] md:flex-row">
            <div className="flex gap-1 text-neutral-600 dark:text-neutral-400">
              <span>{format(startDate, "MMM yyyy")}</span> - <span>{formatDateDisplay(endDate)}</span>
            </div>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span className="text-neutral-500">{durationText}</span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span className="text-neutral-600 dark:text-neutral-400">{type}</span>

            <span className="hidden text-neutral-300 dark:text-neutral-700 md:block">•</span>
            <span className="text-neutral-600 dark:text-neutral-400">{location_type}</span>
          </div>

          {responsibilities && responsibilities.length > 0 && (
            <>
              <button
                onClick={() => setIsShowResponsibility(!isShowResponsibility)}
                className="-ml-1 flex items-center justify-center gap-x-1 transition duration-300 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
              >
                <ChevronIcon
                  size={18}
                  className={clsx({
                    "rotate-90 transition-all duration-300": isShowResponsibility,
                  })}
                />
                <p className="text-sm">
                  {isShowResponsibility ? "Hide" : "Show"} responsibilities
                </p>
              </button>
              <AnimatePresence>
                {isShowResponsibility && (
                  <motion.ul
                    className="ml-[18px] list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {responsibilities.map((responsibility, index) => (
                      <motion.li key={index} layout>
                        {responsibility}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CareerCard;
