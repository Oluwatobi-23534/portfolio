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
    title: 'Nationality : ',
    description: 'Nigerian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Lagos',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+2349162837696',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'Oluwatobi23534@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'tobi.daniel',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br/> Experience'
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br/> projects'
  },

  {
    id: 3,
    no: '5+',
    title: 'Happy <br/> Customers'
  },

  {
    id: 4,
    no: '2+',
    title: 'Awards <br/> Won'
  },

]
