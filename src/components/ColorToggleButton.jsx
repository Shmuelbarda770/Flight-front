
import React, { useState, useContext } from 'react';
import { CiLight } from 'react-icons/ci';
import { MdOutlineNightlightRound } from 'react-icons/md';
import { DataPerson } from '../context/context';

const ColorToggleButton = () => {
    const [show, setShow] = useState(true);
    const { colorApp, setColorApp } = useContext(DataPerson);

    function ColorToggle() {
        setShow(!show);
        if (colorApp === 'bg-gradient-to-r from-blue-400 to-purple-600') {
            setColorApp('bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900');
        } else {
            setColorApp('bg-gradient-to-r from-blue-400 to-purple-600');
        }
    }
// const {colorApp}=useContext(DataPerson);
  //   import {DataPerson} from '../context/context'
  //   ${colorApp}`}

    return (
        <button
            onClick={ColorToggle}
            className={`fixed top-4 right-4 w-10 h-10 flex items-center justify-center transition-transform duration-300 ease-in-out rounded-full shadow-md ${
                show ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'
            } transform hover:scale-105`}
            aria-label={show ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {show ? (
                <CiLight className="text-2xl text-yellow-500" />
            ) : (
                <MdOutlineNightlightRound className="text-2xl text-gray-400" />
            )}
        </button>
    );
};

export default ColorToggleButton;
