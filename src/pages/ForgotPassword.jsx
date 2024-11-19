import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const ForgotPassword = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = () => {
    // reset the password
    resetPassword(email)
      .then(() => {
        toast(" Password reset email sent!", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast(error.message.slice(17, 35), {
          position: "top-center",
        });
      });

    // Redirect to Gmail
    window.open("https://mail.google.com/", "_blank");

    // redirect to login
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <form className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="button"
          onClick={handleResetPassword}
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
