import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center my-36">
      {/* Welcome Title */}
      <h1 className="text-3xl font-bold text-blue-600 px-5 md:px-0 mb-6">
        Welcome, {user.displayName}!
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-96 text-center">
        <img
          src={user.photoURL}
          alt="User Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
        <p className="text-gray-600">{user.email}</p>

        <Link
          to={"/updateProfile"}
          className="btn bg-green-600 hover:bg-green-600 text-white mt-6"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}
