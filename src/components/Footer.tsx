import { IconCopyright } from "@tabler/icons-react";
import Info from "./User";

const Footer = () => {
  return (
    <div id="footer" className="flex flex-col pt-10 px-8 md:px-16 lg:px-32 3xl:px-0 items-center w-full max-w-screen-2xl">
      <div className="text-5xl font-black text-black dark:text-white">Arun Kanojia</div>
      <div className="flex gap-2 mt-4 text-lg text-primary justify-center flex-wrap">
        Copyright <IconCopyright /> {new Date().getFullYear()} <span className="whitespace-nowrap">Arun Kanojia | All Rights Reserved</span>
      </div>

      <div className="md:hidden flex items-center justify-center gap-10 pt-6">
        {Info.socials.map(({ name, icon, link }) => (
          <a href={link} className="transform active:scale-125 duration-300 ease-in-out" key={name}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
