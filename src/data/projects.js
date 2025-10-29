export const projects = [
  {
    id: "policy-advisor",
    title: "Policy Advisor",
    shortDescription: "Lead front-end development for an insurance domain tool built with Vue.js and ROR. Implemented performance optimizations that improved page speed by 30-90%.",
    description: "Policy Advisor is a comprehensive insurance domain tool that I led from conception to deployment. As the front-end team lead, I architected the entire Vue.js-based application using modern development practices and performance optimization techniques.",
    year: "2021 - Present",
    icon: "🛡️",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/50",
    tech: ["Vue.js", "Vuex", "GraphQL", "Strapi", "SCSS", "ESLint", "Ruby on Rails", "Vuetify"],
    images: [],
    features: [
      "Led a team of front-end developers in building the application from scratch",
      "Implemented advanced performance optimizations resulting in 30-90% page speed improvements",
      "Integrated GraphQL APIs using Strapi headless CMS for flexible content management",
      "Built comprehensive admin panel using Vue.js, Vuex, and Vuetify",
      "Developed themed broker flow system with custom UI components",
      "Utilized SCSS preprocessing and ESLint validation for code quality",
      "Delivered modules and enhancements using Agile methodology"
    ],
    challenges: [
      "Optimizing complex insurance forms with multiple validation layers",
      "Implementing real-time data synchronization across multiple broker channels",
      "Ensuring accessibility and compliance standards for financial services"
    ],
    results: [
      "30-90% improvement in page load times",
      "Significant improvement in Core Web Vitals scores",
      "Reduced bounce rate by 40%",
      "Enhanced user experience across all broker flows"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "broker-flow",
    title: "Broker Flow",
    shortDescription: "Developed a themed broker flow system with Vue.js and Vuetify, implementing custom UI components and SCSS preprocessing.",
    description: "A sophisticated broker flow system designed to streamline insurance application processes. This project focused on creating a seamless, themed experience for brokers while maintaining high performance and scalability.",
    year: "2022",
    icon: "🔄",
    color: "from-blue-500 to-teal-500",
    borderColor: "border-blue-500/50",
    tech: ["Vue.js", "Vuetify", "SCSS", "ESLint", "Vue-mask", "Vee-validate", "Vue Router"],
    images: [],
    features: [
      "Themed broker flow system with custom styling",
      "Advanced form validation using Vee-validate",
      "Input masking with Vue-mask for data integrity",
      "Responsive design across all device types",
      "Modular component architecture",
      "SCSS preprocessing for maintainable styles"
    ],
    challenges: [
      "Creating intuitive form flows for complex insurance applications",
      "Implementing real-time validation without impacting performance",
      "Ensuring consistency across multiple themed variations"
    ],
    results: [
      "Improved form completion rate by 35%",
      "Reduced validation errors by 50%",
      "Enhanced user satisfaction scores"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "accredo-express-scripts",
    title: "Accredo & Express Scripts",
    shortDescription: "Worked on UI refactoring and custom hooks implementation for healthcare applications. Developed unit tests and implemented ESLint validation.",
    description: "Healthcare applications focusing on pharmacy benefits management. I was responsible for major UI refactoring, implementing modern React patterns, and establishing robust testing practices.",
    year: "2021",
    icon: "⚕️",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
    tech: ["React", "Hooks", "Context API", "Jest", "ESLint", "Styled Components", "React Testing Library"],
    images: [],
    features: [
      "Comprehensive UI refactoring of legacy healthcare applications",
      "Implemented custom React hooks for reusable logic",
      "Created custom UI component library using React and Context API",
      "Developed comprehensive unit test suites with Jest",
      "Integrated ESLint validation using Gulp",
      "Asynchronous API integration for RESTful services",
      "Agile delivery of modules and enhancements"
    ],
    challenges: [
      "Refactoring legacy codebase without disrupting critical healthcare workflows",
      "Ensuring HIPAA compliance in all UI interactions",
      "Maintaining high test coverage while meeting tight deadlines"
    ],
    results: [
      "Improved code maintainability by 60%",
      "Achieved 85%+ test coverage",
      "Reduced technical debt significantly",
      "Enhanced user experience for healthcare professionals"
    ],
    links: {
      live: "",
      github: ""
    }
  },
  {
    id: "nyggs-automation",
    title: "NYGGS & Automation Suite",
    shortDescription: "Implemented JWT authentication and role-based access control. Developed microservices architecture and handled AWS deployments.",
    description: "A comprehensive automation suite with microservices architecture, featuring advanced authentication, role-based access control, and cloud-based infrastructure.",
    year: "2017 - 2021",
    icon: "⚙️",
    color: "from-orange-500 to-red-500",
    borderColor: "border-orange-500/50",
    tech: ["React", "Redux", "JWT", "AWS", "Microservices", "Material UI", "Redux-Thunk", "Axios"],
    images: [],
    features: [
      "JWT authentication implementation with role-based access control",
      "Microservices architecture design and implementation",
      "Manual deployment of front-end projects on AWS servers",
      "Multiple sub-projects with comprehensive CRUD operations",
      "Activation orders execution in microservices environment",
      "Implementation of React, Redux, and Axios from scratch"
    ],
    challenges: [
      "Managing complex state across multiple microservices",
      "Implementing secure authentication without impacting performance",
      "Coordinating deployments across distributed systems"
    ],
    results: [
      "Successfully deployed scalable microservices architecture",
      "Improved system reliability and maintainability",
      "Enhanced security with JWT-based authentication"
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

