
import React, { useRef, useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { MdStars } from "react-icons/md";

const HotelClass = () => {
    const [showHotelClass, setShowHotelClass] = useState(false);
    const [hotelClassdata, setHotelClassdata] = useState('');

    const buttonRef = useRef(null);
    const HotelClassRef = useRef(null);

    useEffect(() => {
        function handleshowHotelClass(event) {
            if (buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                HotelClassRef.current &&
                !HotelClassRef.current.contains(event.target)) {
                setShowHotelClass(false);
            }
        }

        document.addEventListener('mousedown', handleshowHotelClass);

        return () => {
            document.removeEventListener('mousedown', handleshowHotelClass);
        };
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={() => setShowHotelClass(!showHotelClass)}
                className="flex items-center px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <MdStars className="mr-2" /> 5-star
            </button>

            {showHotelClass && (
                <div
                    ref={HotelClassRef}
                    className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full"
                >
                    <p className="p-4 font-semibold border-b border-gray-300">Hotel class</p>
                    <div
                        onClick={() => setHotelClassdata(2)}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                    >
                        <h1 className="flex items-center text-lg font-medium"><CiStar className="mr-2 text-yellow-500" /> 2-star</h1>
                        <p className="text-gray-600">just the basics</p>
                    </div>
                    <div
                        onClick={() => setHotelClassdata(3)}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                    >
                        <h1 className="flex items-center text-lg font-medium"><CiStar className="mr-2 text-yellow-500" /> 3-star</h1>
                        <p className="text-gray-600">Quality comfort</p>
                    </div>
                    <div
                        onClick={() => setHotelClassdata(4)}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                    >
                        <h1 className="flex items-center text-lg font-medium"><CiStar className="mr-2 text-yellow-500" /> 4-star</h1>
                        <p className="text-gray-600">Lot of extras</p>
                    </div>
                    <div
                        onClick={() => setHotelClassdata(5)}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                    >
                        <h1 className="flex items-center text-lg font-medium"><CiStar className="mr-2 text-yellow-500" /> 5-star</h1>
                        <p className="text-gray-600">Top service</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelClass;
