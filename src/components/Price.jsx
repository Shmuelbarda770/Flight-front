import React, { useState, useRef, useEffect, useContext } from 'react';
import { DataPerson } from '../context/context';
import { MdOutlinePriceChange } from "react-icons/md";

const Price = () => {
    const [showPrice, setShowPrice] = useState(false);
    const [price, setPrice] = useState(0);
    const { colorApp } = useContext(DataPerson);

    const buttonRef = useRef(null);
    const priceRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (priceRef.current && !priceRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowPrice(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                ref={buttonRef}
                onClick={() => setShowPrice(!showPrice)}
                className={`px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
            >
               <MdOutlinePriceChange />
 Price
            </button>
            {showPrice && (
                <div
                    ref={priceRef}
                    className="absolute z-10 w-64 p-4 mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                    <p className="mb-2 text-lg font-semibold">Select Price</p>
                    <input
                        type='range'
                        min={0}
                        max={3000}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full mb-4"
                    />
                    <div className="text-lg text-gray-700">
                        {price}$
                    </div>
                </div>
            )}
        </div>
    );
};

export default Price;
