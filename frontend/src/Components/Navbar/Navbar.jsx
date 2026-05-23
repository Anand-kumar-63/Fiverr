import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import axios from "axios";
import { API_BASE_URL } from "@/lib/api";

const Navbar = () => {
  const navigate = useNavigate();
  const [activedownbar] = useState(true);
  const [isuseractive, setUserActive] = useState(false);
  const [togglebtn, setToggleBtn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return;
    try {
      const parsed = JSON.parse(currentUser);
      setUserActive(true);
      setUser({
        username: parsed.username,
        email: parsed.email,
        image: parsed.image,
      });
    } catch {
      localStorage.removeItem("currentUser");
    }
  }, [navigate]);

  async function logoutUser() {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("currentUser");
      setUserActive(false);
      navigate("/login");
    } catch (error) {
      console.log("Logout failed", error);
    }
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className="sticky top-0 relative select-none z-50">
        <nav className="flex flex-row justify-around items-center bg-white h-16">
          <Link to="/">
            <div>
              <span className="text-3xl font-extrabold">Fiverr</span>
              <span className="text-green-400 text-3xl">.</span>
            </div>
          </Link>
          <div className="flex flex-row justify-between items-center mt-1 gap-2">
            <ul className="flex flex-row gap-5 text-md">
              <li>Fiverr Business</li>
              <li>Explore</li>
              <li>English</li>
              {!isuseractive && (
                <li>
                  <Link to="/login">Sign-in</Link>
                </li>
              )}
              <li>Become a Seller</li>
            </ul>
            {!isuseractive && (
              <Link to="/signup">
                <button className="ml-2 py-2 px-6 rounded-sm border-2 border-green-300">
                  Join
                </button>
              </Link>
            )}
            {isuseractive && (
              <div
                className="flex flex-row items-center p-1 px-1 cursor-pointer"
                onClick={() => setToggleBtn(!togglebtn)}
              >
                <Avatar>
                  <AvatarImage src={user.image} alt={user.username} />
                  <AvatarFallback>{user.username?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <span className="flex flex-col px-1 text-sm font-light text-gray-600">
                  {user.username}
                  <br />
                  {user.email}
                </span>
              </div>
            )}
          </div>
        </nav>
        <hr className="text-gray-300" />
        {togglebtn && isuseractive && (
          <div className="bg-amber-50 w-40 flex justify-center absolute top-18 right-64 cursor-pointer p-1 rounded-sm">
            <ul className="flex flex-col text-gray-400 gap-1">
              <Link to="/gigs">
                <li>Gigs</li>
              </Link>
              <Link to="/addnewgigs">
                <li>Add new Gigs</li>
              </Link>
              <Link to="/orders">
                <li>Orders</li>
              </Link>
              <Link to="/messages">
                <li>Messages</li>
              </Link>
              <li onClick={logoutUser} className="font-sans">
                Logout
              </li>
            </ul>
          </div>
        )}
        {activedownbar && (
          <div className="bg-gray-100 p-1">
            <ul className="font-light text-gray-400 text-sm flex flex-row gap-[46px]">
              <li>Graphic Design</li>
              <li>Video Animation</li>
              <li>Writing and Translation</li>
              <li>AI Services</li>
              <li>Digital Marketing</li>
              <li>Music & Audio</li>
              <li>Business</li>
              <li>Lifestyle</li>
              <li>Programming & Tech</li>
            </ul>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Navbar;
