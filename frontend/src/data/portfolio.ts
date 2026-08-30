import type { LucideIcon } from 'lucide-react';
import { Boxes, Code2, Database, GitBranch, Layers3, Smartphone } from 'lucide-react';

export type SkillCluster = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type ProjectStory = {
  id: string;
  title: string;
  company: string;
  type: string;
  summary: string;
  before: string;
  solution: string;
  result: string;
  stack: string[];
  highlights: string[];
  sceneLabel: string;
  scale: string;
};

export const profile = {
  name: 'Arbaan Qureshi',
  role: 'Senior Flutter Developer and Mobile Team Lead',
  location: 'Bangalore, India',
  email: 'mergeme2@gmail.com',
  phone: '+91 9164444469',
  github: 'https://github.com/arbaan-max',
  linkedin: 'https://www.linkedin.com/in/arbaan-flutter-developer/',
  experience: 'Almost 5 years',
  productionApps: '15+',
  projectFootprint: '20+',
  headline:
    'I turn product ideas into production-ready Flutter apps, backed by clean architecture, reliable APIs, and teams that can keep shipping.',
};

export const navItems = [
  { label: 'work', href: '#work' },
  { label: 'story', href: '#story' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export const skillClusters: SkillCluster[] = [
  {
    title: 'Mobile craft',
    icon: Smartphone,
    items: ['Flutter', 'Dart', 'Android and iOS', 'Performance optimization'],
  },
  {
    title: 'State and structure',
    icon: Layers3,
    items: ['BLoC / Cubit', 'Riverpod', 'Clean Architecture', 'Code quality'],
  },
  {
    title: 'Backend support',
    icon: Database,
    items: ['REST APIs', 'Firebase', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Team delivery',
    icon: GitBranch,
    items: ['Team coordination', 'Code review', 'Technical decisions', 'Agile delivery'],
  },
];

export const projectStories: ProjectStory[] = [
  {
    id: 'growon',
    title: 'GrowonTeachers and GrowonStudents',
    company: 'Cumin360',
    type: 'EdTech teacher and student apps',
    summary:
      'Two education apps that moved the teacher and student workflow online, covering attendance, homework, papers, results, parent communication, and privacy-aware student data access.',
    before:
      'Schools needed a cleaner way for students, teachers, and parents to stay connected without depending on scattered offline communication. Attendance, homework, papers, results, and parent contact all needed to live in one reliable digital flow.',
    solution:
      'At Cumin360, I worked on separate teacher and student app experiences so each role could see the right data and actions. The product direction focused on making academic updates easy to access while keeping student data privacy in mind.',
    result:
      'The apps became a foundation for a more complete online school experience: teachers could manage academic communication and students could track their own attendance, homework, papers, and results.',
    stack: ['Flutter', 'Dart', 'Role-based UX', 'Privacy-aware data', 'Education workflow'],
    highlights: ['2 apps', 'Attendance', 'Homework', 'Results', 'Parent contact'],
    sceneLabel: 'Classroom to cloud',
    scale: '2 role-focused apps',
  },
  {
    id: 'playzo',
    title: 'Playzo',
    company: 'Gloify',
    type: 'Pay and earn app',
    summary:
      'A pay-and-earn product where I learned deeply from production app work, user flows, reward logic, and the discipline needed to ship user-facing mobile experiences.',
    before:
      'The app needed to make earning flows understandable to users while keeping the product engaging, predictable, and easy to move through on mobile.',
    solution:
      'At Gloify, Playzo became a strong learning ground for mobile product thinking: how to structure screens, how to support changing product requirements, and how to keep app behavior clear for users.',
    result:
      'The project sharpened my approach to real product delivery and helped shape the way I now think about Flutter architecture, product iteration, and user-first interactions.',
    stack: ['Flutter', 'Dart', 'Mobile UX', 'Reward flows', 'Product iteration'],
    highlights: ['Pay and earn', 'User flow learning', 'Production mindset', 'Mobile UX'],
    sceneLabel: 'Tap to earn',
    scale: 'Learning-heavy production product',
  },
  {
    id: 'tingting',
    title: 'Tingting QuickCommerce Ecosystem',
    company: 'Nextaverse',
    type: 'QuickCommerce platform',
    summary:
      'One of the largest builds in my career: a QuickCommerce ecosystem covering the main customer app plus store, delivery, CRM, accounts, supervisor monitoring, and product/offer management apps.',
    before:
      'The business needed more than one customer app. Orders, delivery, stores, accounts, supervisors, product uploads, disabled products, festival offers, and live monitoring all had to work together without breaking the main shopping flow.',
    solution:
      'At Nextaverse, I worked across a connected set of QuickCommerce apps. The system supported store operations, driver and delivery flows, CRM, accounts, live order monitoring, supervisor views, and product or festival-offer changes that affected the main customer interface.',
    result:
      'This became the most complete platform-scale story in my portfolio: a multi-app operating system for QuickCommerce rather than a single isolated mobile app.',
    stack: ['Flutter', 'Dart', 'Multi-app architecture', 'CRM flows', 'Live monitoring'],
    highlights: ['12 apps', 'Store app', 'Delivery app', 'CRM', 'Live orders', 'Offers'],
    sceneLabel: 'Order to operation',
    scale: 'Almost 12 connected apps',
  },
  {
    id: 'pqube',
    title: 'Udupi App',
    company: 'Pqube',
    type: 'Full responsibility product build',
    summary:
      'An app for Udupi where I handled both backend responsibility and frontend design/build direction, though the product was not launched because of internal company reasons.',
    before:
      'The project needed one person to own the shape of the product across backend, frontend, and design execution, with enough structure to move from idea into a launchable app.',
    solution:
      'I took responsibility for both backend and frontend work, joining product behavior, app screens, and implementation decisions into one build path.',
    result:
      'The app did not launch because of internal company reasons I was not informed about, but the work is still important because it shows end-to-end ownership across frontend, backend, and product design.',
    stack: ['Flutter', 'Backend ownership', 'Frontend design', 'Product build', 'End-to-end delivery'],
    highlights: ['Udupi app', 'Backend', 'Frontend', 'Design ownership', 'Not launched'],
    sceneLabel: 'Idea to build',
    scale: 'End-to-end responsibility',
  },
  {
    id: 'people-wire',
    title: 'ThePeople Wire',
    company: 'Kaizenque',
    type: 'News app',
    summary:
      'A news application built around reading, browsing, and consuming story updates in a clean mobile-first interface.',
    before:
      'A news product has to make content discovery fast while keeping the reading experience focused and comfortable on mobile screens.',
    solution:
      'At Kaizenque, I worked on ThePeople Wire as a news app experience, focusing on the mobile structure needed for users to browse and read updates clearly.',
    result:
      'The project added another content-heavy product type to my experience, strengthening my ability to build apps beyond commerce and internal operations.',
    stack: ['Flutter', 'Dart', 'News UX', 'Content feeds', 'Mobile interface'],
    highlights: ['News app', 'Reading flow', 'Content browsing', 'Mobile-first'],
    sceneLabel: 'Story to reader',
    scale: 'Content product',
  },
  {
    id: 'onespa',
    title: 'OneSpa Management System',
    company: 'Freelance',
    type: 'Spa business management platform',
    summary:
      'A production-grade internal business management system for handling multiple spas from one app, covering onboarding, leads, entries, customers, analytics, sales, memberships, and role-based operations.',
    before:
      'The business was dealing with paper-heavy operations: misplaced records, lost papers, manual calculations, and difficulty checking what happened on a previous date.',
    solution:
      'I built the system across design, frontend, backend, server setup, and ongoing support. The app handled super admin, admin, marketing, and manager roles, plus spa onboarding, leads, entries, customers, analytics, sales, and membership workflows.',
    result:
      'The complete production-grade application was built in 10 working days, turning paper-based spa operations into searchable, role-based software with better tracking and calculation support.',
    stack: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Role-based access', 'Server setup'],
    highlights: ['10 working days', 'Multi-spa', 'Leads', 'Entries', 'Analytics', 'Roles'],
    sceneLabel: 'Paper to platform',
    scale: 'Production-grade internal platform',
  },
];

export const deliveryStats = [
  { value: profile.experience, label: 'software development experience' },
  { value: profile.productionApps, label: 'production applications across Android and iOS' },
  { value: profile.projectFootprint, label: 'apps and platform modules shaped across project ecosystems' },
  { value: '6', label: 'featured real project stories from companies and freelance work' },
];

export const focusAreas = [
  { icon: Code2, label: 'Hands-on senior engineering' },
  { icon: Boxes, label: 'Architecture and scalable feature structure' },
  { icon: Smartphone, label: 'Mobile products that feel ready for users' },
];
