import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";
import Review from "../review/review";
import { ErrorBoundary } from "react-error-boundary";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["getreviews", gigId],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/reviews/${gigId}`, {
        withCredentials: true,
      });
      return res.data;
    },
    enabled: !!gigId,
  });

  const mutation = useMutation({
    mutationFn: async (newreview) => {
      const response = await axios.post(
        `${API_BASE_URL}/reviews/`,
        newreview,
        { withCredentials: true }
      );
      return response?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getreviews", gigId] });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desc = e.target.desc.value;
    const star = e.target.star.value;
    if (!star) return;
    await mutation.mutateAsync({
      gigId,
      desc,
      star: Number(star),
    });
    e.target.reset();
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className="mt-10 mb-10">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        {isLoading ? (
          "Loading"
        ) : error ? (
          <p className="text-red-500 text-sm">Something went wrong</p>
        ) : (
          data?.map((review) => <Review review={review} key={review._id} />)
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add a Review</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            placeholder="Share your experience..."
            name="desc"
            required
            className="resize-none h-24 p-3 border border-gray-300 rounded-md"
          />
          <div className="flex items-center justify-between gap-3">
            <select
              className="w-24 p-2 border border-gray-300 rounded-md"
              name="star"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Rating
              </option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <button
              className="px-6 py-2 bg-green-500 text-white font-medium rounded-md"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </ErrorBoundary>
  );
};

export default Reviews;
