export interface Achievement {
  title: string;
  description: string;
  year: string;
  type: "certification" | "award" | "milestone";
  credentialUrl?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Top Contributor - Face Detection",
    description:
      "Python face detection project with 2 stars and community engagement.",
    year: "2023",
    type: "milestone",
    credentialUrl: "https://github.com/Lawand02/face-detection",
  },
  {
    title: "Spider Robot Development",
    description:
      "Designed and programmed a hexapod robot with Arduino, featuring walking, obstacle avoidance, and remote control capabilities.",
    year: "2024",
    type: "milestone",
    credentialUrl: "https://github.com/Lawand02/Spider-Robot",
  },
  {
    title: "RISC-V CPU Design",
    description:
      "Implemented a synthesizable 5-stage pipelined RISC-V RV32I processor in VHDL.",
    year: "2024",
    type: "milestone",
    credentialUrl: "https://github.com/Lawand02/RV32I-Pipelined-CPU",
  },
  {
    title: "Computer Architecture",
    description:
      "Specialized in computer architecture with focus on digital logic design and embedded systems.",
    year: "2022",
    type: "certification",
  },
  {
    title: "School Management System",
    description:
      "Built a full-stack school management system with Laravel, achieving 2 stars.",
    year: "2023",
    type: "milestone",
    credentialUrl: "https://github.com/Lawand02/School-Management-System",
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  type: "professional" | "freelance" | "opensource";
}

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Acornassociated",
    companyUrl: "https://acornassociated.org/",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Working as a Software Engineer for Acornassociated, an Engineering and Logistics NGO. Building and maintaining web applications, handling digital logic design, and full-stack development projects.",
    type: "professional" as const,
  },
  {
    title: "Embedded Systems Developer",
    company: "Freelance",
    location: "Qamishli",
    period: "2023 - Present",
    description:
      "Developing embedded systems solutions using Arduino, Raspberry Pi, and VHDL for various client projects.",
    type: "freelance" as const,
  },
  {
    title: "Full-Stack Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Building modern web applications using React, Laravel, Django, and other technologies for clients worldwide.",
    type: "freelance" as const,
  },
  {
    title: "Open Source Contributor",
    company: "GitHub",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Contributing to open source projects. Maintaining 10+ public repositories across VHDL, Python, JavaScript, and more.",
    type: "opensource" as const,
  },
];
