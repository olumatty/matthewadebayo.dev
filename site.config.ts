export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'matthew adebayo',
  repo: 'https://github.com/olumatty',
  website: 'https://matthewadebayo.dev',
  title:
    'Matthew Adebayo (aka olumatty) - Software Developer',
  description:
    'Fullstack Engineer who specializes in bringing complex software ideas to life.',
};

const siteConfig = {
  name: shared.name,
  type: 'website',
  title: shared.title,
  titleTemplate: 'Matthew Adebayo',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/olumatty',
    linkedin: 'https://www.linkedin.com/in/adebayo-matthew',
    email: 'mailto:olumatty@gmail.com',
  },
  repo: {
    url: shared.repo,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: "https://res.cloudinary.com/dynnrnlzx/image/upload/v1760819412/Gemini_Generated_Image_d73amtd73amtd73a_j7erg2.png",
        width: 1200,
        height: 630,
        alt: 'Matthew Adebayo (aka olumatty) -Software Developer',
      },
    ],
  },
};

export default siteConfig;
