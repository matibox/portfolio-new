export const links: string[] = ['about', 'skills', 'projects', 'contact'];

export const skills: string[] = [
  'html',
  'css',
  'scss',
  'tailwind',
  'js',
  'ts',
  'react',
  'next',
  'prisma',
  'git',
  'figma',
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
    name: 'Trackmate (in progress)',
    description:
      "Trackmate is the biggest project I've ever worked on. I'm slowly but surely adding new functionalities to it and improving it. Even though it's not yet a final product, it's features allow users to schedule races, create and manage teams, upload and share setups between team members. It's a very convenient way of having everything organised in one place. My goal with this website is to make simaracer's life easier.",
    websiteUrl: 'https://mytrackmate.vercel.app',
    githubUrl: 'https://github.com/matibox/trackmate',
    technologiesUsed: [
      'Next.js',
      'TS',
      'Tailwind',
      'Prisma',
      'TRPC',
      'Next Auth',
      'Shadcn UI',
    ],
  },
  {
    name: 'Gastry',
    description:
      'Gastry is a recipe app that allows users to add, search and mark recipes as favourites. This app also features creating a custom menu for each day consisting of recipes in a database.',
    websiteUrl: 'https://gastry.vercel.app',
    githubUrl: 'https://github.com/matibox/gastry',
    technologiesUsed: ['React', 'TS', 'CSS', 'Prisma', 'Express'],
  },
  {
    name: 'Where in the world?',
    description:
      'This project from frontendmentor.io features data fetching from a public countries API. It allows users to search for a country, filter by region and check details and neighbours of a specific country. It also features a light/dark mode switch.',
    websiteUrl: 'https://rest-countries-api-beta.vercel.app/',
    githubUrl: 'https://github.com/matibox/rest-countries-api',
    technologiesUsed: ['Next.js', 'TS', 'Tailwind'],
  },
  {
    name: 'E-commerce page',
    description:
      'This website features a responsive and mobile-first layout, a lightbox gallery, a product image slider and a product cart. I used a library called Glide.js, which was easy to work with.',
    websiteUrl: 'https://ecommerce-product-page-matibox.vercel.app/',
    githubUrl: 'https://github.com/matibox/ecommerce-product-page',
    technologiesUsed: ['HTML', 'SCSS', 'JS'],
  },
  {
    name: 'Better tic-tac-toe',
    description:
      "It's a basic tic-tac-toe game until every player places their icons 3 times. There can't be more than 6 icons total on the board. After every icon is placed, now instead of placing the icons, players need to drag the first icon they've placed into an empty space on the board and then the 2nd one etc. until they manage to get 3 icons in a one line (just like in normal tic-tac-toe game)",
    websiteUrl: 'https://tic-tac-toe-beta-beryl.vercel.app/',
    githubUrl: 'https://github.com/matibox/tic-tac-toe',
    technologiesUsed: ['HTML', 'CSS', 'JS'],
  },
];
