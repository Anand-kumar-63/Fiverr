import React from "react";
import { features } from "../../data";
import { LuMonitorPlay } from "react-icons/lu";
import { CgCheckO } from "react-icons/cg";
import { BsTranslate } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { GoFileCode } from "react-icons/go";
import { LuFileAudio } from "react-icons/lu";
import { SiCoinmarketcap } from "react-icons/si";
import { PiCoffeeLight } from "react-icons/pi";
import { AiOutlineDatabase } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
const Features = () => {
  const market = {
    "Desgin & Graphic": <FaPencilRuler />,
    "Digital Marketing":<LuMonitorPlay/>,
    "Writing & Translation": <BsTranslate />,
    "Video & Animation":<TbPhotoVideo />,
    "Music & Audio": <LuFileAudio />,
    "Programming & tech":<GoFileCode />,
    Bussiness: <SiCoinmarketcap />,
    LifeStyle:<PiCoffeeLight />,
    Data:<AiOutlineDatabase />,
    Photography: <FaCameraRetro />,
  };
  return (
    <div>
      <div className="relative p-20 bg-green-50 h-[75vh] flex flex-row justify-between items-center">
        <section className="w-150 flex flex-col justify-center translate-x-20">
          <h1 className="text-2xl font-bold mx-4 my-2">
            A Whole Worlds Freelance talent
            <br /> at your FingerTip
          </h1>
          <div>
            <ul className="flex flex-col gap-2">
              {features.map((feature, index) => {
                return (
                  <li key={index} className="flex flex-row">
                    <h1 className="px-2 py-1 w-8 h-8 rounded-full justify-center items-center">
                      <CgCheckO />
                    </h1>
                    <span>
                      <h2 className=" text-gray-600">{feature.title}</h2>
                      <p className="text-gray-400">{feature.description}</p>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute top-1/2 -translate-y-1/2 right-40 w-[560px] h-[300px] rounded-sm object-cover bg-cover bg-center z-0 border-4 border-gray-100"
          >
            <source src="/public/videos/Features.mp4" type="video/mp4" />
          </video>
        </section>
      </div>
      {/*explore more MarketPlce  */}
      <div className="w-[98vw] h-100 m-2 p-20 overflow-hidden">
        {/* on applying translate to the child element doesnt increases the size of the the parent element sometimes it can happen due to block scope of the element so you just have to give overflow hidden to the parent element  */}
        <h1 className="text-4xl translate-x-22 mb-4">Explore the MarketPlace</h1>
      <section className="grid grid-cols-5 h-full">
        {Object.keys(market).map((key) => {
          return (
            <div className="flex flex-col justify-center items-center-safe">
              <span className="text-4xl mb-2">{market[key]}</span>
              <h1 className="border-t-1 border-gray-500">{key}</h1>
             
            </div>
          );
        })}
      </section>
      </div>
    </div>
  );
};

export default Features;
