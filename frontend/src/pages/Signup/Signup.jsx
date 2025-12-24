import React, { useState } from "react";
const Signup = () => {
  const [input , setinput] = useState({
    username: "",
    email: "",
    password: "",
    profilepic: "",
    Country: "",
  });
  const handlesubmit = () => {};
  // const handleChange = (event) => {
  //   setinput({
  //     ...prev,[input.username]:[event.username]
  //   });
  // };

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="inputfields"
        />

        <label htmlFor="username">Email:</label>
        <input type="email" name="Email" id="Email" className="inputfields" />

        <label htmlFor="Password">:</label>
        <input
          type="password"
          name="Password"
          id="Password"
          className="inputfields"
        />

        <label htmlFor="image">Profile Image:</label>
        <input
          type="file"
          name="profile image"
          id="profile image"
          className="inputfields"
        />

        <label htmlFor="Country">Country:</label>
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
       
       <label htmlFor="checkbox" className="absolute h-10 w-20 border-8 border-gray-400">
        <input type="checkbox" name="checkbox" id="checkbox" className="h-0 w-0 hidden"/>
        <span className={`absolute inset-0 `}></span>
       </label>

        <label htmlFor="PhoneNumber">Phone Number</label>
        <input
          type="number"
          name="PhoneNumber"
          id="PhoneNumber"
          className="inputfields"
        />

        <label htmlFor="Description">Description</label>
        <textarea id="story" name="story" rows="5" cols="33" className="inputfields">
          Its about you
        </textarea>
      </form>
    </div>
  );
};

export default Signup;
