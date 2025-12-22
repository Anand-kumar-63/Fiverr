// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Gigs from "./pages/Gigs/Gigs";
import Profilepage from "./pages/Profilepage/Profilepage";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders"
import Gig from "./pages/Gig/Gig";
import Signup from "./pages/Signup/Signup";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Errorpage from "./pages/Errorpage/Errorpage";
import AddnewGigs from './pages/AddnewGigs/AddnewGigs'
import Message from "./pages/Message/Message";
// import { Login } from "../../backend/controllers/user";
import Login from "./pages/Login/login";
import React from "react";
function App(){
  return(
    <div>
      <Navbar />
        <Routes>
          <Route index element={<Home />} errorElement={<Errorpage/>}/>
          <Route path="/message/:messageId" element={<Message/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/gigs" element={<Gigs/>}/>
          <Route path="/gig/:gigId" element={<Gig/>}/>
          <Route path="/order/:orderId" element={<Order />}/>
          <Route path="/Orders" element={<Orders />}/>
          <Route path="/profilepage" element={<Profilepage />}/>
          <Route path="/addnewgigs" element={<AddnewGigs />}/>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
    </div>
  )
};

export default App;
