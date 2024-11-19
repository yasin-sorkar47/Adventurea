import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-lg font-medium text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Please check the URL or go back to the homepage.
        </p>
        <Link
          className="btn bg-green-600 hover:bg-green-600 font-bold text-[17px] text-white mt-6"
          to={"/"}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
