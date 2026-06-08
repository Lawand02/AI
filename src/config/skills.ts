export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "languages",
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "VHDL", level: 90 },
    ],
  },
  {
    id: "frontend",
    label: "frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "backend",
    skills: [
      { name: "Laravel", level: 80 },
      { name: "Django", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    id: "databases",
    label: "databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    id: "devops",
    label: "devops",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    id: "hardware",
    label: "hardware",
    skills: [
      { name: "Arduino", level: 85 },
      { name: "Raspberry Pi", level: 75 },
      { name: "Altium", level: 70 },
      { name: "Digital Logic", level: 90 },
    ],
  },
  {
    id: "ai",
    label: "ai",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "OpenCV", level: 75 },
    ],
  },
  {
    id: "design",
    label: "design",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "Illustrator", level: 70 },
      { name: "Adobe XD", level: 75 },
    ],
  },
];
