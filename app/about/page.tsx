import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import About from "@/modules/about";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: `A short story of ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

const AboutPage = () => {
  return (
    <Container data-aos="fade-up">
      <PageHeading
        title="About Me"
        description="A short story about my background and journey."
      />
      <About />
    </Container>
  );
};

export default AboutPage;
