import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="bg-gray-100  flex items-center justify-center my-7">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xl">
        <div className="relative">
          {/* Cover Image */}
          <img
            src="https://via.placeholder.com/600x200"
            alt="Cover"
            className="w-full h-40 object-cover"
          />
          {/* Profile Image */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="text-center mt-14 px-6">
          <h2 className="text-xl font-bold text-gray-800">
            {user.displayName}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{user.email}</p>
          <p className="text-sm text-gray-600 mt-1">
            Front-End Developer | Open Source Enthusiast
          </p>
          <div className="mt-4 flex justify-center gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-500" aria-label="GitHub">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="#" className="hover:text-blue-500" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500" aria-label="Twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
        <div className="px-6 py-4">
          <h3 className="text-gray-700 font-semibold mb-2">About Me</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I’m a passionate front-end developer skilled in creating engaging
            web experiences using HTML, Tailwind CSS, JavaScript, React, and
            Next.js.
          </p>
        </div>
        <div className="px-6 py-4">
          <h3 className="text-gray-700 font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Next.js"].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="px-6 py-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
            update profile
          </button>
        </div>
      </div>
    </div>
  );
}
