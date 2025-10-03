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

const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/accessories.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/wordpress-theme.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/blazor-app.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/auth-system.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/elearning.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-engine.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

export { navItems, socialLinks, servicesData, projects };
