import { Link } from "react-router-dom";

export default function Adventure({ adventure }) {
  return (
    <div
      key={adventure.id}
      className="card shadow-lg rounded-lg overflow-hidden"
    >
      <img
        src={adventure.image}
        alt={adventure.title}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-3">{adventure.title}</h2>
        <ul className="mb-6 text-sm text-gray-600">
          {adventure.ecoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✔️</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={`/adventure/${adventure.id}`}
          className="bg-green-600 text-white px-4 py-2  rounded-lg hover:bg-green-700"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}
