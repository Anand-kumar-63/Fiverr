import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Gigs from "./pages/Gigs/Gigs";
import Profilepage from "./pages/Profilepage/Profilepage";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders"
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Errorpage from "./pages/Errorpage/Errorpage";
import AddnewGigs from './pages/AddnewGigs/AddnewGigs'
import Message from "./pages/Message/Message";

function App() {  
  return (
    <>
      <Navbar />
        <Routes>
          <Route index element={<Home />} errorElement={<Errorpage/>}/>
          <Route path="/message/:messageId" element={<Message/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/gigs" element={<Gigs/>}/>
          <Route path="/order/:orderId" element={<Order />}/>
          <Route path="/Orders" element={<Orders />}/>
          <Route path="/profilepage" element={<Profilepage />}/>
          <Route path="/addnewgigs" element={<AddnewGigs />}/>
        </Routes>
      
      </>
  );
}

export default App;
