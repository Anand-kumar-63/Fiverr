import React from "react";
import { FaRegThumbsDown, FaRegThumbsUp, FaStar } from "react-icons/fa";
const review = ({ item }) => {
  return (
    <div className="mt-4 border-b-1 rounded-xs p-2 border-gray-400">
      <span className="flex flex-row space-x-2 items-center">
        <span>
          <img
            src="/images/united-states.png"
            alt="american logo"
            className="rounded-full object-cover h-10 w-10"
          />
        </span>
        <span className="text-gray-700 text-sm">
          <h1>{item.user}</h1>
          <h2>{item.country}</h2>
          <span className="flex flex-row text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </span>
      </span>
      <p className="text-[16px] text-gray-500">{item.comment}</p>
      <div className="flex flex-row space-x-2 mt-2 text-gray-600">
        <h1>HelpFull?</h1>
        <span className="flex flex-row items-center space-x-1">
          <FaRegThumbsUp />
          yes
        </span>
        <span className="flex flex-row items-center space-x-1">
          <FaRegThumbsDown />
          No
        </span>
      </div>
    </div>
  );
};
export default review;
