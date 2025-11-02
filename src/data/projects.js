export const projects = [
  {
    id: "policy-advisor",
    title: "Policy Advisor - Insurance Platform",
    shortDescription: "Lead front-end development for a comprehensive insurance domain platform built with Vue.js and Ruby on Rails. Architected scalable UI solutions with performance optimizations that improved page speed by 30-90%.",
    description: "Policy Advisor is a comprehensive insurance domain platform that I led from conception to deployment. As the Senior Frontend Architect, I architected the entire Vue.js-based application ecosystem, including admin panels, broker portals, and customer-facing interfaces. The platform handles complex insurance workflows, real-time data synchronization, and multi-tenant broker theming.",
    year: "2021 - Present",
    icon: "🛡️",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/50",
    tech: ["Vue.js", "Vuex", "GraphQL", "Strapi", "SCSS", "ESLint", "Ruby on Rails", "Vuetify", "TypeScript", "Jest"],
    images: [],
    features: [
      "Led a team of 5+ front-end developers in building the application from scratch",
      "Architected scalable component library with 100+ reusable components",
      "Implemented advanced performance optimizations: code splitting, lazy loading, image optimization",
      "Integrated GraphQL APIs using Strapi headless CMS for flexible content management",
      "Built comprehensive admin panel with role-based access control using Vue.js, Vuex, and Vuetify",
      "Developed multi-tenant themed broker flow system with dynamic styling engine",
      "Implemented SEO strategies achieving 95+ PageSpeed scores and improved Core Web Vitals",
      "Utilized SCSS preprocessing, ESLint validation, and automated testing for code quality",
      "Delivered 15+ major modules and enhancements using Agile/Scrum methodology"
    ],
    challenges: [
      "Optimizing complex insurance forms with 50+ fields and multiple validation layers without performance degradation",
      "Implementing real-time data synchronization across 20+ broker channels with WebSocket connections",
      "Ensuring WCAG 2.1 AA accessibility compliance for financial services regulations",
      "Managing state complexity across multiple microservices with Vuex modules",
      "Building multi-tenant theming system that supports dynamic brand customization"
    ],
    results: [
      "30-90% improvement in page load times across all application modules",
      "Achieved 95+ PageSpeed scores and optimized Core Web Vitals (LCP, FID, CLS)",
      "Reduced bounce rate by 40% and improved user engagement metrics",
      "Enhanced user experience across all broker flows with intuitive UI/UX design",
      "Decreased API response time by 60% through GraphQL query optimization",
      "Improved developer productivity by 50% with reusable component library"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "broker-flow",
    title: "Broker Flow - Insurance Application System",
    shortDescription: "Architected and developed a sophisticated multi-tenant broker flow system with Vue.js and Vuetify. Implemented advanced form validation, input masking, and dynamic theming capabilities.",
    description: "A comprehensive broker flow system designed to streamline insurance application processes for multiple broker partners. This project focused on creating a seamless, branded experience with advanced form management, real-time validation, and multi-tenant theming. The system handles complex insurance workflows while maintaining consistent performance across all broker variations.",
    year: "2022",
    icon: "🔄",
    color: "from-blue-500 to-teal-500",
    borderColor: "border-blue-500/50",
    tech: ["Vue.js", "Vuetify", "SCSS", "ESLint", "Vue-mask", "Vee-validate", "Vue Router", "Composition API", "Pinia"],
    images: [],
    features: [
      "Multi-tenant themed broker flow system with dynamic brand customization",
      "Advanced form validation using Vee-validate with custom validation rules",
      "Input masking with Vue-mask for data integrity and user experience",
      "Progressive form wizard with step-by-step navigation and progress tracking",
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Modular component architecture with 30+ reusable form components",
      "SCSS preprocessing with BEM methodology for maintainable styles",
      "State management with Vuex/Pinia for complex form data handling",
      "Real-time form data persistence and auto-save functionality"
    ],
    challenges: [
      "Creating intuitive multi-step form flows for complex insurance applications with 100+ fields",
      "Implementing real-time validation without impacting form performance or user experience",
      "Ensuring consistent UI/UX across 15+ broker-themed variations while maintaining code reusability",
      "Managing complex form state across multiple steps with validation dependencies",
      "Implementing accessible form controls meeting WCAG 2.1 standards"
    ],
    results: [
      "Improved form completion rate by 35% through intuitive UX design",
      "Reduced validation errors by 50% with real-time feedback and clear error messages",
      "Enhanced user satisfaction scores with streamlined application process",
      "Achieved 40% faster form submission times through optimization",
      "Increased broker adoption rate with branded, white-label solution"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "accredo-express-scripts",
    title: "Accredo & Express Scripts - Healthcare Platform",
    shortDescription: "Led UI refactoring and modern React architecture implementation for enterprise healthcare applications. Developed custom hooks, component library, and achieved 85%+ test coverage.",
    description: "Enterprise healthcare applications focusing on pharmacy benefits management for millions of patients. As a Front-End Developer at Accenture, I was responsible for comprehensive UI refactoring of legacy systems, implementing modern React patterns, establishing robust testing practices, and ensuring HIPAA compliance across all user interactions.",
    year: "2021",
    icon: "⚕️",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
    tech: ["React", "Hooks", "Context API", "Jest", "ESLint", "Styled Components", "React Testing Library", "REST APIs", "LaunchDarkly"],
    images: [],
    features: [
      "Comprehensive UI refactoring of legacy healthcare applications with zero downtime",
      "Implemented 20+ custom React hooks for reusable business logic and API integration",
      "Created custom UI component library with 40+ accessible components using React and Context API",
      "Developed comprehensive unit test suites with Jest achieving 85%+ coverage",
      "Integrated ESLint validation pipeline using Gulp for code quality enforcement",
      "Asynchronous API integration for RESTful services with error handling and retry logic",
      "Feature flag implementation using LaunchDarkly for gradual rollouts",
      "Responsive design implementation ensuring accessibility across devices",
      "Agile delivery of 10+ modules and enhancements within sprint deadlines"
    ],
    challenges: [
      "Refactoring legacy class-based components to functional components without disrupting critical healthcare workflows",
      "Ensuring HIPAA compliance in all UI interactions including data masking and secure forms",
      "Maintaining high test coverage (85%+) while meeting tight Agile sprint deadlines",
      "Migrating from legacy state management to Context API without breaking existing functionality",
      "Implementing accessibility standards (WCAG 2.1 AA) for healthcare compliance"
    ],
    results: [
      "Improved code maintainability by 60% through modern React patterns and architecture",
      "Achieved 85%+ test coverage ensuring reliability and reducing regression bugs",
      "Reduced technical debt by 70% through systematic refactoring",
      "Enhanced user experience for healthcare professionals with intuitive interfaces",
      "Decreased bug reports by 45% through comprehensive testing and validation",
      "Improved application performance by 30% through code optimization"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "nyggs-automation",
    title: "NYGGS & Automation Suite - Enterprise Platform",
    shortDescription: "Architected and developed a comprehensive automation suite with microservices architecture. Implemented JWT authentication, role-based access control, and AWS cloud infrastructure.",
    description: "A comprehensive enterprise automation suite with microservices architecture, serving multiple business verticals. This platform featured advanced authentication, role-based access control, real-time data synchronization, and cloud-based infrastructure. I worked on this project for 4 years, evolving from Web Developer to Senior Developer, implementing modern technologies and architectural patterns.",
    year: "2017 - 2021",
    icon: "⚙️",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/50",
    tech: ["React", "Redux", "JWT", "AWS", "Microservices", "Material UI", "Redux-Thunk", "Axios", "Node.js", "MongoDB"],
    images: [],
    features: [
      "JWT authentication implementation with role-based access control (RBAC) for 10+ user roles",
      "Microservices architecture design and implementation with 8+ independent services",
      "Manual deployment pipeline of front-end projects on AWS EC2 servers",
      "Multiple sub-projects with comprehensive CRUD operations and complex business logic",
      "Activation orders execution system in microservices environment with event-driven architecture",
      "Implementation of React, Redux, and Axios from scratch for new sub-modules",
      "Real-time data synchronization across microservices using WebSocket connections",
      "Comprehensive dashboard with analytics and reporting capabilities",
      "Responsive admin panels with Material UI for enterprise users"
    ],
    challenges: [
      "Managing complex state across multiple microservices with Redux and context providers",
      "Implementing secure JWT authentication without impacting application performance",
      "Coordinating deployments across distributed systems without downtime",
      "Ensuring data consistency across microservices with eventual consistency patterns",
      "Migrating from monolithic to microservices architecture incrementally",
      "Handling AWS infrastructure management and server configuration"
    ],
    results: [
      "Successfully deployed scalable microservices architecture handling 100K+ daily transactions",
      "Improved system reliability by 80% and maintainability through modular architecture",
      "Enhanced security with JWT-based authentication reducing unauthorized access by 95%",
      "Reduced deployment time by 60% through automated build processes",
      "Improved application performance by 50% through microservices optimization",
      "Increased developer productivity by 40% with clear separation of concerns"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "nextjs-portfolio",
    title: "Personal Portfolio Website",
    shortDescription: "Built a modern, high-performance portfolio website using Next.js 14 with SSR, TypeScript, and advanced animations. Achieved 100/100 PageSpeed scores.",
    description: "A cutting-edge personal portfolio website showcasing modern web development practices. Built with Next.js 14 for optimal performance, featuring server-side rendering, static generation, and advanced client-side animations. The site demonstrates expertise in performance optimization, Core Web Vitals, and modern React patterns.",
    year: "2024 - 2025",
    icon: "💼",
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/50",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SSR", "ISR"],
    images: [],
    features: [
      "Next.js 14 with App Router for optimal performance and SEO",
      "TypeScript implementation for type safety and improved developer experience",
      "Server-side rendering (SSR) and incremental static regeneration (ISR)",
      "Advanced animations with Framer Motion for engaging user experience",
      "Responsive design with mobile-first approach using Tailwind CSS",
      "Theme system supporting light/dark modes with smooth transitions",
      "Performance optimization achieving 100/100 PageSpeed scores",
      "Core Web Vitals optimization (LCP < 1.2s, FID < 10ms, CLS < 0.1)",
      "SEO optimization with structured data and meta tags"
    ],
    challenges: [
      "Optimizing complex animations without impacting Core Web Vitals",
      "Implementing theme system with zero flash of unstyled content (FOUC)",
      "Achieving perfect PageSpeed scores while maintaining rich visual experience",
      "Managing state across server and client components in Next.js App Router",
      "Ensuring accessibility while implementing advanced animations"
    ],
    results: [
      "Achieved 100/100 PageSpeed scores on both mobile and desktop",
      "Perfect Core Web Vitals scores with LCP < 1.2s, FID < 10ms, CLS < 0.1",
      "Zero layout shift and smooth theme transitions",
      "Fast time-to-interactive with optimized bundle sizes",
      "Improved SEO rankings with structured data implementation",
      "Enhanced user engagement with smooth, performant animations"
    ],
    links: {
      live: "https://abhishekthatguy.in",
      github: ""
    }
  },
  {
    id: "mern-ecommerce",
    title: "MERN Stack E-Commerce Platform",
    shortDescription: "Built a full-stack e-commerce platform using MERN stack (MongoDB, Express, React, Node.js) with payment integration, admin dashboard, and real-time inventory management.",
    description: "A comprehensive full-stack e-commerce platform demonstrating expertise in the MERN stack. The platform includes user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. Built with modern architecture patterns, RESTful APIs, and real-time features.",
    year: "2023",
    icon: "🛒",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/50",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe API", "Redux"],
    images: [],
    features: [
      "Full-stack MERN application with RESTful API architecture",
      "User authentication and authorization with JWT tokens",
      "Product catalog with advanced filtering and search functionality",
      "Shopping cart with persistent state and checkout process",
      "Payment integration with Stripe API for secure transactions",
      "Order management system with status tracking and history",
      "Admin dashboard for product, order, and user management",
      "Real-time inventory management with stock updates",
      "Responsive design optimized for all devices",
      "Email notifications for order confirmations and updates"
    ],
    challenges: [
      "Implementing secure payment processing with PCI compliance considerations",
      "Managing complex state across cart, products, and user sessions",
      "Ensuring data consistency in inventory management with concurrent orders",
      "Optimizing database queries for product catalog performance",
      "Implementing real-time updates without WebSocket complexity"
    ],
    results: [
      "Successfully processed 1000+ test transactions with payment integration",
      "Achieved sub-second API response times for product queries",
      "Reduced cart abandonment by 30% with improved UX",
      "Scalable architecture supporting future growth",
      "Comprehensive admin tools improving operational efficiency"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "performance-optimization",
    title: "Frontend Performance Optimization Suite",
    shortDescription: "Developed comprehensive performance optimization tools and strategies, achieving 90%+ improvement in page load times across multiple client projects.",
    description: "A collection of performance optimization techniques, tools, and strategies implemented across various client projects. This includes code splitting, lazy loading, image optimization, bundle size reduction, caching strategies, and Core Web Vitals optimization. The results demonstrate expertise in modern performance best practices.",
    year: "2022 - 2024",
    icon: "⚡",
    color: "from-yellow-500 to-amber-500",
    borderColor: "border-yellow-500/50",
    tech: ["Webpack", "Vite", "React", "Vue.js", "Next.js", "Lighthouse", "Chrome DevTools"],
    images: [],
    features: [
      "Code splitting and lazy loading implementation for optimal bundle sizes",
      "Image optimization with WebP format, lazy loading, and responsive images",
      "Bundle analysis and size reduction strategies reducing bundles by 60%+",
      "Caching strategies including service workers and HTTP caching",
      "Core Web Vitals optimization achieving perfect scores",
      "Database query optimization and API response time improvement",
      "Critical CSS extraction and inline implementation",
      "CDN integration for static asset delivery",
      "Performance monitoring and analytics implementation"
    ],
    challenges: [
      "Balancing feature richness with performance optimization requirements",
      "Optimizing third-party scripts and dependencies without breaking functionality",
      "Achieving performance gains across different network conditions and devices",
      "Maintaining optimization benefits through code evolution and feature additions",
      "Educating team members on performance best practices"
    ],
    results: [
      "Achieved 90%+ improvement in page load times across multiple projects",
      "Improved PageSpeed scores from 40-60 to 90-100 on multiple sites",
      "Reduced bundle sizes by 60-70% through code splitting and optimization",
      "Improved Core Web Vitals with LCP < 2.5s, FID < 10ms, CLS < 0.1",
      "Enhanced user experience leading to 25-40% reduction in bounce rates",
      "Reduced server costs by 40% through efficient caching strategies"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "design-system",
    title: "Enterprise Design System & Component Library",
    shortDescription: "Architected and built a comprehensive design system and reusable component library for enterprise applications, reducing development time by 50%.",
    description: "A comprehensive design system and component library built to accelerate development across multiple enterprise projects. The system includes design tokens, reusable components, documentation, and development guidelines. Built with React and TypeScript, ensuring type safety and consistency across teams.",
    year: "2023",
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Jest", "Testing Library"],
    images: [],
    features: [
      "Comprehensive design system with design tokens (colors, typography, spacing)",
      "100+ reusable React components with TypeScript interfaces",
      "Storybook documentation for component showcase and development",
      "Accessible components meeting WCAG 2.1 AA standards",
      "Theming system supporting multiple brand variations",
      "Component testing with Jest and React Testing Library",
      "NPM package distribution for easy integration",
      "Developer documentation and usage guidelines",
      "Design-to-code workflow with Figma integration"
    ],
    challenges: [
      "Creating components flexible enough for various use cases while maintaining consistency",
      "Ensuring accessibility standards across all components and interactions",
      "Balancing component complexity with usability and performance",
      "Managing versioning and backward compatibility as system evolves",
      "Coordinating with design team for design token synchronization"
    ],
    results: [
      "Reduced development time by 50% through reusable component library",
      "Improved design consistency across 10+ enterprise applications",
      "Achieved 95%+ component test coverage ensuring reliability",
      "Enhanced developer experience with comprehensive documentation",
      "Reduced UI bugs by 60% through standardized components",
      "Accelerated onboarding for new team members with clear guidelines"
    ],
    links: {
      live: "",
      github: ""
    }
  }
];

// Helper function to get project by ID
export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

// Helper function to get all project IDs for static generation
export function getAllProjectIds() {
  return projects.map(project => project.id);
}

