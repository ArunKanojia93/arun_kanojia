import { IconAddressBook, IconBrandGit, IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconCode, IconKeyboard, IconMail, IconUserSearch } from "@tabler/icons-react";

const Info = {
  name: "Arun Kanojia",
  email: "arun@pyzalabs.com",
  stack: ["Next.js", "React", "React Native", "TailwindCSS", "Typescript", "Node.js", "Firebase", "Bootstrap", "Astro", "Rest API", "HTML5", "CSS3", "JavaScript", "Redux", "NanoStores", "React Query"],
  bio: "As a dedicated front-end developer with nearly six years of experience, I specialize in crafting visually stunning and user-friendly web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I'm passionate about translating design concepts into functional, interactive experiences. My goal is to create seamless digital solutions that not only look great but also deliver exceptional performance and user satisfaction.",

  socials: [
    {
      name: "Github",
      icon: <IconBrandGithub size={32} className="hover:text-primary" stroke={1.5} />,
      link: "https://github.com/ArunKanojia93",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin size={32} className="hover:text-primary" stroke={1.5} />,
      link: "https://www.linkedin.com/in/arun-kanojia-44733819a",
    },
    {
      name: "Email",
      icon: <IconMail size={32} className="hover:text-primary" stroke={1.5} />,
      link: "mailto:arun@pyzalabs.com",
    },
    {
      name: "WhatsApp",
      icon: <IconBrandWhatsapp size={32} className="hover:text-primary" stroke={1.5} />,
      link: "https://wa.me/+918506046362",
    },
  ],

  projects: [
    {
      name: "Groq AI Chat:",
      tagLine: "Intelligent Conversations Powered by Groq.",
      githubLink: "https://github.com/ArunKanojia93/askgroq",
      liveLink: "https://askgroq.vercel.app",
      description: (
        <>
          <p>Experience seamless AI interactions with our cutting-edge web application built on Next.js and TypeScript. Leveraging the Groq AI API, this platform offers dynamic, real-time conversations with a sophisticated AI model.</p> <br />{" "}
          <p className="font-semibold text-primary text-xl">Key Features: </p>
          <li>Responsive UI crafted with Tailwind CSS</li>
          <li>Real-time AI interactions using the Groq SDK</li>
          <li>Enhanced AI capabilities with @ai-sdk integration</li>
          <li>Built on the robust Next.js framework for optimal performance</li>
        </>
      ),
      stack: ["Next.js", "Typescript", "groq-sdk", "ai", "@ai-sdk", "Tailwind"],
      imgSrc: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    },
    {
      name: "Groq Recipe AI",
      tagLine: "Intelligent Conversations Powered by Groq.",
      githubLink: "https://github.com/ArunKanojia93/groqrecipe",
      liveLink: "https://askgroq.vercel.app",
      description: "",
      stack: ["Next.js", "Typescript", "groq-sdk", "ai", "@ai-sdk", "Tailwind"],
      imgSrc: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    },
    {
      name: "Ask This Website",
      tagLine: "Intelligent Conversations Powered by Groq.",
      githubLink: "https://",
      liveLink: "/",
      description: "",
      stack: ["Next.js", "Typescript", "groq-sdk", "ai", "@ai-sdk", "Tailwind"],
      imgSrc: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    },
  ],
};

export const SiteLinks = [
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

export default Info;
