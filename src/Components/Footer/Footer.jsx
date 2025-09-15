import React from "react";
import { IoSyncCircleOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
const Footer = () => {
  const arr = [1, 3, 4, 5, 6];
  const categoriesData = [
    "Graphics & Design",
    "Digital Marketing",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Lifestyle",
    "Photography",
    "Sitemap",
  ];
  return (
    <div className="flex flex-col space-x-50 mx-10 p-10 my-6 select-none">
      <div className="flex flex-row justify-between mx-26 cursor-pointer">
        {arr.map((item, index) => {
          return (
            <div className="" key={index}>
              <h1 className="text-2xl text-gray-600">Categories</h1>
              <ul className="text-gray-400 space-y-2">
                {categoriesData.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <section className="flex flex-row justify-between border-t-1 mt-10 pt-4 w-[80rem] ml-24 text-gray-500">
        <div className="flex flex-row space-x-2">
          <h1 className="text-2xl font-bold">Fiverr</h1>
          <p className="flex flex-row justify-center items-center">
            <IoSyncCircleOutline />
            Fiverr International Ltd. 2024
          </p>
        </div>
        <div className="flex flex-row text-2xl space-x-4">
          <SlSocialInstagram />
          <FaFacebook />
          <IoLogoLinkedin />
          <FaPinterest />
          <FaSquareXTwitter />
          <span className="flex flex-row space-x-1.5">
            <CiGlobe />
            <h1 className="text-[18px]">
              <i>English</i>
            </h1>
          </span>
          <AiTwotoneDollarCircle />
          <span className="text-[18px] h-6 rounded-sm">USD</span>
        </div>
      </section>
    </div>
  );
};
export default Footer;
