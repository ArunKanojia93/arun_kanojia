import About from "@/components/About";
import Header from "@/components/Header";
import Mail from "@/components/Mail";
import Projects from "@/components/Projects/Projects";
import Social from "@/components/Social";

export default function Home() {
  return (
    <>
      <Social />
      <Header />
      <About />
      <Projects />
      <Mail />
    </>
  );
}
