
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FlyCard = ({ item, image }) => {
  const [img, setImg] = useState('');
  const navigate = useNavigate();

  const toPey = () => {
    navigate('/peyFly');
  };

  if (!item) return null;

  const {
    flight_id,
    origin,
    destination,
    departure_date,
    arrival_date,
    duration,
    price,
    class: flightClass
  } = item;

  const formatDate = (date) => new Date(date).toLocaleString();

  return (
    <div className="relative flex flex-col items-start p-8 mb-8 transition-shadow duration-300 ease-in-out shadow-lg md:flex-row bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl hover:shadow-2xl">
      <div className="flex-shrink-0 w-full mb-6 md:w-1/3 md:mb-0">
        {image ? (
          <img
            src={image.webformatURL}
            alt="Flight"
            className="object-cover w-full h-full rounded-lg shadow-md"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg shadow-md">
            <span className="text-lg font-medium text-gray-600">No Image Available</span>
          </div>
        )}
      </div>

      <div className="flex-1 md:ml-8">
        <h2 className="mb-6 text-3xl font-extrabold text-white">Flight Details</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Origin:</span>
            <span className="ml-3 text-lg text-white">{origin}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Destination:</span>
            <span className="ml-3 text-lg text-white">{destination}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Departure Date:</span>
            <span className="ml-3 text-lg text-white">{formatDate(departure_date)}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Arrival Date:</span>
            <span className="ml-3 text-lg text-white">{formatDate(arrival_date)}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Duration:</span>
            <span className="ml-3 text-lg text-white">{duration}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Price:</span>
            <span className="ml-3 text-lg text-white">${price}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-medium text-white">Class:</span>
            <span className="ml-3 text-lg text-white">{flightClass}</span>
          </div>
        </div>
        <button
          onClick={toPey}
          className="px-6 py-3 mt-6 font-semibold text-blue-600 transition-colors duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FlyCard;
