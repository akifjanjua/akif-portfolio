export const projects = [
  {
  title: "AI-Driven Multi-Objective Toolpath Optimization",
  slug: "ai-driven-cnc-optimization",
  category: "Final Year Project",
  duration: "Jul 2025 – May 2026",
  thumbnail: "/projects/fyp-thumbnail.png",

  description:
    "Developed a hybrid CNC milling decision-support system using XGBoost, NSGA-II, and analytical machining models to recommend optimized cutting parameters for prismatic parts.",

  impact:
    "Optimized machining time, surface roughness, and energy consumption simultaneously, with predicted machining times validated against CREO CAM simulations.",

  overview:
    "This project involved developing a complete AI-driven decision-support system and desktop GUI application for sustainable CNC milling. The system recommends optimized cutting parameters for generic prismatic parts by combining machine learning, CAD/CAM simulation data, physics-based machining equations, and multi-objective optimization.",

  problem:
    "CNC cutting parameter selection is often dependent on manual operator experience, which can lead to inefficient machining decisions, longer cycle times, poor surface finish, and higher energy consumption. The project addressed this by automating parameter recommendation using an intelligent optimization-based approach.",

  objective:
    "The objective was to automate the selection of spindle speed, feed rate, axial depth of cut, and stepover for prismatic CNC milling parts while simultaneously minimizing machining time, surface roughness, and energy consumption.",

  methodology: [
    "Developed a complete decision-support system and desktop application interface to automate optimal cutting parameter selection for generic prismatic parts.",
    "Generated an engineering dataset by running over 13,000 CREO CAM simulation iterations across 30 different prismatic part geometries to capture complex machining behavior.",
    "Trained and fine-tuned an XGBoost regression model using regularized parameters to map tabular geometric features and cutting variables to machining cycle time predictions.",
    "Coupled the machine learning time-prediction model with physics-based analytical equations for surface roughness and energy consumption.",
    "Formulated a multi-objective optimization problem to balance machining time, surface roughness, and energy consumption.",
    "Deployed the NSGA-II evolutionary optimization framework to handle conflicting manufacturing objectives and generate a Pareto-optimal set of non-dominated solutions.",
    "Built a custom backend material database featuring 8 specific alloys, including multiple grades of Aluminum, Stainless Steel, and Mild Steel.",
    "Created a fully interactive GUI application that accepts part dimensions, pocket configurations, and tool selections to output optimized spindle speed, feed rate, axial depth of cut, and stepover.",
  ],

  results: [
    "Produced optimized CNC milling recommendations for spindle speed, feed rate, axial depth of cut, and stepover.",
    "Reduced reliance on manual operator experience by creating a data-driven decision-support workflow.",
    "Generated Pareto-optimal solutions for trade-offs between machining time, surface roughness, and energy consumption.",
    "Validated predicted machining behavior using CREO CAM simulations.",
    "Demonstrated practical feasibility through the machining of a final aluminum validation component.",
  ],

  tools: [
    "Machine Learning",
    "Multi-Objective Optimization",
    "CAD/CAM",
    "Python",
    "Sustainable Manufacturing",
    "CNC Milling",
    "XGBoost",
    "Genetic Algorithms",
    "PTC Creo",
    "User Interface Design",
    "NSGA-II",
  ],

  gallery: [
  {
    src: "/projects/fyp/machined-part-v2.jpg",
    title: "Physically Machined Part",
    description:
      "Experimental validation of the optimized cutting parameters through a final machined aluminum component.",
  },
  {
    src: "/projects/fyp/dashboard-v2.jpg",
    title: "AI Decision-Support Interface",
    description:
      "Graphical interface displaying optimized cutting parameters, predicted machining time, surface roughness, and energy consumption.",
  },
  {
    src: "/projects/fyp/architecture-v2.jpg",
    title: "Optimization System Architecture",
    description:
      "End-to-end workflow showing geometry input, XGBoost prediction, NSGA-II optimization, Pareto front generation, and selected optimized parameters.",
  },
  {
    src: "/projects/fyp/creo-simulation-v2.jpg",
    title: "CREO CAM Toolpath Simulation",
    description:
      "CAM simulation used to validate tool motion, material removal, and predicted machining behavior before physical manufacturing.",
  },
  {
    src: "/projects/fyp/response-surface-v2.jpg",
    title: "Response Surface Optimization Plots",
    description:
      "DOE-based response surface plots showing nonlinear relationships between machining variables and performance outputs.",
  },
  {
    src: "/projects/fyp/perturbation-analysis-v2.jpg",
    title: "Parameter Perturbation Analysis",
    description:
      "Sensitivity analysis showing how individual cutting parameters influence machining performance and cycle time.",
  },
],
},,
  {
    title: "Electric Human Powered Vehicle",
    slug: "electric-human-powered-vehicle",
    category: "Mechanical Design Project",
    duration: "Jan 2025 to Jun 2025",
    description:
      "Designed and developed an Electric Human Powered Vehicle by integrating mechanical design with an electric-assist system to improve mobility and efficiency.",
    impact:
      "Combined drivetrain layout, structural geometry, and battery-motor synchronization to support smoother power delivery and improved ride control.",
    tools: ["Mechanical Design", "Drivetrain", "Battery-Motor System", "Vehicle Design"],
  },
  {
    title: "Hand-Gesture Controlled Car",
    slug: "hand-gesture-controlled-car",
    category: "Robotics Project",
    duration: "Sep 2024 to Jan 2025",
    description:
      "Developed a gesture-controlled car using ESP32 and MPU6050 to enable real-time multi-directional movement through hand-motion inputs.",
    impact:
      "Implemented motion-detection logic in C++ that allowed the vehicle to stop automatically when gestures stopped, improving control and safety.",
    tools: ["ESP32", "MPU6050", "C++", "Arduino IDE", "Robotics"],
  },
];
export const experiences = [
  {
    role: "Intern",
    company: "DEL / Descon Engineering Limited",
    type: "Internship",
    duration: "Aug 2025 – Sep 2025",
    location: "Lahore, Pakistan · On-site",
    summary:
      "Worked in the Planning department within the Construction Division, gaining exposure to construction project scheduling, engineering documentation, QA/QC records, SAP workflows, and progress tracking.",
    details: [
      "Assisted in updating construction project schedules, tracking delay events, and managing activity relationships through predecessors and successors using Primavera P6.",
      "Organized and analyzed complex project data within Microsoft Excel, building interlinked multi-sheet formulas to manage Pre-Qualification Information (PQI) sheets and Project Summary Sheets (PSS) for progress tracking.",
      "Interpreted and organized multi-disciplinary engineering layouts, including mechanical piping, civil drawings, electrical systems, and Top Sheets, segregating them systematically by project location and discipline.",
      "Executed cost center data entry to classify and track ongoing project expenses against active budgets while reviewing planning and QA/QC documentation to ensure compliance with engineering standards.",
    ],
    tools: ["Primavera P6", "SAP", "Microsoft Excel", "QA/QC Documents", "Engineering Drawings"],
    certificate: "/certificates/descon-certificate.jpg",
  },
  {
    role: "Intern",
    company: "National Engineering & Scientific Commission (NESCOM)",
    type: "Internship",
    duration: "Jul 2025 – Aug 2025",
    location: "Islamabad, Pakistan · Remote",
    summary:
      "Worked on a NESCOM-sponsored development project focused on AI-driven multi-objective optimization for sustainable CNC milling.",
    details: [
      "Developed an AI-driven multi-objective optimization system and GUI for sustainable CNC milling as part of a NESCOM-sponsored development project.",
      "Generated a dataset of 13,000+ CREO CAM simulation iterations across 30+ unique prismatic part geometries to train an XGBoost regression model for machining time prediction.",
      "Integrated the predictive machine learning model with physics-based analytical equations for surface roughness and energy consumption.",
      "Utilized the NSGA-II algorithm alongside a custom 8-material database to automate optimal spindle speed, feed rate, and depth of cut recommendations to minimize cycle times and operator dependency.",
    ],
    tools: ["Python", "XGBoost", "NSGA-II", "CREO CAM", "CNC Milling", "Machine Learning"],
    certificate: "/certificates/nescom-certificate.jpg",
  },
];
export const skills = [
  {
    category: "Design & Simulation",
    items: ["SolidWorks", "CREO", "ANSYS", "CAD/CAM"],
  },
  {
    category: "Manufacturing & Industrial Tools",
    items: ["Manufacturing Processes", "CNC Milling", "SAP", "Primavera P6", "Microsoft Excel"],
  },
  {
    category: "Programming & AI",
    items: ["Python", "Machine Learning", "Data Analysis", "XGBoost", "NSGA-II"],
  },
  {
    category: "Robotics & Automation",
    items: ["Robotics", "Control Systems", "Automation Systems", "MATLAB", "ESP32"],
  },
  {
    category: "Professional Skills",
    items: ["Technical Report Writing", "Problem Solving", "Teamwork", "Collaboration"],
  },
];
export const contactLinks = [
  {
    label: "Email",
    value: "akif.janjua.123@gmail.com",
    href: "mailto:akif.janjua.123@gmail.com",
    icon: "email",
    color: "#EA4335",
  },
  {
    label: "WhatsApp / Phone",
    value: "+92 300 0466970",
    href: "https://wa.me/923000466970",
    icon: "whatsapp",
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Akif Janjua",
    href: "https://www.linkedin.com/in/akif-janjua",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    value: "Muhammad Akif Janjua",
    href: "https://github.com/akifjanjua",
    icon: "github",
    color: "#FFFFFF",
  },
];
export const education = [
  {
    degree: "BE Mechanical Engineering",
    institution: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    duration: "Sep 2022 – May 2026",
    result: "CGPA: 3.08",
    description:
      "Studied core mechanical engineering subjects with focus on design, manufacturing, thermodynamics, mechanics, robotics, automation, and engineering problem-solving.",
  },
  {
    degree: "HSSC Pre-Engineering",
    institution: "Government College University (GCU)",
    location: "Lahore, Pakistan",
    duration: "Sep 2020 – Jun 2022",
    result: "93.45%",
    description:
      "Completed pre-engineering education with strong academic performance and foundation in mathematics, physics, and engineering-oriented sciences.",
  },
];
export const certificates = [
  {
    title: "Descon Internship Certificate",
    issuer: "Descon Engineering Limited",
    date: "November 2025",
    description:
      "Certificate awarded for completing an internship in the Planning department within the Construction Division.",
    image: "/certificates/descon-certificate.jpg",
  },
  {
    title: "NESCOM Internship Certificate",
    issuer: "National Engineering & Scientific Commission (NESCOM)",
    date: "September 2025",
    description:
      "Certificate awarded for internship work on AI-driven multi-objective toolpath optimization for sustainable CNC milling.",
    image: "/certificates/nescom-certificate.jpg",
  },
];