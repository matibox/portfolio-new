export const links: string[] = ['experience', 'skills', 'projects', 'contact'];

export const skills: string[] = [
  'cursor',
  'html',
  'css',
  'tailwind',
  'js',
  'ts',
  'react',
  'next',
  'prisma',
  'drizzle',
  'git',
  'figma',
];

export type Experience = {
  company: string;
  position: string;
  type: string;
  duration: string;
  place: string;
  skills: string[];
};

export const experience: Experience[] = [
  {
    company: '"2 Skoczki" Cyprian Gepfert',
    position: 'Fullstack developer',
    type: 'internship',
    duration: 'march 2025',
    place: 'Skoczów, Poland (remote)',
    skills: [
      'Creating fullstack projects using T3 stack',
      'Following scrum principles',
      'Using AI to improve productivity',
    ],
  },
  {
    company: 'Optimal Wojciech Tatka',
    position: 'Web developer & CMS administrator',
    type: 'internship',
    duration: 'may 2024 - jun 2024',
    place: 'Skoczów, Poland',
    skills: ['Creating web applications', 'Administrating a custom CMS system'],
  },
];

export type Project = {
  name: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  technologiesUsed: string[];
};

export const projects: Project[] = [
  {
    name: 'Hladstat',
    description:
      "Volleyball stats app. It's being used by an actual volleyball team.",
    websiteUrl: 'https://hladstat.vercel.app/',
    githubUrl: 'https://github.com/matibox/hladstat',
    technologiesUsed: [
      'Next.js',
      'TS',
      'Tailwind',
      'Drizzle ORM',
      'TRPC',
      'Next Auth',
      'Shadcn UI',
      'SQL',
    ],
  },
  {
    name: 'Trackmate',
    description: "Making simracer's life easier.",
    websiteUrl: 'https://github.com/matibox/trackmate',
    githubUrl: 'https://github.com/matibox/trackmate',
    technologiesUsed: [
      'Next.js',
      'TS',
      'Tailwind',
      'Drizzle ORM',
      'TRPC',
      'Next Auth',
      'Shadcn UI',
      'SQL',
    ],
  },
  {
    name: 'Gastry',
    description: 'Advanced recipe app.',
    websiteUrl: 'https://gastry.vercel.app',
    githubUrl: 'https://github.com/matibox/gastry',
    technologiesUsed: ['React', 'TS', 'CSS', 'Prisma', 'Express'],
  },
  {
    name: 'Where in the world?',
    description: 'Check details of every country in the world.',
    websiteUrl: 'https://rest-countries-api-beta.vercel.app/',
    githubUrl: 'https://github.com/matibox/rest-countries-api',
    technologiesUsed: ['Next.js', 'TS', 'Tailwind'],
  },
  {
    name: 'E-commerce page',
    description: 'E-commerce product page with shopping cart functionality.',
    websiteUrl: 'https://ecommerce-product-page-matibox.vercel.app/',
    githubUrl: 'https://github.com/matibox/ecommerce-product-page',
    technologiesUsed: ['HTML', 'SCSS', 'JS'],
  },
  {
    name: 'Better tic-tac-toe',
    description: 'Tic-tac-toe game with a twist',
    websiteUrl: 'https://tic-tac-toe-beta-beryl.vercel.app/',
    githubUrl: 'https://github.com/matibox/tic-tac-toe',
    technologiesUsed: ['HTML', 'CSS', 'JS'],
  },
];
