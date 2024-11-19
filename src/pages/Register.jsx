import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Register() {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    // reset first
    setError(" ");

    if (password.length < 6) {
      setError("password must be six character");
      return;
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setError("password should be at least one lowercase.");
      return;
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setError("password should be at least one Uppercase.");
      return;
    }
    if (!/^(?=.*[\W_]).*$/.test(password)) {
      setError("password should be one special character.");
      return;
    }

    // create user in firebase
    createUser(email, password)
      .then((result) => {
        //   update the user
        const userInfo = {
          displayName: name,
          photoURL: photo,
        };

        updateUser(userInfo)
          .then(() => {
            console.log("profile updated");
            setUser(result.user);
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto my-14">
      <h1 className="text-2xl font-bold text-center mt-6"> Register Form</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="photo"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered "
            required
          />
          {show ? (
            <button
              onClick={() => setShow(false)}
              type="button"
              className="absolute right-4 top-[53px]"
            >
              <GoEyeClosed />
            </button>
          ) : (
            <button
              onClick={() => setShow(true)}
              type="button"
              className="absolute right-4 top-[53px]"
            >
              <FiEye />
            </button>
          )}

          {error && <p className="text-red-600">{error}</p>}
          {error.message && (
            <p className="text-red-600">this {error.slice(22, 42)}</p>
          )}
          <label className="mt-3">
            if you already have an account please
            <Link
              to={"/login"}
              className="label-text-alt link link-hover text-lg ml-2 font-bold"
            >
              Login
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
