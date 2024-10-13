import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdOutlineAirplaneTicket, MdOutlineGroups } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { CiSettings } from "react-icons/ci";

const AsideManagers = () => {
    return (
        <aside className="flex flex-col w-64 h-full text-white bg-gray-800">
            <div className="flex items-center justify-center p-4 bg-gray-900">
                <h2 className="text-xl font-semibold">Manager Dashboard</h2>
            </div>
            <nav className="flex-1">
                <ul className="px-2 mt-4 space-y-2">
                    <li>
                        <NavLink
                            to="/Dashboard"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <MdDashboard className="w-6 h-6 mr-3" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Reports"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <TbReportSearch className="w-6 h-6 mr-3" />
                            Reports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Tickets"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <MdOutlineAirplaneTicket className="w-6 h-6 mr-3" />
                            Tickets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Support"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <RiCustomerService2Fill className="w-6 h-6 mr-3" />
                            Support
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Settings"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <CiSettings className="w-6 h-6 mr-3" />
                            Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Groups"
                            className={({ isActive }) =>
                                `flex items-center p-2 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-600' : ''}`
                            }
                        >
                            <MdOutlineGroups className="w-6 h-6 mr-3" />
                            Groups
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default AsideManagers;
