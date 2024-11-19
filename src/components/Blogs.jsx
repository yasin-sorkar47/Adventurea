import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center mt-7">
        {blogs.length > 4 ? (
          <Link
            to={-1}
            className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 "
          >
            Go Back
          </Link>
        ) : (
          <Link
            to={"/blogs"}
            className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 "
          >
            View All
          </Link>
        )}
      </div>
    </>
  );
};

export default Blogs;
