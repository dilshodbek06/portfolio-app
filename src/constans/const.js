import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import myPhoto from "../images/myPhoto.png"
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import bootstrap from "../images/skills/bootstrap.png";
import firebase from "../images/skills/firebase.png";
import js from "../images/skills/js.png";
import nextjs from "../images/skills/nextjs.png";
import react from "../images/skills/react.png";
import reduxsaga from "../images/skills/redux-saga.svg";
import tailwind from "../images/skills/tailwind.png";
import reduxToolkit from "../images/skills/redux-toolkit.svg"
import java from "../images/skills/java.svg"
import typescript from "../images/skills/typescript.svg"
import sass from "../images/skills/sass.svg"
import springBoot from "../images/skills/spring-boot.svg"
import mui from "../images/skills/mui.svg"
import nodejs from "../images/skills/nodejs.svg"
import expressjs from "../images/skills/expressjs.svg"
// portfolio images
import madrasaImg from "../images/project-image/img.png"
import sergoshtImg from "../images/project-image/img_1.png"
import commerceImg from "../images/project-image/img_2.png"
import commerce2Img from "../images/project-image/img_3.png"
import flowersImg from "../images/project-image/img_4.png"
import tujjorImg from "../images/project-image/img_5.png"

export const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'skills'
    },
    {
        id: 5,
        link: 'contact'
    }
]
export const socialLinks = [
    {
        id: 1,
        child: (
            <>
                Instagram <FaInstagram size={30}/>
            </>
        ),
        href: 'https://www.instagram.com/d1lshod_ziyodullayev',
        style: 'rounded-lr-md'
    },
    {
        id: 2,
        child: (
            <>
                Telegram <FaTelegram size={30}/>
            </>
        ),
        href: 'https://t.me/d1lshod_18',
        style: 'rounded-lr-md'
    },
    {
        id: 3,
        child: (
            <>
                Github <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/dilshodbek06',
    },
    {
        id: 4,
        child: (
            <>
                Mail <HiOutlineMail size={30}/>
            </>
        ),
        href: 'mailto:ziyodullayevdilshod7@gmail.com',
    },
    {
        id: 5,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href: 'https://drive.google.com/file/d/11k_BPyf9AnpMkZ8XNO8cIAtu0o1hydeJ/view?usp=share_link',
        style: 'rounded-lr-md',
        download: true
    },

]
export const portfolio = [
    {
        id: 1,
        src: madrasaImg,
        disable: true,
        link: ""
    },
    {
        id: 2,
        src: sergoshtImg,
        disable: true,
        link: "https://65087af3ef6fec144fb2c3e9--fastidious-cascaron-95794e.netlify.app"
    },
    {
        id: 3,
        src: commerceImg,
        disable: true,
        link: "https://652ff2a054fe2c007b4d5a2c--neon-monstera-05e838.netlify.app"
    },
    {
        id: 4,
        src: commerce2Img,
        disable: true,
        link: "http://51.20.81.117:8080"
    },
   
    {
        id: 5,
        src: tujjorImg,
        disable: true,
        link: "https://test.tujjor.co"
    },
]
export const skills = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-sky-500'
    },
    {
        id: 3,
        src: sass,
        title: 'SASS',
        style: 'shadow-red-300'
    },
    {
        id: 4,
        src: js,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 5,
        src: bootstrap,
        title: 'BOOTSTRAP',
        style: 'shadow-violet-500'
    },
    {
        id: 6,
        src: mui,
        title: 'MATERIAL UI',
        style: 'shadow-teal-300'
    },
    {
        id: 7,
        src: react,
        title: 'REACT',
        style: 'shadow-blue-600'
    },
    {
        id: 8,
        src: tailwind,
        title: 'TAILWIND',
        style: 'shadow-sky-300'
    },
    {
        id: 9,
        src: reduxsaga,
        title: 'REDUX-SAGA',
        style: 'shadow-green-600'
    },
    {
        id: 10,
        src: reduxToolkit,
        title: 'REDUX-TOOLKIT',
        style: 'shadow-violet-500'
    },
    {
        id: 11,
        src: firebase,
        title: 'FIREBASE',
        style: 'shadow-yellow-700'
    },
    {
        id: 12,
        src: java,
        title: 'JAVA',
        style: 'shadow-blue-700'
    },
    {
        id: 13,
        src: springBoot,
        title: 'SPRING BOOT',
        style: 'shadow-green-400'
    },
    {
        id: 14,
        src: nextjs,
        title: 'NEXT JS...',
        style: 'shadow-white'
    },
    {
        id: 15,
        src: typescript,
        title: 'TYPESCRIPT...',
        style: 'shadow-blue-500'
    },
    {
        id: 16,
        src: nodejs,
        title: 'Node JS...',
        style: 'shadow-gray-500'
    },
    {
        id: 17,
        src: expressjs,
        title: 'Express JS...',
        style: 'shadow-yellow-500'
    },
]