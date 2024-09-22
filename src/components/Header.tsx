"use client";

import { Burger, Drawer, FocusTrap } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHexagonFilled, IconHexagonLetterA } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Info, { SiteLinks } from "./User";
const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showShadow, setShowShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (window.scrollY > 70) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  return (
    <nav className={`flex bg-none py-8 px-10 h-28 justify-center sticky top-0 ${show ? "translate-y-0" : "-translate-y-32"} transition-transform duration-500 ease-in-out w-full z-30 ${showShadow && !opened ? "shadow-[0_10px_30px_-10px_#7F1395] bg-background" : ""}`}>
      <div className="flex w-full max-w-screen-2xl justify-between items-center relative">
        <a href="#about" rel="noopener noreferrer" className="relative flex items-center justify-center">
          <IconHexagonLetterA
            style={{
              clipPath: "polygon(52% 2px, 91% 27%, 91% 71%, 50% 97%, 10% 70%, 11% 25%)",
            }}
            size={56}
            stroke={1.5}
            className="text-primary bg-background relative z-10 transition-transform duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
          />
          <IconHexagonFilled size={56} stroke={1.5} className="text-primary absolute" />
        </a>
        {/* <div className="relative flex items-center justify-center z-10">
        <IconOctagon size={56} stroke={1.5} className="transform rotate-[22deg] text-primary" />
        <Image className="absolute w-auto h-auto" src="/assets/logo.png" alt="logo" width={44} height={44} />
      </div> */}
        <div className="hidden md:flex gap-8">
          {SiteLinks.map(({ name, icon }) => (
            <a className="hover:text-primary flex items-center lg:gap-2 hover:translate-y-0.5 lg:text-lg" key={name} href={`#${name.toLowerCase()}`}>
              {icon}
              {name}
            </a>
          ))}
        </div>
        <Drawer.Root size={"100%"} opened={opened} onClose={close} position="right">
          <Drawer.Overlay opacity={0.5} blur={30} className="z-10" />
          <Drawer.Content className="z-20">
            <FocusTrap.InitialFocus />
            <Drawer.Body className="bg-background h-full pt-28 flex flex-col items-center justify-between">
              <div>
                {SiteLinks.map(({ name, icon }) => (
                  <a onClick={toggle} className="flex flex-col gap-2 p-4 active:translate-y-0.5 w-full items-center text-lg" key={name} href={`#${name.toLowerCase()}`}>
                    {icon}
                    {name}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-center gap-10 pt-6">
                {Info.socials.map(({ name, icon, link }) => (
                  <a href={link} className="transform active:scale-125 duration-300 ease-in-out" key={name}>
                    {icon}
                  </a>
                ))}
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>

        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color="#DF73FF" className="md:hidden" transitionDuration={200} />
      </div>
    </nav>
  );
};

export default Header;
