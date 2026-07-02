// ============================================================================
// All site content lives here. Edit these objects to update the portfolio —
// no need to touch any component code.
// ============================================================================

export const profile = {
  name: "Gopika J",
  initials: "GJ",
  role: "Computer Science Engineering Student",
  tagline: "Computer Science Engineering Student | Software Developer",
  email: "gopikajayaraman17@gmail.com",
  phone: "+91 8122448261",
  location: "Coimbatore, TN",
  linkedin: "https://linkedin.com/in/gopika-jayaraman-63aaa4411",
  github: "https://github.com/Gopika1705",
  resumeUrl: "/resume.pdf", 
};

// Each entry below corresponds to one clickable node on the dashboard.
// `id` must be unique — it's used to open the matching detail panel.
// `accent` is a Tailwind color token from the accent palette in tailwind.config.js.
export const sections = [
  {
    id: "projects",
    label: "Projects",
    teaser: "3 builds spanning IoT, ML and full-stack web",
    accent: "green",
    layout: "solo-offset-right",
  },
  {
    id: "contact",
    label: "Contact",
    teaser: "Email, phone, links — get in touch",
    accent: "cyan",
    layout: "duo",
  },
  {
    id: "skills",
    label: "Skills",
    teaser: "Languages, tools and soft skills",
    accent: "purple",
    layout: "duo",
  },
  {
    id: "profile",
    label: "Profile",
    teaser: "Objective & personal details",
    accent: "blue",
    layout: "solo-thin",
  },
  {
    id: "education",
    label: "Education",
    teaser: "B.E. CSE — Dr.N.G.P. Institute of Technology",
    accent: "pink",
    layout: "duo",
  },
  {
    id: "internship",
    label: "Internship",
    teaser: "Ether Infotech — Full Stack training",
    accent: "teal",
    layout: "duo",
  },
  {
    id: "certifications",
    label: "Certifications",
    teaser: "NPTEL, Coursera & LinkedIn Learning",
    accent: "amber",
    layout: "solo-offset-left",
  },
];

export const objective =
  "A highly motivated and dedicated individual seeking a challenging position in software development where I can apply my technical skills, contribute to innovative projects, and continuously enhance my knowledge while growing professionally.";

export const personalDetails = [
  { k: "Date of Birth", v: "17.12.2005" },
  { k: "Languages", v: "English, Tamil" },
  { k: "Address", v: "23 Amman Nagar, Saravanampatti, Coimbatore - 35" },
];

export const education = [
  {
    degree: "B.E. — Computer Science Engineering",
    school: "Dr.N.G.P. Institute of Technology",
    score: "8.3 CGPA",
    year: "2023 – 2027",
  },
  {
    degree: "HSC",
    school: "Sree Dharmasastha Matric Hr. Sec. School",
    score: "90%",
    year: "2022 – 2023",
  },
  {
    degree: "SSLC",
    school: "Sree Dharmasastha Matric Hr. Sec. School",
    score: "Pass",
    year: "2020 – 2021",
  },
];

export const projects = [
  {
    title: "Border Alert System Using GPS & RF Communication",
    desc: "Designed and developed a border alert system using GPS, RF communication, NodeMCU and a GSM module to track movement and trigger alerts when predefined boundaries are crossed. Implemented real-time geofencing, data transmission and remote alerting to enhance security and monitoring efficiency.",
    tech: ["GPS", "RF Communication", "NodeMCU", "GSM Module"],
    links: [],
  },
  {
    title: "Stress Free Life",
    desc: "AI-powered mental health monitoring system for real-time stress detection using smartwatch data and machine learning. Uses heart rate, sleep and activity data for continuous tracking, with personalized relaxation tips, stress alerts and wellness recommendations to support proactive mental health management.",
    tech: ["Machine Learning", "Smartwatch Data", "Python"],
    links: [],
  },
  {
    title: "Decentralized Environmental Monitoring for Smart Cities",
    desc: "A web-based environmental monitoring system for smart cities tracking real-time air, noise and water pollution using API-based data sources. Includes interactive dashboards, pollution maps and clean-route navigation, built with a responsive, user-friendly interface.",
    tech: ["API Integration", "Dashboards", "Data Visualization"],
    links: [],
  },
];

export const skillGroups = [
  { label: "Programming", tags: ["Java", "C", "Python", "Data Structures & Algorithms", "SQL", "HTML", "CSS", "JavaScript", "React", "MongoDB", "MySQL", "Git", "Github", "SpringBoot"] },
  { label: "Soft Skills", tags: ["Time Management", "Adaptability", "Rapid Learner"] },
];

export const internship = {
  company: "Ether Infotech",
  duration: "15-Day Full Stack Development Program",
  desc: "Completed a 15-day Full Stack Development training program with practical exposure to frontend and backend technologies. Acquired hands-on experience in HTML, CSS, JavaScript, Node.js, Express.js and database connectivity, and built responsive web applications.",
  tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  keyProject: {
    title: "Student Management System",
    desc: "A web-based application for managing student records with full CRUD operations and secure user authentication, built with Node.js, Express.js and MongoDB, with a responsive interface for seamless interaction.",
    tech: ["Node.js", "Express.js", "MongoDB"],
  },
};

export const certifications = [
  { issuer: "NPTEL", items: ["Cloud Computing", "Responsible and Safe AI Systems", "Internet of Things"] },
  { issuer: "Coursera", items: ["Advanced Statistical Analysis and Tools"] },
  { issuer: "LinkedIn Learning", items: ["HTML Essential Training", "Learning SQL Programming"] },
];
