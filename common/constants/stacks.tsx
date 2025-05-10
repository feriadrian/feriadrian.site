import {
  SiDart,
  SiFlutter,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  Dart: <SiDart size={iconSize} className="text-[#0175C2]" />,
  Flutter: <SiFlutter size={iconSize} className="text-[#02569B]" />,
  BLoC: <SiFlutter size={iconSize} className="text-[#7D3FE0]" />, // BLoC tidak punya logo resmi, gunakan warna ungu kebiruan
  Figma: <SiFigma size={iconSize} className="text-[#F24E1E]" />,
  MySQL: <SiMysql size={iconSize} className="text-[#00758F]" />,
  PHP: <SiPhp size={iconSize} className="text-[#8892BF]" />,
  Laravel: <SiLaravel size={iconSize} className="text-[#FF2D20]" />,
  Firebase: <SiFirebase size={iconSize} className="text-[#FFCA28]" />,
  Postman: <SiPostman size={iconSize} className="text-[#FF6C37]" />,
  Bootstrap: <SiBootstrap size={iconSize} className="text-[#7952B3]" />,
  Tailwind: <SiTailwindcss size={iconSize} className="text-[#06B6D4]" />,

};
