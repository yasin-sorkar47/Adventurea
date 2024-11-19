import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import { AuthContext } from "../context/authContext";

export default function PrivateRouts({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingPage />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
}
