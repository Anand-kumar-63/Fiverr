import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";

const Signup = () => {
  const [input, setinput] = useState({
    username: "",
    email: "",
    password: "",
    profilepic: "",
    Country: "",
  });
  const handlesubmit = () => {};
  const handleChange = (event) => {
    setinput({
      ...prev,
    });
  };
  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handlesubmit}>
        <label for="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="inputfields"
        />

        <label for="username">Email:</label>
        <input type="email" name="Email" id="Email" className="inputfields" />

        <label for="Password">:</label>
        <input
          type="password"
          name="Password"
          id="Password"
          className="inputfields"
        />

        <label for="image">Profile Image:</label>
        <input
          type="file"
          name="profile image"
          id="profile image"
          className="inputfields"
        />

        <label for="Country">Country:</label>
        <input
          type="text"
          name="Country"
          id="Country"
          className="inputfields"
        />

        <button type="submit" className="px-10 bg-green-500 text-white">
          Register
        </button>
      </form>

      {/* want to become a seller */}
      <form onSubmit={handlesubmit}>
       
       <label for="checkbox" className="absolute h-10 w-20 border-8 border-gray-400">
        <input type="checkbox" name="checkbox" id="checkbox" className="h-0 w-0 hidden"/>
        <span className={`absolute inset-0 `}></span>
       </label>

        <label for="PhoneNumber">Phone Number</label>
        <input
          type="number"
          name="PhoneNumber"
          id="PhoneNumber"
          className="inputfields"
        />

        <label for="Description">Description</label>
        <textarea id="story" name="story" rows="5" cols="33" className="inputfields">
          Its about you
        </textarea>
      </form>
    </div>
  );
};

export default Signup;
