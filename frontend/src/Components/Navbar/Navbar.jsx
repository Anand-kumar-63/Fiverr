import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Newrequest from "@/utils/axiosInstance";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffectEvent } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [activedownbar, setactivedownbar] = useState(true);
  const [isuseractive, setuseractive] = useState(true);
  const [togglebtn, settogglebtn] = useState(false);

  const [user, setuser] = useState({
    username: "anand",
    email: "anand@gmail.com",
  });

  useEffect(() => {
    const currectuser = localStorage.getItem("currectUser");
    if (!currectuser) {
      navigate("/login");
    }
    const parseduser = JSON.parse(currectuser);
    console.log(parseduser);
    if (parseduser) {
      setuser({
        username: parseduser.username,
        email: parseduser.email,
      });
    }
  }, []);

  async function logoutuser() {
    try {
      const Response = await axios.post(
        "http://localhost:3000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(Response?.data);
      localStorage.removeItem("currentUser");
      navigate("/login");
    } catch (error) {
      console.log("Logout failed",error);
    }
  }

  return (
    <>
      <ErrorBoundary fallback={<div>Seomthing went Wrong</div>}>
        <div className="sticky top-0 relative select-none z-50">
          <nav className="flex flex-row justify-around items-center bg-white h-16">
            <Link to={"/"}>
              <div>
                <span className="text-3xl font-extrabold" id="Logo">
                  Fiverr
                </span>
                <span className="text-green-400 text-3xl" id="dot">
                  .
                </span>
              </div>
            </Link>
            <div className="flex flex-row justify-between items-center mt-1">
              <ul className="flex flex-row gap-5 text-md">
                <li>Fiverr Bussiness</li>
                <li>Explore</li>
                <li>English</li>
                {!isuseractive && <li>Sign-in</li>}
                <li>Became a Seller</li>
              </ul>
              {!isuseractive && (
                <button className="ml-2 bg-green-300 py-2 px-6 rounded-sm bg-transparent border-2 border-green-300">
                  Join in
                </button>
              )}
              {isuseractive && (
                <div
                  className="ml-5"
                  onClick={() => {
                    settogglebtn(!togglebtn);
                  }}
                >
                  <span>
                    {user.username || "tanziro"}
                    <br />
                    {user.email || "tanziro@gmail.com"}
                  </span>
                </div>
              )}
            </div>
          </nav>
          <hr className="text-gray-300" />
          {togglebtn && (
            <div className="bg-amber-50 w-40 flex justify-center absolute top-18 right-55 cursor-pointer p-1 rounded-sm">
              <ul className="flex flex-col text-gray-400">
                <Link to={"/gigs"}>
                  <li>Gigs</li>
                </Link>
                <Link to={"/addnewgigs"}>
                  <li>Add new Gigs</li>
                </Link>
                <Link to={"/orders"}>
                  <li>Orders</li>
                </Link>
                <Link to={"/messages"}>
                  <li>Messages</li>
                </Link>

                <li onClick={logoutuser} id="logout">
                  Logout
                </li>
              </ul>
            </div>
          )}
          {activedownbar && (
            <div className="bg-gray-100 flex1 p-1">
              <ul className="font-light text-gray-400 text-sm flex flex-row gap-[46px]">
                <li>Graphic Desgin</li>
                <li>Video Animation</li>
                <li>Writing and Tanslation</li>
                <li>Ai Services</li>
                <li>Digital Marketing</li>
                <li>Music & Audio</li>
                <li>Bussiness</li>
                <li>Lifestyle</li>
                <li>Programming & Tech</li>
              </ul>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </>
  );
};
export default Navbar;
