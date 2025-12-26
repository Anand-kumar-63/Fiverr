import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
// import Newrequest from "@/utils/axiosInstance";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const user = response?.data?.user;
      console.log(user);
      if (!user) {
        seterror("Invalid email or password");
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      if (err.response) {
        seterror(err.response.data?.message || "Login failed");
      } else {
        seterror("Network error");
      }
    }
  }
  return (
    <div className="m-20 ml-80 w-[60vw] p-10 bg-gray-100 flex flex-col items-center rounded-2xl shadow-sm">
      <form
        action=""
        onSubmit={handlesubmit}
        className="flex flex-col p-1 justify-center items-center gap-2"
      >
        <h1 className="text-4xl">Welcome back!</h1>
        <p>Enter your Credentials and enjoy!</p>

        <div className="flex flex-col">
          <label htmlFor="Email">Email: </label>
          <input
            type="Email"
            name="Email"
            id="Email"
            placeholder="Email"
            className="h-10 px-10 rounded-sm border-1"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="h-10 px-10 rounded-sm border-1"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <Button className="px-10 w-full text-lg m-1 bg-blue-500 hover:bg-blue-400">
          <input type="submit" value="submit" />
        </Button>
        <Button className="px-10 w-full text-lg m-1 bg-red-500 hover:bg-red-400">
          <input type="reset" value="Reset" />
        </Button>
      </form>
      {error && (
        <div>
          <p className="text-sm text-red-600 font-sans m-3">{error}</p>
        </div>
      )}
      <p className="text-sm">
        new here? Create new accout{" "}
        <Link to={"/Signup"}>
          <span className="text-blue-500 text-sm">signup</span>
        </Link>
      </p>
    </div>
  );
};
export default Login;
