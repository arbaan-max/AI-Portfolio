import type { LucideIcon } from 'lucide-react';
import { Boxes, Code2, Database, GitBranch, Globe2, Layers3, MonitorSmartphone, PenTool } from 'lucide-react';

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
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  highlights: string[];
  sceneLabel: string;
  scale: string;
  storyBeats: {
    title: string;
    body: string;
  }[];
};

export type WebProject = {
  id: string;
  name: string;
  kind: string;
  origin: string;
  market: string;
  url: string;
  displayUrl: string;
  summary: string;
  features: string[];
  tags: string[];
  image: string;
  imageFull: string;
  note?: string;
  theme: { bg: string; fg: string; accent: string };
};

export const profile = {
  name: 'Arbaan Qureshi',
  role: 'Product Engineer · Apps, Web and Platforms',
  company: 'VirtuProse',
  location: 'Bangalore, India',
  email: 'mergeme2@gmail.com',
  phone: '+91 9164444469',
  github: 'https://github.com/arbaan-max',
  linkedin: 'https://www.linkedin.com/in/arbaan-flutter-developer/',
  experience: 'Almost 5 years',
  headline:
    'Product engineer with almost five years across Flutter apps, web platforms, ERP software and backend APIs, for businesses in India, Kuwait and Saudi Arabia.',
  // Words wrapped in *asterisks* are highlighted.
  story:
    "I'm Arbaan, a product engineer from Bangalore. I started in *Flutter,* shipping apps for schools, newsrooms and a *twelve-app* quick-commerce operation. Today at *VirtuProse* I build the web side too: storefronts, editorial sites and *ERP* *software* that businesses in Kuwait, Saudi Arabia and India open every working day.",
};

export const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Web', href: '#work' },
  { label: 'Apps', href: '#apps' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
];

export const marqueeRows = [
  ['Flutter', 'Next.js', 'React', 'Node.js', 'TypeScript', 'Firebase', 'MongoDB'],
  ['Mobile apps', 'E-commerce', 'ERP systems', 'Marketplaces', 'Dashboards', 'Arabic + English'],
];

export const skillClusters: SkillCluster[] = [
  {
    title: 'Cross-platform apps',
    icon: Boxes,
    items: ['Flutter', 'Dart', 'Android', 'iOS', 'Windows', 'macOS', 'TV apps'],
  },
  {
    title: 'Web platforms',
    icon: Globe2,
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'E-commerce', 'ERP dashboards'],
  },
  {
    title: 'Interface craft',
    icon: PenTool,
    items: ['Landing pages', 'Admin panels', 'Responsive UI', 'Arabic / RTL layouts', 'Motion and interaction'],
  },
  {
    title: 'Architecture and state',
    icon: Layers3,
    items: ['BLoC / Cubit', 'Riverpod', 'Clean Architecture', 'Code quality'],
  },
  {
    title: 'Backend and systems',
    icon: Database,
    items: ['REST APIs', 'Firebase', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Team delivery',
    icon: GitBranch,
    items: ['Team coordination', 'Code review', 'Technical decisions', 'Agile delivery'],
  },
];

export const webProjects: WebProject[] = [
  {
    id: 'trapped-inn',
    name: 'Trapped Inn',
    kind: 'Escape-room venue site',
    origin: 'Built at VirtuProse',
    market: 'Salmiya, Kuwait',
    url: 'https://trapped-inn-seven.vercel.app/',
    displayUrl: 'trapped-inn-seven.vercel.app',
    summary:
      'Seven escape-room stories inside one mystery hotel. The homepage is the lobby itself: visitors move through an illustrated hall and pick the door they want to open.',
    features: [
      'Interactive "choose your room" lobby hero',
      'Seven room story pages with pricing',
      'Booking handoff per room',
      'Group and team visit enquiries',
    ],
    tags: ['Next.js', 'Immersive UI', 'Booking flow'],
    image: '/projects/trapped-inn-hero.jpg',
    imageFull: '/projects/trapped-inn-full.jpg',
    theme: { bg: '#0B1017', fg: '#F4EFE6', accent: '#F0B648' },
  },
  {
    id: 'lily-eve',
    name: 'Lily Eve & Eucalyptus',
    kind: 'Two-brand flower and plant store',
    origin: 'Built at VirtuProse',
    market: 'Kuwait',
    url: 'https://lily-eve-ecommerce.vercel.app/',
    displayUrl: 'lily-eve-ecommerce.vercel.app',
    summary:
      'One storefront for two brands: Lily Eve for flowers, Eucalyptus for plants. Shoppers browse by brand or occasion, pay in KWD and track delivery across Kuwait.',
    features: [
      'Two brands sharing one catalogue and bag',
      'English and Arabic storefront',
      'Accounts, bag and order tracking',
      'KWD pricing with a free-delivery threshold',
    ],
    tags: ['Next.js', 'E-commerce', 'EN / AR'],
    image: '/projects/lily-eve-hero.jpg',
    imageFull: '/projects/lily-eve-full.jpg',
    theme: { bg: '#EDE5D8', fg: '#33302D', accent: '#6F5540' },
  },
  {
    id: 'maktob',
    name: 'Maktob Holding',
    kind: 'Private investment office',
    origin: 'Built at VirtuProse',
    market: 'Kuwait',
    url: 'https://maktob-website.vercel.app/',
    displayUrl: 'maktob-website.vercel.app',
    summary:
      'An editorial site for a private investment office. It reads like a published record of market calls, with long-form analysis on equities, commodities and the Kuwait Stock Exchange.',
    features: [
      'Bilingual publishing in English and Arabic',
      'Blog with category filtering',
      'Light and dark reading themes',
      'Opportunities and book sections',
    ],
    tags: ['Next.js', 'Editorial', 'EN / AR', 'Theming'],
    image: '/projects/maktob-hero.jpg',
    imageFull: '/projects/maktob-full.jpg',
    theme: { bg: '#0F1A2E', fg: '#F4F1EA', accent: '#D9B25F' },
  },
  {
    id: 'orvia',
    name: 'ORVIA',
    kind: 'Auto-parts ERP',
    origin: 'Built at VirtuProse',
    market: 'Saudi Arabia',
    url: 'https://erp.virtuprose.com/',
    displayUrl: 'erp.virtuprose.com',
    summary:
      'An operating system for auto-parts businesses: items, inventory, wholesale, dealers and accounting in one workspace, with Saudi VAT and ZATCA e-invoicing built in.',
    features: [
      'Arabic-first interface with English switch',
      'Company data isolated per business',
      'Role-based access by branch and warehouse',
      'VAT and ZATCA e-invoicing',
    ],
    tags: ['Next.js', 'ERP', 'Multi-tenant', 'Arabic / RTL'],
    image: '/projects/orvia-hero.jpg',
    imageFull: '/projects/orvia-hero.jpg',
    note: 'Private workspace. The product sits behind this sign-in.',
    theme: { bg: '#0D1F18', fg: '#EEF2EF', accent: '#4ADE9E' },
  },
  {
    id: 'tekrio',
    name: 'Tekrio',
    kind: 'Pre-owned device marketplace',
    origin: 'Client work',
    market: 'Karnataka, India',
    url: 'https://www.tekrio.in/',
    displayUrl: 'tekrio.in',
    summary:
      'A three-sided marketplace for used phones. Sellers describe a device, verified buyers bid through partnered stores, and the highest offer comes back with doorstep pickup.',
    features: [
      'Guided five-step selling journey',
      'Live offers from multiple verified buyers',
      'Separate retailer and buyer onboarding',
      'City-based service across seven cities',
    ],
    tags: ['Marketplace', 'Onboarding flows', 'Lead capture'],
    image: '/projects/tekrio-hero.jpg',
    imageFull: '/projects/tekrio-full.jpg',
    theme: { bg: '#18243D', fg: '#FFFFFF', accent: '#4CC2F5' },
  },
];

export const experience = [
  {
    company: 'VirtuProse',
    tag: 'Now',
    focus: 'Web platforms, e-commerce and ERP',
    work: 'Lily Eve & Eucalyptus, Maktob Holding, Trapped Inn, ORVIA',
  },
  {
    company: 'Tekrio',
    tag: 'Client',
    focus: 'Pre-owned device marketplace',
    work: 'Customer, retailer and buyer journeys on tekrio.in',
  },
  {
    company: 'Nextaverse',
    tag: 'Flutter',
    focus: 'Quick-commerce ecosystem',
    work: 'Tingting, almost 12 connected apps',
  },
  {
    company: 'Cumin360',
    tag: 'Flutter',
    focus: 'EdTech',
    work: 'GrowonTeachers and GrowonStudents',
  },
  {
    company: 'Gloify',
    tag: 'Flutter',
    focus: 'Pay-and-earn consumer app',
    work: 'Playzo',
  },
  {
    company: 'Kaizenque',
    tag: 'Flutter',
    focus: 'News and content',
    work: 'ThePeople Wire',
  },
  {
    company: 'Pqube',
    tag: 'Full stack',
    focus: 'End-to-end product build',
    work: 'Udupi app, backend and frontend',
  },
  {
    company: 'Freelance',
    tag: 'Full stack',
    focus: 'Business management platform',
    work: 'OneSpa, built in 10 working days',
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
    challenge:
      'The Flutter challenge was keeping teacher and student experiences separate while sharing enough structure to move fast. Role-based screens, data visibility, and form-heavy academic flows had to stay clear and predictable.',
    solution:
      'At Cumin360, I shaped separate teacher and student app experiences with reusable Flutter patterns, clean screen structure, and privacy-aware data access so each role saw only the right actions and academic updates.',
    result:
      'The apps became a foundation for a more complete online school experience: teachers could manage academic communication and students could track their own attendance, homework, papers, and results.',
    stack: ['Flutter', 'Dart', 'Role-based UX', 'Privacy-aware data', 'Education workflow'],
    highlights: ['2 apps', 'Attendance', 'Homework', 'Results', 'Parent contact'],
    sceneLabel: 'Classroom to cloud',
    scale: '2 role-focused apps',
    storyBeats: [
      {
        title: 'The school day was scattered',
        body: 'Imagine a principal asking one simple question: what happened with this student today? The answer was spread across attendance, homework, papers, results, and parent communication.',
      },
      {
        title: 'Teachers and students needed different doors',
        body: 'A teacher needed controls. A student needed clarity. Flutter helped shape two separate app experiences while keeping the product language familiar across both apps.',
      },
      {
        title: 'Privacy became part of the product',
        body: 'Student data could not be treated like normal app content. The flow had to show the right information to the right person without making the app feel difficult.',
      },
      {
        title: 'The result felt like one school system',
        body: 'The apps made academic updates easier to reach, so students could track progress and teachers could manage communication without depending on scattered offline follow-ups.',
      },
    ],
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
    challenge:
      'The Flutter challenge was balancing reward-style engagement with trust. Earning flows can easily feel confusing, so state changes, navigation, and feedback had to be readable from the first tap.',
    solution:
      'At Gloify, I learned how to structure Flutter screens around changing product requirements, keep user actions visible, and build flows that made the pay-and-earn journey feel simple instead of risky.',
    result:
      'The project sharpened my approach to real product delivery and helped shape the way I now think about Flutter architecture, product iteration, and user-first interactions.',
    stack: ['Flutter', 'Dart', 'Mobile UX', 'Reward flows', 'Product iteration'],
    highlights: ['Pay and earn', 'User flow learning', 'Production mindset', 'Mobile UX'],
    sceneLabel: 'Tap to earn',
    scale: 'Learning-heavy production product',
    storyBeats: [
      {
        title: 'The user needed trust before action',
        body: 'In a pay-and-earn app, users do not just tap for fun. They want to know what they are doing, what they earn, and whether the app is behaving honestly.',
      },
      {
        title: 'The screens had to explain the system',
        body: 'Flutter screens had to guide the user through reward actions with clear feedback, simple movement, and fewer confusing states.',
      },
      {
        title: 'Changing product ideas became the real test',
        body: 'Reward products change often. This project trained me to build in a way where screens and flows could adapt without turning the code into a mess.',
      },
      {
        title: 'It shaped how I build now',
        body: 'Playzo became a strong learning project for product thinking: clarity first, state management second, and user trust always visible in the interface.',
      },
    ],
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
    challenge:
      'The Flutter challenge was scale. Almost 12 connected apps meant repeated patterns could become messy fast, and every product or offer change needed to reflect correctly across the customer, store, delivery, CRM, and monitoring flows.',
    solution:
      'At Nextaverse, I worked across the connected QuickCommerce system with shared thinking around modules, state, API contracts, and role-specific interfaces so each app could serve its workflow without breaking the larger operation.',
    result:
      'This became the most complete platform-scale story in my portfolio: a multi-app operating system for QuickCommerce rather than a single isolated mobile app.',
    stack: ['Flutter', 'Dart', 'Multi-app architecture', 'CRM flows', 'Live monitoring'],
    highlights: ['12 apps', 'Store app', 'Delivery app', 'CRM', 'Live orders', 'Offers'],
    sceneLabel: 'Order to operation',
    scale: 'Almost 12 connected apps',
    storyBeats: [
      {
        title: 'One order touched many teams',
        body: 'For a customer, it looked simple: place an order. Behind the scenes, stores, delivery, CRM, accounts, supervisors, products, and offers all had to move together.',
      },
      {
        title: 'The CTO problem was scale',
        body: 'Almost 12 apps meant one bad pattern could repeat everywhere. Flutter had to be organized with reusable thinking so each app stayed fast to build and easier to maintain.',
      },
      {
        title: 'Business changes could not break shopping',
        body: 'A festival offer, disabled product, uploaded item, or store-side change could affect the main customer app. The system needed clean flows between operations and the user interface.',
      },
      {
        title: 'The platform became the real product',
        body: 'The biggest win was not just one app. It became a connected QuickCommerce operating system where every role had a focused interface and the business could run in real time.',
      },
    ],
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
    challenge:
      'The Flutter challenge was ownership under uncertainty. With backend and frontend decisions moving together, the app needed a structure that could absorb product changes without forcing the whole build to be rewritten.',
    solution:
      'I took responsibility for backend and frontend work, connecting product behavior, API design, Flutter screens, and implementation choices into one build path that stayed organized from idea to launch-ready execution.',
    result:
      'The app did not launch because of internal company reasons I was not informed about, but the work is still important because it shows end-to-end ownership across frontend, backend, and product design.',
    stack: ['Flutter', 'Backend ownership', 'Frontend design', 'Product build', 'End-to-end delivery'],
    highlights: ['Udupi app', 'Backend', 'Frontend', 'Design ownership', 'Not launched'],
    sceneLabel: 'Idea to build',
    scale: 'End-to-end responsibility',
    storyBeats: [
      {
        title: 'The project needed one clear owner',
        body: 'The business idea needed backend, frontend, and design decisions to move together. Without that ownership, the app could easily become half-planned and half-built.',
      },
      {
        title: 'Uncertainty had to be handled calmly',
        body: 'When product details are still changing, Flutter structure matters. Screens, APIs, and business logic had to stay flexible enough to absorb decisions later.',
      },
      {
        title: 'I connected the build pieces',
        body: 'I handled the product path across backend responsibility, frontend design, and app implementation so the project could move toward a launchable shape.',
      },
      {
        title: 'Even unlaunched work proved ownership',
        body: 'The app did not launch because of internal company reasons, but the build still shows that I can carry a product across design, code, backend, and execution.',
      },
    ],
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
    challenge:
      'The Flutter challenge was content density. Feeds, story pages, loading states, and reading flows had to feel lightweight so users could move through news without the interface fighting for attention.',
    solution:
      'At Kaizenque, I worked on ThePeople Wire with a focus on clean Flutter layout structure, readable content hierarchy, and simple browsing patterns for fast updates and focused reading.',
    result:
      'The project added another content-heavy product type to my experience, strengthening my ability to build apps beyond commerce and internal operations.',
    stack: ['Flutter', 'Dart', 'News UX', 'Content feeds', 'Mobile interface'],
    highlights: ['News app', 'Reading flow', 'Content browsing', 'Mobile-first'],
    sceneLabel: 'Story to reader',
    scale: 'Content product',
    storyBeats: [
      {
        title: 'News has to feel instant',
        body: 'A reader opens a news app to find the latest story quickly. If the feed feels heavy or confusing, the user leaves before the content gets a chance.',
      },
      {
        title: 'The challenge was content density',
        body: 'Flutter layouts had to carry lists, detail pages, loading states, and reading screens while keeping the interface calm and readable.',
      },
      {
        title: 'The product needed focus',
        body: 'I worked around clear browsing patterns and content hierarchy so users could move from feed to story without friction.',
      },
      {
        title: 'It added a new product type',
        body: 'ThePeople Wire strengthened my experience with content-heavy apps, showing that I can build beyond commerce, operations, and internal tools.',
      },
    ],
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
    challenge:
      'The Flutter challenge was speed plus complexity. In 10 working days, the app still needed role-based access, multi-spa operations, lead tracking, sales, memberships, analytics, and reliable data entry without feeling rushed.',
    solution:
      'I built the system across design, Flutter frontend, backend, server setup, and support. The app replaced paper workflows with searchable records, role-based screens, customer history, analytics, and date-wise business tracking.',
    result:
      'The complete production-grade application was built in 10 working days, turning paper-based spa operations into searchable, role-based software with better tracking and calculation support.',
    stack: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Role-based access', 'Server setup'],
    highlights: ['10 working days', 'Multi-spa', 'Leads', 'Entries', 'Analytics', 'Roles'],
    sceneLabel: 'Paper to platform',
    scale: 'Production-grade internal platform',
    storyBeats: [
      {
        title: 'The business was losing time on paper',
        body: 'Managers were dealing with misplaced records, lost papers, manual calculations, and the question every business asks: what exactly happened on this date?',
      },
      {
        title: 'The timeline was the pressure',
        body: 'The challenge was building a serious system in 10 working days. Flutter had to move fast, but the app still needed roles, leads, customers, analytics, memberships, and sales flows.',
      },
      {
        title: 'Software replaced the daily confusion',
        body: 'I built the design, Flutter frontend, backend, server setup, and support so each role could enter, search, track, and understand business activity from one place.',
      },
      {
        title: 'The result was operational control',
        body: 'The spa team moved from paper dependency to a production-grade internal platform with clearer records, better calculations, and easier day-to-day management.',
      },
    ],
  },
];

export const stats = [
  { value: 5, prefix: '~', suffix: '', label: 'years building production software' },
  { value: 20, prefix: '', suffix: '+', label: 'apps, sites and platform modules shipped' },
  { value: 12, prefix: '', suffix: '', label: 'connected apps in one quick-commerce ecosystem' },
  { value: 3, prefix: '', suffix: '', label: 'countries served: India, Kuwait, Saudi Arabia' },
];

export const focusAreas = [
  {
    icon: Code2,
    title: 'Whole-product ownership',
    body: 'Screens, state, APIs, backend logic, dashboards and release blockers. I can carry a product from the first idea to the version people actually use.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Every screen size',
    body: 'Android and iOS apps, Flutter on desktop and TV, plus websites, storefronts and admin panels, all connected to the same stable backend.',
  },
  {
    icon: Globe2,
    title: 'Launch-ready finish',
    body: 'Clean layouts, fast interactions, proper loading and error states, and Arabic and English side by side when the market needs both.',
  },
];
