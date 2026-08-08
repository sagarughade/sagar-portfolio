export interface Skill {
  name: string;
  level: 'core' | 'working';
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces that stay fast and predictable as products grow.',
    skills: [
      { name: 'React', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'TypeScript', level: 'core' },
      { name: 'HTML', level: 'core' },
      { name: 'CSS', level: 'core' },
      { name: 'Tailwind CSS', level: 'core' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Application logic, services and APIs that hold up under real usage.',
    skills: [
      { name: 'PHP', level: 'core' },
      { name: 'Laravel', level: 'core' },
      { name: 'Node.js', level: 'core' },
      { name: 'REST APIs', level: 'core' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Schema design and queries built for correctness and scale.',
    skills: [
      { name: 'MySQL', level: 'core' },
      { name: 'SQL', level: 'core' },
      { name: 'Database Design', level: 'core' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    description: 'Deployment, automation and the everyday developer toolchain.',
    skills: [
      { name: 'Azure', level: 'working' },
      { name: 'Azure Functions', level: 'working' },
      { name: 'Git', level: 'core' },
      { name: 'GitHub', level: 'core' },
      { name: 'Postman', level: 'core' },
    ],
  },
  {
    id: 'ai',
    title: 'AI / Integrations',
    description: 'Connecting AI, voice and third-party systems into working products.',
    skills: [
      { name: 'AI APIs', level: 'working' },
      { name: 'Voice AI', level: 'working' },
      { name: 'Telephony APIs', level: 'working' },
      { name: 'CRM Integrations', level: 'working' },
    ],
  },
];
