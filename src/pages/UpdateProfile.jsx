import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

export default function UpdateProfile() {
  const { updateUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photo = formData.get("photo");

    const userInf = {
      displayName: name,
      photoURL: photo,
    };

    updateUser(userInf)
      .then(() => {
        toast("profile update successfully.", {
          position: "top-center",
        });
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        toast(error.message, {
          position: "top-center",
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto my-32">
      <h1 className="text-2xl font-bold text-center mt-6">
        {" "}
        Update Profile Form
      </h1>
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
        <div className="form-control mt-6">
          <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
