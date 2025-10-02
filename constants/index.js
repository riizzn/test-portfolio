const navItems = ["home", "services", "about", "work", "contact"];
const socialLinks = [
  {
    id: "instagram",
    title: "Instagram",
    icon: "/assets/socials/instagram.svg",
    url: "https://instagram.com/yourusername",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "/assets/socials/linkedin.svg",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    id: "github",
    title: "GitHub",
    icon: "/assets/socials/github.svg",
    url: "https://github.com/yourusername",
  },
  {
    id: "x",
    title: "X",
    icon: "/assets/socials/x.svg", // ← added
    url: "https://x.com/yourusername",
  },
];
const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I build scalable, high-performance web applications from scratch—covering everything from beautiful frontends to robust backends and optimized databases.",
    items: [
      {
        title: "Frontend Engineering",
        description:
          "(React, Next.js, TypeScript, Tailwind CSS, GSAP, Framer Motion)",
      },
      {
        title: "Backend Systems",
        description:
          "(Node.js, Express, REST/GraphQL APIs, Auth, Microservices)",
      },
      {
        title: "Databases",
        description: "(PostgreSQL, MySQL, MongoDB, Prisma, Query Optimization)",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    description:
      "I deploy, automate, and manage applications with reliable infrastructure and continuous integration pipelines—ensuring uptime, scalability, and performance.",
    items: [
      {
        title: "Cloud Platforms",
        description: "(AWS, Vercel, Netlify, Firebase, Supabase)",
      },
      {
        title: "CI/CD & Containers",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Performance & Monitoring",
        description: "(Caching, Compression, Analytics, Error Tracking)",
      },
    ],
  },
  {
    title: "UI/UX & Design Systems",
    description:
      "I craft seamless user experiences with pixel-perfect interfaces, modern animations, and accessible design systems.",
    items: [
      {
        title: "Design Systems",
        description: "(Tailwind CSS v4, Custom Tokens, Component Libraries)",
      },
      {
        title: "Animations",
        description: "(GSAP, Framer Motion, ScrollTrigger)",
      },
      {
        title: "Accessibility",
        description: "(WCAG, Semantic HTML, Responsive Design)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "I protect apps from vulnerabilities and fine-tune performance for fast, secure, and SEO-friendly experiences.",
    items: [
      {
        title: "App Security",
        description: "(XSS/SQLi Protection, OAuth, HTTPS, Secure Headers)",
      },
      {
        title: "Code Quality",
        description: "(Refactoring, Testing, Clean Architecture)",
      },
      {
        title: "Performance & SEO",
        description:
          "(SSR, Lazy Loading, Lighthouse 90+, Metadata, Structured Data)",
      },
    ],
  },
];

export { navItems, socialLinks, servicesData };
