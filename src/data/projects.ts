export interface Project {
  id: string;
  index: string;
  name: string;
  description: string;
  detail: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 'raiyahub',
    index: '01',
    name: 'RaiyaHub',
    description:
      'CRM and business management platform with client management, integrations, authentication, dashboards and API-driven workflows.',
    detail:
      'Built around a Laravel backend, with modular authentication, role-based dashboards and a REST API layer that powers integrations with external business tools.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/your-username/raiyahub',
    demo: 'https://your-demo-url.example/raiyahub',
  },
  {
    id: 'melody-voice-platform',
    index: '02',
    name: 'Melody Voice Platform',
    description:
      'Voice and telephony platform involving AI agents, campaign management, calling workflows, provider integrations and cloud services.',
    detail:
      'A Node.js and TypeScript service layer coordinating telephony providers and AI voice agents, deployed on Azure with campaign and call-flow management.',
    technologies: ['Node.js', 'TypeScript', 'Azure', 'Voice AI', 'Telephony APIs'],
    github: 'https://github.com/your-username/melody-voice-platform',
    demo: 'https://your-demo-url.example/melody',
  },
  {
    id: 'ai-voice-assistant',
    index: '03',
    name: 'AI Voice Assistant',
    description:
      'AI-powered conversational voice system integrating real-time voice interactions, AI models and telephony infrastructure.',
    detail:
      'Real-time voice pipeline connecting telephony infrastructure to AI models, built for low-latency conversational interactions on Azure.',
    technologies: ['Node.js', 'TypeScript', 'AI APIs', 'Telephony', 'Azure'],
    github: 'https://github.com/your-username/ai-voice-assistant',
    demo: 'https://your-demo-url.example/ai-voice-assistant',
  },
];
