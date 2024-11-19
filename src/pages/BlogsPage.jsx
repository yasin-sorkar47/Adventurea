import { useLoaderData } from "react-router-dom";
import Blogs from "../components/Blogs";

export default function BlogsPage() {
  const blogs = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mb-10">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center my-10">
        Adventure All Blogs
      </h1>
      <Blogs blogs={blogs} />
    </div>
  );
}
