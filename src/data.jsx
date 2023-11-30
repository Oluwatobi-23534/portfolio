import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";


import Work1 from './assets/cryptolanding.png';
import Work2 from './assets/luxurydealr.png';
import Work3 from './assets/bigcity.png';
import Work4 from './assets/bookmark_manager.png'
import Work5 from './assets/google.png'
import Work6 from './assets/authapp.png'

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Oluwatobi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Akinyemi",
  },

  {
    id: 3,
    title: "Age : ",
    description: "26 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Nigerian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Lagos",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+2349162837696",
  },

  {
    id: 8,
    title: "Email : ",
    description: "Oluwatobi23534@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "tobi.daniel",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br/> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br/> projects",
  },

  {
    id: 3,
    no: "5+",
    title: "Happy <br/> Customers",
  },

  {
    id: 4,
    no: "2+",
    title: "Awards <br/> Won",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "90",
  },
  {
    id: 2,
    title: "JAVASCRIPT",
    percentage: "90",
  },
  {
    id: 3,
    title: "CSS",
    percentage: "90",
  },
  {
    id: 4,
    title: "REACT",
    percentage: "90",
  },
  {
    id: 5,
    title: "TAILWINDCSS",
    percentage: "90",
  },
  {
    id: 6,
    title: "MONGODB",
    percentage: "90",
  },
  {
    id: 7,
    title: "NEXTJS",
    percentage: "70",
  },
  {
    id: 8,
    title: "PYTHON",
    percentage: "90",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - PRESENT",
    title: "Web Developer <span> NUmerique de luxe innovations </span>",
    desc: "As a Web Developer at Numerique de Luxe Innovations, I create innovative digital solutions, transforming ideas into reality and enhancing our luxury brand's online presence.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Python Apprentice <span> Bincom Dev Center</span>",
    desc: "Started my journey in the tech world with Bincom Dev Center as a Python Apprentice, learning from industry experts, work on real projects, and gaining valuable experience in Python development.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015-2019",
    title: "BEd Biology <span> University Of Lagos</span>",
    desc: "Earned a BEd in Biology from the University of Lagos. Gained in-depth knowledge of biological concepts and honed analytical skills, preparing for a career in the science and education fields.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "06.10.2023",
    title: "Javascript Masterclass: Zero To Job Ready With 10 Projects <span> Udemy </span>",
    desc: "Completed a comprehensive Javascript Masterclass on Udemy, going from zero to job-ready. Developed proficiency in Javascript through hands-on experience with 10 real-world projects.",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Diploma in Website Development Using HTML and CSS. <span> Alison </span>",
    desc: "Achieved a Diploma in Website Development Using HTML and CSS from Alison. Acquired practical skills in creating dynamic, interactive websites, enhancing web development proficiency.",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Advanced Diploma in Python Programming. <span> Alison </span>",
    desc: "Secured an Advanced Diploma in Python Programming from Alison. This course provided a deep dive into Python, enhancing my programming skills and preparing me for complex coding challenges.",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Crypto Landing Platform',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Private Client'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://vivid-crypto.netlify.app/'
      },
    ]
  },

  {
    id: 2,
    img: Work2,
    title: 'Order & Delivery Platform',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Luxury Dealr'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'REACT'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://luxurydealr.vercel.app/'
      },
    ]
  },

  {
    id: 3,
    img: Work3,
    title: 'Real Estate',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Private Client'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Javascript'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://bigcity-estate.onrender.com/'
      },
    ]
  },

  {
    id: 4,
    img: Work4,
    title: 'Bookmark manager',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Private Client'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Javascript'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://vivid-bookmark-manager.netlify.app/'
      },
    ]
  },

  {
    id: 5,
    img: Work5,
    title: 'Google clone',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Private Client'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Next, JavaScript'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://google-clone-nextjs13-liart.vercel.app/'
      },
    ]
  },

  {
    id: 6,
    img: Work6,
    title: 'Authentication App',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Photo'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'Private Client'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'JavaScript'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://auth-app-5jdr.onrender.com/'
      },
    ]
  }
]