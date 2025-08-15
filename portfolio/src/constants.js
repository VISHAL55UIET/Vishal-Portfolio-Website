// Cleaned Portfolio Data Configuration

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import bsaLogo from './assets/education_logo/csjm-university-logo-big-947x1024.webp';
import Logo from './assets/education_logo/varanasi-public-school.webp';
import vpsLogo from './assets/education_logo/raj-english-school-varanasi-logo.webp';

import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Full Stack Engineer Intern",
    company: "Blustock",
    period: "Jun 2025 - Present",
    description: [
      "Worked on full-stack web development using MERN stack.",
      "Built and maintained features for internal tools.",
      "Collaborated in agile environment with team.",
      "Improved website performance and implemented responsive UI.",
    ],
    companyLink: "https://www.blustock.com", // optional
  },
];


export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: 'Csjm University, Kanpur',
    date: 'July 2023 - July 2027',
    grade: '8.58 CPI',
    desc: "Bachelor's degree in Computer Science (B.Tech). Learned DSA, Web Dev, DBMS, and worked on practical projects.",
    degree: 'Bachelor of Technology - BTECH (Computer Science)',
  },
  {
    id: 2,
    img: Logo,
    school: 'Shivam Public School, Mirzapur',
    date: 'Apr 2020 - Mar 2021',
    grade: '84.4%',
    desc: 'Class 12 with PCM and Computer Science under CBSE board.',
    degree: 'CBSE (XII)',
  },
  {
    id: 3,
    img: vpsLogo,
    school: 'Shivam Public School, Mirzapur',
    date: 'Apr 2018 - Mar 2019',
    grade: '85.4%',
    desc: 'Class 10 with Science and Computer under CBSE board.',
    degree: 'CBSE (X)',
  },
];

export const projects = [
  {
    id: 0,
    title: 'GitHub Profile Detective',
    description: 'Search and display GitHub profile info with stats and repos.',
    image: githubdetLogo,
    tags: ['React JS', 'API', 'JavaScript'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET', // If live version exists, replace with your Netlify/Vercel link
  },
  {
    id: 1,
    title: 'CS Prep',
    description: 'Quiz platform for GATE/UGC NET practice with analytics.',
    image: csprepLogo,
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 2,
    title: 'Movie Recommendation App',
    description: 'Get movie suggestions by genre and trends.',
    image: movierecLogo,
    tags: ['React JS', 'API'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 3,
    title: 'Email Validator NPM Package',
    description: 'NPM tool to validate email formats in web forms.',
    image: npmLogo,
    tags: ['React JS', 'Node.js', 'NPM'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 4,
    title: 'Task Reminder Chrome Extension Tool',
    description: 'JS-based extension to manage and alert tasks.',
    image: taskremLogo,
    tags: ['JavaScript', 'Chrome Extension'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'chrome://extensions', // Placeholder
  },
  {
    id: 5,
    title: 'Webverse Digital',
    description: 'Official digital agency website with animations.',
    image: webverLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 6,
    title: 'Coding Master',
    description: 'Ed-tech site for blogs, notes, interviews, and paid content.',
    image: cmLogo,
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 7,
    title: 'Image Search App',
    description: 'Find and download high-quality images via API.',
    image: imagesearchLogo,
    tags: ['React JS', 'API'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
  {
    id: 8,
    title: 'Image Background Remover',
    description: 'Remove image backgrounds and get transparent outputs.',
    image: removebgLogo,
    tags: ['React JS', 'API'],
    github: 'https://github.com/VISHAL55UIET',
    webapp: 'https://github.com/VISHAL55UIET',
  },
];

// Add your personal social links
export const socialLinks = {
  github: 'https://github.com/VISHAL55UIET',
  linkedin: 'https://www.linkedin.com/in/vishal-singh-5b052828a/',
};