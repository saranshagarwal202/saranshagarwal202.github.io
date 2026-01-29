/* Saransh Agrawal - Portfolio Configuration
 * Updated: January 2025
 * Note: Recent MS Data Science graduate (May 2025) seeking SWE/ML opportunities
 */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Saransh Agrawal",
  title: "Hi, I'm Saransh",
  subTitle: emoji(
    "ML Engineer & Software Developer with expertise in LLMs, distributed systems, and production ML pipelines. MS Data Science from Texas A&M. Open to Software Engineering and ML opportunities."
  ),
  resumeLink: require("./assets/pdfs/Saransh_Agrawal.pdf"),
  displayGreeting: true
};

// Social Media Links
// Note: Only professional links included per design guidelines

const socialMediaLinks = {
  github: "https://github.com/saranshagarwal202",
  linkedin: "https://www.linkedin.com/in/saransh-agrawal8899/",
  gmail: "saranshagarwal2020@gmail.com",
  // Google Scholar for research credibility
  // Note: Add custom icon in src/components/SocialMedia if needed
  display: true
};

// Skills Section
// Organized to match resume categories - Languages first, then frameworks/tools

const skillsSection = {
  title: "What I Do",
  subTitle: "ML ENGINEER & SOFTWARE DEVELOPER BUILDING SCALABLE AI SYSTEMS",
  skills: [
    emoji(
      "Build and deploy production ML pipelines with distributed training across multi-GPU/multi-node clusters"
    ),
    emoji(
      "Design scalable microservice architectures with REST APIs, Kafka, and containerized deployments"
    ),
    emoji(
      "Research and implement state-of-the-art LLM alignment techniques (RLHF, DPO, model editing)"
    )
  ],

  /* Skills organized by category matching resume:
   * Row 1: Core Languages - Python, Rust, Go, C++, SQL
   * Row 2: ML/AI - PyTorch, TensorFlow, HuggingFace
   * Row 3: Infrastructure - Docker, Kubernetes, AWS, Kafka
   * Row 4: Data/Tools - PostgreSQL, MongoDB, Git, Linux
   *
   * NOTE: Icon colors are controlled by CSS in src/components/softwareSkills/
   * To enable colored icons, modify SoftwareSkill.scss
   */

  /* To use custom logos: add imageSrc property with path to logo file
   * Example: imageSrc: require("./assets/images/skills/python.svg")
   * Download logos from: https://devicon.dev/ or https://simpleicons.org/
   * If imageSrc is provided, fontAwesomeClassname is ignored
   */
  softwareSkills: [
    // Core Languages
    {
      skillName: "Python",
      imageSrc: require("./assets/images/skills/python-original.svg")
    },
    {
      skillName: "Rust",
      imageSrc: require("./assets/images/skills/rust-original.svg")
    },
    {
      skillName: "Go",
      imageSrc: require("./assets/images/skills/go-original.svg")
    },
    {
      skillName: "C++",
      imageSrc: require("./assets/images/skills/cplusplus-original.svg")
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    // ML/AI Frameworks
    {
      skillName: "PyTorch",
      imageSrc: require("./assets/images/skills/pytorch-original.svg")
    },
    {
      skillName: "TensorFlow",
      imageSrc: require("./assets/images/skills/tensorflow-original.svg")
    },
    {
      skillName: "HuggingFace",
      imageSrc: require("./assets/images/skills/hf-logo.svg")
    },
    // Infrastructure
    {
      skillName: "Docker",
      imageSrc: require("./assets/images/skills/docker-original.svg")
    },
    {
      skillName: "Kubernetes",
      imageSrc: require("./assets/images/skills/kubernetes-original.svg")
    },
    {
      skillName: "AWS",
      imageSrc: require("./assets/images/skills/amazonwebservices-original-wordmark.svg")
    },
    {
      skillName: "Kafka",
      imageSrc: require("./assets/images/skills/apachekafka-original.svg")
    },
    // Data & Tools
    {
      skillName: "PostgreSQL",
      imageSrc: require("./assets/images/skills/postgresql-original.svg")
    },
    {
      skillName: "MongoDB",
      imageSrc: require("./assets/images/skills/mongodb-original.svg")
    },
    {
      skillName: "Git",
      imageSrc: require("./assets/images/skills/git-original.svg")
    },
    {
      skillName: "Linux",
      imageSrc: require("./assets/images/skills/linux-original.svg")
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Texas A&M University",
      logo: require("./assets/images/tamuLogo.png"), // TODO: Add TAMU logo
      subHeader: "Master of Science in Data Science",
      duration: "August 2023 - May 2025",
      desc: "GPA: 3.7/4.0. Research focus on LLM alignment, safety, and efficient training methods.",
      descBullets: [
        "Published 2 papers on LLM unlearning and multi-preference alignment",
        "Teaching Assistant for Statistics Department"
      ]
    },
    {
      schoolName: "Manipal Institute of Technology",
      logo: require("./assets/images/manipalLogo.png"), // TODO: Add Manipal logo
      subHeader: "Bachelor of Technology in Electronics and Instrumentation Engineering",
      duration: "July 2017 - August 2021",
      desc: "Foundation in systems engineering, signal processing, and optimization theory."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning / Deep Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / Distributed Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "MLOps / Infrastructure",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer, ML Team",
      company: "Viewzen Labs",
      companylogo: require("./assets/images/viewzenlabsLogo.jpeg"), // TODO: Add logo
      date: "July 2021 – July 2023",
      desc: "Built distributed AutoML platform (MLaaS) serving enterprise clients.",
      descBullets: [
        "Engineered microservices architecture with REST APIs and Kafka Streams, reducing ML development time by 80%",
        "Optimized data pipelines with C++ and multi-threading, improving processing speed by 20%",
        "Led predictive modeling for 45,000+ users across 300+ features; mentored 2 junior developers"
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Centre for Digital Financial Inclusion",
      companylogo: require("./assets/images/cdfiLogo.jpeg"), // TODO: Add logo
      date: "February 2021 – June 2021",
      desc: "Developed speech recognition system for Indian accents using deep learning.",
      descBullets: [
        "Achieved 0.10 CER and 0.17 WER using DeepSpeech transfer learning with KenLM language model",
        "Built T5-based natural language to SQL query generator for voice-enabled financial services"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Featured Projects
// Selected 4 best projects showcasing ML research, systems, and engineering skills
// Note: Add project images to src/assets/images/

const bigProjects = {
  title: "Featured Projects",
  subtitle: "RESEARCH AND ENGINEERING WORK IN ML, LLMS, AND DISTRIBUTED SYSTEMS",
  projects: [
    {
      image: require("./assets/images/unlearningProject.png"), // TODO: Add image
      projectName: "LLM Unlearning via Knowledge Isolation",
      projectDesc:
        "2nd place at SemEval-2025. Developed causal-informed optimization for selectively removing sensitive data from LLMs while preserving 88% MMLU accuracy.",
      footerLink: [
        {
          name: "Paper",
          url: "https://arxiv.org/abs/2504.12996"
        },
        {
          name: "GitHub",
          url: "https://github.com/LAB-FLAIR/Constrained-Unlearning-for-LLM"
        }
      ]
    },
    {
      image: require("./assets/images/preferenceVector.png"), // TODO: Add image
      projectName: "Multi-Preference LLM Alignment",
      projectDesc:
        "Novel framework using task arithmetic for dynamic preference balancing in LLMs. Enables fine-grained control over helpfulness-harmlessness trade-offs without retraining.",
      footerLink: [
        {
          name: "Paper",
          url: "https://arxiv.org/abs/2504.20106"
        }
      ]
    },
    {
      image: require("./assets/images/scmsProject.png"), // TODO: Add image
      projectName: "Satellite Crop Monitoring System",
      projectDesc:
        "Full-stack ML platform for real-time crop health monitoring using satellite imagery. Microservice architecture with FastAPI, Docker, and ViT-based yield prediction.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/saranshagarwal202/Satellite_based_crop_monitoring_system"
        }
      ]
    },
    {
      image: require("./assets/images/distributedBenchmark.png"), // TODO: Add image
      projectName: "Distributed LLM Benchmarking Framework",
      projectDesc:
        "Framework for benchmarking LLMs on MMLU across multi-GPU/multi-node HPC clusters using PyTorch DDP and SLURM.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/saranshagarwal202/distributed_mmlu_benchmarking"
        }
      ]
    }
  ],
  display: true
};

// Publications & Certifications Section

const achievementSection = {
  title: emoji("Publications & Certifications"),
  subtitle: "Research publications and professional credentials",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Validated expertise in AWS cloud concepts, services, security, architecture, and pricing.",
      image: require("./assets/images/awsBadge.png"),
      imageAlt: "AWS Certification Badge",
      footerLink: []
    },
    {
      title: "Selective Amnesia: Constrained Unlearning for LLMs",
      subtitle:
        "SemEval-2025 Task 4 @ ACL. 2nd place in 1B track. Two-stage unlearning combining causal mediation with layer-specific optimization.",
      image: require("./assets/images/unlearningProject.png"),
      imageAlt: "Unlearning Research",
      footerLink: [
        {
          name: "arXiv",
          url: "https://arxiv.org/abs/2504.12996"
        },
        {
          name: "Code",
          url: "https://github.com/LAB-FLAIR/Constrained-Unlearning-for-LLM"
        }
      ]
    },
    {
      title: "Adaptive Helpfulness-Harmlessness Alignment with Preference Vectors",
      subtitle:
        "EACL 2026. Novel framework using task arithmetic for dynamic multi-preference balancing without retraining.",
      image: require("./assets/images/preferenceVector.png"),
      imageAlt: "Preference Vectors",
      footerLink: [
        {
          name: "arXiv",
          url: "https://arxiv.org/abs/2504.20106"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
// Set display: false since no active blog - can enable later if needed

const blogSection = {
  title: "Blogs",
  subtitle: "Technical writing and tutorials",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // No active blog currently
};

// Talks Section
// Academic presentations at TAMU

const talkSection = {
  title: "PRESENTATIONS",
  subtitle: "Research talks and seminars at Texas A&M University",

  talks: [
    {
      title: "LLM Unlearning Mechanisms & SemEval Contribution",
      subtitle: "FLAIR Lab, TAMU",
      slides_url:
        "https://drive.google.com/file/d/1cuUauqo1sdLTekFjUbOl_G8PQ_reIHDW/view?usp=sharing",
      event_url: ""
    },
    {
      title: "DPO Critique & Knowledge Editing for LLM Detoxification",
      subtitle: "NLP Research Group, TAMU",
      slides_url:
        "https://drive.google.com/file/d/1c5J9qzXwncwQNwNohha-yNyQVELldJUN/view?usp=sharing",
      event_url: ""
    },
    {
      title: "Visual Shortcomings of Multimodal LLMs",
      subtitle: "Trustworthy NLP Seminar, TAMU",
      slides_url:
        "https://drive.google.com/file/d/1p6sEykSso1hgqMgGukUIksU3ORDM_3XY/view?usp=sharing",
      event_url: ""
    }
  ],
  display: true
};

// Podcast Section
// Disabled - no podcast activity

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Open to Software Engineering and ML opportunities. Let's connect.",
  number: "", // Optional - add if you want to share
  email_address: "saranshagarwal2020@gmail.com"
};

// Twitter Section
// Disabled - not active on Twitter

const twitterDetails = {
  userName: "",
  display: false
};

// Actively seeking opportunities
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
