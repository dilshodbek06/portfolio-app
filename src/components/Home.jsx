import React from "react";
import myPhoto from "../images/myPhoto.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:gap-12 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-12 sm:mt-0">
          <TypeAnimation
            className="text-4xl sm:text-7xl font-bold text-white"
            sequence={[
              "I'm a Web Developer",
              1000,
              "I'm a Frontend Mentor",
              1000,
              "I'm a  Backend Developer",
              1000,
              "I'm a Backend Developer",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind CSS, Next Js and ....
          </p>
          <div className="flex gap-3">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex
             items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex
             items-center rounded-md bg-gradient-to-r from-green-500 to-green-900 cursor-pointer"
            >
              Contact me
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div
          className={
            "mb-5 md:mb-0 w-[320px] h-[320px] md:w-[402px]  md:h-[402px]"
          }
        >
          <img
            src={myPhoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
