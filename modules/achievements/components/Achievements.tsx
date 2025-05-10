"use client";

import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";
import AchievementCard from "./AchievementCard";
import { staticAchievements } from "@/common/constants/achievements";

const Achievements = () => {
  // const t = useTranslations("AchievementsPage");

  // Hanya tampilkan yang `is_show === true`, dan urutkan dari yang terbaru
  const visibleAchievements: AchievementItem[] = staticAchievements
    .filter((item) => item.is_show)
    .sort((a, b) => b.id - a.id);

  return (
    <section className="space-y-4">
      {visibleAchievements.length === 0 ? (
        <EmptyState message={("no_data")} />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {visibleAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
