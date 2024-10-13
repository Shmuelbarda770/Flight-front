
import React, { useState } from 'react';

const EmergencyNumber = () => {
    const [country, setCountry] = useState('');
    const [countryNumber, setCountryNumber] = useState([]);

    async function numbers(country) {
        try {
            const response = await fetch(`https://emergencynumberapi.com/api/country/${country}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const dataNumber = await response.json();
            setCountryNumber(dataNumber.emergencyNumbers || []);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    return (
        <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Find Emergency Numbers</h1>
            <div className="flex flex-col gap-4">
                <input
                    id='emergency-country'
                    onChange={(e) => setCountry(e.target.value.toUpperCase())}
                    type="text"
                    placeholder='Enter country code (e.g., US, IL)'
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => numbers(country)}
                    className="p-3 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Find Emergency Number
                </button>
            </div>
            <ul className="mt-6 list-none">
                {countryNumber.length > 0 ? (
                    countryNumber.map((item, index) => (
                        <li key={index} className="p-3 border-b border-gray-200">
                            <strong className="font-semibold">{item.service}:</strong> {item.number}
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-600">No emergency numbers found. Please try again.</li>
                )}
            </ul>
        </div>
    );
}

export default EmergencyNumber;
