import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  MdEmail: MdEmail,
};

const social = [
  {
    id: 1,
    title: "Linkedin",
    href: "https://linkedin.com/in/mohammed-mouffok-4a7371325",
    icon: "FaLinkedin",
  },
  {
    id: 1,
    title: "GitHub",
    href: "https://github.com/mohammedmouffok",
    icon: "FaGithub",
  },
  {
    id: 1,
    title: "Email",
    href: "mailto:mouffokmed5@gmail.com",
    icon: "MdEmail",
  },
];

export default function Social() {
  return (
    <div className="flex gap-4 m-4 translate-y-10">
      {social.map((s) => {
        const Icon = iconMap[s.icon];
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 m-1 hover:-translate-y-2 duration-300  ease-in-out hover:shadow-lg shadow-blue-500/50 hover:text-blue-400 transition-all text-2xl"
            aria-label={s.title}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}