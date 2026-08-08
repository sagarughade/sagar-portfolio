export interface Service {
  index: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Backend Development',
    description:
      'Application logic, business rules and services built with Laravel and Node.js — structured to stay maintainable as they grow.',
  },
  {
    index: '02',
    title: 'API & Integrations',
    description:
      'REST APIs, third-party integrations and CRM connections that let separate systems work together reliably.',
  },
  {
    index: '03',
    title: 'AI & Voice Systems',
    description:
      'Voice AI and telephony integrations for real-time, AI-driven conversational experiences.',
  },
  {
    index: '04',
    title: 'Full Stack Development',
    description:
      'End-to-end delivery — from database design and APIs to React interfaces and dashboards.',
  },
];
