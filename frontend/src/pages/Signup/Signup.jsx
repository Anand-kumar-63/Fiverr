import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  // const [file, setfile] = useState(null);
  const [error, seterror] = useState("");
  const [input, setinput] = useState({
    username: "",
    email: "",
    password: "",
    description: "",
    image: "",
    isSeller: false,
    PhoneNumbe: "",
  });
  console.log(input);
  const handlechange = (e) => {
    setinput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCheckbox = (e) => {
    setinput((prev) => ({
      ...prev,
      isSeller: e.target.checked,
    }));
  };

  const handlefilechange = async (e) => {
    event.preventDefault();
    setinput((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr");
    try {
      const response = await axios.post(
        "http://localhost:3000/cloud/upload",
        data,
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error detected", error);
    }
  };

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      let imageUrl = "";
      if (input.image) {
        imageUrl = await upload(input.image);
        if (imageUrl) {
          console.log(imageUrl);
        }
      }
      const payload = {
        username: input.username,
        email: input.email,
        password: input.password,
        image: input.image,
        isSeller: input.isSeller,
        PhoneNumbe: input.PhoneNumbe,
        description: input.description,
      };

      const response = await axios.post(
        "http://localhost:3000/auth/register",
        payload,
        { withCredentials: true }
      );
      const user = response.data.user;
      if (!user) {
        seterror("Invalid email or password");
        return;
      }
      console.log(user);
      navigate("/");
    } catch (error) {
      if (error.response) {
        seterror(error.response.data?.message || "Register failed");
      }
      console.log("Error in registration", error);
    }
  }
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handlesubmit}
        className="bg-white p-10 rounded-xl shadow-lg w-[450px] flex flex-col gap-3"
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          Create Account
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="inputfields p-2"
          onChange={handlechange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputfields p-2"
          onChange={handlechange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inputfields p-2"
          onChange={handlechange}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          className="inputfields p-2"
          onChange={handlechange}
        />

        <input
          type="file"
          onChange={handlefilechange}
          className="inputfields p-2"
        />

        {/* Seller Toggle */}
        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={input.isSeller}
            onChange={handleCheckbox}
          />
          <span>Register as Seller</span>
        </label>

        {input.isSeller && (
          <>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="inputfields p-2"
              onChange={handlechange}
            />

            <textarea
              name="description"
              placeholder="Describe yourself"
              rows={4}
              className="inputfields p-2"
              onChange={handlechange}
            />
          </>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600"
        >
          Register
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
