/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Offers from './Offers';
import Price from './Price';
import Allfilters from './Allfilters';
import { DataPerson } from '../context/context';
import Guestrating from './Guestrating';
import HotelClass from './HotelClass';
import Amenities from './Amenities';

const HeaderForHotels = () => {
    const { colorApp } = useContext(DataPerson);

    return (
        <div className={`fixed top-16 left-0 w-full border-t border-black p-2 z-50 bg-white shadow-md ${colorApp}`}>
            <div className="flex space-x-4">
                <Allfilters />
                <Price />
                <Offers />
                <Guestrating/>
                <HotelClass/>
                <Amenities/>
            </div>
        </div>
    );
};

export default HeaderForHotels;

// {
//   "dependencies": {
//     "body-parser": "^1.20.3",
//     "cors": "^2.8.5",
//     "express": "^4.21.0",
//     "mongodb": "^6.8.1",
//     "node-fetch": "^3.3.2",
//     "nodemailer": "^6.9.15",
//     "nodemon": "^3.1.4"
//   }
// }
