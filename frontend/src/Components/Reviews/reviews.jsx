import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
// import review from "../review/review";
import axios from "axios";
import Review from "../review/review";
import { ErrorBoundary } from "react-error-boundary";
const Reviews = ({ gigId }) => {
  const Queryclient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["getreviews", gigId],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/reviews/${gigId}`, {
        withCredentials: true,
      });
      console.log(res.data);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationKey: ["createreview"],
    mutationFn: async (newreview) => {
      const response = await axios.post(
        "http://localhost:3000/reviews/ ",
        newreview,
        {
          withCredentials: true,
        }
      );
      console.log(response?.data);
      return response?.data;
    },
    onSuccess: () => {
      Queryclient.invalidateQueries("createreview");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desc = e.target.desc.value;
    const star = e.target.name.value;
    mutation.mutateAsync({ gigId , desc , star });
  };

  return (
    <ErrorBoundary fallback={"<div>There is something wrong!</div>"}>
      <div className="mt-10 mb-10">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        {isLoading ? (
          "Loading"
        ) : error ? (
          <p className="text-red-500 text-sm">Something went wrong</p>
        ) : (
          data.map((review) => <Review review={review} key={review._id} />)
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Add a Review
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Review Input */}
          <textarea
            placeholder="Share your experience..."
            name="desc"
            className="resize-none h-24 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />

          {/* Rating + Button */}
          <div className="flex items-center justify-between gap-3">
            <select className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" name="star">
              <option value="">Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <button
              className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200 active:scale-95"
              type="submit"
            >
              {mutation.isLoading ? "submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </ErrorBoundary>
  );
};

export default Reviews;
