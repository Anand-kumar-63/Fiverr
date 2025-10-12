import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const user = await axios.post(
        "http://localhost:3000/userapi/Login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(user);
    } catch (err) {
        console.log("Error",err.message)
    }
  }
  return (
    <div className="m-2 w-[67vw] bg-gray-100 mx-70">
      <form action="" onSubmit={handlesubmit} className="flex flex-col p-10">
        <label for="Email">Email: </label>
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

        <label for="Password">Password: </label>
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
        <input type="submit" value="submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
};
export default Login;
