import { Link, useLoaderData, useParams } from "react-router-dom";

export default function BlogsDetails() {
  const data = useLoaderData();
  const params = useParams();

  const blogData = data.find((item) => item.id == params.id);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={blogData.image}
          alt={blogData.title}
          className="w-full h-[350px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800">{blogData.title}</h1>
          <div className="text-sm text-gray-500 mt-2 flex items-center">
            <img
              src={blogData.authorAvatar}
              alt={blogData.author}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span>By {blogData.author}</span> | <span>{blogData.date}</span> |{" "}
            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
              {blogData.category}
            </span>
          </div>
          <p className="text-lg text-gray-700 mt-4">
            {blogData.shortDescription}
          </p>
          <div className="mt-6">
            <p className="text-gray-700">{blogData.content}</p>
          </div>
          <div className="text-center mt-5">
            <Link
              to={-1}
              className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 "
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
