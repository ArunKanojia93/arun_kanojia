"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CloudLoader } from "@/components/Loader";
import Mail from "@/components/Mail";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Social from "@/components/Social";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return !isLoading ? (
    <>
      <Social />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <Mail />
    </>
  ) : (
    <CloudLoader />
  );
}
