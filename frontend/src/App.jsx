import Navbar from "./Components/Navbar/Navbar";
import Gigs from "./pages/Gigs/Gigs";
import Profilepage from "./pages/Profilepage/Profilepage";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders";
import Gig from "./pages/Gig/Gig";
import Signup from "./pages/Signup/Signup";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Errorpage from "./pages/Errorpage/Errorpage";
import AddnewGigs from "./pages/AddnewGigs/AddnewGigs";
import Message from "./pages/Message/Message";
import Pay from "./pages/pays/Pays";
import Success from "./pages/Success/Success";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/login";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster position="top-right" />
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Navbar />
          <Routes>
            <Route index element={<Home />} errorElement={<Errorpage />} />
            <Route path="/message/:Id" element={<Message />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/gig/:gigId" element={<Gig />} />
            <Route path="/order/:orderId" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/pay/:Id" element={<Pay />} />
            <Route path="/success" element={<Success />} />
            <Route path="/profilepage" element={<Profilepage />} />
            <Route path="/addnewgigs" element={<AddnewGigs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}

export default App;
