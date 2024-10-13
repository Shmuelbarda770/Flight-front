/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import sigUp from './pages/sigUp';
import { DataPerson } from './context/context';
import Travel from './pages/Travel';
import NotPag from './FlightsComponent/NotPag';
import Explore from './pages/Explore';
import HolidayRentals from './pages/HolidayRentals';
import Hotels from './pages/Hotels';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Feedback from './pages/Feedback';
import ConsumerInformation from './pages/ConsumerInformation';
import DateFly from './pages/DateFly';
import Attraction from './pages/Attraction';
import PeyFly from './pages/PeyFly';
import Emergency from './pages/Emergency';
import ManagersHome from './pages/ManagersHome';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Groups from './pages/Groups';
import Settings from './pages/Settings';
import Tickets from './pages/Tickets';
import Support from './pages/Support';
import SendMail from './pages/SendMail';

const FlyApp = () => {
  const [flyFrom, setFlyFrom] = useState("Tel Aviv-Yafo");
  const [whichEconomy, setWhichEconomy] = useState('');
  const [flyTo, setFlyTo] = useState('New York');
  const [whichTrip, setWhichTrip] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infants, setInfants] = useState(0);
  const [userIn, setUserIn] = useState(false);
  const [AirportAll, setAirportAll] = useState([]);
  const [serchHotel, setSerchHotel] = useState('');
  const [userName, setUserName] = useState('');
  const [colorApp, setColorApp] = useState('bg-gradient-to-r from-blue-400 to-purple-600');
  const [status, setStatus] = useState('Clients');
  const [adminCode, setAdminCode] = useState(false);

  const contextValue = {
    flyFrom, setFlyFrom,
    whichEconomy, setWhichEconomy,
    flyTo, setFlyTo,
    whichTrip, setWhichTrip,
    adults, setAdults,
    children, setChildren,
    infantsSeat, setInfantsSeat,
    infants, setInfants,
    userIn, setUserIn,
    AirportAll, setAirportAll,
    colorApp, setColorApp,
    serchHotel, setSerchHotel,
    userName, setUserName,
    status, setStatus,
    adminCode, setAdminCode
  };

  return (
    <BrowserRouter>
      <DataPerson.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sigUp" element={<sigUp />} />
          
          {!userIn ? (
            <Route path="/NotPag" element={<NotPag />} />
          ) : (
            <>
              {status === 'Clients' ? (
                <>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Travel" element={<Travel />} />
                  <Route path="/Explore" element={<Explore />} />
                  <Route path="/HolidayRentals" element={<HolidayRentals />} />
                  <Route path="/Hotels" element={<Hotels />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Privacy" element={<Privacy />} />
                  <Route path="/Feedback" element={<Feedback />} />
                  <Route path="/ConsumerInformation" element={<ConsumerInformation />} />
                  <Route path="/DateFly" element={<DateFly />} />
                  <Route path="/Attraction" element={<Attraction />} />
                  <Route path="/PeyFly" element={<PeyFly />} />
                  <Route path="/Emergency" element={<Emergency />} />
                </>
              ) : status === 'Managers' ? (
                <>
                  <Route path="/SendMail" element={<SendMail />} />
                  {adminCode ? (
                    <>
                      <Route path="/ManagersHome" element={<ManagersHome />} />
                      <Route path="/Dashboard" element={<Dashboard />} />
                      <Route path="/Reports" element={<Reports />} />
                      <Route path="/Tickets" element={<Tickets />} />
                      <Route path="/Settings" element={<Settings />} />
                      <Route path="/Groups" element={<Groups />} />
                      <Route path="/Support" element={<Support />} />
                    </>
                  ) : (
                    <Route path="/NotPag" element={<NotPag />} />
                  )}
                </>
              ) : (
                <Route path="/NotPag" element={<NotPag />} />
              )}
            </>
          )}
        </Routes>
      </DataPerson.Provider>
    </BrowserRouter>
  );
};

export default FlyApp;
