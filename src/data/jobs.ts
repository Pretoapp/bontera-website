// src/data/jobs.ts
// Job listings data shared across the application

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  featured: boolean;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
}

export const jobListings: JobListing[] = [
  {
    id: "job-001",
    title: "Senior Project Manager",
    department: "projectManagement",
    location: "dubai",
    type: "fullTime",
    experience: "8+ years",
    posted: "2024-01-15",
    featured: true,
    description: "Lead complex construction projects from inception to completion, ensuring delivery on time and within budget while maintaining the highest quality standards.",
    responsibilities: [
      "Lead and manage multiple construction projects simultaneously",
      "Develop and maintain project schedules, budgets, and resource plans",
      "Coordinate with clients, architects, engineers, and subcontractors",
      "Ensure compliance with safety regulations and quality standards",
      "Manage project risks and implement mitigation strategies",
      "Report project progress to senior management and stakeholders",
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering, Construction Management, or related field",
      "8+ years of experience in construction project management",
      "PMP certification preferred",
      "Strong leadership and communication skills",
      "Proficiency in project management software (MS Project, Primavera)",
      "Experience with large-scale commercial or infrastructure projects",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health insurance",
      "Professional development opportunities",
      "Relocation assistance",
      "Annual leave and holiday benefits",
    ],
  },
  {
    id: "job-002",
    title: "Structural Engineer",
    department: "engineering",
    location: "dubai",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-18",
    featured: true,
    description: "Design and analyze structural systems for commercial and residential buildings, ensuring safety, efficiency, and compliance with international standards.",
    responsibilities: [
      "Design structural systems for buildings and infrastructure",
      "Perform structural analysis using advanced software",
      "Prepare detailed construction drawings and specifications",
      "Review contractor submittals and shop drawings",
      "Conduct site inspections and provide technical support",
      "Collaborate with architects and other engineering disciplines",
    ],
    requirements: [
      "Bachelor's or Master's degree in Structural/Civil Engineering",
      "5+ years of structural design experience",
      "Professional Engineer (PE) license preferred",
      "Proficiency in ETABS, SAP2000, SAFE, and AutoCAD",
      "Knowledge of international building codes (IBC, Eurocode)",
      "Strong analytical and problem-solving skills",
    ],
    benefits: [
      "Competitive salary package",
      "Health and life insurance",
      "Continuous learning opportunities",
      "Work on landmark projects",
      "Career advancement paths",
    ],
  },
  {
    id: "job-003",
    title: "Site Supervisor",
    department: "operations",
    location: "riyadh",
    type: "fullTime",
    experience: "3+ years",
    posted: "2024-01-20",
    featured: false,
    description: "Supervise daily construction activities on site, ensuring work is performed safely, on schedule, and according to specifications.",
    responsibilities: [
      "Supervise daily construction activities and workforce",
      "Ensure compliance with safety protocols and regulations",
      "Monitor work quality and adherence to specifications",
      "Coordinate material deliveries and equipment usage",
      "Maintain daily logs and progress reports",
      "Resolve on-site issues and conflicts",
    ],
    requirements: [
      "Diploma or degree in Construction Technology or related field",
      "3+ years of site supervision experience",
      "Strong knowledge of construction methods and materials",
      "Excellent communication and leadership skills",
      "Ability to read and interpret construction drawings",
      "OSHA certification preferred",
    ],
    benefits: [
      "Competitive salary",
      "Housing allowance",
      "Transportation provided",
      "Health insurance coverage",
      "Annual flight tickets",
    ],
  },
  {
    id: "job-004",
    title: "BIM Coordinator",
    department: "architecture",
    location: "dubai",
    type: "fullTime",
    experience: "4+ years",
    posted: "2024-01-22",
    featured: true,
    description: "Coordinate Building Information Modeling across all project disciplines, ensuring model accuracy and facilitating clash detection and resolution.",
    responsibilities: [
      "Develop and maintain BIM execution plans",
      "Coordinate BIM models across all disciplines",
      "Perform clash detection and resolution",
      "Create 4D/5D simulations for project visualization",
      "Train team members on BIM software and protocols",
      "Ensure BIM standards compliance",
    ],
    requirements: [
      "Bachelor's degree in Architecture, Engineering, or related field",
      "4+ years of BIM coordination experience",
      "Expert proficiency in Revit, Navisworks, and BIM 360",
      "Knowledge of BIM standards and protocols",
      "Experience with large-scale commercial projects",
      "Strong coordination and communication skills",
    ],
    benefits: [
      "Competitive compensation",
      "Health benefits package",
      "Professional certification support",
      "Modern technology environment",
      "Flexible working arrangements",
    ],
  },
  {
    id: "job-005",
    title: "Quantity Surveyor",
    department: "finance",
    location: "cairo",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-25",
    featured: false,
    description: "Manage project costs throughout the construction lifecycle, from initial estimates to final accounts and valuations.",
    responsibilities: [
      "Prepare detailed cost estimates and bills of quantities",
      "Manage project budgets and cash flow forecasts",
      "Evaluate contractor claims and variations",
      "Prepare monthly valuations and payment certificates",
      "Negotiate contracts and procurement",
      "Conduct cost analysis and value engineering",
    ],
    requirements: [
      "Bachelor's degree in Quantity Surveying or related field",
      "5+ years of quantity surveying experience",
      "RICS membership preferred",
      "Proficiency in cost estimation software",
      "Strong negotiation and analytical skills",
      "Knowledge of construction contracts (FIDIC, JCT)",
    ],
    benefits: [
      "Competitive salary",
      "Performance bonuses",
      "Professional membership support",
      "Health insurance",
      "Career development programs",
    ],
  },
  {
    id: "job-006",
    title: "HSE Manager",
    department: "operations",
    location: "dubai",
    type: "fullTime",
    experience: "7+ years",
    posted: "2024-01-26",
    featured: false,
    description: "Lead the Health, Safety, and Environment function across all projects, ensuring compliance and promoting a zero-incident culture.",
    responsibilities: [
      "Develop and implement HSE policies and procedures",
      "Conduct risk assessments and safety audits",
      "Investigate incidents and implement corrective actions",
      "Lead HSE training programs for all staff",
      "Ensure regulatory compliance across all projects",
      "Report HSE performance to management",
    ],
    requirements: [
      "Bachelor's degree in Safety Management or related field",
      "7+ years of HSE experience in construction",
      "NEBOSH Diploma or equivalent certification",
      "Strong knowledge of international safety standards",
      "Experience with ISO 45001 implementation",
      "Excellent leadership and communication skills",
    ],
    benefits: [
      "Competitive salary package",
      "Comprehensive health coverage",
      "Professional development budget",
      "Company vehicle",
      "Performance incentives",
    ],
  },
  {
    id: "job-007",
    title: "Civil Engineer",
    department: "engineering",
    location: "riyadh",
    type: "fullTime",
    experience: "3+ years",
    posted: "2024-01-28",
    featured: false,
    description: "Design and oversee civil engineering works including earthworks, drainage, and infrastructure for construction projects.",
    responsibilities: [
      "Design civil engineering works and infrastructure",
      "Prepare technical drawings and specifications",
      "Supervise construction of civil works",
      "Ensure compliance with design standards",
      "Coordinate with other engineering disciplines",
      "Provide technical support during construction",
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "3+ years of civil engineering experience",
      "Proficiency in AutoCAD and Civil 3D",
      "Knowledge of local building codes and standards",
      "Strong technical and analytical skills",
      "Valid driving license",
    ],
    benefits: [
      "Competitive salary",
      "Housing allowance",
      "Health insurance",
      "Annual leave benefits",
      "Training opportunities",
    ],
  },
  {
    id: "job-008",
    title: "HR Business Partner",
    department: "hr",
    location: "dubai",
    type: "fullTime",
    experience: "5+ years",
    posted: "2024-01-30",
    featured: false,
    description: "Partner with business leaders to develop and implement HR strategies that support organizational goals and enhance employee engagement.",
    responsibilities: [
      "Partner with business units on HR strategy",
      "Drive talent acquisition and retention initiatives",
      "Manage performance management processes",
      "Lead employee engagement programs",
      "Handle employee relations issues",
      "Support organizational change initiatives",
    ],
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "5+ years of HR experience, preferably in construction",
      "CIPD or SHRM certification preferred",
      "Strong knowledge of UAE labor laws",
      "Excellent interpersonal and communication skills",
      "Experience with HRIS systems",
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Professional development support",
      "Work-life balance initiatives",
      "Career growth opportunities",
    ],
  },
];

export const departments = [
  { key: "all", slug: "" },
  { key: "engineering", slug: "engineering" },
  { key: "projectManagement", slug: "project-management" },
  { key: "architecture", slug: "architecture" },
  { key: "operations", slug: "operations" },
  { key: "finance", slug: "finance" },
  { key: "hr", slug: "hr" },
];

export const locations = [
  { key: "all", slug: "" },
  { key: "dubai", slug: "dubai" },
  { key: "riyadh", slug: "riyadh" },
  { key: "cairo", slug: "cairo" },
  { key: "london", slug: "london" },
];

export function getJobById(id: string): JobListing | undefined {
  return jobListings.find((job) => job.id === id);
}

export function getFeaturedJobs(): JobListing[] {
  return jobListings.filter((job) => job.featured);
}
