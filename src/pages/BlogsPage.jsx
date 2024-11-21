import { useLoaderData } from "react-router-dom";
import Blogs from "../components/Blogs";

export default function BlogsPage() {
  const blogs = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mb-10">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-800 font-bold text-center mt-10 mb-5">
        Adventure All Blogs
      </h1>
      <p className="max-w-[700px] mx-auto text-center  mb-10">
        Adventure Experiences offer thrilling activities that connect you with
        nature and test your limits. From mountain treks and kayaking to
        zip-lining and camping under the stars, each adventure is designed to
        create unforgettable memories and fuel your passion for exploration.
      </p>
      <Blogs blogs={blogs} />
    </div>
  );
}
