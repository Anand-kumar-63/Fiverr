import React from "react";
import { FaRegThumbsDown, FaRegThumbsUp, FaStar } from "react-icons/fa";
const Review = ({ review }) => {
  const stars = Array.from({ length: review.star });
  const item = review;
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <img
          src="/images/united-states.png"
          alt="american logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold text-gray-800">{item.user}</h1>

          <span className="flex items-center gap-2 text-xs text-gray-500">
            {item.country}
            <span className="flex text-yellow-400">
              {stars.map((_, index) => (
                <FaStar key={index} className="h-3.5 w-3.5" />
              ))}
            </span>
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span className="font-medium">Helpful?</span>

        <button className="flex items-center gap-1 hover:text-green-500 transition">
          <FaRegThumbsUp />
          Yes
        </button>

        <button className="flex items-center gap-1 hover:text-red-500 transition">
          <FaRegThumbsDown />
          No
        </button>
      </div>
    </div>
  );
};
export default Review;
