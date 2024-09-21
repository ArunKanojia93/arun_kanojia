"use client";

import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
import { NeonGradientCard } from "./MagicUi/NeonGradientCard";
import Particles from "./MagicUi/Particles";
import SparklesText from "./MagicUi/SparkelsText";
import Info from "./User";

const About = () => {
  return (
    <div id="about" className="lg:h-[80vh] w-full flex justify-center">
      <Particles quantity={500} size={1} staticity={20} className="pointer-events-none absolute w-full h-full left-0 top-0" />
      <div className="max-w-screen-2xl w-full h-full flex flex-col-reverse lg:flex-row py-10 px-8 md:px-16 xl:px-32 3xl:px-0 justify-between items-center gap-y-16">
        <div className="flex flex-col w-full lg:w-3/5 items-center lg:items-start">
          <div className="text-3xl xl:text-4xl text-primary">Hi, I am</div>
          <SparklesText text={Info.name} className="text-4xl xl:text-7xl font-black text-white !leading-normal" />
          <div className="text-white text-3xl xl:text-4xl flex">
            My Stack:{" "}
            <span className="text-primary font-semibold">
              <TypeWriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  cursor: "_",
                  delay: 100,
                }}
              />
            </span>
          </div>
          <div className="text-lg xl:text-xl font-semibold text-justify my-10 w-full md:w-11/12">{Info.bio}</div>

          <div className="flex gap-4">
            <Button size="md" radius="md" className="bg-foreground text-background w-fit hover:bg-foreground hover:text-background hover:shadow-[0px_0px_4px_2px] hover:shadow-primary transition-shadow duration-300">
              Check Resume
            </Button>
            <Button size="md" radius="md" className="bg-background text-foreground w-fit border-2 border-primary hover:bg-background hover:text-foreground hover:shadow-[0px_0px_4px_2px] hover:shadow-primary transition-shadow duration-300">
              Download <IconDownload size={20} className="ml-2 text-primary" />
            </Button>
          </div>
        </div>
        <NeonGradientCard className="max-w-80 h-80 xl:max-w-sm xl:h-full items-center justify-center">
          <Image src="/assets/dp.png" alt="profile" className="pointer-events-none z-10 rounded-full bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1]" width={384} height={384} />
        </NeonGradientCard>
      </div>
    </div>
  );
};

export default About;
