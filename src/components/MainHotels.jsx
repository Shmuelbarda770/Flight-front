
import React, { useState, useEffect, useContext } from 'react';
import Hotel from './Hotel';
import { DataPerson } from '../context/context';

const MainHotels = () => {
    const [arrHotelsImgs, setArrHotelsImgs] = useState([]);
    const [arrHotelsData, setArrHotelsData] = useState([]);
    const { serchHotel, flyTo } = useContext(DataPerson);
    const [loding, setLoding] = useState(true);

    const ApiKey = "45454791-8e684e7876df7b2c9dcef877d";
    const querys = "hotel";
    const urls = `https://pixabay.com/api/?key=${ApiKey}&q=${encodeURIComponent(querys)}&image_type=photo=${2}&per_page=${200}`;

    useEffect(() => {
        async function dataHotel(urls, flyTo) {
            try {
                const hotelFromServer = await fetch("http://localhost:3000/Hotels", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ flyTo })
                });
                const hotelFromimgs = await fetch(urls);

                if (!hotelFromServer.ok || !hotelFromimgs.ok) {
                    throw new Error('Failed to fetch data');
                }

                const jsonHotelFromServer = await hotelFromServer.json();
                const jsonHotelFromimgs = await hotelFromimgs.json();
                console.log(jsonHotelFromimgs);
                if (jsonHotelFromServer && jsonHotelFromimgs) {

                    const combinedData = jsonHotelFromServer.map((hotel, index) => {
                        const img = jsonHotelFromimgs.hits[index]?.webformatURL || 'default-image-url'; // תמונה דיפולטיבית אם אין תמונה
                        return {
                            ...hotel,
                            img,
                            price: hotel.price || 'Price not available'
                        };
                    });
                    
                    

                    setArrHotelsImgs(combinedData);
                    setArrHotelsData(jsonHotelFromServer);
                    setLoding(false);
                }

            } catch (error) {
                console.error('The error is:', error);
            }
        }

        dataHotel(urls, flyTo);

    }, [flyTo, serchHotel]);


    return (
        <div className="p-4 bg-gray-100">
            <div className="mb-4 text-xl font-bold">Suggested destinations</div>
            {loding ? (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
) : (
    <div>
        <h2 className="mb-4 text-2xl font-semibold">Hotels List</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {arrHotelsImgs.map((hotel, i) => (
                <Hotel
                    key={i}
                    hotel_name={hotel.hotel_name}
                    max_guests={hotel.max_guests}
                    country={hotel.country}
                    srcImg={hotel.img}
                    price={hotel.room_price_per_adult}
                    nameHotel={hotel.city}
                />
            ))}
        </ul>
    </div>
)}

            {/* {loding ?
                (<div className="flex items-center justify-center min-h-screen">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
                </div>
                ) : (
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">Hotels List</h2>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {arrHotelsImgs.map((hotel, i) => (
                                <Hotel
                                    key={i}
                                    hotel_name={hotel.hotel_name}
                                    max_guests={hotel.max_guests}
                                    country={hotel.country}
                                    srcImg={hotel.img}
                                    price={hotel.room_price_per_adult}
                                    nameHotel={hotel.city}
                                />
                            ))}
                        </ul>
                    </div>)} */}




        </div>
    );
}

export default MainHotels;
