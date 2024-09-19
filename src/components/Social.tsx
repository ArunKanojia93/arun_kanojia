import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

const links = [
  {
    name: "Github",
    icon: <IconBrandGithub size={32} className="hover:text-primary" stroke={1.5} />,
    link: "https://github.com/ArunKanojia93",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin size={32} className="hover:text-primary" stroke={1.5} />,
    link: "https://www.linkedin.com/in/arun-kanojia-44733819a",
  },
  {
    name: "Email",
    icon: <IconMail size={32} className="hover:text-primary" stroke={1.5} />,
    link: "mailto:arun@pyzalabs.com",
  },
  {
    name: "WhatsApp",
    icon: <IconBrandWhatsapp size={32} className="hover:text-primary" stroke={1.5} />,
    link: "https://wa.me/+918506046362",
  },
];

const Social = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-10 transform rotate-90 fixed -left-48 bottom-32 z-10">
      {links.map(({ name, icon, link }) => (
        <a href={link} className="hover:text-primary transform -rotate-90 hover:scale-125 duration-300 ease-in-out" key={name}>
          {icon}
        </a>
      ))}

      <hr className="border-2 border-foreground w-60 rounded-full" />
    </div>
  );
};

export default Social;
