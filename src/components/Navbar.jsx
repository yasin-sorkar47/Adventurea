import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = () => {
    signOutUser()
      .then(() => {
        console.log("successfully Log out");
        setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Adventurea | Home";
    } else if (location.pathname === "/blogs") {
      document.title = "Adventurea | Blogs";
    } else if (location.pathname === "/updateProfile") {
      document.title = "Adventurea | Update Profile";
    } else if (location.pathname === "/profile") {
      document.title = "Adventurea | My Profile";
    }
  }, [location.pathname]);

  return (
    <nav className="bg-green-600 p-4 ">
      <div className="w-11/12 mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-2xl text-white font-bold">
          Adventurea
        </Link>
        <div className=" items-center md:space-x-10 hidden md:flex ">
          <NavLink to="/" className="text-white hover:text-yellow-400 ">
            Home
          </NavLink>
          <NavLink to="/blogs" className="text-white hover:text-yellow-400 ">
            Blogs
          </NavLink>

          {user && (
            <NavLink
              to="/updateProfile"
              className="text-white hover:text-yellow-400 "
            >
              Update Profile
            </NavLink>
          )}

          {user ? (
            <div className="relative flex items-center">
              <NavLink
                to={"/profile"}
                className="flex items-center text-white hover:text-yellow-400 "
              >
                <img
                  title={user?.displayName}
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-white mr-3"
                />
                My Profile
              </NavLink>
              <button
                onClick={handleClick}
                className="ml-4 text-white hover:text-yellow-400 "
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/register"
                className="text-white hover:text-yellow-400"
              >
                Register
              </NavLink>
              <NavLink to="/login" className="text-white hover:text-yellow-400">
                Login
              </NavLink>
            </>
          )}
        </div>

        {/* for mobile  */}
        {show && (
          <div className="z-50 items-center  flex flex-col absolute right-0 top-20 bg-green-600 p-6 gap-y-2 ">
            <NavLink to="/" className="text-white hover:text-yellow-400 ">
              Home
            </NavLink>
            <NavLink to="/blogs" className="text-white hover:text-yellow-400 ">
              Blogs
            </NavLink>

            <NavLink
              to="/register"
              className="text-white hover:text-yellow-400"
            >
              Register
            </NavLink>

            {user && (
              <NavLink
                to="/updateProfile"
                className="text-white hover:text-yellow-400 "
              >
                Update Profile
              </NavLink>
            )}

            {user ? (
              <div className="relative flex items-center flex-col gap-y-2">
                <NavLink
                  to={"/profile"}
                  className="flex items-center text-white hover:text-yellow-400"
                >
                  <img
                    title={user?.displayName}
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-white mr-3"
                  />
                  My Profile
                </NavLink>
                <button
                  onClick={handleClick}
                  className="ml-4 text-white hover:text-yellow-400 "
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="text-white hover:text-yellow-400"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-white hover:text-yellow-400"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        )}

        <button
          onClick={() => setShow(!show)}
          className="text-2xl font-extrabold text-white md:hidden"
        >
          {show ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
