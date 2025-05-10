"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";
import { GiExtraTime as CTAIcon } from "react-icons/gi";
import { GiTimeTrap as ServiceIcon } from "react-icons/gi";

import Card from "@/common/components/elements/Card";
import Button from "@/common/components/elements/Button";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  // const t = useTranslations("HomePage.services");

  const router = useRouter();

  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title='Service' icon={<ServiceIcon size={24} />} />
        <SectionSubHeading>I work as a freelancer to develop exceptional mobile applications for brands, companies, institutions, and startups.</SectionSubHeading>
      </div>
      <Card className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <CTAIcon size={27} />
          </motion.div>
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-50">
            Let's work together!
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          I'm open for freelance projects, feel free to email me to see how can we collaborate.
        </p>
        <Button
          className="transition duration-300 hover:scale-105 active:scale-95"
          onClick={() => router.push("/contact")}
        >
          Contact me
        </Button>
      </Card>
    </section>
  );
};

export default Services;
