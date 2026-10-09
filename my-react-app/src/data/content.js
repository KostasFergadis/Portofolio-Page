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
    "Full-stack developer with two years of production experience building e-commerce features and internal tools in PHP and JavaScript.",
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
    { label: "PHP", value: "backend" },
    { label: "JavaScript + jQuery", value: "frontend" },
    { label: "MySQL + REST APIs", value: "data" },
    { label: "Git + Bitbucket", value: "workflow" },
  ],
  total: "Full stack",
  thanks: "Thank you, come again!",
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer in Athens. Since 2024 I've worked at Sklavenitis, one of Greece's biggest supermarket chains, on PHP backends, SQL databases and JavaScript frontends. It's mostly plain PHP, with some Laravel on the e-commerce side when I started.",
    "I got into programming through games. I'm competitive and I pick up new games fast, and I think that carries over to code: learn the rules, find what works, get better quickly. But the best part was never winning. It was the moment a puzzle finally clicked after I'd been stuck on it for a day or two. Code gives me that feeling all the time, so I did General Assembly's Software Engineering Immersive and switched careers.",
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
      value: "Gaming, PC building, AI, calisthenics, music, travel",
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
      "Moved a security tool that only ran on one local machine into the internal portal, so the whole team and its users can now reach it from any company computer. Built with PHP backend classes and DataTables record views.",
      "Converted large data tables to server-side rendering and reworked the SQL queries and joins behind them, cutting page load times by several seconds.",
      "Shipped a steady stream of e-commerce features and bug fixes in PHP (some Laravel early on) and JavaScript/jQuery from Figma designs: cart calculations, product displays, address logic and checkout fixes.",
      "Got productive quickly with little hand-holding, and take full ownership of assigned work so senior developers can stay focused on their own.",
      "Work in Jira-tracked Agile sprints with code review through Bitbucket pull requests, running the project locally in Docker.",
    ],
    stack: ["PHP", "JavaScript", "jQuery", "MySQL", "Git", "Bitbucket", "some Laravel"],
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
      items: ["PHP", "Node.js", "Express", "Python", "Django", "REST APIs", "Laravel"],
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
      build: { value: "17", unit: "days · solo" },
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
      build: { value: "13", unit: "days · team of 3" },
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
      build: { value: "API", unit: "front end only" },
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
      build: { value: "13", unit: "days · first build" },
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

// Statement headings shown above each section's content.
export const leads = {
  about: "I build the feature, then the queries behind it.",
  experience: "Two years shipping to a national retailer.",
  skills: "What I use every day, and what I know around it.",
  projects: "Four builds, each under three weeks.",
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
