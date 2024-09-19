"use client";

import { Burger, Drawer, FocusTrap } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHexagonLetterA } from "@tabler/icons-react";
import { SiteLinks } from "./User";
const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <nav className="flex justify-between items-center bg-background py-8 px-10 h-32">
      <IconHexagonLetterA size={56} stroke={1.5} className="text-primary" />
      {/* <div className="relative flex items-center justify-center z-10">
        <IconOctagon size={56} stroke={1.5} className="transform rotate-[22deg] text-primary" />
        <Image className="absolute w-auto h-auto" src="/assets/logo.png" alt="logo" width={44} height={44} />
      </div> */}
      <div className="hidden md:flex gap-8">
        {SiteLinks.map(({ name, icon }) => (
          <a className="hover:text-primary flex items-center gap-2 hover:translate-y-0.5" key={name} href={`#${name.toLowerCase()}`}>
            {icon}
            {name}
          </a>
        ))}
      </div>
      <>
        <Drawer.Root opened={opened} onClose={close} position="right">
          <Drawer.Overlay opacity={0.5} blur={30} className="z-0" />
          <Drawer.Content className="z-[9]">
            <FocusTrap.InitialFocus />
            <Drawer.Body className="bg-background h-full pt-24 flex flex-col items-center">
              {SiteLinks.map(({ name, icon }) => (
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
