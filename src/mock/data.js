import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tim Castillo-Gill',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "I'm Tim, a Maker and full-stack developer. I am seeking an opportunity to build products that make a difference in a variety of contexts as a junior developer.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.github.com/timcastillogill/cv', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lingumiSearchScreenshot.png',
    title: 'Vid-Tutorial',
    info:
      'React app that instantly searches an API data source for videos. One search input for video title and teacher name and another search input for video tags.',
    info2: '',
    url: '',
    repo: 'https://github.com/timcastillogill/vid-tutorial-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'why_leave.png',
    title: 'Why Leave?',
    info:
      'The focus of this project is to inform people about conflicts, traumas and sociopolitical issues occurring in unrepresented, marginalised nations and countries on our planet. These issues cause inhabitants of these countries to seek refuge in order to survive or build better lives for themselves and their families (if they did not make the journey alone).',
    info2:
      'Reasons why people leave or flee their home countries is not common knowledge, and the topic is filled with a lot of ignorance - phrases like ‘they’re just here to take our jobs’ are untrue, damaging and completely misleading.',
    url: 'https://why-leave.vercel.app/',
    repo: 'https://github.com/timcastillogill/Why_Leave_Front_End', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ravenous.png',
    title: 'Ravenous',
    info:
      'This is a React web app that pulls restaurant data from the Yelp API in order for a user to view restaurants in the area they input. They can order by review count, review rating and best match.',
    info2: 'Built with Codecademy',
    url: '',
    repo: 'https://github.com/timcastillogill/Ravenous_ReactApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bank_tech_test.png',
    title: 'Bank Tech Test',
    info: 'A tech test given at the end of the Makers course to prepare me for upcoming tech tests',
    info2: 'Written in Ruby and tested using the Rspec Framework',
    url: '',
    repo: 'https://github.com/timcastillogill/bank_tech_test_ruby', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Game_Example_Picture_Pong.png',
    title: 'Pong Game in Python',
    info: 'The classic game of Pong whereby the ball must not get behind the paddle',
    info2: 'Written in Python with the Turtle module',
    url: '',
    repo: 'https://github.com/timcastillogill/Pong-Game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'timcastillogill@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/timcastillogill',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tim-castillo-gill-30a27b42/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/timcastillogill',
    },
  ],
};
