/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import { CiStar } from "react-icons/ci";
import { MdStars } from "react-icons/md";

const Guestrating = () => {
    const [guestRating, setGuestRating] = useState(false);

    const buttonRef = useRef(null);
    const guestRatingRef = useRef(null);

    useEffect(() => {
        function GuestratingClose(event) {
            if (buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                guestRatingRef.current &&
                !guestRatingRef.current.contains(event.target)) {
                setGuestRating(false);
            }
        }

        document.addEventListener('mousedown', GuestratingClose);

        return () => {
            document.removeEventListener('mousedown', GuestratingClose);
        };
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={() => setGuestRating(!guestRating)}
                className="flex items-center px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <MdStars className="mr-2" /> Guest rating
            </button>

            {guestRating && (
                <div
                    ref={guestRatingRef}
                    className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg top-full"
                >
                    <p className="p-4 font-semibold border-b border-gray-300">Guest Rating</p>
                    <div className="p-4 cursor-pointer hover:bg-gray-100">Any</div>
                    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-100">
                        <CiStar className="mr-2 text-yellow-500" /> 3.5+
                    </div>
                    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-100">
                        <CiStar className="mr-2 text-yellow-500" /> 4.0+
                    </div>
                    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-100">
                        <CiStar className="mr-2 text-yellow-500" /> 4.5+
                    </div>
                </div>
            )}
        </div>
    );
};

export default Guestrating;
