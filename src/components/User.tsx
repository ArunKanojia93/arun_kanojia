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
      name: "Happy Inbox",
      tagLine: "Delete Emails In Just Minutes",
      liveLink: "https://app.happy-inbox.com",
      description: (
        <>
          <p>
            Welcome to Happy Inbox, a cutting-edge email management solution built with a robust, performance-focused tech stack. Our platform leverages the power of modern web technologies to provide Gmail users with an efficient, secure, and user-friendly email organization
            experience.
          </p>
          <br />
          <p className="font-semibold text-primary text-xl">Key Features: </p>
          <li>Bulk Email Operations: Implemented efficient algorithms for processing large volumes of emails simultaneously.</li>
          <li>Intelligent Sorting: Utilizes machine learning models to categorize and prioritize emails automatically.</li>
          <li>Inbox Zero Automation: Designed workflows to achieve a clean inbox in under 15 minutes through smart filtering and action suggestions.</li>
          <li>Security-First Architecture: Integrated robust security measures, audited and verified by Google and PWC, ensuring data protection at every level.</li>
        </>
      ),
      stack: ["Astro", "Typescript", "TailwindCSS", "Nanostores", "React Query", "Preact", "Firebase", "React Native"],
      iOS: "https://apps.apple.com/in/app/happy-inbox-gmail-cleaner/id6477334113",
      android: "https://play.google.com/store/apps/details?id=com.happy_inbox.android",
      imgSrc: "/assets/happy_inbox.png",
      fullImgSrc: "/assets/happy_inbox_full.png",
    },
    {
      name: "Groq AI Chat:",
      tagLine: "Intelligent Conversations Powered by Groq.",
      githubLink: "https://github.com/ArunKanojia93/askgroq",
      liveLink: "https://askgroq.vercel.app",
      description: (
        <>
          <p>Experience seamless AI interactions with our cutting-edge web application built on Next.js and TypeScript. Leveraging the Groq AI API, this platform offers dynamic, real-time conversations with a sophisticated AI model.</p>
          <br />
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
