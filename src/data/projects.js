/**
 * Every project shown in the filterable grid under the three featured products.
 * category: 'ml' | 'apps' | 'design'
 * context: optional line naming team or course context, shown under the title.
 */
export const categories = [
  { key: 'all', label: 'All' },
  { key: 'ml', label: 'AI and machine learning' },
  { key: 'apps', label: 'Apps and systems' },
  { key: 'design', label: 'Analysis and design' },
]

export const workProjects = [
  // ---------------------------------------------------------------- AI and ML
  {
    name: 'SEO CTR Opportunity Scoring',
    category: 'ml',
    kind: 'FlyRank internship',
    metric: '0.922 ROC-AUC',
    description:
      'Ranks which of 22,006 client web pages are losing the most clicks for their search position, so an editorial team rewrites the right 50 first. A Random Forest validated on unseen clients reached 65.6% precision in the top 100, a 6.56x lift over the base rate.',
    highlights: ['Leakage audit', 'Grouped cross-validation', 'Action playbook', 'Research paper'],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest'],
    url: 'https://janamoustafa.github.io/FlyRank-ML/',
    linkLabel: 'Read the paper',
  },
  {
    name: 'Network Performance Prediction Pipeline',
    category: 'ml',
    kind: 'Nokia internship',
    metric: 'R² > 0.99',
    description:
      'Predicts network KPIs from raw telecom data. Engineered temporal, spatial and signal features including cyclical encoding, Haversine distances and lag and rolling statistics, labelled anomalies with Isolation Forest, and reached an R² above 0.99 on throughput with XGBoost and LightGBM.',
    highlights: ['Time-series analysis', 'Anomaly detection', 'Feature engineering', 'Ensemble methods', 'Pipeline automation'],
    stack: ['Python', 'XGBoost', 'LightGBM', 'Isolation Forest', 'Scikit-learn Pipelines'],
  },
  {
    name: 'TravelPlanner: Multi-Agent LLM Trip Planner',
    category: 'ml',
    kind: 'LLM agents',
    context: 'Team project, NLP module',
    metric: 'Constraint pass 5.7% to 85.7%',
    description:
      'Multi-agent system on the TravelPlanner benchmark: agents extract constraints, research flights, hotels and weather, solve the itinerary and audit it, with ChromaDB retrieval, live web search and a Streamlit app. On a small evaluation set the redesigned pipeline raised the commonsense-constraint pass rate from 5.7% to 85.7%.',
    highlights: ['Agent orchestration', 'Retrieval-augmented generation', 'QLoRA fine-tuning pipeline', 'Evaluation suite'],
    stack: ['Python', 'LangChain', 'Llama 3.1', 'ChromaDB', 'Streamlit', 'QLoRA'],
  },
  {
    name: 'Cyber Threat Text Classification with GraphSAGE',
    category: 'ml',
    kind: 'Graph neural networks',
    metric: '91.9% accuracy',
    description:
      'Classifies cyber-threat intelligence text into malware, location, software and attack-pattern labels. Built a cosine k-nearest-neighbour graph over 15,715 documents and trained a two-layer GraphSAGE model, comparing four hyperparameter settings. The best reached 91.9% test accuracy and a macro F1 of 0.84.',
    highlights: ['Text preprocessing', 'Graph construction', 'Hyperparameter comparison', 'TensorBoard tracking'],
    stack: ['Python', 'PyTorch', 'PyTorch Geometric', 'NLTK', 'Scikit-learn'],
  },
  {
    name: 'Intel Image Classification',
    category: 'ml',
    kind: 'Transfer learning',
    context: 'Team of three, Deep Learning module. I built the VGG-16, MobileNetV2 and SqueezeNet models',
    metric: '92.4% accuracy',
    description:
      'Compared nine ImageNet-pretrained CNNs on six scene classes, with augmentation, weighted sampling, test-time augmentation, mixed precision and early stopping. My best model, a fine-tuned SqueezeNet, reached 92.4% test accuracy against a team best of 93.8%.',
    highlights: ['Fine-tuning', 'Data augmentation', 'Class balancing', 'Model comparison'],
    stack: ['Python', 'PyTorch', 'torchvision', 'timm', 'Scikit-learn'],
  },
  {
    name: 'Customer Churn Prediction System',
    category: 'ml',
    kind: 'Classification',
    metric: '75.7% accuracy',
    description:
      'End-to-end pipeline that predicts churn on the Telco Customer Churn dataset. Handled missing values and outliers, balanced the classes with SMOTE, and compared Logistic Regression, Random Forest, AdaBoost and Naive Bayes, with XGBoost performing best.',
    highlights: ['Data preprocessing', 'Feature engineering', 'Model comparison', 'Performance optimisation', 'Class-imbalance handling'],
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SMOTE'],
  },
  {
    name: 'Emotion Detection AI Model',
    category: 'ml',
    kind: 'Computer vision',
    description:
      'Classifies the emotion in an uploaded photo as happy, sad, angry, excited or surprised. Image processing and CNN training were tuned to stay accurate across different facial expressions and lighting conditions.',
    highlights: ['Real-time detection', 'Multi-class classification', 'Image upload interface', 'Robust to lighting changes'],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
  },
  {
    name: 'Animal Classification System',
    category: 'ml',
    kind: 'Computer vision',
    description:
      'Finds animals in photos and identifies their species, built to hold up across lighting conditions, environments and image resolutions for wildlife monitoring and education.',
    highlights: ['Multi-species detection', 'Environment adaptation', 'Resolution independence', 'Lighting robustness'],
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Transfer Learning', 'Image Augmentation', 'CNN'],
  },
  {
    name: 'Bone Tumor Detection System',
    category: 'ml',
    kind: 'Medical imaging',
    description:
      'Deep learning system for tumour detection that compares models trained from scratch with fine-tuned pretrained models.',
    highlights: [],
    stack: ['Python', 'Deep Learning', 'Transfer Learning'],
  },
  {
    name: 'Home Cleaning Robot',
    category: 'ml',
    kind: 'Robot planning',
    context: 'Team of four, AI Planning for Robot Systems module',
    metric: '79 of 79 spots cleaned',
    description:
      'Simulated cleaning robot that plans with A* and Dijkstra, avoids moving obstacles, and coordinates a three-robot swarm. Q-learning hyperparameters were tuned with particle swarm optimisation across 144 configurations, and the A* run cleaned every dirt spot on the map.',
    highlights: ['Path planning', 'Swarm coordination', 'Reinforcement learning', 'Particle swarm optimisation'],
    stack: ['Python', 'Pygame', 'NumPy', 'A*', 'Q-learning'],
  },
  {
    name: 'Connect Four AI',
    category: 'ml',
    kind: 'Game AI',
    context: 'Team of five, Logic and Artificial Intelligence module',
    description:
      'Play Connect Four against a computer opponent that searches with Minimax and alpha-beta pruning over a heuristic board score, with four difficulty levels set by search depth.',
    highlights: ['Adversarial search', 'Alpha-beta pruning', 'Heuristic evaluation', 'Difficulty levels'],
    stack: ['Python', 'Pygame', 'NumPy'],
  },
  {
    name: 'NLP and LLM Fine-Tuning',
    category: 'ml',
    kind: 'Language models',
    description: 'A set of NLP projects built on large language models, exploring several fine-tuning methods.',
    highlights: [],
    stack: ['Python', 'NLP', 'LLMs', 'Fine-tuning'],
  },
  {
    name: 'Advanced Machine Learning Portfolio',
    category: 'ml',
    kind: 'Model collection',
    description:
      'Handwritten digit recognition on MNIST with neural networks, healthcare diagnosis classification with several algorithms, and work across supervised and unsupervised learning, ensemble methods, cross-validation, CNNs for images and NLP.',
    highlights: ['Deep learning', 'Computer vision', 'NLP', 'Model evaluation', 'Hyperparameter tuning'],
    stack: ['Python', 'TensorFlow', 'Keras', 'CNNs', 'Ensemble Learning', 'Cross-validation'],
  },

  // ----------------------------------------------------------- Apps and systems
  {
    name: 'SecureVault: Encrypted Cloud Storage',
    category: 'apps',
    kind: 'Full-stack security',
    metric: '120+ automated tests',
    description:
      'Zero-trust file storage where files are encrypted in the browser with AES-GCM before upload and the server keeps only ciphertext and verifies SHA-256 hashes. Includes JWT authentication with refresh tokens, role-based admin access, rate limiting and input sanitising, plus Docker, Kubernetes, Terraform and a CI/CD pipeline with security scans.',
    highlights: ['Client-side encryption', 'Role-based access', 'Security middleware', 'Containerised deployment'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'Memory Box',
    category: 'apps',
    kind: 'Flutter app',
    description:
      'Turns personal moments into an interactive world map. Users sign in, pin memories with a photo, title, emoji and location, and browse them as a journal, a starred list or by search.',
    highlights: ['Interactive map', 'Photo capture', 'Cloud sync', 'MVVM architecture'],
    stack: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'OpenStreetMap'],
  },
  {
    name: 'AI-Powered Meal Planning App',
    category: 'apps',
    kind: 'Mobile app',
    description:
      'FlutterFlow app that calculates daily calorie needs from height, weight and gender, linked to a food-ordering page with categorised foods and calories per 100 g, and APIs for real-time data and personalised nutrition recommendations.',
    highlights: ['Calorie calculation', 'Food categorisation', 'Personalised recommendations', 'Cross-platform'],
    stack: ['FlutterFlow', 'Dart', 'Nutrition APIs', 'Mobile Development'],
  },
  {
    name: 'Multi-Agent Communication System',
    category: 'apps',
    kind: 'Distributed systems',
    description: 'Communication and coordination logic that lets multiple software agents exchange messages and work together.',
    highlights: [],
    stack: ['Java', 'RMI', 'Distributed Systems'],
  },
  {
    name: 'Traffic Light Manager',
    category: 'apps',
    kind: 'Hardware',
    description: 'Traffic light control system built by wiring and programming circuit components.',
    highlights: [],
    stack: ['Electronics', 'Circuit Design'],
  },
  {
    name: 'Tetris',
    category: 'apps',
    kind: 'Game',
    description: 'Interactive, responsive Tetris game written in C.',
    highlights: [],
    stack: ['C'],
  },
  {
    name: 'Console Calculator',
    category: 'apps',
    kind: 'Command-line tool',
    description: 'Command-line calculator for basic arithmetic, written in C.',
    highlights: [],
    stack: ['C'],
  },

  // -------------------------------------------------------- Analysis and design
  {
    name: 'Business Analysis and UI/UX Projects',
    category: 'design',
    kind: 'Research and design',
    description:
      'Market analysis for Pocket Pay, a FinTech app in Egypt, and a streamlined e-commerce returns process. Built user personas for the Easy Learn platform and designed interfaces for an AI productivity app, a donation website, a freelancer platform and a mental-health app.',
    highlights: ['Market analysis', 'User personas', 'Process design', 'UI/UX prototyping', 'Stakeholder interviews'],
    stack: ['Figma', 'User Research', 'Market Research', 'Stakeholder Analysis', 'Process Optimisation'],
  },
  {
    name: 'SheRide: Safe Mobility for Egyptian Women',
    category: 'design',
    kind: 'Startup concept',
    context: 'Team of four, Entrepreneurship and Innovation module. I led the team as CEO',
    description:
      'Business plan for a ride-hailing service where both drivers and riders are women, in Greater Cairo. Covered a primary survey, market sizing, competitor analysis against Uber, InDriver, Didi and Lady Driver, pricing, operations and a financial plan, with app mockups for onboarding, driver choice, an SOS button and trusted contacts.',
    highlights: ['Primary research', 'Market sizing', 'Competitor analysis', 'Financial planning', 'App mockups'],
    stack: ['Market Research', 'Survey Design', 'Financial Modelling', 'UI Mockups'],
  },
  {
    name: 'Life Expectancy Analysis',
    category: 'design',
    kind: 'Data analysis',
    context: 'Team of three, Data Science module',
    metric: 't = 29.77',
    description:
      'Explored WHO life-expectancy data from 2000 to 2015, merged with Our World in Data, against GDP, schooling, mortality and alcohol use. A two-sample t-test confirmed that developed countries live about 12 years longer on average, 79.2 against 67.1.',
    highlights: ['Data merging', 'Exploratory analysis', 'Hypothesis testing', 'Interactive charts'],
    stack: ['Python', 'Pandas', 'SciPy', 'Seaborn', 'Plotly'],
  },
]
