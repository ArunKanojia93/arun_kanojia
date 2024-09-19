"use client";

import { Button } from "@mantine/core";
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
          el: containerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 20.0,
          backgroundColor: 0x2e073f,
          maxDistance: 15.0,
        })
      );
    }
    if (!haloEffect) {
      setHaloEffect(
        HALO({
          el: photoContainerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x2e073f,
          size: 3.0,
        })
      );
    }
    return () => {
      if (netEffect) netEffect.destroy();
    };
  }, [netEffect, haloEffect, containerRef]);
  return (
    <div ref={containerRef} className="flex py-10 pr-16 pl-32 h-[80vh] justify-around items-center">
      <div className="flex flex-col w-3/5">
        <div className="text-4xl text-primary">Hi, I am</div>
        <div className="text-7xl font-black text-white leading-tight">{Info.name}</div>
        <div className="text-white text-4xl flex font-semibold">
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
        <div className="text-xl font-semibold text-justify my-10 w-11/12">{Info.bio}</div>

        <Button size="md" className="bg-foreground text-background w-fit">
          Check Resume
        </Button>
      </div>
      <div ref={photoContainerRef} className="w-1/4 p-3 rounded-full overflow-hidden h-auto flex justify-center items-center rotate-180 shadow-[1px_1px_20px_2px] shadow-primary">
        <img src="/assets/dp.png" alt="profile" className="w-full rounded-full shadow-xl rotate-180" />
      </div>
    </div>
  );
};

export default About;
