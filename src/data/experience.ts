export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
}

// Placeholder content — replace every bracketed value with your real details.
export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: '[Add Role]',
    company: '[Add Company Name]',
    duration: '[Add Duration]',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    description: '[Add Description — a short summary of the team, product and your part in it.]',
    responsibilities: [
      '[Add responsibility — e.g. designed and built REST APIs for X]',
      '[Add responsibility]',
      '[Add responsibility]',
    ],
  },
  {
    id: 'exp-2',
    role: '[Add Role]',
    company: '[Add Company Name]',
    duration: '[Add Duration]',
    technologies: ['Node.js', 'TypeScript', 'Azure'],
    description: '[Add Description]',
    responsibilities: [
      '[Add responsibility]',
      '[Add responsibility]',
      '[Add responsibility]',
    ],
  },
  {
    id: 'exp-3',
    role: '[Add Role]',
    company: '[Add Company Name]',
    duration: '[Add Duration]',
    technologies: ['React', 'REST APIs', 'CRM Integrations'],
    description: '[Add Description]',
    responsibilities: [
      '[Add responsibility]',
      '[Add responsibility]',
    ],
  },
];
