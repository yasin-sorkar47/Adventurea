import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login() {
  const { singInUser, setUser, singInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const forData = new FormData(e.target);
    const email = forData.get("email");
    const password = forData.get("password");

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setUser(null);

        console.log(error.message);
        setError(error.message);
      });
  };

  const handleClick = () => {
    singInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setUser(null);
        setError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto my-24">
      <h1 className="text-2xl font-bold text-center mt-6"> Login Form</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          {error && <p className="text-red-600">this {error.slice(22, 42)}</p>}
          <label className="mt-3">
            if you don't have an account please
            <Link
              to={"/register"}
              className="label-text-alt link link-hover text-lg ml-2 font-bold"
            >
              Register
            </Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold">
            Login
          </button>
        </div>
      </form>

      <div className="pb-10 px-8">
        <button
          type="button"
          onClick={handleClick}
          className="btn bg-green-500 hover:bg-green-600 text-white text-[18px] font-bold w-full flex items-center"
        >
          Login with Google
          <FaGoogle />
        </button>
      </div>
    </div>
  );
}
