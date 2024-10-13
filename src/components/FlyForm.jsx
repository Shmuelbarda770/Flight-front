
import React, { useContext, useEffect, useState } from 'react';
import { DataPerson } from '../context/context'

const FlyForm = () => {
  const [onBlu,setOnBlu]=useState(false);
  const { flyFrom, setFlyFrom, AirportAll, setAirportAll } = useContext(DataPerson)

  
  
  useEffect(() => {
    async function fetchAirportData() {
      try {
        const response = await fetch("http://localhost:3000/Home", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ airport: flyFrom }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data);
          setAirportAll(data);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching airport data:', error);
      }
    }

    if (flyFrom) {
      fetchAirportData();
    }
  }, [flyFrom, setAirportAll]);

function iDid(){
  setOnBlu(true)
}
function finish(){
  setOnBlu(false)
}

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-bold">Fly From</h2>
      <input
        onFocus={iDid}
        onBlur={finish}
        onChange={(e) => setFlyFrom(e.target.value)}
        type="text"
        defaultValue={"Tel Aviv-Yafo"}
        placeholder='Serch airport for travel'
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
      />
      {onBlu && AirportAll.length > 0 && (
        <ul className="absolute z-20 w-full mt-2 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-60">
          {AirportAll.map((item) => (
            <li
            // onClick={}
             key={item.id} 
             className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
              {item.city}
            </li>
          ))}
        </ul>
      )}
     
    </div>
  );
};

export default FlyForm;


