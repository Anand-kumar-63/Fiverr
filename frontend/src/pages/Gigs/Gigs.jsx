import React, { useRef, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Gigs = () => {
  const location = useLocation();
  const { search } = location;
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [sort, setSort] = useState("createdAt");
  const minRef = useRef();
  const maxRef = useRef();

  const { data: gigData, isLoading, error } = useQuery({
    queryKey: ["get-gigs", search, max, min, sort],
    queryFn: async () => {
      const params = new URLSearchParams(search.replace("?", ""));
      if (min) params.set("min", min);
      if (max) params.set("max", max);
      if (sort) params.set("sort", sort);
      const query = params.toString() ? `?${params.toString()}` : "";
      const response = await axios.get(`${API_BASE_URL}/gig${query}`, {
        withCredentials: true,
      });
      return response?.data;
    },
  });

  const apply = () => {
    setMax(maxRef.current?.value || "");
    setMin(minRef.current?.value || "");
  };

  if (isLoading) return <div className="p-10">Loading gigs...</div>;
  if (error) return <div className="p-10 text-red-500">Failed to load gigs</div>;

  return (
    <div className="px-66 text-gray-500 space-y-1 py-6">
      <span>FIVER &gt; GRAPHIC &amp; DESIGN</span>
      <h1 className="text-black font-bold text-3xl">AI Artists</h1>
      <p>Explore art and technology with talented AI artists</p>
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-1 text-gray-500">
          <label htmlFor="budget">Budget</label>
          <input
            ref={minRef}
            type="number"
            placeholder="min"
            className="border-2 px-1 outline-none"
          />
          <input
            ref={maxRef}
            type="number"
            placeholder="max"
            className="border-2 px-1 outline-none"
          />
          <button
            onClick={apply}
            className="px-8 bg-green-500 text-white rounded-sm"
          >
            Apply
          </button>
        </span>
        <span>
          <label htmlFor="filter">Sort by: </label>
          <select
            name="filter"
            id="filter"
            className="outline-none"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="createdAt">Newest</option>
            <option value="price">Price</option>
          </select>
        </span>
      </div>

      <div className="gap-x-10 space-y-4 grid grid-cols-3 p-2">
        {gigData?.length ? (
          gigData.map((item) => (
            <Link to={`/gig/${item._id}`} key={item._id}>
              <div className="bg-gray-50 rounded-xl">
                <img
                  src={item.CoverImg}
                  alt={item.title}
                  className="rounded-t-xl object-cover h-[280px] w-full"
                />
                <div className="px-4 py-2">
                  <span className="flex items-center gap-2">
                    <img
                      src={item.userId?.image || item.CoverImg}
                      alt="profile"
                      className="h-[30px] w-[30px] rounded-full object-cover"
                    />
                    <span className="text-black">
                      {item.userId?.username || "Seller"}
                    </span>
                  </span>
                  <p>{item.desc}</p>
                  <span className="text-yellow-200 flex items-center gap-1">
                    <FaStar />
                    <span className="text-gray-400">
                      {item.starNumber
                        ? Math.round(item.totalStar / item.starNumber)
                        : "New"}
                    </span>
                  </span>
                  <div className="flex justify-between items-center bg-gray-100 border-t border-gray-200 h-16 p-2">
                    <IoMdHeart />
                    <span className="text-gray-500 text-sm">
                      STARTING AT <i className="text-black text-xl">${item.price}</i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No gigs found</p>
        )}
      </div>
    </div>
  );
};

export default Gigs;
