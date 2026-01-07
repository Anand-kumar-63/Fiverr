import React from "react";
import { reviews } from "@/pages/Gig/Data";
import { useQuery } from "@tanstack/react-query";
// import review from "../review/review";
import axios from "axios";
import { FaRegThumbsDown, FaRegThumbsUp, FaStar } from "react-icons/fa";
const Reviews = async () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getreviews"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/reviews/get");
      console.log(response);
      return response;
    },
  });
  console.log(data);
  return isLoading ? (
    error ? (
      <div>{error}</div>
    ) : (
      <div>Loading</div>
    )
  ) : (
    <div className="mt-10 mb-10">
      <h1 className="text-2xl font-semibold">Reviews</h1>
      {reviews.map((item, index) => {
        return (
          <div
            key={index}
            className="mt-4 border-b-1 rounded-xs p-2 border-gray-400"
          >
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
      })}
    </div>
  );
};

export default Reviews;
