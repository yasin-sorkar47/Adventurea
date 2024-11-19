import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function AdventureDetails() {
  const data = useLoaderData();
  const params = useParams();

  const {
    title,
    image,
    category,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = data.find((item) => item.id == params.id);

  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const startHour = 10;
    const endHour = 20;

    if (currentHours >= startHour && currentHours < endHour) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10 mb-14">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-2">{shortDescription}</p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-700">
            Category: {category}
          </span>
          <span
            className={`px-4 py-1 text-white rounded-full ${
              bookingAvailability ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {bookingAvailability ? "Available" : "Sold Out"}
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-600">Cost: ${adventureCost}</span>
          <span className="text-gray-600">Duration: {duration}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Location:</h3>
        <p className="text-gray-600">{location}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Adventure Level:
        </h3>
        <p className="text-gray-600">{adventureLevel}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Included Items:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {includedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Eco-Friendly Features:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {ecoFriendlyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Max Group Size:
        </h3>
        <p className="text-gray-600">{maxGroupSize}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Special Instructions:
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {specialInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleTalkWithExpert}
          className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all"
        >
          Talk with Expert
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Consultation Hours</h2>
            <p className="text-gray-600">
              Our experts are available from <strong>10:00 AM</strong> to{" "}
              <strong>8:00 PM</strong>. Please try again during these hours.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-error mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
