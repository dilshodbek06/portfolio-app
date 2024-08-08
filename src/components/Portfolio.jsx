import React from "react";
import { portfolio } from "../constans/const";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto pt-14"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 py-1 sm:px-0">
          {portfolio.map((item) => (
            <div key={item.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={item.src}
                alt={item.id}
                className="w-full h-[330px] object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a className={"w-1/2 px-2"} href={item?.link}>
                  <button className=" w-full px-6 py-3 duration-200 hover:scale-105 bg-gray-800 rounded-md">
                    Demo
                  </button>
                </a>
                <button
                  disabled={item.disable}
                  className={`${
                    item.disable ? "line-through" : ""
                  } w-1/2  py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-md`}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
