import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, image, date, shortDescription, id } = blog;

  return (
    <div
      data-aos="fade-right"
      className=" bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mt-3">{shortDescription}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-500 text-sm">{date}</span>
          <Link
            to={`/blog/details/${id}`}
            className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
