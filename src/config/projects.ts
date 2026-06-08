export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  featured: boolean;
  year: number;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "spider-robot",
    name: "Spider-Robot",
    description:
      "A hexapod robot using Arduino with obstacle avoidance, remote control, and sensor integration.",
    image: "spider-robot.jpg",
    longDescription:
      "This code repository contains the Arduino embedded codes for a hexapod robot. It uses Arduino and multiple sensors to complete the robot's walking, obstacle avoidance, remote control and other functions. The robot features a 6-legged design for stable locomotion across various terrains.",
    technologies: ["C++", "Arduino", "Embedded"],
    category: ["hardware", "embedded"],
    githubUrl: "https://github.com/Lawand02/Spider-Robot",
    stars: 3,
    forks: 0,
    featured: true,
    year: 2024,
  },
  {
    id: "rv32i-cpu",
    name: "RV32I-Pipelined-CPU",
    description:
      "A synthesizable, five-stage, pipelined 32-bit RISC-V processor in VHDL.",
    longDescription:
      "A complete implementation of a RISC-V RV32I processor with a 5-stage pipeline (Fetch, Decode, Execute, Memory, Writeback). Includes hazard detection and forwarding units. Designed to be synthesizable for FPGA implementation.",
    technologies: ["VHDL", "RISC-V", "FPGA"],
    category: ["hardware", "vhdl"],
    githubUrl: "https://github.com/Lawand02/RV32I-Pipelined-CPU",
    stars: 0,
    forks: 0,
    featured: true,
    year: 2024,
  },
  {
    id: "face-detection",
    name: "Face Detection",
    description:
      "Python-based face detection system using computer vision techniques.",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    category: ["ai", "python"],
    githubUrl: "https://github.com/Lawand02/face-detection",
    stars: 2,
    forks: 1,
    featured: true,
    year: 2023,
  },
  {
    id: "school-management",
    name: "School-Management-System",
    description:
      "A comprehensive school management web application for managing students, staff, and academic records.",
    image: "school-management.png",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    category: ["web", "backend"],
    githubUrl: "https://github.com/Lawand02/School-Management-System",
    stars: 2,
    forks: 0,
    featured: true,
    year: 2023,
  },
  {
    id: "neighborhood-image",
    name: "NeiborhoodImageProcessing",
    description:
      "Neighborhood-based image processing algorithms implemented in VHDL for FPGA acceleration.",
    technologies: ["VHDL", "FPGA", "Image Processing"],
    category: ["hardware", "vhdl"],
    githubUrl: "https://github.com/Lawand02/NeiborhoodImageProcessing",
    stars: 0,
    forks: 0,
    featured: true,
    year: 2025,
  },
  {
    id: "lawand-ai",
    name: "Lawand-AI",
    description:
      "Previous portfolio website built with Next.js and TypeScript.",
    technologies: ["TypeScript", "Next.js", "React"],
    category: ["web", "frontend"],
    githubUrl: "https://github.com/Lawand02/Lawand-AI",
    liveUrl: "https://lawand02.github.io/Lawand-AI/",
    stars: 0,
    forks: 0,
    featured: false,
    year: 2025,
  },
  {
    id: "install-laravel",
    name: "Install-Laravel-Script",
    description:
      "Shell script for automating Laravel framework installation on Linux systems.",
    technologies: ["Shell", "Laravel", "Linux"],
    category: ["devops", "backend"],
    githubUrl: "https://github.com/Lawand02/Install-Laravel-Script",
    stars: 1,
    forks: 0,
    featured: false,
    year: 2022,
  },
  {
    id: "altium-projects",
    name: "Altium-Projects",
    description:
      "PCB design projects created with Altium Designer for various electronic circuits.",
    longDescription:
      "A collection of PCB design projects created with Altium Designer. Includes schematic capture, PCB layout, and 3D modeling of various electronic circuits for different applications.",
    technologies: ["Altium", "PCB Design", "Electronics"],
    category: ["hardware", "design"],
    githubUrl: "https://github.com/Lawand02/Altium-Projects",
    stars: 0,
    forks: 0,
    featured: true,
    year: 2024,
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "hardware", label: "Hardware" },
  { id: "vhdl", label: "VHDL" },
  { id: "ai", label: "AI/ML" },
  { id: "embedded", label: "Embedded" },
  { id: "python", label: "Python" },
];
