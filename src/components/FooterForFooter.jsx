
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterForFooter = () => {
    return (
        <div className="p-6 ">
        <div className="w-full max-w-4xl p-6 mx-auto bg-white shadow-lg bg-opacity-90 rounded-xl">
            <div className="flex flex-wrap justify-center gap-8">
                <NavLink
                    to="/About"
                    className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    About
                </NavLink>
                <NavLink
                    to="/Privacy"
                    className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Privacy
                </NavLink>
                <NavLink
                    to="/Feedback"
                    className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Feedback
                </NavLink>
                <NavLink
                    to="/ConsumerInformation"
                    className="font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Help Centre and Consumer Information
                </NavLink>
            </div>
        </div>
    </div>
    
    );
}

export default FooterForFooter;
