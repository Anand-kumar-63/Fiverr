import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Gigs from "./pages/Gigs/Gigs";
import Profilepage from "./pages/Profilepage/Profilepage";
import Order from "./pages/Order/Order";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home/Home"
import Messages from "./pages/Messages/Messages";
import Errorpage from "./pages/Errorpage/Errorpage";
import Message from "./pages/Message/Message";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement:<Errorpage />,
    },
    {
      path:"/message/:messageId",
      element:<Message />
    },
    {
      path:"/messages",
      element:<Messages />
    },
    {
      path:"gigs",
      element:<Gigs />
    },
     {
      path:"/order/:orderId",
      element:<Order />
    },
    {
      path:"profilepage",
      element:<Profilepage />
    }
  ]);
  return (
    <>
      <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
