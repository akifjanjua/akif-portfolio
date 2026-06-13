export const projects = [
  {
    title: "AI-Driven CNC Optimization",
    category: "Final Year Project",
    description:
      "Developed an intelligent decision-support system for CNC milling that recommends optimal cutting parameters using machine learning and multi-objective optimization.",
    tools: ["Python", "XGBoost", "NSGA-II", "CNC Milling"],
  },
  {
    title: "Hand Gesture Controlled Car",
    category: "Robotics Project",
    description:
      "Built a gesture-controlled robotic car using ESP32 modules, MPU6050 sensor, motor drivers, and wireless communication for real-time movement control.",
    tools: ["ESP32", "MPU6050", "Arduino IDE", "Embedded Systems"],
  },
  {
    title: "CAD & Mechanical Design Projects",
    category: "Design Portfolio",
    description:
      "Created mechanical models and design concepts using CAD tools, focusing on engineering design, visualization, and practical mechanical systems.",
    tools: ["SolidWorks", "CAD", "Mechanical Design"],
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