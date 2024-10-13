
import React from 'react';

const Hotel = ({ nameHotel, srcImg, price, hotel_name, max_guests, country, room_price_per_adult }) => {
    
    return (
        <div className="flex flex-col max-w-4xl mx-auto overflow-hidden transition-shadow duration-300 bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row hover:shadow-2xl">
            <div className="relative w-full md:w-1/3">
                <img 
                    src={srcImg} 
                    alt={nameHotel} 
                    className="object-cover w-full h-48 md:h-full" 
                />
            </div>
            <div className="flex flex-col justify-between w-full p-4 md:p-6 md:w-2/3">
                <div>
                    <h1 className="mb-2 text-2xl font-semibold text-gray-800">{nameHotel}</h1>
                    <div className="mb-2 text-gray-600">
                        <strong className="font-medium">Hotel Name:</strong> {hotel_name}
                    </div>
                    <div className="mb-2 text-gray-600">
                        <strong className="font-medium">Max Guests:</strong> {max_guests}
                    </div>
                    <div className="mb-2 text-gray-600">
                        <strong className="font-medium">Country:</strong> {country}
                    </div>
                    <div className="mb-4 text-gray-600">
                        <strong className="font-medium">Room Price per Adult:</strong> ${room_price_per_adult}
                    </div>
                </div>
                <button className="w-full py-2 text-white transition-colors duration-300 bg-blue-500 rounded hover:bg-blue-600">
                    View prices
                </button>
            </div>
        </div>
    );
};

export default Hotel;
