import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    <div className="m-2 w-[67vw] bg-gray-100 mx-70 flex flex-col items-center">
      <form
        action=""
        onSubmit={handlesubmit}
        className="flex flex-col p-1 justify-center items-center gap-2"
      >
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
        <Button className="px-10 w-[200px] m-1">
          <input type="submit" value="submit" />
        </Button>
        <Button className="px-10 w-[200px] m-1">
          <input type="reset" value="Reset" />
        </Button>
      </form>
      {error && (
        <div>
          <p className="text-sm text-red-600 font-sans m-3">{error}</p>
        </div>
      )}
    </div>
  );
};
export default Login;
