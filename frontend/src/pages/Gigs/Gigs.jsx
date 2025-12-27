import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useParams } from "react-router";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import axios from "axios";
import { gigs } from "./Data";
// import { useSearchParams } from "react-router";/
import { useQuery } from "@tanstack/react-query";
const Gigs = () => {
  // const [error, seterror] = useState("");
  const [opensort, setopensort] = useState("");
  const minref = useRef();
  const maxref = useRef();

  const { isPending, error, data } = useQuery({
    queryKey: ["get-gigs"],
    queryFn: async () => {
       const response = await axios.get("http://localhost:3000/gig/", 
        { withCredentials: true });
      // always remember reactquery expects queryfn to return some value so you should be returning the axios response?.data 
      return response?.data;  
    },
  });
  const gigdata = data;
  console.log(gigdata);

  // useEffect(() => {
  //   async function callthefunc() {
  //     try {
  //       const response = await axios.get("http://localhost:3000/gig", {
  //         withCredentials: true,
  //       });
  //       const gigs = response?.data;
  //       console.log(gigs);
  //       if (!gigs) {
  //         seterror("Invalid email or password");
  //         return;
  //       }
  //     } catch (err) {
  //       if (err.response) {
  //         seterror(err.response.data?.message || "Gigs are not fetched");
  //       } else {
  //         seterror("Network error");
  //       }
  //     }
  //   }
  //   callthefunc();
  // }, []);

  return (
    <div className="px-66 text-gray-500 space-y-1 py-6">
      <span>{`FIVER>GRAPHIC & DESGIN>`}</span>
      <h1 className="text-black font-bold text-3xl">AI Artists</h1>
      <p>
        explore the boundaries of Art and Technology with the world's most
        talented AI artists
      </p>
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-1 text-gray-500">
          <label htmlFor="Budged">Budged</label>
          <input
            type="text"
            placeholder="min"
            className="border-2 px-1 outline-none"
          />
          <input
            type="text"
            placeholder="max"
            className="border-2 px-1 outline-none"
          />
          <button className="px-8 bg-green-500 text-white rounded-sm">
            Apply
          </button>
        </span>
        <span>
          <label htmlFor="Sort by">Sort by : </label>
          <select name="filter" id="filter" className="outline-none">
            (
            <option
              value="Newest"
              onClick={() => {
                setopensort("Newest");
              }}
            >
              Newest
            </option>
            ) (
            <option
              value="Best selling"
              onClick={() => {
                setopensort("Best Selling");
              }}
            >
              Best Selling
            </option>
            )
          </select>
        </span>
      </div>

      <div className="gap-x-10 space-y-4 grid grid-cols-3 p-2">
        {gigdata?.map((item, index) => {
          return (
            <Link to={`/gig/${item._id}`} key={index}>
              <div key={index} className="bg-gray-50 rounded-xl">
                <div className="w-[100%]">
                  <img
                    src={item.CoverImg}
                    alt="alter"
                    className="rounded-t-xl object-cover h-[280px] w-[400px]"
                  />
                </div>

                <div className=" px-4 py-2">
                  <span className="flex2 items-center">
                    <span className="object-cover rounded-2xl">
                      <img
                        src={item.CoverImg}
                        alt="profile pic"
                        className="object-cover h-[30px] w-[30px] rounded-full"
                      />
                    </span>
                    <span className="text-black">{item.username}</span>
                  </span>
                  <p>{item.desc}</p>

                  <span className="text-yellow-200 flex flex-row items-center gap-1">
                    <FaStar />
                    <span className="text-gray-400">{Math.round(item.totalStar/item.starNumber)}</span>
                  </span>

                  <div className="flex flex-row justify-between items-center bg-gray-100 border-t-1 border-gray-200 h-16 p-2">
                    <IoMdHeart />
                    <span className="text-gray-500 text-sm">
                      STARTING AT{" "}
                      <i className="text-black text-xl"> {item.price}$</i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gigs;
