
import React, { useState, useRef, useEffect } from 'react';
import { CiWifiOn } from 'react-icons/ci';
import { MdWineBar } from 'react-icons/md';
import { IoIosPaw } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { TbPool, TbPoolOff } from 'react-icons/tb';

const Amenities = () => {
    const [amenitiesOpen, setAmenitiesOpen] = useState(false);

    const buttonRef = useRef(null);
    const showAmenities = useRef(null);

    useEffect(() => {
        function amenitiesClose(event) {
            if (buttonRef.current &&
                showAmenities.current &&
                !buttonRef.current.contains(event.target) &&
                !showAmenities.current.contains(event.target)) {
                setAmenitiesOpen(false);
            }
        }

        document.addEventListener('mousedown', amenitiesClose);

        return () => {
            document.removeEventListener('mousedown', amenitiesClose);
        };
    }, []);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={() => setAmenitiesOpen(!amenitiesOpen)}
                className="px-4 py-2 text-white transition duration-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
                Amenities
            </button>

            {amenitiesOpen && (
                <div
                    ref={showAmenities}
                    className="absolute right-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <CiWifiOn className="text-blue-500" />
                        <span className="text-gray-800">Wi-Fi</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <CgGym className="text-green-500" />
                        <span className="text-gray-800">Gym</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <IoIosPaw className="text-yellow-500" />
                        <span className="text-gray-800">Animals Allowed</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <MdWineBar className="text-red-500" />
                        <span className="text-gray-800">Bar</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <TbPool className="text-teal-500" />
                        <span className="text-gray-800">Pool</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <TbPoolOff className="text-gray-500" />
                        <span className="text-gray-800">No Pool</span>
                    </div>
                    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-100">
                        <TbPoolOff className="text-gray-500" />
                        <span className="text-gray-800">All</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Amenities;
