import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import bootstrap from "../images/skills/bootstrap.png";
import firebase from "../images/skills/firebase.png";
import js from "../images/skills/js.png";
import nextjs from "../images/skills/nextjs.png";
import react from "../images/skills/react.png";
import reduxsaga from "../images/skills/redux-saga.svg";
import tailwind from "../images/skills/tailwind.png";
import reduxToolkit from "../images/skills/redux-toolkit.svg";
import java from "../images/skills/java.svg";
import typescript from "../images/skills/typescript.svg";
import sass from "../images/skills/sass.svg";
import springBoot from "../images/skills/spring-boot.svg";
import mui from "../images/skills/mui.svg";
import nodejs from "../images/skills/nodejs.svg";
import expressjs from "../images/skills/expressjs.svg";
// portfolio images
import dumpImage from "../images/project-image/300.png";

export const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "skills",
  },
  {
    id: 5,
    link: "contact",
  },
];
export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        Instagram <FaInstagram size={30} />
      </>
    ),
    href: "https://www.instagram.com/",
    style: "rounded-lr-md",
  },
  {
    id: 2,
    child: (
      <>
        Telegram <FaTelegram size={30} />
      </>
    ),
    href: "https://t.me/",
    style: "rounded-lr-md",
  },
  {
    id: 3,
    child: (
      <>
        Github <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/",
  },
  {
    id: 4,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "/",
  },
  {
    id: 5,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/",
    style: "rounded-lr-md",
    download: true,
  },
];
export const portfolio = [
  {
    id: 1,
    src: dumpImage,
    disable: true,
    link: "/",
  },
  {
    id: 2,
    src: dumpImage,
    disable: true,
    link: "/",
  },
  {
    id: 3,
    src: dumpImage,
    disable: true,
    link: "/",
  },
  {
    id: 4,
    src: dumpImage,
    disable: true,
    link: "/",
  },

  {
    id: 5,
    src: dumpImage,
    disable: true,
    link: "/",
  },
];

export const skills = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-sky-500",
  },
  {
    id: 3,
    src: sass,
    title: "SASS",
    style: "shadow-red-300",
  },
  {
    id: 4,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 5,
    src: bootstrap,
    title: "BOOTSTRAP",
    style: "shadow-violet-500",
  },
  {
    id: 6,
    src: mui,
    title: "MATERIAL UI",
    style: "shadow-teal-300",
  },
  {
    id: 7,
    src: react,
    title: "REACT",
    style: "shadow-blue-600",
  },
  {
    id: 8,
    src: tailwind,
    title: "TAILWIND",
    style: "shadow-sky-300",
  },
  {
    id: 9,
    src: reduxsaga,
    title: "REDUX-SAGA",
    style: "shadow-green-600",
  },
  {
    id: 10,
    src: reduxToolkit,
    title: "REDUX-TOOLKIT",
    style: "shadow-violet-500",
  },
  {
    id: 11,
    src: firebase,
    title: "FIREBASE",
    style: "shadow-yellow-700",
  },
  {
    id: 12,
    src: java,
    title: "JAVA",
    style: "shadow-blue-700",
  },
  {
    id: 13,
    src: springBoot,
    title: "SPRING BOOT",
    style: "shadow-green-400",
  },
  {
    id: 14,
    src: nextjs,
    title: "NEXT JS...",
    style: "shadow-white",
  },
  {
    id: 15,
    src: typescript,
    title: "TYPESCRIPT...",
    style: "shadow-blue-500",
  },
  {
    id: 16,
    src: nodejs,
    title: "Node JS...",
    style: "shadow-gray-500",
  },
  {
    id: 17,
    src: expressjs,
    title: "Express JS...",
    style: "shadow-yellow-500",
  },
];
