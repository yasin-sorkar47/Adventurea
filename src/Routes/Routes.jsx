import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layOuts/MainLayOuts";
import AdventureDetails from "../pages/AdventureDetails";
import BlogsDetails from "../pages/BlogsDetails";
import BlogsPage from "../pages/BlogsPage";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/adventureExperience.json");
          const adventures = await res.json();

          const Blogres = await fetch("/adventureBlogs.json");
          const adventureBlogs = await Blogres.json();

          return { adventures, adventureBlogs };
        },
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
        loader: () => fetch("/adventureBlogs.json"),
      },
      {
        path: "/adventure/:id",
        element: (
          <PrivateRouts>
            <AdventureDetails />
          </PrivateRouts>
        ),
        loader: () => fetch("/adventureExperience.json"),
      },
      {
        path: "/blog/details/:id",
        element: (
          <PrivateRouts>
            <BlogsDetails />
          </PrivateRouts>
        ),
        loader: () => fetch("/adventureBlogs.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouts>
            <Profile />
          </PrivateRouts>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouts>
            <UpdateProfile />
          </PrivateRouts>
        ),
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export { router };
