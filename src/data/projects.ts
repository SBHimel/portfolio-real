export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  clientGithub?: string;
  serverGithub?: string;
  technologies: string[];
  keyFeatures?: string[];
  challenges?: string | string[];
  futureImprovements?: string | string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "aurastudy",
    slug: "aurastudy",
    title: "AuraStudy",
    category: "Learning Management System / EdTech Platform",
    shortDescription: "A modern Learning Management System designed to provide a structured and user-friendly learning experience for students and instructors.",
    fullDescription: "AuraStudy is a comprehensive modern EdTech platform designed for students, instructors, and administrators. It features role-based access control, Google SSO integration, and a highly responsive modern UI enriched with micro-animations.",
    image: "/aura.png", 
    liveUrl: "https://aurastudy-rouge.vercel.app/",
    clientGithub: "https://github.com/SBHimel/AuraStudy-client",
    serverGithub: "https://github.com/SBHimel/AuraStudy-server",
    technologies: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth", "Framer Motion", "MongoDB", "REST API"],
    keyFeatures: [
      "Student, Instructor, and Administrator role-based dashboards",
      "Better Auth authentication with Google SSO",
      "One-click demo login for easy testing",
      "Role-based navigation and protected routes",
      "Modern responsive UI with Framer Motion animations",
      "Comprehensive learning and course management features"
    ],
    challenges: [
      "Implementing multiple role-based dashboards",
      "Managing authentication and protected routes",
      "Integrating Google OAuth",
      "Creating a consistent experience for different user roles",
      "Managing client-server communication"
    ],
    futureImprovements: [
      "AI-powered learning recommendations",
      "Advanced course analytics",
      "Real-time notifications",
      "Online assessments and certificates"
    ]
  },
  {
    id: "gizmogrid",
    slug: "gizmogrid",
    title: "GizmoGrid",
    category: "Technology Marketplace",
    shortDescription: "A multi-role technology marketplace that supports different workflows for buyers, sellers, managers, and administrators.",
    fullDescription: "GizmoGrid is a sophisticated technology and smart device marketplace that supports multiple user roles including Admin, Manager, Seller, and Buyer. It provides dynamic product filtering, seller inventory management, and extensive analytics dashboards.",
    image: "/gizmo.png",
    liveUrl: "https://gizmogrid-kohl.vercel.app/",
    clientGithub: "https://github.com/SBHimel/GizmoGrid-Client-SCIC",
    serverGithub: "https://github.com/SBHimel/GizmoGrid-Server-SCIC",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HeroUI", "Better Auth", "MongoDB", "Framer Motion", "Recharts"],
    keyFeatures: [
      "Admin, Manager, Seller, and Buyer roles",
      "Comprehensive product marketplace with dynamic filtering",
      "Seller inventory management system",
      "Role-based dashboards and analytics visualization",
      "Better Auth with Google and Facebook OAuth integration",
      "Responsive dark/light interface themes"
    ],
    challenges: [
      "Designing multi-role access control",
      "Protecting role-specific dashboard routes",
      "Managing different workflows for multiple user types",
      "Building marketplace filtering and analytics dashboards"
    ],
    futureImprovements: [
      "Payment gateway integration",
      "Order tracking",
      "Product reviews and ratings",
      "Advanced seller analytics",
      "Personalized product recommendations"
    ]
  },
  {
    id: "skillswap",
    slug: "skillswap",
    title: "SkillSwap",
    category: "Skill-Sharing and Freelancing Platform",
    shortDescription: "A skill-sharing and freelancing platform designed to connect people who offer skills and services with users who need them.",
    fullDescription: "SkillSwap is a dynamic platform designed to bridge the gap between freelancers and clients. It facilitates skill discovery, service sharing, and provides tailored role-based dashboards for different user types, all secured with modern authentication systems.",
    image: "/skill.png",
    liveUrl: "https://skillswap-client-one.vercel.app/",
    clientGithub: "https://github.com/SBHimel/skillswap-a10-client",
    serverGithub: "https://github.com/SBHimel/skillswap-a10-server",
    technologies: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth", "Express.js", "MongoDB"],
    keyFeatures: [
      "Freelancer, Client, and Admin specific roles",
      "Email/password authentication along with Google OAuth",
      "Strictly protected routes and role-based dashboards",
      "Intuitive skill and service discovery mechanics",
      "Fully responsive user interface for all devices"
    ],
    challenges: [
      "Managing multiple user roles",
      "Maintaining session persistence",
      "Protecting private routes",
      "Creating different experiences for freelancers and clients"
    ],
    futureImprovements: [
      "Real-time messaging",
      "Payment integration",
      "Reviews and ratings",
      "Freelancer verification",
      "Advanced search and recommendations"
    ]
  },
  {
    id: "ideavault",
    slug: "ideavault",
    title: "IdeaVault",
    category: "Startup Idea Sharing Platform",
    shortDescription: "A platform where users can share, discover, search, filter, and discuss startup ideas.",
    fullDescription: "IdeaVault acts as a central hub for innovators to publish, share, and discuss startup ideas. It boasts dynamic category filtering, a real-time case-insensitive search engine, and an interactive CRUD comment system for community engagement.",
    image: "/idea.png",
    liveUrl: "https://ideavault-inky.vercel.app/",
    clientGithub: "https://github.com/SBHimel/ideavault",
    serverGithub: "https://github.com/SBHimel/ideavault-server",
    technologies: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Node.js", "Express.js", "MongoDB", "JWT", "Better Auth"],
    keyFeatures: [
      "Startup idea publishing capabilities",
      "Real-time case-insensitive search and dynamic category filtering",
      "Fully functional CRUD comment system",
      "Secure JWT authentication and Google login",
      "Seamless Light and Dark mode toggle",
      "Highly responsive 3-column masonry/grid layout"
    ],
    challenges: [
      "Implementing secure authentication",
      "Building search and filtering",
      "Managing authenticated comment CRUD operations",
      "Creating responsive layouts"
    ],
    futureImprovements: [
      "AI-powered startup idea validation",
      "Voting and ranking system",
      "Investor connection features",
      "Advanced idea analytics"
    ]
  },
  {
    id: "opal-tiles",
    slug: "opal-tiles",
    title: "Opal Tiles Gallery",
    category: "Architecture",
    shortDescription: "Premium architectural tile showcase with seamless GSAP transitions.",
    fullDescription: "Premium architectural tile showcase with seamless GSAP transitions. It provides a luxurious browsing experience for high-end clients.",
    image: "/project-1.png",
    liveUrl: "https://tiles-gallery-opal.vercel.app/",
    clientGithub: "https://github.com/SBHimel/Tiles-Gallery",
    technologies: ["Next.js", "Tailwind", "GSAP"],
    keyFeatures: ["Premium showcase", "GSAP transitions", "Responsive layout"],
    challenges: "Implementing smooth GSAP scroll-triggered animations while keeping performance optimal across devices was tricky. Ensuring the tile grid layout remained pixel-perfect on all screen sizes required extensive responsive testing.",
    futureImprovements: "Planning to add a CMS backend so clients can upload and manage their own tile catalogs. Will also integrate a 3D tile preview feature using Three.js for a more immersive experience."
  },
  {
    id: "pixen-studio",
    slug: "pixen-studio",
    title: "Pixen Studio",
    category: "Agency",
    shortDescription: "Minimalist digital portfolio with fluid Framer Motion animations.",
    fullDescription: "Minimalist digital portfolio with fluid Framer Motion animations to showcase creative digital agency works.",
    image: "/project-2.png",
    liveUrl: "https://pixen-pearl.vercel.app/",
    clientGithub: "https://github.com/SBHimel/pixen",
    technologies: ["React", "Vite", "Framer Motion"],
    keyFeatures: ["Fluid animations", "Minimalist aesthetic", "Fast performance"],
    challenges: "Achieving the perfect balance between minimalism and visual richness was the key challenge. Fine-tuning Framer Motion page transitions to feel natural without causing layout shifts required careful orchestration of animation timings.",
    futureImprovements: "Looking to add a dark/light mode toggle with smooth theme transitions. Will also implement a blog section with MDX support to showcase design case studies."
  },
  {
    id: "dragon-news",
    slug: "dragon-news",
    title: "Dragon News",
    category: "Media",
    shortDescription: "Full-stack news application with real-time Auth.js integration.",
    fullDescription: "Full-stack news application with real-time Auth.js integration, categorizing global news feeds efficiently.",
    image: "/project-3.png",
    liveUrl: "https://dragon-news-project-in-next.vercel.app/",
    clientGithub: "https://github.com/SBHimel/dragon-news-project-in-next",
    technologies: ["Next.js", "Tailwind", "Auth.js"],
    keyFeatures: ["Real-time Auth", "Server-side rendering", "Category filtering"],
    challenges: "Integrating Auth.js for secure authentication while handling session management across server and client components was complex. Building the category-based filtering system with server-side rendering required deep understanding of Next.js data fetching.",
    futureImprovements: "Will add a bookmark feature so users can save articles for later reading. Planning to implement push notifications for breaking news and a comment system with real-time updates."
  },
  {
    id: "keen-keeper",
    slug: "keen-keeper",
    title: "Keen Keeper",
    category: "Productivity",
    shortDescription: "Smart task management system with real-time Firebase syncing.",
    fullDescription: "Smart task management system with real-time Firebase syncing for individuals and teams to stay productive.",
    image: "/project-4.png",
    liveUrl: "https://keen-keeper-created-by-himel.netlify.app/",
    clientGithub: "https://github.com/SBHimel/Assignment-7-for-submit",
    technologies: ["React", "Firebase"],
    keyFeatures: ["Real-time syncing", "Drag and drop", "Task categorization"],
    challenges: "Setting up real-time Firebase listeners while avoiding memory leaks and unnecessary re-renders was a significant challenge. Designing an intuitive drag-and-drop interface for task reordering required careful state management.",
    futureImprovements: "Planning to add team collaboration features with shared boards and role-based permissions. Will integrate calendar sync and deadline reminders with email notifications."
  },
  {
    id: "ph-play-store",
    slug: "ph-play-store",
    title: "PH Play Store",
    category: "Showcase",
    shortDescription: "Interactive application hub built with performant vanilla JS.",
    fullDescription: "Interactive application hub built with performant vanilla JS highlighting creative interactions.",
    image: "/project-5.png",
    liveUrl: "https://ph-play-store-created-by-himel.netlify.app/",
    technologies: ["JavaScript", "CSS"],
    keyFeatures: ["Vanilla JS performance", "App showcase layout"]
  },
  {
    id: "book-vibe",
    slug: "book-vibe",
    title: "Book Vibe",
    category: "E-Library",
    shortDescription: "Dynamic library manager with React Context and LocalStorage.",
    fullDescription: "Dynamic library manager with React Context and LocalStorage for tracking reading habits.",
    image: "/project-6.png",
    liveUrl: "https://book-vibe-created-by-himel.netlify.app/",
    technologies: ["React", "Tailwind"],
    keyFeatures: ["Local storage persistence", "React Context management"]
  },
  {
    id: "lumina-saas",
    slug: "lumina-saas",
    title: "Lumina SaaS",
    category: "Dashboard",
    shortDescription: "High-performance data visualization platform for modern SaaS.",
    fullDescription: "High-performance data visualization platform for modern SaaS focusing on analytics.",
    image: "/project-7.png",
    liveUrl: "https://incandescent-sunshine-8902d7.netlify.app/",
    technologies: ["Vue", "Chart.js"],
    keyFeatures: ["Data visualization", "Analytics dashboard"]
  },
  {
    id: "spontaneous-3d",
    slug: "spontaneous-3d",
    title: "Spontaneous 3D",
    category: "Portfolio",
    shortDescription: "Immersive 3D personal brand showcase using Three.js R3F.",
    fullDescription: "Immersive 3D personal brand showcase using Three.js R3F bringing a unique interactive portfolio experience.",
    image: "/project-8.png",
    liveUrl: "https://spontaneous-profiterole-c33b49.netlify.app/",
    technologies: ["Three.js", "React"],
    keyFeatures: ["3D rendering", "Interactive canvas"]
  },
  {
    id: "assignment-1",
    slug: "assignment-1",
    title: "Assignment 1",
    category: "Beginner Project",
    shortDescription: "First HTML & CSS foundational project exploring basic web page structure and layout.",
    fullDescription: "An early-stage assignment created during the initial phase of my web development learning journey. It focuses on fundamental HTML5 structure, basic layout styling with CSS3, and core web presentation principles.",
    image: "/img-1.png",
    liveUrl: "https://sbhimel.github.io/Assignment-1for-submit/",
    clientGithub: "https://github.com/SBHimel/Assignment-1for-submit",
    technologies: ["HTML5", "CSS3"],
    keyFeatures: [
      "Semantic HTML5 structure",
      "Basic CSS layout & styling",
      "Responsive layout principles"
    ],
    challenges: [
      "Understanding core CSS box model concepts, alignment, and element positioning without external UI frameworks.",
      "Learning basic positioning and styling principles for beginner web development."
    ],
    futureImprovements: [
      "Refactor layout using modern CSS Flexbox and Grid.",
      "Enhance responsive design for modern screen sizes."
    ]
  },
  {
    id: "assignment-4",
    slug: "assignment-4",
    title: "Assignment 4",
    category: "Beginner Project",
    shortDescription: "Early JavaScript exploration focusing on DOM manipulation and basic dynamic logic.",
    fullDescription: "A beginner-level frontend assignment created to practice JavaScript fundamentals, interactive DOM elements, event handling, and conditional logic.",
    image: "/img-2.png",
    liveUrl: "https://sbhimel.github.io/Assignment-4-for-submit/",
    clientGithub: "https://github.com/SBHimel/Assignment-4-for-submit",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "DOM Element Selection",
      "Event Handling",
      "Basic Interactive Logic"
    ],
    challenges: [
      "Grasping event handling and state updates using native vanilla JavaScript.",
      "Connecting interactive elements with dynamic DOM updates cleanly."
    ],
    futureImprovements: [
      "Enhance visual UI/UX design and accessibility.",
      "Modularize JavaScript code into clean reusable functions."
    ]
  },
  {
    id: "assignment-5",
    slug: "assignment-5",
    title: "Assignment 5",
    category: "Beginner Project",
    shortDescription: "Interactive web page demonstrating form handling, JavaScript logic, and UI styling.",
    fullDescription: "An early web development assignment building upon core frontend concepts, practicing form input handling, dynamic UI rendering, and structured styling.",
    image: "/img-3.png",
    liveUrl: "https://sbhimel.github.io/Assignment-5-for-submit/",
    clientGithub: "https://github.com/SBHimel/Assignment-5-for-submit",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    keyFeatures: [
      "Form Input Handling",
      "Dynamic DOM Rendering",
      "Structured Layout Design"
    ],
    challenges: [
      "Handling user inputs correctly and updating DOM nodes synchronously upon user interaction.",
      "Structuring JavaScript functions cleanly for basic application logic."
    ],
    futureImprovements: [
      "Rebuild using modern React component architecture.",
      "Incorporate smooth transitions and input validation rules."
    ]
  }
];
