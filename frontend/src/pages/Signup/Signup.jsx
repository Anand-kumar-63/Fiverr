import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    isSeller: false,
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e) => {
    setInput((prev) => ({ ...prev, isSeller: e.target.checked }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput((prev) => ({ ...prev, image: file }));
    }
  };

  const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const response = await axios.post("http://localhost:3000/cloud/upload", data, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });
    return response.data;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      let imageUrl = "";
      if (input.image && input.image instanceof File) {
        const cloudinaryData = await upload(input.image);
        imageUrl = cloudinaryData?.url || "";
      }
      const payload = {
        username: input.username,
        email: input.email,
        password: input.password,
        image: imageUrl,
        isSeller: input.isSeller,
        ...(input.isSeller && {
          phoneNumber: input.phoneNumber,
          description: input.description,
        }),
      };

      await axios.post("http://localhost:3000/auth/register", payload, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-[88vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-lg w-[450px] flex flex-col gap-3"
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Create Account</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="inputfields p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputfields p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inputfields p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input type="file" onChange={handleFileChange} className="inputfields p-2" />
        <label className="flex items-center gap-2 mt-2">
          <input type="checkbox" checked={input.isSeller} onChange={handleCheckbox} />
          <span>Register as Seller</span>
        </label>
        {input.isSeller && (
          <>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="inputfields p-2 border rounded"
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Describe yourself"
              rows={4}
              className="inputfields p-2 border rounded"
              onChange={handleChange}
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
        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
