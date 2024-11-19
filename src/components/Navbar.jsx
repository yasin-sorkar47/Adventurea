import React, { useContext, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, setUser, signOutUser } = useContext(AuthContext);

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

  return (
    <nav className="bg-green-600 p-4 ">
      <div className="w-11/12 mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-2xl text-white font-bold">
          Adventurea
        </Link>
        <div className=" items-center md:space-x-10 hidden md:flex ">
          <Link to="/" className="text-white hover:text-yellow-400 ">
            Home
          </Link>
          <Link to="/blogs" className="text-white hover:text-yellow-400 ">
            Blogs
          </Link>
          {user && (
            <Link
              to="/update-profile"
              className="text-white hover:text-yellow-400 "
            >
              Update Profile
            </Link>
          )}

          <Link to="/register" className="text-white hover:text-yellow-400">
            Register
          </Link>

          {user ? (
            <div className="relative flex items-center">
              <Link to={"/profile"} className="flex items-center">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="ml-2 text-white hover:text-yellow-400">
                  {user?.displayName}
                </span>
              </Link>
              <button
                onClick={handleClick}
                className="ml-4 text-white hover:text-yellow-400 "
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-yellow-400">
              Login
            </Link>
          )}
        </div>

        {/* for mobile  */}
        {show && (
          <div className=" items-center  flex flex-col absolute right-0 top-20 bg-green-600 p-6 gap-y-2 ">
            <Link to="/" className="text-white hover:text-yellow-400 ">
              Home
            </Link>

            {user && (
              <Link
                to="/update-profile"
                className="text-white hover:text-yellow-400 "
              >
                Update Profile
              </Link>
            )}

            {user ? (
              <div className="relative flex items-center flex-col gap-y-2">
                <div className="flex items-center">
                  <img
                    src={user.photoUrl}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <span className="ml-2 text-white hover:text-yellow-400">
                    {user.name}
                  </span>
                </div>
                <button className="ml-4 text-white hover:text-yellow-400 ">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-white hover:text-yellow-400">
                Login
              </Link>
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
