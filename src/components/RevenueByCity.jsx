
import  { useEffect, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const RevenueByCity = () => {
  const [dataCity, setDataCity] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    async function fetchRevenueByCity() {
      try {
        const response = await fetch("http://localhost:3000/api/dashboard", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Data not found or not correct");
        }
        
        const data = await response.json();
        setDataCity(data.result);
        
        const total = data.result.reduce((sum, cityData) => sum + cityData[1], 0);
        setTotalRevenue(total);
      } catch (error) {
        console.error("Error fetching city revenue: " + error);
      }
    }

    fetchRevenueByCity();
  }, []);

  const chartData = dataCity.map(cityData => ({
    label: cityData[0],
    y: cityData[1],
  }));
  const newChartData = chartData.sort((a, b) => a.y - b.y);
  
  const options = {
    title: {
      text: "Revenue by City",
      fontSize: 26,
      fontFamily: "Arial",
      fontColor: "#333",
    },
    data: [
      {
        type: "column",
        dataPoints: newChartData,
        color: "#4CAF50", 
      },
    ],
    axisY: {
      title: "Revenue",
      gridThickness: 1,
      lineColor: "#ccc",
      tickColor: "#ccc",
    },
    axisX: {
      title: "City",
      interval: 1,
      labelFontSize: 14,
      labelAngle: -45, 
    },
    backgroundColor: "#f9f9f9",
  };

  return (
    <div className="p-8 mx-auto transition-transform transform bg-white shadow-xl rounded-xl hover:scale-105 max-w-8xl">
      <div className="w-full mb-8 overflow-x-auto h-96">
        <CanvasJSChart options={options} width="100%" height="400px" />
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-inner">
       <p className="text-4xl font-extrabold text-green-600">
          {totalRevenue}
        </p>
      </div>
    </div>
  );
};

export default RevenueByCity;
