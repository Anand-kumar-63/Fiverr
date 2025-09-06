import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Cateforycard = ({ carsdetails }) => {
  const param = useParams();
  return (
    <Link to={"/gigs/category=dogs"}>
      <div className= "bg-amber-200 h-80 w-54 overflow-hidden mx-4 text-white font-Arial-md">
        <h1 className=" absolute top-0 z-10">{carsdetails.title}</h1>
        <h2 className="absolute top-4 z-10">{carsdetails.desc}</h2>
        <img src={carsdetails.img} alt="Category" className="object-center h-full w-full absolute top-0 inset-0 rounded-md"/>
      </div>
    </Link>
  );
};
export default Cateforycard;
