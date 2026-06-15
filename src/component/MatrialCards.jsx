import { IoLogoGithub } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiHuawei } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const iconMap = {
  IoLogoGithub: IoLogoGithub,
  FaGitAlt: FaGitAlt,
  FaReact: FaReact,
  SiRedux: SiRedux,
  RiSupabaseFill: RiSupabaseFill,
  SiHuawei: SiHuawei,
  SiFirebase: SiFirebase,
  RiTailwindCssFill: RiTailwindCssFill,
};

const iconsList = [
  {
    id: 1,
    title: "Github",
    href: "https://github.com",
    icon: "IoLogoGithub",
  },

  {
    id: 2,
    title: "Git",
    href: "https://git-scm.com",
    icon: "FaGitAlt",
  },
  {
    id: 3,
    title: "React",
    href: "https://react.dev",
    icon: "FaReact",
  },
  {
    id: 4,
    title: "Redux",
    href: "https://redux.js.org",
    icon: "SiRedux",
  },
  {
    id: 5,
    title: "Supabase",
    href: "https://supabase.org",
    icon: "RiSupabaseFill",
  },
  {
    id: 8,
    title: "Huawei",
    href: "https://huawei.com",
    icon: "SiHuawei",
  },
  {
    id: 9,
    title: "Firebase",
    href: "https://firebase.google.com",
    icon: "SiFirebase",
  },
  {
    id: 10,
    title: "TailwindCss",
    href: "https://tailwindcss.com",
    icon: "RiTailwindCssFill",
  },
];

export default function MatrialCards() {
  return (
    <div className="grid grid-cols-4 gap-8 h-12 ">
      {iconsList.map((i) => {
        const Icons = iconMap[i.icon];
        return (
          <div className="flex items-center justify-center p-6  hover:-translate-y-1 transition-all duration-300 hover:shadow-lg shadow-sky-300 bg-gradient-to-b from-[#252525] rounded-2xl  outline-2 outline-offset-4 outline-neutral-600 ">
            <a
              key={i.id}
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600  ml-1.5"
            >
              <Icons className="text-6xl" />
            </a>
            
          </div>
        );
      })}
    </div>
  );
}
