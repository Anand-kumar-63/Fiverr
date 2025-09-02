import { useState, useEffect } from "react";
import React from "react";
import { flushSync } from "react-dom";
import {Link} from 'react-router-dom';
import {ErrorBoundary} from "react-error-boundary"
const Navbar = () => {
  const [activedownbar, setactivedownbar] = useState(true);
  const [isuseractive, setuseractive] = useState(true);
  const [togglebtn, settogglebtn] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      // using window object to see track the scroll event this window.scrolly returns the
      // the amount of pixels by which the page is scrolled vertically
      window.scrollY > 0 ? setactivedownbar(true) : setactivedownbar(false);
    });
  }, []);
  // you have to fetch the user using session
  const user = {
    username: "Feineerr",
    email: "Email@gmail.com",
    password: "passowrd",
  };

  return (
    <>
    <ErrorBoundary fallback={<div>Seomthing went Wrong</div>}>
      <div className="sticky top-0 relative select-none">
        <nav className="flex flex-row justify-around items-center bg-transparent my-1 h-16">
          {/* // logo or name  */}
          <div>
           
            <Link to="/">
            <span className="text-3xl font-extrabold" id="Logo">
              Fiverr
            </span>
            </Link>
     
            <span className="text-green-400 text-3xl" id="dot">
              .
            </span>
          </div>
          {/* // urls */}
          <div className="flex flex-row justify-between items-center mt-1">
            <ul className="flex flex-row gap-5 text-md">
              <li>Fiverr Bussiness</li>
              <li>Explore</li>
              <li>English</li>
              {!isuseractive && <li>Sign-in</li>}
              <li>Became a Seller</li>
            </ul>
           {!isuseractive && <button className="ml-2 bg-green-300 py-2 px-6 rounded-sm bg-transparent border-2 border-green-300">
              Join in
            </button>
}
            {/* profile  */}
            {isuseractive && (
              <div
                className="ml-5"
                onClick={() => {
                  settogglebtn(!togglebtn);
                }}
              >
                {/* <img src="" alt=""/> */}

                <span>
                  {user.username}
                  <br />
                  {user.email}
                </span>
              </div>
            )}
          </div>
        </nav>
        <hr className="text-gray-300" />

        {/*  pathname=="home" &&*/ 
         togglebtn &&  
         (
          <div className="bg-amber-50 w-40 flex justify-center absolute top-18 right-55 cursor-pointer p-1 rounded-sm">
            <ul className="flex flex-col text-gray-400">
              <li>Gigs</li>
              <li>Add new Gigs</li>
              <li>Order</li>
              <li>Messages</li>
              <li>Logout</li>
            </ul>
          </div>
        )}

        {/* navbar menu at the bottom */}
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
