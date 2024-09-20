import { IconCopyright } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div id="contact" className="flex flex-col pt-10 px-32 3xl:px-0 items-center w-full max-w-screen-2xl">
      <div className="text-5xl font-black text-black dark:text-white">Arun Kanojia</div>
      <div className="flex gap-2 mt-4 text-lg text-primary">
        Copyright <IconCopyright /> {new Date().getFullYear()} Arun Kanojia | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
