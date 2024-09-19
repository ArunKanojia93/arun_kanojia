"use client";

import { Burger, Drawer, FocusTrap } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAddressBook, IconBrandGit, IconCode, IconKeyboard, IconOctagon, IconUserSearch } from "@tabler/icons-react";
import Image from "next/image";

const links = [
  {
    name: "About",
    icon: <IconUserSearch size={20} className="text-primary" />,
  },
  {
    name: "Projects",
    icon: <IconBrandGit size={20} className="text-primary" />,
  },
  {
    name: "Skills",
    icon: <IconKeyboard size={20} className="text-primary" />,
  },
  {
    name: "Experience",
    icon: <IconCode size={20} className="text-primary" />,
  },
  {
    name: "Contact",
    icon: <IconAddressBook size={20} className="text-primary" />,
  },
];
const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <nav className="flex justify-between items-center bg-background py-8 px-10 h-32">
      <div className="relative flex items-center justify-center z-10">
        <IconOctagon size={56} stroke={1.5} className="transform rotate-[22deg] text-primary" />
        <Image className="absolute" src="/assets/logo.png" alt="logo" width={44} height={44} />
      </div>
      <div className="hidden md:flex gap-8">
        {links.map(({ name, icon }) => (
          <a className="hover:text-primary flex items-center gap-2 hover:translate-y-0.5" key={name} href={`#${name.toLowerCase()}`}>
            {icon}
            {name}
          </a>
        ))}
      </div>
      <>
        <Drawer.Root opened={opened} onClose={close} position="right">
          <Drawer.Overlay opacity={0.5} blur={30} className="z-0" />
          <Drawer.Content className="z-0">
            <FocusTrap.InitialFocus />
            <Drawer.Body className="bg-background h-full pt-24 flex flex-col items-center">
              {links.map(({ name, icon }) => (
                <a className="flex flex-col gap-2 p-4 active:translate-y-0.5 w-full items-center text-lg" key={name} href={`#${name.toLowerCase()}`}>
                  {icon}
                  {name}
                </a>
              ))}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color="#DF73FF" className="z-10 md:hidden" transitionDuration={200} />
      </>
    </nav>
  );
};

export default Header;
