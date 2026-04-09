export const personalInfo = {
  name: "Dusty McCord",
  title: "Frontend Engineer",
  location: "Portland, OR",
  email: "", // intentionally blank
  github: "https://github.com/dustatron",
  linkedin: "https://www.linkedin.com/in/dustymccord",
  website: "https://dustymccord.com",
  heroDescription:
    "I'm Dusty — a frontend engineer in Portland writing The Dusty Lab, where I share the AI workflows I actually use to ship production React at Apex Fintech Solutions. Five years of React and TypeScript, a decade before that as a video editor and motion designer for brands like Nike and Amazon. I built the testing infrastructure on my team, helped scale it from 7 engineers to 40+, and I'm currently obsessed with agentic dev workflows. I attended React Conf 2024 and 2025, and I'm always trying to discover what's next.",
};

export const workExperience = [
  {
    position: "Frontend Engineer",
    company: "Apex Fintech Solutions",
    location: "Portland, OR",
    period: "Nov 2020 – Present",
    achievements: [
      "Led 3 major migrations serving 80,000+ daily users: Angular → React, Redux → modern patterns (React Query, Zustand), REST → GraphQL",
      "Established E2E testing with Cypress where none existed; later migrated to Playwright",
      "Migrated unit testing from Jest to Vitest",
      "Developed tooling for secure data flows and streamlined dev workflows",
      "Updated and maintained Login patterns for Okta and Cognito",
      "Shipped multiple greenfield projects end-to-end, from initial planning to production",
      "Mentored interns and new developers; created onboarding documentation as the team scaled from 7 to 40+",
      "Collaborated with developers, designers, and non-technical stakeholders across global teams",
      "Drove innovation through company hackathons, deploying POCs for internal tools",
      "Adopted Claude Code and agentic AI workflows for daily feature work, materially accelerating greenfield React delivery",
      "Conduct daily code reviews, ensuring code quality and knowledge sharing",
      "Collaborated with Java backend teams on API contracts, integration testing, and endpoint development",
    ],
  },
  {
    position: "Front End Shopify Developer",
    company: "Comic Cave PDX",
    location: "Portland, OR",
    period: "Sep 2020 – Nov 2020",
    achievements: [
      "Built a digital storefront for an independent comic retailer",
      "Gathered requirements, developed MVP, created custom elements (Liquid, SCSS, JS)",
      "Trained client on Shopify admin interface",
    ],
  },
  {
    position: "Front End Developer Intern",
    company: "Theorem Agency",
    location: "Portland, OR",
    period: "Jun 2020 – Sep 2020",
    achievements: [
      "Built data-driven dashboards and React components consuming RESTful APIs",
      "Developed live game stats pages for Portland Trail Blazers using NBA API",
      "Added Redux/Redux Thunk for global state; built login system with restricted views",
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Sass"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Chakra UI", "shadcn/ui"],
  "State & Data": [
    "Redux",
    "Zustand",
    "React Query",
    "GraphQL",
    "Apollo",
    "REST APIs",
  ],
  Testing: ["Playwright", "Cypress", "React Testing Library", "Jest", "Vitest"],
  Tools: ["Vite", "Webpack", "Storybook", "Git", "GitHub Actions", "CI/CD"],
  "AI Development": [
    "Claude Code",
    "Cursor",
    "MCP Servers",
    "Agentic Workflows",
    "Prompt Engineering",
  ],
};

export const community = [
  {
    org: "PICA (Portland Institute for Contemporary Art)",
    description:
      "Migrated shopping cart and ticket sales from iframe to custom API-driven solution fully integrated into site",
  },
  {
    org: "Neighborhood Associations",
    description: "Web support, maintenance, and technical guidance",
  },
];

export const priorCareer = {
  title: "Video Editor & Motion Designer",
  period: "2004 – 2019",
  description:
    "10+ years as video editor and motion designer for Nike, Amazon, Cartoon Network, Adidas, and other major brands. Managed teams of freelancers and worked directly with clients and stakeholders to deliver high-quality content on tight deadlines.",
};

export const education = [
  {
    school: "Epicodus",
    program: "Full-Stack Development",
    years: "2020",
  },
  {
    school: "The Evergreen State College",
    program: "Studied Media",
    years: "2001 – 2003",
  },
];
