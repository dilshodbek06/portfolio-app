import React from "react";
import {skills} from "../constans/const";

const Experience = () => {
    return (
        <div
            name="skills"
            className="w-full h-auto bg-gradient-to-b from-gray-800 to-black p-4 text-white py-4 pt-24"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="mx-auto">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                </div>

                <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-12 text-center py-8 px-4 md:px-12 sm:px-0">
                    {
                        skills.map((item) => (
                            <div key={item.id}
                                 className={`shadow-md hover:scale-105 duration-500 py-2  rounded-lg ${item.style}`}>
                                <img src={item.src} alt="img" className="w-20 h-20 mx-auto"/>
                                <p className="mt-4">{item.title}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
