import Image from 'next/image';

import {
  IconAddressBook,
  IconApi,
  IconBrandAndroid,
  IconBrandAstro,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrandWhatsapp,
  IconCode,
  IconKeyboard,
  IconMail,
  IconUserSearch,
} from '@tabler/icons-react';

const Info = {
  name: "Arun Kanojia",
  email: "arun@pyzalabs.com",
  stack: [
    "Next.js",
    "React",
    "React Native",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Firebase",
    "Bootstrap",
    "Astro",
    "Rest API",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Redux",
    "NanoStores",
    "React Query",
  ],
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
            Welcome to Happy Inbox, a cutting-edge email management solution built with a robust, performance-focused tech stack. Our platform leverages the power of modern web
            technologies to provide Gmail users with an efficient, secure, and user-friendly email organization experience.
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
      name: "Speechify",
      tagLine: "Text to Speech Reader and AI Voice Generater",
      liveLink: "https://speechify.com",
      description: (
        <>
          <p>Speechify is a text-to-speech app that reads text aloud using a computer-generated voice. It&#39;s available on Chrome, iOS, Android, Mac, and Edge.</p>
          <br />
          <p className="font-semibold text-primary text-xl">Key Features: </p>
          <li>Natural-sounding voices: Speechify offers a variety of high-quality premium voices to choose from.</li>
          <li> Optical character recognition: Speechify can turn physical books or printed text into audio by using optical character recognition technology.</li>
          <li> Take photos of text: Speechify lets users take photos of text and then listen to it read out loud.</li>
          <li> AI voice over: Speechify&#39;s AI voices can read up to 9x faster than the average reading speed.</li>
        </>
      ),
      stack: ["Next.js", "Typescript", "TailwindCSS", "Zustand", "React", "Svelte", "Firebase", "WordPress", "jQuery", "Redux", "Node.js", "Elementor", "Cloud Firestore"],
      imgSrc: "/assets/speechify_website.png",
      fullImgSrc: "/assets/speechify_full.png",
    },
    {
      name: "Groq Recipe AI",
      tagLine: "AI-Powered Recipe Generator",
      githubLink: "https://github.com/ArunKanojia93/groq-recipe-ai",
      liveLink: "https://groq-recipe-ai.vercel.app/",
      description: (
        <>
          <p>
            Developed an innovative web application that leverages artificial intelligence to generate detailed cooking instructions from recipe names. This project showcases my
            ability to integrate cutting-edge AI technology with modern web development practices.
          </p>
          <br />
          <p className="font-semibold text-primary text-xl">Key Features: </p>
          <li>AI-powered recipe instruction generation</li>
          <li>User-friendly interface for inputting recipe names</li>
          <li>Detailed, step-by-step cooking instructions output</li>
          <br />
          <p className="font-semibold text-primary text-xl">Implementation Highlights: </p>
          <li>Utilized Next.js and TypeScript for a robust, type-safe frontend</li>
          <li>Integrated Groq&#39;s AI capabilities for natural language processing and recipe generation</li>
          <li>Implemented responsive design with TailwindCSS for optimal user experience across devices</li>
          <li>Leveraged ai-sdk and ai react for seamless AI integration in a React-based environment</li>
        </>
      ),
      stack: ["Next.js", "Typescript", "Groq", "ai", "@ai-sdk", "TailwindCSS"],
      imgSrc: "/assets/recipe_ai.png",
      fullImgSrc: "/assets/recipe_ai_full.png",
    },
    {
      name: "Ask This Website",
      tagLine: "AI-Powered Article Q&A Platform",
      githubLink: "https://github.com/ArunKanojia93/askthiswebsite",
      description: (
        <>
          <p>
            I developed a dynamic web application that leverages cutting-edge RAG (Retrieval-Augmented Generation) technology to provide an interactive question-answering
            experience for any online content. Users can simply input a URL, and the system processes the article, blog post, or web page, allowing them to ask natural language
            questions about the content.
          </p>
          <br />
          <p className="font-semibold text-primary text-xl">Key Features: </p>
          <li>URL-based content ingestion using Next.js for robust, server-side rendered React applications • Efficient data caching and retrieval powered by Upstash Redis</li>
          <li>
            Natural language query processing leveraging OpenAI&#39s {"ai"} package • Upstash RagChat integration for cutting-edge Retrieval-Augmented Generation (RAG) capabilities
          </li>
          <li>Intuitive, responsive interface built with Next UI components • Clean, modern design implemented using TailwindCSS for streamlined, utility-first styling</li>
        </>
      ),
      stack: ["Next.js", "Typescript", "Upsatash RagChat", "ai", "Upstash RateLimit", "TailwindCSS", "Next UI", "Upstash Redis"],
      imgSrc: "/assets/askthiswebsite.png",
      fullImgSrc: "/assets/askthiswebsite_full.png",
    },
    {
      name: "Freelance Project: Architectural Consultancy Portfolio",
      tagLine: "Architectural Consultancy Portfolio",
      liveLink: "https://safwatghaly.com",
      description: (
        <ul>
          <li>Designed and developed a fully responsive and visually appealing portfolio website for an architectural consultant, showcasing their work and expertise.</li>
          <li>Leveraged Astro for optimized static site generation, ensuring fast performance and SEO-friendly architecture.</li>
          <li>Used Preact to enhance interactivity while keeping the site lightweight and efficient.</li>
          <li>Implemented Tailwind CSS and ShadCN to create a modern, aesthetic, and accessible UI.</li>
          <li>Ensured seamless navigation and cross-device compatibility, optimizing UX for potential clients.</li>
          <li>Delivered a scalable and maintainable codebase, allowing for future content expansion.</li>
        </ul>
      ),
      stack: ["Astro", "ShadCn", "TailwindCSS", "Preact"],
      imgSrc: "/assets/safwat-ghaly.png",
      fullImgSrc: "/assets/safwat-ghaly.png",
    },
  ],

  // Next.js, Astro, React, React Query, Preact, Firebase, React Native, TailwindCSS, Nanostores, HTML5, CSS3, Bootstrap, jQuery, Express.js, Redux.js, Node.js, Javascript, Typescript, PWA, REST API

  skills: [
    {
      name: "Frontend",
      skills: [
        {
          name: "Next.js",
          icon: <IconBrandNextjs size={24} className="text-primary" />,
        },
        {
          name: "Astro",
          icon: <IconBrandAstro size={24} className="text-primary" />,
        },
        {
          name: "TailwindCSS",
          icon: <IconBrandTailwind size={24} className="text-primary" />,
        },
        {
          name: "React",
          icon: <IconBrandReact size={24} className="text-primary" />,
        },
        {
          name: "React Query",
          icon: <Image src="/assets/query.png" alt="query" width={24} height={24} />,
        },
        {
          name: "Nanostores",
          icon: <Image src="/assets/nano.svg" alt="nano" width={24} height={24} />,
        },
        {
          name: "React Native",
          icon: <IconBrandReactNative size={24} className="text-primary" />,
        },
        {
          name: "PWA",
          icon: <Image src="/assets/pwa.png" alt="pwa" width={24} height={24} />,
        },
        {
          name: "HTML",
          icon: <IconBrandHtml5 size={24} className="text-primary" />,
        },
        {
          name: "CSS",
          icon: <IconBrandCss3 size={24} className="text-primary" />,
        },
        {
          name: "Bootstrap",
          icon: <IconBrandBootstrap size={24} className="text-primary" />,
        },
        {
          name: "Redux",
          icon: <IconBrandRedux size={24} className="text-primary" />,
        },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <IconBrandNodejs size={24} className="text-primary" />,
        },
        {
          name: "Express",
          icon: <Image src="/assets/express.png" alt="pwa" width={24} height={24} />,
        },
        {
          name: "REST API",
          icon: <IconApi size={24} className="text-primary" />,
        },
      ],
    },
    {
      name: "Languages",
      skills: [
        {
          name: "Javascript",
          icon: <IconBrandJavascript size={24} className="text-primary" />,
        },
        {
          name: "Typescript",
          icon: <IconBrandTypescript size={24} className="text-primary" />,
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
          icon: <IconBrandGit size={24} className="text-primary" />,
        },
        {
          name: "Github",
          icon: <IconBrandGithub size={24} className="text-primary" />,
        },
        {
          name: "VSCode",
          icon: <IconBrandVscode size={24} className="text-primary" />,
        },
        {
          name: "Figma",
          icon: <IconBrandFigma size={24} className="text-primary" />,
        },
        {
          name: "Android Studio",
          icon: <IconBrandAndroid size={24} className="text-primary" />,
        },
        {
          name: "Xcode",
          icon: <Image src="/assets/xcode.png" alt="pwa" width={24} height={24} />,
        },
        {
          name: "Postman",
          icon: <Image src="/assets/postman.png" alt="pwa" width={24} height={24} />,
        },
      ],
    },
  ],

  experience: [
    {
      position: "Frontend Developer",
      logo: <Image src="/assets/pyzalabs.svg" alt="logo" width={60} height={60} className="rounded-2xl bg-black" />,
      company: "Pyza Labs",
      period: "January 2019 - Present",
      description:
        "At Pyza Labs, I served as a Software Developer, contributing to multiple projects that showcased my versatility in modern web and mobile development. I leveraged a diverse tech stack including Next.js, React, Astro, and React Native to build responsive web applications and cross-platform mobile solutions. My role involved designing intuitive user interfaces with TailwindCSS and Bootstrap, implementing state management using React Query and Redux.js, and developing robust backend services with Node.js and Express.js. I integrated Firebase for real-time functionality and authentication, and utilized TypeScript to enhance code quality.",
    },
    {
      position: "Frontend Developer",
      logo: <Image src="/assets/speechify.webp" alt="logo" width={60} height={60} className="rounded-2xl" />,
      company: "Speechify",
      period: "January 2021 - September 2024",
      description:
        "At Speechify, I played a key role as a versatile developer, contributing to multiple projects that showcased the company's innovation in text-to-speech technology. Leveraging a diverse tech stack, I developed robust web applications using Node.js, Next.js, Svelte, and React.js, enhancing user experiences with responsive designs implemented through Tailwind CSS and HTML5. I utilized TypeScript to ensure code quality and maintainability across projects. My responsibilities included integrating Firebase and Cloud Firestore for real-time data management, implementing state management solutions with Redux.js, and creating dynamic content management systems using WordPress.",
    },
  ],
};

export const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const SiteLinks = [
  {
    name: "About",
    icon: <IconUserSearch size={24} className="text-primary" />,
  },
  {
    name: "Projects",
    icon: <IconBrandGithub size={24} className="text-primary" />,
  },
  {
    name: "Skills",
    icon: <IconKeyboard size={24} className="text-primary" />,
  },
  {
    name: "Experience",
    icon: <IconCode size={24} className="text-primary" />,
  },
  {
    name: "Contact",
    icon: <IconAddressBook size={24} className="text-primary" />,
  },
];

export default Info;
