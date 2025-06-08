import React from "react";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { Typewriter } from "react-simple-typewriter";

import pic from "../../public/Profile.jpg";

function Home() {
  return (
    <>
      <div
      name="Home" 
       className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welecome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I am a </h1>
              {/*<span className="text-red-700 font-bold"> Developer</span>*/}
              <div className="text-2xl md:text-4xl text-red-600 font-bold">
                <Typewriter
                  words={[
                    "Full-Stake Developer",
                    "Web-Developer",
                    "Programmer",
                  ]}
                  loop={0} // 0 for infinite loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Dynamic and detail-oriented Front-End Developer with 3 years of
              experience in designing, developing, and optimizing user
              interfaces for web applications. Proficient in HTML, CSS,
              JavaScript, and modern front-end frameworks like React, Angular. Adept at building responsive, mobile-first websites
              with a focus on performance, accessibility, and user experience
              (UX). Strong problem-solving skills and a passion for creating
              visually appealing and intuitive digital products. Experienced in
              working collaboratively with cross-functional teams to deliver
              high-quality, user-centric solutions.
            </p>
            <br />
            {/* social media */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/atharva-shrote-54878b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <IoLogoLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <a href="https://www.instagram.com/atharvashrote?igsh=aGJiYXN2am14cTQx">
                    <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <FaWhatsappSquare className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Working on :</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNode className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaHtml5 className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaCss3Alt className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoJavascript className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-45 md:mt-20 md:pl-40 order-1">
          <img src={pic} className=" md:w-[450px] md:h-[450px] rounded-full" alt="" />
          </div>
        </div>
      </div>
 
      <hr />
    </>
  );
}

export default Home;
