"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Mail from "@/components/Mail";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Social from "@/components/Social";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Social />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Mail />
    </>
  );
}
