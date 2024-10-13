import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineLocalOffer } from "react-icons/md";

const Offers = () => {
    const [offersOpen, setOffersOpen] = useState(false);

    const buttonRef = useRef(null);
    const offersRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                buttonRef.current && !buttonRef.current.contains(event.target) &&
                offersRef.current && !offersRef.current.contains(event.target)
            ) {
                setOffersOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                ref={buttonRef}
                onClick={() => setOffersOpen(!offersOpen)}
                className="flex items-center px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <MdOutlineLocalOffer className="mr-2 text-xl" />
                <span>Offers</span>
            </button>

            {offersOpen && (
                <div
                    ref={offersRef}
                    className="absolute z-10 w-64 p-4 mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                    <div className="flex items-center mb-2">
                        <input id="checkboxFree" type="checkbox" className="mr-2" />
                        <label htmlFor="checkboxFree" className="text-gray-700">Free cancellation</label>
                    </div>
                    <div className="flex items-center">
                        <input id="checkboxSpecial" type="checkbox" className="mr-2" />
                        <label htmlFor="checkboxSpecial" className="text-gray-700">Special offers</label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Offers;
