/* eslint-disable no-unused-vars */
import React,{useContext} from 'react';
import FooterForFooter from './FooterForFooter';
import {DataPerson} from '../context/context'
 

const Footer = () => {
    const {colorApp}=useContext(DataPerson);


    
    return (
        <div className={`flex items-center justify-center min-h-screen p-6  ${colorApp}`}>
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl p-6 overflow-hidden bg-white rounded-lg shadow-2xl bg-opacity-70">
                <div className="space-y-4 text-gray-800">
                    <p className="text-sm">
                        Current language and currency options applied: English (United States) - United States - USD
                    </p>
                    <p className="text-sm">
                        Displayed currencies may differ from the currencies used to purchase flights. Learn more
                    </p>
                    <p className="text-sm">
                        Prices are final and include all taxes and fees, including payment fees for the
                        cheapest common payment method (which may differ depending on the provider).
                        Additional charges may apply for other types of payment, luggage, meals, WLAN or
                        other additional services. Prices, availability and travel details are provided based
                        on the latest information received from our partners. This information is reflected in
                        the results within a period of less than 24 hours. Additional conditions may also be
                        applied by our partners. You should then check prices and conditions with the services
                        providers before booking.
                    </p>
                </div>
                <FooterForFooter />
            </div>
        </div>
    );
}

export default Footer;
