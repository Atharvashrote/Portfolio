import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center  justify-center">
            <div className=" flex space-x-4">
              <IoLogoLinkedin size={24}/>
              <FaFacebook size={24}/>
              <FaSquareInstagram size={24}/>
              <FaWhatsappSquare size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col item-centre">
              <p>&copy; 2024 Atharva. All Right Reserved</p>
              <p className="text-sm  flex items-center justify-center"> Supportive Patner Atharva</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
