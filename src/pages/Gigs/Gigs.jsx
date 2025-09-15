import React, { use } from "react";
import { useLocation, useParams } from "react-router";
const Gigs = () => {
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
            <option value="">Best Selling</option>
            <option value="">Newest</option>
          </select>
        </span>
      </div>
        
      <div>
       <div>
        <img src="/Images/dheck.png" alt="alter" height={30}  width={100} />
       </div>
      </div>
    </div>
  );
};

export default Gigs;
