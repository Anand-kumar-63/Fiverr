import React, { useState } from "react";
import { Form } from "react-router";
const Signup = () => {
  const [file, setfile] = useState(null);

  const [input, setinput] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    profilepic: "",
    Country: "",
  });
  console.log(input);
  const handlechange = (e) => {
    setinput((prev) => {
      return { ...prev, [e.target.name]: [e.target.value] };
    });
  };

  const upload = (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr");
    try {
    } catch (error) {}
  };

  const handlesubmit = () => {
    //
  };
  return (
    <div className="flex gap-10 justify-center items-center bg-gray-100 m-10 rounded-2xl w-[70vw] h-[70vh] ml-62 select-none shadow-2xs">
      <form
        action=""
        onSubmit={handlesubmit}
        className="flex flex-col gap-1 justify-center h-[88vh] p-20 text-gray-500 cursor-pointer"
      >
        <h1 className="text-4xl font-bold text-gray-500">
          Create a new Account!
        </h1>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="inputfields text-sm p-2"
          placeholder="Enter your username"
          onChange={handlechange}
        />

        <label htmlFor="username">Email:</label>
        <input
          type="email"
          name="Email"
          id="Email"
          className="inputfields text-sm p-2"
          placeholder="Enter your Email"
          onChange={handlechange}
        />

        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          name="Password"
          id="Password"
          className="inputfields text-sm p-2"
          placeholder="Enter your password"
        />

        <label htmlFor="image">Profile Image:</label>
        <input
          type="file"
          name="profile image"
          id="profile image"
          className="inputfields text-sm p-2"
        />

        <label htmlFor="Country">Country:</label>
        <input
          type="text"
          name="Country"
          id="Country"
          className="inputfields text-sm p-2"
          placeholder="Enter your country"
          onChange={handlechange}
        />

        <button
          type="submit"
          className="px-10 bg-green-500 text-white p-2 rounded-sm mt-6 hover:bg-green-400"
        >
          Register
        </button>
      </form>

      {/* want to become a seller */}
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-1 text-gray-500"
      >
        <h1 className="text-4xl font-bold text-gray-500">
          I want to be a Seller!
        </h1>

        <label htmlFor="checkbox" className="h-10 w-50 relative inline-block">
          <span className="text-lg mr-3">check for seller:</span>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="h-0 w-0 hidden"
            onClick={handlechange}
          />
          <span
            className={`absolute inset-0 bg-amber-200 cursor-pointer transition-all duration-400 peer-checked:bg-green-500 relative`}
          >
            <span
              className="
                absolute top-[2px] left-[2px]
                w-[24px] h-[24px]
                bg-white
                rounded-full
                transition-transform duration-300
                peer-checked:translate-x-[22px]
              "
            />
          </span>
        </label>

        <label htmlFor="PhoneNumber">Phone Number:</label>
        <input
          type="number"
          name="PhoneNumber"
          id="PhoneNumber"
          className="inputfields p-2 text-sm"
          placeholder="+1 912 987 8"
          onClick={handlechange}
        />

        <label htmlFor="Description">Description:</label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          className="inputfields"
          placeholder="Describe yourself..."
          onChange={handlechange}
        ></textarea>
      </form>
    </div>
  );
};

export default Signup;
