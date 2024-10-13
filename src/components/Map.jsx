
import React, { useContext, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { DataPerson } from '../context/context';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2htdWVsYmFyZGE3NzAiLCJhIjoiY20wbzdpa3l5MDVyNzJrc2J3NTU4ejdjNCJ9.f03e5H_0fpuTkyXWSXbKVQ';

const Map = () => {
    const { flyTo, colorApp,setFlyTo } = useContext(DataPerson);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchAttractions = async (city) => {
            try {
                const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const { lon, lat } = data[0];

                if (mapRef.current) {
                    mapRef.current.remove(); 
                }

                mapRef.current = new mapboxgl.Map({
                    container: mapContainerRef.current,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [lon, lat],
                    zoom: 10,
                });

                mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

                return () => mapRef.current.remove(); 

            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchAttractions(flyTo);

    }, [flyTo]);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-6 ${colorApp}`}>
            <h1 className="mb-4 text-4xl font-extrabold text-center text-white">
                {`Find cheap flights from ${flyTo} to anywhere`}
            </h1>
            <h2 className="mb-4 text-2xl font-semibold text-center text-white">Map</h2>
            <div className="flex flex-col items-center w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
                <div className="flex mb-6 space-x-4">
                    <button
                        onClick={() => {
                           
                        }}
                        className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                    >
                        Focus
                    </button>
                    <button className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-purple-600 rounded-lg shadow-md hover:bg-purple-700">
                        {flyTo}
                    </button>
                </div>
                <div className="relative w-full overflow-hidden bg-gray-200 border border-gray-300 rounded-lg shadow-lg h-96">
                    <div
                        ref={mapContainerRef}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;

// /* eslint-disable no-unused-vars */
// import React, { useContext, useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import {DataPerson} from '../context/context'
// // ודא שאתה מייבא את ה-CSS של Mapbox
// import 'mapbox-gl/dist/mapbox-gl.css';

// // הכנס את ה-Access Token שלך כאן
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2htdWVsYmFyZGE3NzAiLCJhIjoiY20wbzdpa3l5MDVyNzJrc2J3NTU4ejdjNCJ9.f03e5H_0fpuTkyXWSXbKVQ';


// const Map = () => {
//     const {flyTo,colorApp}=useContext(DataPerson)
//     const mapContainerRef = useRef(null);
//     const mapRef = useRef(null);
   
    
//     useEffect(() => {
// async function fetchAttractions(city) {
//     try {
        
//         const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json`;
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
        
//         const map = new mapboxgl.Map({
//             container: mapContainerRef.current, // ה-container הוא ה-ref שלך
//             style: 'mapbox://styles/mapbox/streets-v11', // הסגנון של המפה
//             center:[data[0].lon,data[0].lat], // מיקום התחלתי של המפה [long, lat]
//             zoom: 10, // רמת זום התחלתי
//         });

//         // הוספת קונטרול למפה
//         map.addControl(new mapboxgl.NavigationControl(), 'top-right');

//         // ניהול ניקוי (cleanup) בעת פירוק הקומפוננטה
//         return () => map.remove();
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }
// fetchAttractions(flyTo)
// }, [flyTo]);

   
//     return (
//         <div className={`flex flex-col items-center justify-center min-h-screen p-6  ${colorApp}`}>
//         <h1 className="mb-4 text-4xl font-extrabold text-center text-white">
//             {`Find cheap flights from ${flyTo} to anywhere`}
//         </h1>
//         <h2 className="mb-4 text-2xl font-semibold text-center text-white">Map</h2>
        
//         <div className="flex flex-col items-center w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
//             <div className="flex mb-6 space-x-4">
//                 <button
//                 onClick={()=>{
//                     if (mapContainerRef.current) {
//                         console.log(mapContainerRef.current);
//                     mapContainerRef.current.focus();
//                 }}}
//                  className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
//                     Focus
//                 </button>
//                 <button className="px-4 py-2 font-semibold text-white transition duration-300 ease-in-out bg-purple-600 rounded-lg shadow-md hover:bg-purple-700">
//                     {flyTo}
//                 </button>
//             </div>
//             <div className="relative w-full overflow-hidden bg-gray-200 border border-gray-300 rounded-lg shadow-lg h-96">
//                 <div
//                     ref={mapContainerRef}
//                     className="w-full h-full"
//                 />
//             </div>
//         </div>
//     </div>
//     );
// };

// export default Map;