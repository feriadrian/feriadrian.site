// import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";

const AchievementsPage = () => {
  // const t = useTranslations("AchievementsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title='Achievements' description='A collection of certificates and badges that I have earned throughout my professional journey.' />
      <Achievements />
    </Container>
  );
};

export default AchievementsPage;
