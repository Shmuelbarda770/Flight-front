
import React, { useState, useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";

const ReportsUser = () => {
    const [feedbackUser, setFeedbackUser] = useState([]);
    const [openFeedbackUser, setOpenFeedbackUser] = useState(false);

    useEffect(() => {
        const fetchUserReports = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/reports/users", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const allFeedback = await response.json();
                setFeedbackUser(allFeedback.userFeedback);
                console.table(allFeedback);
            } catch (error) {
                console.error("Error fetching user feedback: ", error);
            }
        };
        fetchUserReports();
    }, []);

    const deleteUserReport = async (feedbackId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/reports/users/${feedbackId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete feedback");
            }
            const data = await response.json();
            console.log(data.message);
            
            setFeedbackUser(feedbackUser => feedbackUser.filter(item => item._id !== feedbackId));
            console.log(feedbackUser);
        } catch (error) {
            console.error("Error deleting user feedback: ", error);
        }
    };

    return (
        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h1
                className="text-4xl font-bold text-indigo-700 transition duration-300 ease-in-out cursor-pointer hover:underline"
                onClick={() => setOpenFeedbackUser(prev => !prev)}
            >
                All Users Feedback
            </h1>
            {openFeedbackUser && (
                <ul className="mt-6 space-y-6">
                    {feedbackUser.map((item,) => (
                        <li key={item._id} className="p-6 transition-shadow bg-gray-100 border-l-4 border-indigo-600 rounded-lg shadow-md hover:shadow-lg">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">{item.email}</h2>
                                    <p className="text-gray-700">{item.message}</p>
                                </div>
                                <button 
                                    onClick={() => deleteUserReport(item._id)}
                                    className="ml-4 text-red-600 transition duration-300 hover:text-red-800"
                                >
                                    <MdDeleteOutline size={24} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReportsUser;
