/**
 * Portfolio data — all content sourced from rahulsrivastava-dev.netlify.app
 * Structured for easy maintenance and component consumption.
 */

export const personal = {
  name: "Rahul Srivastava",
  title: "Software Engineer",
  tagline: "Full Stack Developer",
  summary:
    "A highly skilled software engineer with 3+ years of experience specializing in React, Next.js, Node.js, Django, MongoDB, and PostgreSQL. Known for adaptability, attention to detail, and crafting innovative, scalable, and user-focused solutions.",
  email: "srivastavar433@gmail.com",
  github: "https://github.com/rahulsrivastava1",
  linkedin: "https://www.linkedin.com/in/rahulsriv/",
  resume: "https://drive.google.com/drive/folders/1cYVTCnDEiNvAqv0YTybq7L2WnuneLp8y?usp=drive_link",
};

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    tech: "Django, FastAPI & AWS",
    company: "Nat Habit",
    duration: "February 2024 – Present",
    type: "Full-time",
    bullets: [
      "Enhanced dashboard performance by optimizing API response times and improving UI/UX using React and Next.js.",
      "Developed and maintained scalable backend services with Django and PostgreSQL.",
      "Collaborated on D2C websites to improve customer engagement and conversion rates.",
      "Led initiatives to refine user interfaces for better accessibility and responsiveness.",
      "Resolved critical technical issues like API timeouts, increasing overall application reliability.",
    ],
  },
  {
    id: 2,
    role: "Associate Developer",
    tech: "React & Node.js",
    company: "Celebal Technologies",
    duration: "March 2023 – December 2023",
    type: "Full-time",
    bullets: [
      "Developed enterprise web applications using React, Node.js, and related modern technologies.",
      "Collaborated with cross-functional teams to deliver high-quality products on schedule.",
      "Implemented responsive designs and ensured cross-browser compatibility across all projects.",
      "Developed CoE Landing Zone and Parikshak projects for the Databricks department.",
      "Built the CoE Report project leveraging the D3 library for rich data visualizations including pie charts and bar graphs.",
    ],
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "JavaScript", level: 93 },
    { name: "TypeScript", level: 75 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Figma", level: 70 },
    { name: "Material UI", level: 85 },
    { name: "ShadCN", level: 85 },
  ],
  backend: [
    { name: "Django", level: 88 },
    { name: "FastAPI", level: 80 },
    { name: "Node.js", level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "SQL", level: 85 },
    { name: "Temporal", level: 70 },
  ],
  cloud: [
    { name: "Azure", level: 60 },
    { name: "AWS", level: 68 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 85 },
  ],
  tools: [
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
    { name: "Cursor", level: 95 },
    { name: "Linear", level: 80 },
    { name: "D3.js", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AirBnb Clone",
    description:
      "A full-featured web-based platform for searching and booking accommodations. Supports property listing for authenticated dealers with secure authentication, image uploads, and real-time search.",
    longDescription:
      "A comprehensive accommodation booking platform built with the MERN stack. Features include property listings for authenticated dealers, secure user authentication with JWT, image upload with cloud storage, real-time search with filters, and a clean responsive UI for both guests and hosts.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "Full Stack",
    color: "#6366f1",
    links: {
      github: "https://github.com/rahulsrivastava1?tab=repositories&q=airbnb&type=&language=&sort=",
      live: "https://rahul-airbnb-clone.netlify.app/",
    },
  },
  {
    id: 2,
    title: "Memories",
    description:
      "A social media application for creating and sharing memories. Features timestamps, tags, comments, search, and personalized post suggestions.",
    longDescription:
      "A full-stack social memory sharing platform where users can post, like, comment, and search memories. Built with React and Material UI on the frontend with Node.js and MongoDB on the backend. Includes Google OAuth, rich text editing, and personalized post recommendation system.",
    tech: ["React", "Node.js", "MongoDB", "Material UI"],
    category: "Full Stack",
    color: "#6366f1",
    links: {
      github: "https://github.com/rahulsrivastava1?tab=repositories&q=memories&type=&language=&sort=",
    },
  },
  {
    id: 3,
    title: "Ecommerce",
    description:
      "A full-featured e-commerce platform for Electronics and Books with product filtering, dynamic cart management, price breakdowns, and a complete user authentication flow.",
    longDescription:
      "A production-ready e-commerce web application built with React and Material UI, covering two product verticals — Electronics (Laptops, Keyboards, Mice) and Books (Sci-Fi, Romance, Action). Users can browse categorized product listings, filter by brand and customer ratings, and sort by price. Each product page displays detailed descriptions, stock status, and service badges like free shipping and 30-day replacement. The shopping cart supports real-time quantity updates, item removal, and an itemised price breakdown including discounts and delivery charges. The app also includes a complete authentication system with login (with Remember Me), sign-up with form validation, and a forgot-password flow. Fully responsive across all screen sizes and deployed on Netlify.",
    tech: ["React", "Vite", "Material UI", "CSS"],
    category: "Frontend",
    color: "#f59e0b",
    links: {
      github: "https://github.com/rahulsrivastava1/Ecommerce",
      live: "https://rs-ecommerce.netlify.app/",
    },
  },
  {
    id: 4,
    title: "News App",
    description:
      "A real-time news aggregation application fetching live data from the News API across categories like sports, technology, business, and health.",
    longDescription:
      "A responsive real-time news application that integrates with the News API to deliver categorized news articles. Features include category filtering (Sports, Technology, Health, Business), infinite scroll, dark mode, article preview cards, and a smooth reading experience optimized for all device sizes.",
    tech: ["React", "Bootstrap", "News API", "REST APIs"],
    category: "Frontend",
    color: "#f59e0b",
    links: {
      github: "https://github.com/rahulsrivastava1/News-App",
    },
  },
];

export const achievements = [
  {
    id: 1,
    title: "GeeksforGeeks Article",
    description:
      '"Simple and Concise Git Commands That Every Software Developer Should Know" — Featured article on GeeksforGeeks, helping developers worldwide master Git workflows.',
    platform: "GeeksforGeeks",
    icon: "pen",
    link: "https://www.geeksforgeeks.org/git/simple-and-concise-git-commands-that-every-software-developer-should-know/",
    color: "#22d3ee",
  },
  {
    id: 2,
    title: "Technical Blog — Medium",
    description:
      '"Deploying MERN Stack Application" — A comprehensive guide on deploying full-stack applications, covering environment setup, cloud configuration, and production best practices.',
    platform: "Medium",
    icon: "book",
    link: "https://medium.com/@srivastavar433/deploying-mern-stack-application-70539a7ac397",
    color: "#6366f1",
  },
  {
    id: 3,
    title: "Technical Blog — Medium",
    description:
      '"Deploying React Application on GitHub Pages" — Step-by-step article helping developers publish React projects with GitHub Pages, CI/CD integration, and custom domains.',
    platform: "Medium",
    icon: "book",
    link: "https://medium.com/@srivastavar433/deploying-react-app-on-github-ed7cb3993f41",
    color: "#6366f1",
  },
  {
    id: 4,
    title: "Technical Blog - Medium",
    description:
      '"Scaling from 1 User to 1M Users" — A practical guide covering the architectural decisions and engineering strategies needed to scale a web application, from load balancing and caching to database sharding and CDN integration.',
    platform: "Medium",
    icon: "book",
    link: "https://medium.com/@srivastavar433/scaling-from-1-user-to-1m-users-ddeb8d9bf8db",
    color: "#6366f1",
  },
];
