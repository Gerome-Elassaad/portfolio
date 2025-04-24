import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gerome",
  lastName: "El-assaad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "gerome.e24@gmail.com",
  location: "Australia/Sydney", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Gerome-Elassaad/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building apps that people love to use.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">DeepRankAI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I am Gerome, a Software Engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Gerome is a Australian-based Software Engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "REDI Software Solutions",
        timeframe: "Feb 2024 - Feb 2025 (1 year 1 month)",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Design a scalable microservice architecture for a multi-tenant analytics platform,
            including decisions on database sharding and API gateway structure.
          </>,
          <>
            Build and integrate a new payment processing module using Stripe API in the company’s SaaS
            dashboard, ensuring it handles various edge cases (e.g., failed payments, refunds).
          </>,
          <>
            Write integration tests for a RESTful API endpoint that handles bulk user uploads,
            ensuring data validation, file parsing, and rollback on errors.
          </>,
          <>
            Pair program with a junior developer to walk through their implementation of a new
            authentication flow, pointing out improvements in security and code readability.
          </>,
        ],
        images: [],
      },
      {
        company: "REDI Software Solutions",
        timeframe: "Feb 2021 - Feb 2024 (3 years 1 month)",
        role: "Mid Level Software Engineer",
        achievements: [
          <>
            My day to day at Redi Software Solutions as a mid level engineer was mainly on
            functionality and maintaining web applications and websites for clients and also bug
            errors as well as new projects production code & UI UX experience
          </>,
        ],
        images: [],
      },
      {
        company: "REDI Software Solutions",
        timeframe: "Jan 2020 - Feb 2021 (1 year 2 months)",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Jnr role at Redi Software Solutions involved learning and helping implement design
            features for the demo applications as well as learning about API&#39;s and how to implement
            them into production.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Graduate IBM Software Engineering",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Google UI UX Design",
        description: <>Studied UI UX design.</>,
      },
      {
        name: "IBM Full Stack Javascript Developer",
        description: <>Studied a variety of code languages and backend systems etc.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  resume: {
    display: true,
    title: "Resume",
    description: "Download my resume to learn more about my experience and qualifications.",
    link: "/original-resume.pdf",
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog Helping You Create A Portfolio Like This Yourself",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
