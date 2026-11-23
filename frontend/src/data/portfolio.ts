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
  points: string[];
  builtWith: string;
  /** 4:5 screenshot of the first screen. */
  plate: string;
  /** Tall screenshot of the page, panned on hover. */
  tall: string;
};

export const profile = {
  name: 'Arbaan Qureshi',
  role: 'Product engineer',
  company: 'VirtuProse',
  location: 'Bangalore, India',
  email: 'mergeme2@gmail.com',
  phone: '+91 9164444469',
  github: 'https://github.com/arbaan-max',
  linkedin: 'https://www.linkedin.com/in/arbaan-flutter-developer/',
  headline: 'Apps, websites and business software, built end to *end.*',
  intro:
    "I'm Arbaan Qureshi. For almost five years I've shipped Flutter apps, online stores and ERP systems for companies in India, Kuwait and Saudi Arabia.",
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Apps', href: '#apps' },
  { label: 'Experience', href: '#experience' },
];

/** The About paragraph. Image entries render as small inline plates. */
export const aboutStory: (string | { img: string; alt: string })[] = [
  'I started in Flutter, building apps for schools, a news publisher and a twelve-app quick-commerce business. At VirtuProse I now build for the web as well: online stores',
  { img: '/projects/lily-eve-plate.jpg', alt: 'Lily Eve flower store' },
  'venue sites',
  { img: '/projects/trapped-inn-plate.jpg', alt: 'Trapped Inn escape rooms' },
  'and ERP software',
  { img: '/projects/orvia-plate.jpg', alt: 'ORVIA ERP sign-in' },
  'for companies in Kuwait, Saudi Arabia and India.',
];

export const services = [
  {
    title: 'Mobile apps',
    body: 'Flutter apps for Android and iOS, and for desktop and TV when the product needs them.',
  },
  {
    title: 'Websites and stores',
    body: 'Next.js sites and online stores in English and Arabic, from the first layout to launch.',
  },
  {
    title: 'Business software',
    body: 'ERP systems, dashboards and admin panels, with the APIs and databases behind them.',
  },
];

export const toolGroups = [
  { title: 'Apps', items: ['Flutter', 'Dart', 'Android and iOS', 'Windows and macOS', 'TV apps'] },
  { title: 'Web', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Arabic and RTL layouts'] },
  { title: 'State and structure', items: ['BLoC and Cubit', 'Riverpod', 'Clean Architecture', 'Code review'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs'] },
];

export const webProjects: WebProject[] = [
  {
    id: 'trapped-inn',
    name: 'Trapped Inn',
    kind: 'Escape-room venue site',
    origin: 'VirtuProse',
    market: 'Salmiya, Kuwait',
    url: 'https://trapped-inn-seven.vercel.app/',
    displayUrl: 'trapped-inn-seven.vercel.app',
    summary:
      'Seven escape rooms inside one mystery hotel. The homepage is the hotel lobby: visitors move through it and pick the door they want to open.',
    points: ['A lobby you can explore, with seven doors', 'A story page and price for each room', 'Booking handoff for every room'],
    builtWith: 'Next.js',
    plate: '/projects/trapped-inn-plate.jpg',
    tall: '/projects/trapped-inn-tall.jpg',
  },
  {
    id: 'lily-eve',
    name: 'Lily Eve & Eucalyptus',
    kind: 'Flower and plant store',
    origin: 'VirtuProse',
    market: 'Kuwait',
    url: 'https://www.lilyeveco.com/',
    displayUrl: 'lilyeveco.com',
    summary:
      'One online store for two brands: Lily Eve sells flowers, Eucalyptus sells plants. Shoppers browse by brand or occasion and pay in Kuwaiti dinar.',
    points: ['Two brands sharing one catalogue and bag', 'English and Arabic storefront', 'Accounts and order tracking'],
    builtWith: 'Next.js',
    plate: '/projects/lily-eve-plate.jpg',
    tall: '/projects/lily-eve-tall.jpg',
  },
  {
    id: 'maktob',
    name: 'Maktob Holding',
    kind: 'Investment office site',
    origin: 'VirtuProse',
    market: 'Kuwait',
    url: 'https://maktobholding.com/',
    displayUrl: 'maktobholding.com',
    summary:
      'A publishing site for a private investment office, with long articles on equities, commodities and the Kuwait Stock Exchange.',
    points: ['Articles in English and Arabic', 'Blog with category filters', 'Light and dark reading modes'],
    builtWith: 'Next.js',
    plate: '/projects/maktob-plate.jpg',
    tall: '/projects/maktob-tall.jpg',
  },
  {
    id: 'orvia',
    name: 'ORVIA',
    kind: 'ERP for auto-parts dealers',
    origin: 'VirtuProse',
    market: 'Saudi Arabia',
    url: 'https://erp.virtuprose.com/',
    displayUrl: 'erp.virtuprose.com',
    summary:
      'Items, inventory, wholesale, dealers and accounting in one workspace, with Saudi VAT and ZATCA e-invoicing. The product sits behind this sign-in.',
    points: ['Arabic first, with an English switch', 'Each company’s data kept separate', 'Access by role, branch and warehouse'],
    builtWith: 'Next.js',
    plate: '/projects/orvia-plate.jpg',
    tall: '/projects/orvia-tall.jpg',
  },
  {
    id: 'tekrio',
    name: 'Tekrio',
    kind: 'Marketplace for used phones',
    origin: 'Client work',
    market: 'Karnataka, India',
    url: 'https://www.tekrio.in/',
    displayUrl: 'tekrio.in',
    summary:
      'Sellers describe a phone, verified buyers bid through partner stores, and the highest offer comes back with doorstep pickup.',
    points: ['A five-step selling flow', 'Offers from several verified buyers', 'Separate sign-up for retailers and buyers'],
    builtWith: 'HTML, CSS and JavaScript',
    plate: '/projects/tekrio-plate.jpg',
    tall: '/projects/tekrio-tall.jpg',
  },
];

export const experience = [
  {
    company: 'VirtuProse',
    tag: 'Current',
    focus: 'Websites, online stores and ERP',
    work: 'Lily Eve & Eucalyptus, Maktob Holding, Trapped Inn, ORVIA',
  },
  {
    company: 'Tekrio',
    tag: 'Client',
    focus: 'Marketplace for used phones',
    work: 'Seller, retailer and buyer flows on tekrio.in',
  },
  {
    company: 'Nextaverse',
    tag: 'Flutter',
    focus: 'Quick commerce',
    work: 'Tingting, almost 12 connected apps',
  },
  {
    company: 'Cumin360',
    tag: 'Flutter',
    focus: 'Education',
    work: 'GrowonTeachers and GrowonStudents',
  },
  {
    company: 'Gloify',
    tag: 'Flutter',
    focus: 'Pay-and-earn app',
    work: 'Playzo',
  },
  {
    company: 'Kaizenque',
    tag: 'Flutter',
    focus: 'News',
    work: 'ThePeople Wire',
  },
  {
    company: 'Pqube',
    tag: 'Full stack',
    focus: 'City app',
    work: 'Udupi app, backend and frontend',
  },
  {
    company: 'Freelance',
    tag: 'Full stack',
    focus: 'Spa management system',
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

