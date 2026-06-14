export const projects = [
  {
  title: "AI-Driven Multi-Objective Toolpath Optimization",
  slug: "ai-driven-cnc-optimization",
  category: "Final Year Project",
  duration: "Jul 2025 to May 2026",
  thumbnail: "/projects/fyp-thumbnail-simple.png",

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
  title: "Electric Human Powered Vehicle (e-HPV)",
  slug: "electric-human-powered-vehicle",
  category: "Machine Design Project",
  duration: "Jan 2025 to Jun 2025",
  thumbnail: "/projects/ehpv/ehpv-thumbnail-simple.png", 

  description:
    "Designed and engineered an electric human powered vehicle using a recumbent tadpole trike configuration to improve stability, rider safety, aerodynamic performance, and energy-efficient urban commuting.",

  impact:
    "Validated structural safety, aerodynamic behavior, and electrical integration through simulation-driven design, resulting in a functional prototype with stable straight-line performance, controlled turning behavior, and an estimated operating range of up to 30 kilometers per charge.",

  overview:
    "This project focused on the complete design, engineering, and physical development of an Electric Human Powered Vehicle (e-HPV). The vehicle used a recumbent tricycle layout with two front wheels and one rear wheel to improve stability, reduce tipping risk, and optimize aerodynamic drag. The project combined mechanical design, structural validation, CFD analysis, electrical system integration, and prototype fabrication into a complete engineering solution.",

  problem:
    "A practical electric human powered vehicle must balance structural strength, rider safety, aerodynamic efficiency, maneuverability, and electrical reliability. Designing such a vehicle requires integration of multiple engineering domains while ensuring that the final system remains lightweight, stable, durable, and operationally safe.",

  objective:
    "The objective was to design and validate an electric human powered vehicle capable of safe and efficient urban mobility by optimizing chassis structure, aerodynamic performance, rollover protection, drivetrain integration, and braking behavior.",

  methodology: [
    "Developed the vehicle concept using a recumbent tadpole trike layout with two front wheels and one rear wheel to improve stability and reduce aerodynamic resistance.",
    "Designed the primary chassis using mild steel tubing and incorporated localized bracing and reinforcement gussets at critical joints to balance weight and structural durability.",
    "Created a full 3D CAD model of the vehicle assembly to establish geometry, rider positioning, subsystem packaging, and layout optimization.",
    "Performed Finite Element Analysis (FEA) in ANSYS to validate the Rollover Protection System and critical load-bearing members under severe loading conditions.",
    "Evaluated safety performance through structural deformation analysis and confirmed acceptable localized deflections in the main frame.",
    "Conducted Computational Fluid Dynamics (CFD) simulations at an inlet velocity of 32 km/h to study airflow behavior, wake formation, drag forces, and lift forces around the vehicle and rider region.",
    "Engineered the electrical system architecture using a 36V 13Ah lithium-ion battery, L298 motor controller, variable resistor throttle control, and a 350W front hub motor.",
    "Integrated a regenerative braking system to recover mechanical energy during deceleration and improve functional driving range.",
    "Validated vehicle performance against key engineering targets including straight-line stability, turning capability, and braking response.",
  ],

  results: [
    "Designed and fabricated a functional e-HPV prototype with a recumbent tadpole trike configuration.",
    "Validated chassis and rollover protection structure using FEA under severe loading conditions.",
    "Confirmed aerodynamic behavior through CFD analysis, including drag and lift force estimation.",
    "Integrated a complete electrical propulsion and control system using a lithium-ion battery and hub motor setup.",
    "Achieved stable straight-line behavior, controlled turning capability, and effective emergency braking performance.",
    "Extended projected commuting capability to approximately 30 kilometers per charge through efficient system integration and regenerative braking considerations.",
  ],

  tools: [
    "Finite Element Analysis (FEA)",
    "Computational Fluid Dynamics (CFD)",
    "Automotive Design",
    "Structural Analysis",
    "Electrical Systems Integration",
    "CAD/CAM",
    "Aerodynamics",
    "Fatigue Analysis",
    "Stress Analysis",
    "Systems Engineering",
    "Project Management",
  ],

  gallery: [
  {
    src: "/projects/ehpv/fabricated-prototype-v3.jpg",
    title: "Fabricated e-HPV Prototype",
    description:
      "Physical build of the electric human powered vehicle, showcasing the fabricated mild steel chassis framework, recumbent seating arrangement, and integrated drivetrain assembly.",
  },
  {
    src: "/projects/ehpv/cad-assembly-v3.jpg",
    title: "3D CAD Vehicle Assembly",
    description:
      "Complete CAD model of the e-HPV used to define vehicle geometry, rider packaging, subsystem integration, and overall layout optimization.",
  },
  {
    src: "/projects/ehpv/cfd-contours-v3.jpg",
    title: "Aerodynamic Performance & Velocity Contours",
    description:
      "CFD contour plot used to study airflow velocity distribution around the vehicle and identify wake separation behavior behind the rider.",
  },
  {
    src: "/projects/ehpv/fea-analysis-v3.jpg",
    title: "FEA Structural Deformation Analysis",
    description:
      "Finite Element Analysis result validating the structural response of the rollover protection system and frame under severe loading conditions.",
  },
  {
    src: "/projects/ehpv/electrical-schematic-v3.jpg",
    title: "Electrical System Control Schematic",
    description:
      "Schematic showing power distribution from the battery through the motor controller and throttle assembly to the drive motor.",
  },
],
},
  {
  title: "Hand-Gesture Controlled Car",
  slug: "hand-gesture-controlled-car",
  category: "Robotics & Automation Project",
  duration: "Sep 2024 – Jan 2025",
  thumbnail: "/projects/hand-gesture-controlled-car/hand-gesture-controlled-car-thumbnail.png",
  description:
    "An ESP32-based gesture-controlled robotic car that translates real-time hand movements into vehicle motion commands using MPU6050 sensing, ESP-NOW wireless communication, PWM motor control, and obstacle detection.",
  overview:
    "This project involved the design and implementation of an intelligent human-machine interaction system using a dual ESP32 microcontroller architecture. A wearable transmitter unit captured hand gestures through an MPU6050 accelerometer and gyroscope, processed tilt-based motion data, and transmitted commands wirelessly to a vehicle receiver unit. The receiver controlled four DC motors through dual L298N drivers, allowing forward, backward, left, right, and stop commands based on real-time hand motion.",
  problem:
    "Conventional remote-controlled vehicles require handheld controllers or wired command systems, which limit natural interaction and flexibility. The goal of this project was to create a more intuitive control method where vehicle movement could be directed through physical hand gestures while maintaining reliable wireless communication, safety, and responsive motor control.",
  objective:
    "To develop a gesture-controlled robotic vehicle capable of interpreting hand-tilt movements, transmitting control commands wirelessly using ESP-NOW, driving four DC motors through PWM-based motor control, and stopping automatically when an obstacle is detected in the forward path.",
  methodology: [
    "Designed a dual ESP32-based architecture consisting of a gesture transmitter unit and a vehicle receiver unit.",
    "Integrated an MPU6050 accelerometer and gyroscope sensor with the transmitter ESP32 to capture hand-tilt motion along the X, Y, and Z axes.",
    "Mapped hand gesture orientations into directional vehicle commands including forward, backward, left, right, and stop.",
    "Established low-latency ESP-NOW wireless communication between the transmitter and receiver ESP32 boards.",
    "Controlled four independent TT DC motors using dual L298N motor driver modules with PWM signals for speed and motion regulation.",
    "Added an HC-SR04 ultrasonic sensor for obstacle detection, triggering motor shutdown and buzzer alert when an obstacle was detected within 20 cm.",
    "Implemented a fail-safe inactivity timeout that stopped all motor actions if no valid gesture command was received within a defined time window.",
    "Applied control engineering concepts to model vehicle dynamics and develop a representative second-order system transfer function using mass, damping, and motion resistance assumptions.",
  ],
  results: [
    "Developed a functional gesture-controlled robotic vehicle prototype using ESP32 microcontrollers.",
    "Achieved real-time wireless gesture-to-motion control through ESP-NOW communication.",
    "Implemented forward, backward, left, right, and stop motion commands based on MPU6050 hand-tilt readings.",
    "Integrated obstacle detection and automatic shutdown logic using an ultrasonic sensor and buzzer warning system.",
    "Improved reliability through debounce delays, sensitivity tuning, and inactivity timeout-based fail-safe control.",
  ],
  tools: [
    "Robotics",
    "Embedded Systems",
    "Control Engineering",
    "ESP32 Microcontrollers",
    "Gesture Recognition",
    "Internet of Things (IoT)",
    "ESP-NOW",
    "PWM",
    "Sensor Integration",
    "Signal Processing",
    "MPU6050",
    "HC-SR04",
    "L298N Motor Driver",
    "Arduino IDE",
    "C++",
  ],
  gallery: [
  {
    src: "/projects/hand-gesture-controlled-car/prototype-assembly.png",
    title: "Assembled Gesture-Controlled Robotic Prototype",
    description:
      "Complete physical hardware assembly of the mobile robotic platform, showcasing the integration of the central ESP32 receiver unit, dual L298N motor drivers, four independent TT DC motors, and the front-mounted ultrasonic sensor module.",
  },
  {
    src: "/projects/hand-gesture-controlled-car/transmitter-breadboard.png",
    title: "Kinematic Gesture Transmitter Breadboard Assembly",
    description:
      "Hardware prototyping of the wearable transmitter node, featuring an ESP32 development board interfaced with an MPU6050 inertial measurement unit to capture and process real-time hand-tilt variations.",
  },
  {
    src: "/projects/hand-gesture-controlled-car/receiver-motor-driver-diagram.png",
    title: "Receiver Hub & Motor Drivetrain Circuit Diagram",
    description:
      "Full mechatronic schematic mapping the electrical wiring, GPIO pin allocations, and power distribution tracks between the central ESP32 receiver, dual L298N motor driver modules, and the 4 DC motor network.",
  },
  {
    src: "/projects/hand-gesture-controlled-car/transmitter-wiring-schematic.png",
    title: "Gesture Transmitter Node Wiring Schematic",
    description:
      "Technical circuit schematic detailing the I2C communication interface, pin interconnections, and power delivery lines between the ESP32 microcontroller and the MPU6050 accelerometer/gyroscope sensor.",
  },
  {
    src: "/projects/hand-gesture-controlled-car/control-logic-flow.png",
    title: "System Control Logic & Flow Architecture",
    description:
      "Control engineering block diagram outlining the closed-loop operational workflow, tracking signal paths from raw hand gestures through the low-latency ESP-NOW wireless communication link to the mechanical motor outputs.",
  },
],
},
];
export const experiences = [
  {
    role: "Intern",
    company: "DEL (DESCON Engineering Limited)",
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
    category: "CAD, Design & Simulation",
    items: [
      "SolidWorks",
      "CREO",
      "CAD/CAM",
      "Mechanical Design",
      "Engineering Drawings",
      "ANSYS",
      "FEA / CFD",
    ],
  },
  {
    category: "Manufacturing & CNC",
    items: [
      "CNC Milling",
      "Toolpath Optimization",
      "CAM Simulation",
      "Cutting Parameters",
      "Manufacturing Processes",
      "Surface Roughness Analysis",
      "Energy Consumption Analysis",
    ],
  },
  {
    category: "Programming, AI & Optimization",
    items: [
      "Python",
      "C++",
      "Machine Learning",
      "XGBoost",
      "NSGA-II",
      "Genetic Algorithms",
      "Multi-Objective Optimization",
      "Data Analysis",
    ],
  },
  {
    category: "Robotics, Embedded Systems & Control",
    items: [
      "Robotics",
      "Embedded Systems",
      "ESP32",
      "MPU6050",
      "ESP-NOW",
      "PWM Motor Control",
      "Sensor Integration",
      "Gesture Recognition",
      "Control Systems",
      "MATLAB / Simulink",
    ],
  },
  {
    category: "Engineering & Professional Skills",
    items: [
      "Mechanical Systems Modeling",
      "Problem Solving",
      "Prototype Development",
      "Technical Documentation",
      "Project Planning",
      "Engineering Reports",
      "Teamwork",
      "Communication",
    ],
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
  {
    title: "Nestlé E-learning 2025 | Resilience",
    issuer: "Nestlé",
    date: "2025",
    description:
      "Certificate of completion for Nestlé E-learning 2025 | Resilience under the Nesternship / Nestlé needs YOUth program.",
    image: "/certificates/nestle-e-learning-2025-resilience.png",
  },
  {
    title: "Design Fest 24' Participation Certificate",
    issuer: "Islamabad SolidWorks User Group (ISUG) x NUST",
    date: "2024",
    description:
      "Certificate of participation in Design Fest 24', held at Jinnah Auditorium, NUST.",
    image: "/certificates/design-fest-2024-isug-nust.png",
  },
];