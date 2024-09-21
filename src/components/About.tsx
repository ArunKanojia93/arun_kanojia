"use client";

import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import TypeWriter from "typewriter-effect";
import HALO, { HaloInstance } from "vanta/src/vanta.halo";
import NET, { NetInstance } from "vanta/src/vanta.net";
import Info from "./User";

const About = () => {
  const [netEffect, setNetEffect] = useState<NetInstance | null>(null);

  const [haloEffect, setHaloEffect] = useState<HaloInstance | null>(null);

  const containerRef = useRef(null);
  const photoContainerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current || !photoContainerRef.current) return;
    if (!netEffect) {
      setNetEffect(
        NET({
          el: containerRef.current!,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 20.0,
          backgroundColor: 0x450151,
          maxDistance: 15.0,
        })
      );
    }
    if (!haloEffect) {
      setHaloEffect(
        HALO({
          el: photoContainerRef.current!,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x450151,
          size: 3.0,
        })
      );
    }
    return () => {
      if (netEffect) netEffect.destroy();
      if (haloEffect) haloEffect.destroy();
    };
  }, [haloEffect, netEffect]);
  return (
    <div ref={containerRef} className="lg:h-[80vh] w-full flex justify-center">
      <div className="max-w-screen-2xl w-full h-full flex flex-col-reverse lg:flex-row py-10 px-8 md:px-16 3xl:px-0 justify-around items-center gap-y-16">
        <div data-aos="fade-right" className="flex flex-col w-full lg:w-3/5 items-center lg:items-start">
          <div className="text-3xl md:text-4xl text-primary">Hi, I am</div>
          <div className="text-4xl md:text-7xl font-black text-white leading-tight">{Info.name}</div>
          <div className="text-white text-3xl md:text-4xl flex font-semibold">
            My Stack:{" "}
            <span className="text-primary font-bold">
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
          <div className="text-lg lg:text-xl font-semibold text-justify my-10 w-full md:w-11/12">{Info.bio}</div>

          <div className="flex gap-4">
            <Button size="md" className="bg-foreground text-background w-fit hover:bg-foreground hover:text-background hover:shadow-[0px_0px_4px_2px] hover:shadow-primary transition-shadow duration-300">
              Check Resume
            </Button>
            <Button size="md" className="bg-background text-foreground w-fit border-2 border-primary hover:bg-background hover:text-foreground hover:shadow-[0px_0px_4px_2px] hover:shadow-primary transition-shadow duration-300">
              Download <IconDownload size={20} className="ml-2 text-primary" />
            </Button>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="100" ref={photoContainerRef} className="w-1/2 lg:w-1/4 p-3 rounded-full overflow-hidden h-auto flex justify-center items-center shadow-[1px_1px_60px_2px] shadow-primary">
          <img src="/assets/dp.png" alt="profile" className="w-full rounded-full shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
