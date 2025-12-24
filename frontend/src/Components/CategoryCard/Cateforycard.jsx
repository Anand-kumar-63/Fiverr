import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
const Cateforycard = ({ carsdetails }) => {
  // const param = useParams();
  return (
    <Link to={"/gigs/category=dogs"}>
      <div className="p-1 w-auto text-white bg-yellow-400 font-Arial-md">
        <h1 className=" absolute top-10 z-10 w-full mx-4">
          {carsdetails.title}
        </h1>
        <h2 className="absolute top-14 z-10 w-full mx-4">{carsdetails.desc}</h2>
        <img
          src={carsdetails.img}
          alt="Category"
          className="object-cover insect-0"
        />
      </div>
    </Link>
  );
};
export default Cateforycard;

Cateforycard.propTypes = {
  carsdetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
