import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment-timezone';
import contryTime from '../data/contryTime.json';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaMountainSun } from 'react-icons/fa6';
import { MdOutlineNightlight } from 'react-icons/md';
import { DataPerson } from '../context/context';
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHalf } from "react-icons/fa6";

const Temperature = () => {
    const [temperature, setTemperature] = useState('');
    const [humidityData, setHumidityData] = useState('');
    const [windData, setWindData] = useState('');
    const [localTime, setLocalTime] = useState('');
    const { flyTo, colorApp } = useContext(DataPerson);

    useEffect(() => {
        function getTimeByCountry(country) {
            const timeZone = contryTime[country];
            if (!timeZone) {
                console.error('Time zone not found for country:', country);
                return;
            }
            const now = moment().tz(timeZone);
            const hours = now.hours();
            const timeOfDay = hours < 12 ? 'Morning' : (hours < 18 ? 'Afternoon' : 'Evening');
            setLocalTime(timeOfDay);
        }
        getTimeByCountry(flyTo);

        const API_KEY = '08fd538163b0ae438511a1146d1581fd';
        async function tempApi(flyTo) {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${flyTo}&appid=${API_KEY}&units=metric`);
                const data = await response.json();
                const tempData = data.main.temp;
                setTemperature(tempData);
                const humidity = data.main.humidity;
                setHumidityData(humidity);
                const wind = (data.wind.speed * 3.6).toFixed(0);
                setWindData(wind);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        tempApi(flyTo);
    }, [flyTo]);
    
    return (
        <div className={`flex flex-col items-center w-full p-6 mx-auto shadow-lg rounded-lg ${colorApp}`}>
            <h1 className="mb-4 text-2xl font-bold text-white">Weather in {flyTo}</h1>
            <div className="flex items-center justify-center mb-4 text-5xl text-yellow-400">
                {localTime === 'Morning' ? (
                    <IoSunnyOutline />
                ) : localTime === 'Afternoon' ? (
                    <FaMountainSun />
                ) : (
                    <MdOutlineNightlight />
                )}
            </div>
            <div className="p-6 text-center text-white bg-gray-700 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-2 space-x-2 text-xl">
                    <FaTemperatureHalf />
                    <span>{` Temperature: ${temperature}°C`}</span>
                </div>
                <div className="flex items-center justify-center mb-2 space-x-2 text-lg">
                    <WiHumidity />
                    <span>{`Humidity: ${humidityData}%`}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg">
                    <FaWind />
                    <span>{`Wind Speed: ${windData} km/h`}</span>
                </div>
            </div>
        </div>
    );
};

export default Temperature;
