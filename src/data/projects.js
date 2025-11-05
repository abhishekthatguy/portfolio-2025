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
    star: [
      {
        situation: "Policy Advisor needed a comprehensive insurance platform to serve multiple broker channels, but lacked a scalable frontend architecture and faced performance issues with page load times ranging from 5-8 seconds.",
        task: "As Senior Frontend Architect, I was tasked with leading a team of 5+ developers to build the entire Vue.js application ecosystem from scratch, including admin panels, broker portals, and customer-facing interfaces, while ensuring optimal performance and scalability.",
        action: "I architected a scalable component library with 100+ reusable components, implemented advanced performance optimizations (code splitting, lazy loading, image optimization), integrated GraphQL APIs using Strapi headless CMS, built comprehensive admin panels with Vue.js/Vuex/Vuetify, developed a multi-tenant themed broker flow system with dynamic styling engine, and implemented SEO strategies focusing on Core Web Vitals optimization.",
        result: "Achieved 30-90% improvement in page load times across all modules, reached 95+ PageSpeed scores with optimized Core Web Vitals (LCP, FID, CLS), reduced bounce rate by 40%, decreased API response time by 60% through GraphQL optimization, and improved developer productivity by 50% with the reusable component library."
      },
      {
        situation: "The platform required handling complex insurance workflows with 50+ field forms, real-time data synchronization across 20+ broker channels, and ensuring WCAG 2.1 AA accessibility compliance for financial services regulations.",
        task: "Design and implement a system that manages complex form validation, real-time WebSocket synchronization, accessibility compliance, and multi-tenant theming without impacting performance or user experience.",
        action: "Created optimized form validation layers with Vuex state management, implemented WebSocket connections for real-time data synchronization, conducted accessibility audits and fixes to meet WCAG 2.1 AA standards, built a flexible theming engine supporting dynamic brand customization, and utilized SCSS preprocessing with ESLint validation for code quality.",
        result: "Successfully handled complex insurance forms without performance degradation, achieved seamless real-time synchronization across all broker channels, ensured full WCAG 2.1 AA compliance, delivered 15+ major modules using Agile/Scrum methodology, and created a scalable multi-tenant system that supports unlimited broker customizations."
      }
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
    star: [
      {
        situation: "The insurance application process required complex multi-step forms with 100+ fields, but existing solutions had high abandonment rates, validation errors, and lacked brand consistency across different broker partners.",
        task: "Architect and develop a sophisticated multi-tenant broker flow system that provides intuitive form navigation, real-time validation, input masking, and dynamic brand customization for 15+ broker partners while maintaining code reusability.",
        action: "Built a multi-tenant themed system with dynamic brand customization, implemented advanced form validation using Vee-validate with custom rules, integrated Vue-mask for input masking and data integrity, created a progressive form wizard with step-by-step navigation and progress tracking, developed 30+ reusable form components with modular architecture, implemented Vuex/Pinia state management for complex form data, added real-time form data persistence and auto-save functionality, and ensured responsive design across all devices.",
        result: "Improved form completion rate by 35%, reduced validation errors by 50% with real-time feedback, achieved 40% faster form submission times, enhanced user satisfaction scores, and increased broker adoption rate with branded white-label solution that maintains consistency across all variations."
      },
      {
        situation: "Managing complex form state across multiple steps with validation dependencies was causing user frustration, and ensuring consistent UI/UX across 15+ broker variations while maintaining code reusability was a significant challenge.",
        task: "Create a system that handles validation dependencies across form steps, ensures consistent user experience across all broker themes, and maintains high code reusability to reduce development and maintenance overhead.",
        action: "Designed a state management architecture using Vuex/Pinia to handle form state across steps, implemented conditional validation logic that respects field dependencies, created a theming engine that applies broker-specific styles while maintaining component structure, utilized SCSS preprocessing with BEM methodology for maintainable styles, and implemented accessible form controls meeting WCAG 2.1 standards.",
        result: "Successfully managed complex form state without errors, achieved consistent UI/UX across all broker variations, reduced code duplication by 70% through reusable components, improved accessibility compliance, and streamlined the addition of new broker partners."
      }
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
    star: [
      {
        situation: "Accredo & Express Scripts healthcare applications were built on legacy class-based React components with outdated patterns, low test coverage, and technical debt that was impacting development velocity and user experience for millions of patients.",
        task: "Lead comprehensive UI refactoring of critical healthcare applications while maintaining zero downtime, ensuring HIPAA compliance, and migrating to modern React architecture with functional components, hooks, and Context API.",
        action: "Systematically refactored legacy class-based components to functional components with React Hooks, created 20+ custom hooks for reusable business logic and API integration, built a custom UI component library with 40+ accessible components using React and Context API, developed comprehensive unit test suites with Jest achieving 85%+ coverage, integrated ESLint validation pipeline using Gulp, implemented asynchronous API integration with error handling and retry logic, utilized LaunchDarkly for feature flags, and ensured WCAG 2.1 AA accessibility compliance.",
        result: "Improved code maintainability by 60%, achieved 85%+ test coverage reducing regression bugs by 45%, reduced technical debt by 70%, enhanced user experience for healthcare professionals, improved application performance by 30%, and successfully delivered 10+ modules within Agile sprint deadlines."
      },
      {
        situation: "The migration from legacy state management to Context API had to be done without disrupting critical healthcare workflows that process millions of patient records daily, while also ensuring HIPAA compliance in all UI interactions.",
        task: "Execute a seamless migration strategy that maintains existing functionality, ensures HIPAA compliance with data masking and secure forms, and implements accessibility standards without impacting production workflows.",
        action: "Created a phased migration plan with feature flags, implemented Context API alongside existing state management for gradual transition, added HIPAA-compliant data masking for patient information, ensured secure form handling for sensitive healthcare data, implemented WCAG 2.1 AA accessibility standards, conducted thorough testing at each migration phase, and maintained comprehensive documentation.",
        result: "Completed migration with zero downtime, maintained full HIPAA compliance, achieved accessibility standards for healthcare compliance, eliminated legacy state management dependencies, and improved application reliability with modern patterns."
      }
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
    star: [
      {
        situation: "NYGGS needed to transform from a monolithic enterprise platform to a scalable microservices architecture to support multiple business verticals, handle growing transaction volumes (approaching 100K+ daily), and improve system reliability and developer productivity.",
        task: "Architect and implement a comprehensive microservices automation suite with JWT authentication, role-based access control, real-time data synchronization, and AWS cloud infrastructure, while incrementally migrating from monolithic architecture without disrupting operations.",
        action: "Designed microservices architecture with 8+ independent services, implemented JWT authentication with RBAC for 10+ user roles, built manual deployment pipeline for front-end projects on AWS EC2, created multiple sub-projects with comprehensive CRUD operations, developed activation orders execution system with event-driven architecture, implemented React, Redux, and Axios from scratch for new modules, established real-time data synchronization using WebSocket connections, and built comprehensive dashboards with analytics capabilities.",
        result: "Successfully deployed scalable microservices architecture handling 100K+ daily transactions, improved system reliability by 80% and maintainability through modular architecture, enhanced security reducing unauthorized access by 95%, reduced deployment time by 60%, improved application performance by 50%, and increased developer productivity by 40%."
      },
      {
        situation: "Coordinating deployments across distributed microservices, managing complex state across services, ensuring data consistency, and implementing secure authentication without performance impact were critical challenges in the microservices migration.",
        task: "Design and implement solutions for state management across microservices, secure JWT authentication system, coordinated deployment strategies, and data consistency patterns that maintain system performance and reliability.",
        action: "Implemented Redux and context providers for managing complex state across microservices, optimized JWT authentication to minimize performance overhead, created deployment coordination strategies for zero-downtime releases, implemented eventual consistency patterns for data synchronization, utilized Material UI for responsive admin panels, and established AWS infrastructure management processes.",
        result: "Achieved seamless state management across all microservices, implemented secure authentication without performance degradation, coordinated deployments without downtime, ensured data consistency across services, and maintained high system reliability throughout the migration."
      }
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
    star: [
      {
        situation: "I needed to build a modern portfolio website that demonstrates expertise in performance optimization and modern web development, but most portfolio sites struggle with balancing rich visual experiences (animations, themes) with optimal performance scores.",
        task: "Create a cutting-edge portfolio website using Next.js 14 that achieves perfect PageSpeed scores (100/100) and Core Web Vitals while implementing advanced animations, theme system, and SEO optimization without compromising user experience.",
        action: "Built the site with Next.js 14 App Router for optimal performance, implemented TypeScript for type safety, utilized SSR and ISR for fast page loads, integrated Framer Motion animations optimized for performance, created a responsive design with Tailwind CSS, implemented theme system with zero FOUC, optimized Core Web Vitals (LCP, FID, CLS), and added comprehensive SEO with structured data and meta tags.",
        result: "Achieved 100/100 PageSpeed scores on both mobile and desktop, perfect Core Web Vitals (LCP < 1.2s, FID < 10ms, CLS < 0.1), zero layout shift with smooth theme transitions, fast time-to-interactive with optimized bundle sizes, improved SEO rankings, and enhanced user engagement with performant animations."
      },
      {
        situation: "Balancing complex animations, theme switching, and server/client component state management in Next.js 14 App Router while maintaining perfect performance metrics was challenging, especially avoiding flash of unstyled content during theme transitions.",
        task: "Implement a robust theme system that works seamlessly across server and client components, optimize animations to not impact Core Web Vitals, and ensure accessibility while maintaining the rich visual experience.",
        action: "Designed theme system with script-based initialization to prevent FOUC, optimized animations using Framer Motion with performance-focused configurations, managed state effectively across server/client boundaries, implemented accessibility features for all animations, and created smooth transitions that maintain performance metrics.",
        result: "Achieved zero FOUC with instant theme switching, maintained perfect performance scores with optimized animations, ensured full accessibility compliance, created seamless user experience across all devices, and demonstrated modern web development best practices."
      }
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
    star: [
      {
        situation: "I needed to demonstrate full-stack MERN stack expertise by building a complete e-commerce platform, but creating a secure, scalable system with payment processing, inventory management, and real-time features posed significant technical challenges.",
        task: "Architect and develop a full-stack e-commerce platform using MERN stack (MongoDB, Express, React, Node.js) with secure payment integration, comprehensive admin dashboard, real-time inventory management, and optimal user experience that scales effectively.",
        action: "Built full-stack MERN application with RESTful API architecture, implemented JWT-based user authentication and authorization, created product catalog with advanced filtering and search, developed shopping cart with persistent state and checkout process, integrated Stripe API for secure payment processing, built order management system with status tracking, created admin dashboard for product/order/user management, implemented real-time inventory management with stock updates, and added email notifications for order confirmations.",
        result: "Successfully processed 1000+ test transactions securely, achieved sub-second API response times for product queries, reduced cart abandonment by 30% with improved UX, created scalable architecture supporting future growth, and delivered comprehensive admin tools improving operational efficiency."
      },
      {
        situation: "Implementing secure payment processing required PCI compliance considerations, managing complex state across cart/products/user sessions, ensuring data consistency in inventory with concurrent orders, and optimizing database performance while maintaining real-time capabilities.",
        task: "Solve complex technical challenges including secure payment processing, state management, data consistency, and performance optimization without compromising user experience or system reliability.",
        action: "Designed secure payment flow with PCI compliance best practices, implemented Redux for managing complex state across cart/products/sessions, created database transactions and locking mechanisms for inventory consistency, optimized MongoDB queries with proper indexing, implemented efficient polling for real-time updates, and added comprehensive error handling and validation.",
        result: "Ensured secure payment processing with no security incidents, successfully managed complex state without data loss, maintained data consistency even with concurrent orders, achieved optimal database performance, and provided seamless real-time user experience."
      }
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
    star: [
      {
        situation: "Multiple client projects were experiencing poor performance with PageSpeed scores of 40-60, slow page load times (5-8 seconds), large bundle sizes, and failing Core Web Vitals, leading to high bounce rates and poor user experience.",
        task: "Develop and implement comprehensive performance optimization strategies across multiple client projects that improve PageSpeed scores, reduce bundle sizes, optimize Core Web Vitals, and enhance overall user experience while maintaining feature functionality.",
        action: "Implemented code splitting and lazy loading for optimal bundle sizes, optimized images with WebP format and responsive images, conducted bundle analysis reducing sizes by 60%+, implemented caching strategies (service workers, HTTP caching), optimized Core Web Vitals (LCP, FID, CLS), optimized database queries and API response times, extracted and inlined critical CSS, integrated CDN for static assets, and implemented performance monitoring and analytics.",
        result: "Achieved 90%+ improvement in page load times across multiple projects, improved PageSpeed scores from 40-60 to 90-100, reduced bundle sizes by 60-70%, improved Core Web Vitals (LCP < 2.5s, FID < 10ms, CLS < 0.1), reduced bounce rates by 25-40%, and reduced server costs by 40% through efficient caching."
      },
      {
        situation: "Balancing feature richness with performance requirements, optimizing third-party scripts, achieving consistent performance gains across different network conditions, and maintaining optimization benefits as code evolved were ongoing challenges that required systematic approaches.",
        task: "Create optimization strategies that work across various network conditions and devices, maintain performance benefits through code evolution, and educate team members on performance best practices for long-term sustainability.",
        action: "Developed adaptive loading strategies for different network conditions, created optimization guidelines and best practices documentation, implemented automated performance testing in CI/CD pipelines, optimized third-party scripts with async loading and defer strategies, established performance budgets and monitoring, and conducted team training sessions on performance optimization.",
        result: "Achieved consistent performance improvements across all network conditions, maintained optimization benefits through multiple feature releases, reduced performance regressions by 80%, improved team understanding of performance best practices, and established sustainable optimization processes."
      }
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
    star: [
      {
        situation: "Multiple enterprise projects were experiencing design inconsistencies, duplicate component code, lengthy development cycles, and UI bugs due to lack of a unified design system and reusable component library.",
        task: "Architect and build a comprehensive design system and reusable component library that accelerates development, ensures design consistency, and provides accessible, well-documented components for use across 10+ enterprise applications.",
        action: "Created a comprehensive design system with design tokens (colors, typography, spacing), developed 100+ reusable React components with TypeScript interfaces, built Storybook documentation for component showcase and development, ensured accessible components meeting WCAG 2.1 AA standards, implemented theming system supporting multiple brand variations, established component testing with Jest and React Testing Library, set up NPM package distribution for easy integration, created comprehensive developer documentation and usage guidelines, and integrated design-to-code workflow with Figma.",
        result: "Reduced development time by 50% through reusable component library, improved design consistency across 10+ enterprise applications, achieved 95%+ component test coverage ensuring reliability, enhanced developer experience with comprehensive documentation, reduced UI bugs by 60% through standardized components, and accelerated onboarding for new team members with clear guidelines."
      },
      {
        situation: "Creating components flexible enough for various use cases while maintaining consistency, ensuring accessibility standards across all interactions, balancing complexity with usability and performance, managing versioning and backward compatibility, and coordinating with design team for token synchronization were ongoing challenges.",
        task: "Design flexible component architecture that maintains consistency, ensure accessibility compliance across all components, balance complexity with performance, establish versioning strategies for backward compatibility, and create effective collaboration processes with the design team.",
        action: "Designed component architecture with composable patterns allowing flexibility while maintaining core consistency, implemented comprehensive accessibility testing and audits, optimized component performance through code splitting and lazy loading, established semantic versioning and migration guides for backward compatibility, created design token sync process with design team using Figma integration, and maintained comprehensive documentation for all design decisions.",
        result: "Achieved flexible components that adapt to various use cases while maintaining 100% design consistency, ensured full WCAG 2.1 AA compliance across all components, maintained optimal performance with no impact on bundle size, successfully managed versions with zero breaking changes, and established seamless design-to-development workflow."
      }
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

