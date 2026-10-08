// All site copy lives here. Update this file to change what the portfolio says;
// the components only handle layout.

import tetrisImg from "../assets/projects/tetris.jpg";
import gameOfQuotesImg from "../assets/projects/game-of-quotes.jpg";
import foodsParadiseImg from "../assets/projects/foods-paradise.jpg";
import gamersAssembleImg from "../assets/projects/gamers-assemble.jpg";

const GITHUB_USER = "KostasFergadis";
const repo = (name) => `https://github.com/${GITHUB_USER}/${name}`;

export const profile = {
  name: "Kostas Fergadis",
  role: "Software Engineer",
  location: "Athens, Greece",
  headline:
    "Full-stack developer with two years of production experience building e-commerce features and internal tools in PHP, Laravel and JavaScript.",
  email: "kostasfergadis74@gmail.com",
  links: {
    github: `https://github.com/${GITHUB_USER}`,
    linkedin: "https://www.linkedin.com/in/kostas-fergadis/",
  },
};

// The itemised "receipt" in the hero. Rows read like till lines: label left, value right.
export const receipt = {
  roles: [
    { label: "Sklavenitis", value: "2024 – now" },
    { label: "General Assembly", value: "2023" },
  ],
  items: [
    { label: "PHP + Laravel", value: "backend" },
    { label: "JavaScript + jQuery", value: "frontend" },
    { label: "MySQL + REST APIs", value: "data" },
    { label: "Git + Bitbucket", value: "workflow" },
  ],
  total: "Full stack",
};

export const about = {
  paragraphs: [
    "I'm a full-stack software engineer based in Athens. Since 2024 I've been building and maintaining production web applications at Sklavenitis, one of Greece's largest supermarket chains — working across Laravel backends, SQL databases and JavaScript frontends.",
    "I came to software from a background in game art and animation, which still shapes how I think about interfaces. I made the switch through General Assembly's Software Engineering Immersive, and I enjoy the whole stack: turning a Figma design into a working feature, then making the queries and APIs behind it fast and reliable.",
  ],
  facts: [
    { label: "Based in", value: "Athens, Greece" },
    { label: "Education", value: "BA Game Art & Animation, SAE Institute" },
    {
      label: "Languages",
      value: "Greek (native), English (professional), French, Japanese",
    },
    {
      label: "Off-screen",
      value: "PC building, AI, calisthenics, music, travel",
    },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Sklavenitis",
    location: "Athens",
    period: "Sep 2024 — Present",
    highlights: [
      "Build and maintain e-commerce features in Laravel and JavaScript/jQuery from Figma designs — cart calculations, product displays, address logic and checkout fixes.",
      "Integrated a legacy security system into the internal portal using PHP backend classes and DataTables-driven record views.",
      "Write secure CRUD operations and optimise SQL queries and joins behind REST endpoints.",
      "Work in Jira-tracked Agile sprints with code review through Bitbucket pull requests, running the project locally in Docker.",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "jQuery", "MySQL", "Git", "Bitbucket"],
  },
  {
    role: "Software Engineering Immersive",
    company: "General Assembly",
    location: "London (remote)",
    period: "Nov 2022 — May 2023",
    highlights: [
      "Full-time, project-based course covering JavaScript, React, Node/Express, MongoDB, Python and Django.",
      "Shipped four full projects, solo and in a team — see Projects below.",
    ],
    stack: ["JavaScript", "React", "Node.js", "MongoDB", "Python", "Django"],
  },
];

// Skills listed in `core` are the ones I use daily and get highlighted.
export const skills = {
  core: [
    "PHP",
    "JavaScript",
    "jQuery",
    "HTML",
    "CSS",
    "Bootstrap",
    "DataTables",
    "REST APIs",
    "MySQL",
    "phpMyAdmin",
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "Docker",
  ],
  groups: [
    {
      title: "Backend",
      items: ["PHP", "Laravel", "Node.js", "Express", "Python", "Django", "REST APIs"],
    },
    {
      title: "Frontend",
      items: ["JavaScript", "jQuery", "React", "HTML", "CSS", "Bootstrap", "DataTables"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "phpMyAdmin"],
    },
    {
      title: "Tools",
      items: ["Git", "Bitbucket", "GitHub", "Jira", "Docker", "Postman", "Figma"],
    },
  ],
};

export const projects = {
  intro:
    "Built during General Assembly. My work at Sklavenitis is proprietary, so these are where you can read my code.",
  items: [
    {
      title: "Gamers Assemble",
      image: gamersAssembleImg,
      description:
        "A platform for gamers to form groups around multiplayer titles, with profiles, group chat, ratings and moderation tools for group owners. Solo project, 17 days.",
      note: "Demo login: user@gmail.com / userPassword",
      stack: ["Django", "React", "PostgreSQL", "Python"],
      links: [
        { label: "Live site", href: "https://gamers-assemble.netlify.app/" },
        { label: "Frontend code", href: repo("Project-4-GamersAssemble_Frontend") },
        { label: "Backend code", href: repo("Project-4-GamersAssemble_Backend") },
      ],
    },
    {
      title: "Foods Paradise",
      image: foodsParadiseImg,
      description:
        "Discover dishes by country, save them to a personal list and leave reviews. Team of three, 13 days — I built the My List page and helped deliver reviews.",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      links: [
        { label: "Live site", href: "https://foods-paradise.netlify.app/" },
        { label: "Code", href: repo("Project-3-FoodsParadise") },
      ],
    },
    {
      title: "Game of Quotes",
      image: gameOfQuotesImg,
      description:
        "Search Game of Thrones characters and browse their notable quotes, powered by a public REST API.",
      stack: ["React", "Axios", "Sass"],
      links: [
        { label: "Live site", href: "https://game-of-quotes.netlify.app/" },
        { label: "Code", href: repo("Project-2-GameofQuotes") },
      ],
    },
    {
      title: "Tetris",
      image: tetrisImg,
      description:
        "A from-scratch Tetris clone with rotation, line clearing, scoring and three speed levels. My first project, built in 13 days.",
      stack: ["JavaScript", "HTML", "CSS"],
      links: [
        { label: "Live site", href: `https://${GITHUB_USER.toLowerCase()}.github.io/Project-1-Tetris/` },
        { label: "Code", href: repo("Project-1-Tetris") },
      ],
    },
  ],
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
