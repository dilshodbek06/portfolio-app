import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 mx-auto pt-6 md:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>
        <p className="text-xl mt-10">
          Hi, I'm Firstname Lastname, a Full stack developer. I love
          creating useful websites that help people.
        </p>
        <br />
        <p className="text-xl leading-8">
          I'm a front end developer with one years of experience in web
          development. I've worked on a variety of projects for clients in the
          retail, travel, commerce and healthcare industries. I'm passionate
          about creating great user experiences and have a strong understanding
          of usability and accessibility standards. Currently I'm learning
          Typescript and Next js technologies. I study English in my spare time.
        </p>
      </div>
    </div>
  );
};

export default About;
