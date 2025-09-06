import React from "react";
import { features } from "../../data";
const Features = () => {
  return (
    <div className="relative p-20 bg-green-50 h-[75vh] flex flex-row justify-between items-center">
      <section className="w-150 flex flex-col justify-center translate-x-20">
        <h1 className="text-2xl font-bold mx-4">A Whole Worlds Freelance talent
            <br /> at your FingerTip</h1>
        <div>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => {
              return (
                <li key={index} className="flex flex-row">
                  <h1 className="px-2 py-1 w-8 h-8 rounded-full justify-center items-center">
                    {index + 1}
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
  );
};

export default Features;
