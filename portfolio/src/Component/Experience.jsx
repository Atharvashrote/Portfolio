import React from "react";

import java from "../../public/java.png";
import html from "../../public/html-5.png";
import css from "../../public/css-3.png";
import express from "../../public/express.png";
import react from "../../public/React.png";
import javascript from "../../public/js.png";
import mongo from "../../public/mongodb.png";

function Experience() {
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
      <div 
      name="Experience"
      className="max-w-2x1 container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold">Experience</h1>
          <p className="font-semibold">
            I have more than 2 years of experience in these technologies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[150px]  rounded-full "
                  alt=""
                />
                <div>
                  <div className=" font-semibold">{name}</div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
