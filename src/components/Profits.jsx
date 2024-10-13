/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const Profits = () => {
  const [data, setData] = useState({});
  const [openData, setOpenData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    const hour = time.getHours();

    async function AllProfitsMoney() {
      try {
        const response = await fetch("http://localhost:3000/api/dashboard", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ year, month, day, hour }),
        });

        if (!response.ok) {
          throw new Error("Data not found or not correct");
        }

        const dataProfits = await response.json();
        setData(dataProfits);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }

    AllProfitsMoney();
  }, []);

  const options = {
    title: {
      text: "Profits Trend",
      fontSize: 26,
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { label: "Day", y: data.totalDay || 0 },
          { label: "Month", y: data.totalMonth || 0 },
          { label: "Year", y: data.totalYear || 0 },
          { label: "Total", y: data.totalProfit || 0 },
        ],
        color: "#FF9800",
      },
    ],
    axisY: {
      title: "Profits",
      prefix: "₪",
    },
    backgroundColor: "#ffffff",
  };

  return (
    <div className="container p-8 mx-auto transition-transform transform bg-white shadow-lg rounded-xl hover:scale-105">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">Profits Overview</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {/* {[
          { label: 'Total Profit', value: data.totalProfit, color: 'from-blue-500 to-blue-400' },
          { label: 'Monthly Profit', value: data.totalMonth, color: 'from-green-500 to-green-400' },
          { label: 'Annual Profit', value: data.totalYear, color: 'from-yellow-500 to-yellow-400' },
        ].map((item) => (
          <div
            key={item.label}
            onClick={() => setOpenData(!openData)}
            className="transition-transform transform cursor-pointer hover:scale-105"
          >
            <div className={`p-4 bg-gradient-to-r ${item.color} rounded-lg shadow-md`}>
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
              <div className="text-xl font-bold text-white">{item.value} ₪</div>
            </div>
          </div>
        ))} */}
      </div>

      {openData && (
        <div className="p-6 mt-6 rounded-lg shadow-lg bg-gray-50">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <CanvasJSChart options={options} />
          )}
        </div>
      )}
    </div>
  );
};

export default Profits;