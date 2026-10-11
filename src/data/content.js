export const profile = {
  name: 'Jana Mostafa Sabry',
  nameLines: ['Jana', 'Mostafa', 'Sabry'],
  roles: ['Data Scientist', 'Machine Learning & AI Specialist', 'Software Engineer'],
  intro:
    'I build machine learning systems and the full-stack products around them: predictive models, anomaly-detection pipelines, fine-tuned language models, and bilingual web apps that real people use.',
  location: 'Cairo, Egypt',
  status: 'Final-year student, Informatics & Computer Science, The British University in Egypt',
  availability: 'Open to data science, machine learning and software engineering roles',
  email: 'jana.sabry.abdelwahhab@gmail.com',
  phone: '+20 109 510 6023',
  phoneHref: 'tel:+201095106023',
  linkedin: 'https://www.linkedin.com/in/jana-mostafa-535ab62a2',
  github: 'https://github.com/JanaMoustafa',
  cv: '/Jana_Sabry_CV.pdf',
}

export const about = {
  statement:
    'I turn messy data into models that hold up in production, then ship the software that puts them in front of people. Recent work ranges from a network-KPI prediction pipeline at Nokia with an R² above 0.99, to a bilingual home-services marketplace on Next.js and Supabase, to privacy-first apps delivered as installable PWAs.',
  facts: [
    { label: 'Focus', value: 'Machine learning, deep learning, NLP and full-stack web' },
    { label: 'Studying', value: 'BSc Informatics & Computer Science, BUE, 2022 to 2026' },
    { label: 'Programme', value: 'Digital Egypt Pioneers Initiative, Data Science Track, 2025' },
    { label: 'Based in', value: 'Cairo, Egypt' },
    { label: 'Languages', value: 'Arabic, native. English, fluent' },
  ],
}

export const experience = [
  {
    role: 'Software Engineer, Founding Technology Team',
    org: 'Osta',
    period: '2026',
    summary:
      'Egyptian home-services marketplace connecting homeowners with vetted craftsmen through open bidding.',
    stack: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'PWA'],
    bullets: [
      'Owned the bilingual customer web app (Arabic RTL and English LTR with next-intl) and its API endpoints: job posting with photos and video, live quote comparison, craftsman selection, job history and two-way ratings.',
      'Co-owned the admin panel: craftsman KYC verification queue, support-ticket and job overview dashboards, and a read-only audit-log viewer behind mandatory TOTP multi-factor login.',
      'Co-designed the shared Supabase/PostgreSQL schema and API contract with row-level security on every table, an atomic row-locked quote-selection transaction, and a hashed one-time arrival passcode.',
      'Verified the core marketplace loop end to end against a live database, backed by a Vitest suite of 930+ passing tests, strict TypeScript and clean lint.',
    ],
  },
  {
    role: 'Full-Stack Web Developer',
    org: 'Fridge Check',
    period: '2026',
    link: 'https://fridge-check-sooty.vercel.app',
    summary: 'Bilingual recipe finder that matches recipes to the ingredients you already have.',
    stack: ['Next.js', 'React', 'TheMealDB API', 'Vercel'],
    bullets: [
      'Designed, built and deployed a bilingual (English and Arabic) recipe-finder web app that matches recipes to the ingredients a user already has and lists exactly what is missing.',
      'Implemented free-text and quick-add ingredient entry, diet filters, best-match and fewest-missing sorting, and a pantry-staples option.',
      'Added saved recipes and an auto-generated shopping list, and shipped it as an installable PWA with continuous deployment on Vercel.',
    ],
  },
  {
    role: 'Full-Stack Web Developer',
    org: 'Saving Goose',
    period: '2026',
    link: 'https://saving-goose.vercel.app',
    summary: 'Privacy-first budgeting app that keeps every financial record on the device.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Web Push', 'Vercel'],
    bullets: [
      'Built and deployed a bilingual budgeting PWA with no accounts or ads: a monthly dashboard showing spent, remaining and safe-to-spend amounts, spending trends and all-time history.',
      'Implemented payment logging with categories, recurring payments that post themselves on their due day, savings goals with streak tracking, and a guided setup that builds a personal money plan.',
      'Added hourly check-in reminders delivered by a push-notification server while the app is closed, backup export and restore, and CSV export.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    org: 'Nokia',
    period: 'Summer 2025',
    summary: 'Network-KPI prediction and anomaly detection on live telecom data.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM'],
    bullets: [
      'Engineered a machine learning pipeline using Scikit-learn to predict network KPIs, achieving an R² above 0.99 for throughput prediction using XGBoost, LightGBM and Random Forest.',
      'Developed an automated preprocessing workflow featuring cyclical time encoding, Haversine distance calculations and rolling time-series statistics to capture spatial-temporal patterns.',
      'Implemented an unsupervised anomaly detection strategy using Isolation Forest to generate target labels from raw datasets, enabling downstream supervised classification.',
    ],
  },
  {
    role: 'Technical Intern',
    org: 'FkyRank AI, UneeQ Interns, Saiket Software, NTI and ITI',
    period: '2025',
    summary: 'Data science and software internships across five organisations.',
    stack: ['Python', 'Java', 'Dart', 'FlutterFlow', 'Object Detection'],
    bullets: [
      'Cleaned and analysed datasets, created visualisations and insights, and trained machine learning and deep learning models across multiple data science projects.',
      'Built a full-stack meal-planning application using Dart and FlutterFlow, and trained and deployed object detection models across several domains.',
      'Designed a server-client communication system for multi-entity messaging and notifications using RMI, developed interactive games in Java and Python, and built a query-based database management system.',
    ],
  },
]

export const featuredProjects = [
  {
    name: 'Osta',
    kind: 'Marketplace platform',
    description:
      'Home-services marketplace with open bidding between homeowners and vetted craftsmen. I owned the bilingual customer app and co-owned the admin panel and shared database schema.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
    accent: 'purple',
  },
  {
    name: 'Fridge Check',
    kind: 'Recipe finder, live',
    description:
      'Type what is in your fridge and get recipes you can cook now, with the missing ingredients listed. Diet filters, saved recipes and a shopping list, in English and Arabic.',
    stack: ['Next.js', 'React', 'TheMealDB API'],
    url: 'https://fridge-check-sooty.vercel.app',
    accent: 'pink',
  },
  {
    name: 'Saving Goose',
    kind: 'Budgeting app, live',
    description:
      'A monthly budget dashboard, recurring payments, savings goals and push reminders, with every record kept on your own phone. No accounts, no ads.',
    stack: ['JavaScript', 'PWA', 'Web Push'],
    url: 'https://saving-goose.vercel.app',
    accent: 'lavender',
  },
]

export const clientSites = [
  { name: 'Hana Ayman Almohandes', kind: 'Personal portfolio', url: 'https://hana-portfolio-peach.vercel.app', stack: 'HTML, CSS, JavaScript' },
  { name: 'Hana Sameh El Saeed', kind: 'Personal portfolio', url: 'https://hana-portfolioo.vercel.app', stack: 'HTML, CSS, JavaScript' },
  { name: 'AOM Tech', kind: 'Company website', url: 'https://aom-tech.vercel.app', stack: 'Next.js, React' },
]

export const moreProjects = [
  { name: 'Bone Tumor Detection System', description: 'Deep learning system for tumour detection using models trained from scratch alongside fine-tuned pretrained models.' },
  { name: 'NLP & LLM Fine-Tuning', description: 'Multiple NLP projects leveraging large language models and a range of fine-tuning methods.' },
  { name: 'Cloud Storage System', description: 'Full-stack system (backend, frontend and DevOps) with encryption, database linking and multiple security measures.' },
  { name: 'Multi-Agent Communication System', description: 'Communication and coordination logic between multiple software agents.' },
  { name: 'Emotion Detection System', description: 'Machine learning project for emotion recognition and classification.' },
  { name: 'Traffic Light Manager', description: 'Hardware-based traffic light control system built from circuit components.' },
  { name: 'Tetris', description: 'Interactive, responsive Tetris game written in C.' },
  { name: 'Console Calculator', description: 'Command-line calculator for basic arithmetic, written in C.' },
]

export const skills = [
  {
    group: 'Data and AI',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLM Fine-Tuning', 'Object Detection', 'Anomaly Detection', 'Data Analysis', 'Data Visualisation'],
  },
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'SQL', 'Dart', 'C'],
  },
  {
    group: 'Web and tools',
    items: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'MySQL', 'HTML', 'CSS', 'FlutterFlow', 'Git', 'Vercel'],
  },
  {
    group: 'Ways of working',
    items: ['Communication', 'Leadership', 'Problem-solving', 'Public speaking'],
  },
]

export const education = [
  {
    school: 'The British University in Egypt',
    degree: 'BSc, Informatics and Computer Science',
    period: 'Sep 2022 to Jun 2026',
    note: 'Cairo, Egypt',
  },
  {
    school: 'Digital Egypt Pioneers Initiative',
    degree: 'Data Science Track',
    period: 'Jun 2025 to Dec 2025',
    note: 'Six-month scholarship programme from the Ministry of Communications and Information Technology',
  },
]

const drive = (id, usp = 'drive_link') => `https://drive.google.com/file/d/${id}/view?usp=${usp}`

export const certifications = [
  { issuer: 'SaiKet Systems', title: 'Machine Learning Internship', date: 'Sep 2025', url: drive('1QxGe_PtCFOp224Ao2YZf8XPAzphHwbcw') },
  { issuer: 'NVIDIA', title: 'Getting Started with Deep Learning', date: 'Aug 2025', url: drive('1OvsFcM91h1euIBf5_mblsTRN1TB3Rdht') },
  { issuer: 'NTI', title: 'AI for Business', date: 'Aug 2025', url: drive('13tFJ_Ssm0UBLqFiZ-B56AYRwtaKk2uc5') },
  { issuer: 'Nokia', title: 'Machine Learning Internship', date: 'Aug 2025', url: drive('1X0k5M19eWJh8J6Mx9DrGXKEv3ojKmqw8Cv9pscK', 'sharing') },
  { issuer: 'UneeQ', title: 'Machine Learning Internship', date: 'Aug 2025', url: drive('1capAvY8YOZPAwOJVP4E-_dYWO0t8Vgzd') },
  { issuer: 'DEPI', title: 'Data Scientist', date: 'Jun to Dec 2025', url: drive('1nijEu0sTQQw7oKFkDi932Gb52vnlv2HI') },
  { issuer: 'ITI', title: 'Artificial Intelligence, 90 hours', date: 'Jul 2025', url: drive('1Vz-4nexgAIlKIhibCY5KKL9v4NQIh8tW') },
  { issuer: 'IBM', title: 'Data Science Professional Certificate', date: 'Jan 2025', url: drive('14yGKm5P_0U7CSm2rE3QQpASpzIshJalJ') },
  { issuer: 'IBM', title: 'Machine Learning with Python', date: 'Dec 2024', url: drive('1OwLFsZRnj8E1zT5tL1cTftu2p2vh2AtX') },
  { issuer: 'IAO', title: 'Cyber Security', date: 'Nov 2024', url: drive('1M29qxWq9b8LUyUVG_nnAf5BpEGcXDw6O') },
  { issuer: 'Impact', title: 'Cyber Security', date: 'Aug 2024', url: drive('1YwV6nTk0gKIX-lT8JJc4BHzkMyXD0XOU') },
  { issuer: 'IBM', title: 'Data Analysis with Python', date: 'Jul 2024', url: drive('1GwQCxqOIHh8qbaD4Kvt8ipb75U_aK79x') },
  { issuer: 'IBM', title: 'Deep Learning Engineering Specialization', date: 'Jul 2024', url: drive('12IvYMvyaLsvArJ9grH6cHHqkakwDHf3p') },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
