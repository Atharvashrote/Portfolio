import React from "react";

import java from "../../public/java.png";
import html from "../../public/html-5.png";
import css from "../../public/css-3.png";
import express from "../../public/express.png";
import react from "../../public/React.png";
import javascript from "../../public/js.png";
import mongo from "../../public/mongodb.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "ExpressJS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: html,
      name: "HTML",
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
    },
    {
      id: 7,
      logo: javascript,
      name: "Javascript",
    },
  ];
  return (
    <>
      <div className="max-w-2x1 container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <span className="underline font-semibold"> Featured Project</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt=""
                />
                <div>
                  <div className=" px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className=" px-6 py-4 space-x-4 justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 roundeed">Video</button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 roundeed">Source code</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
