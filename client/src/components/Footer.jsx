import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-[#FDBA74] dark:bg-[#525252] w-full">
     <div className=" flex justify-between px-52 py-10 ">
         <div className="mx-20 flex flex-col justify-between">
        <Logo classname={"font-extrabold text-blue-800 text-3xl"} />
        <div className="text-sm text-gray-700 dark:text-gray-400">
            <p>
                © Copyright 2023. All Rights Reserved by BookHub.
            </p>
        </div>
      </div>
      <div className="flex justify-between gap-24 ">
        <div className="">
          <h3 className="font-bold dark:text-gray-300 mb-8">COMPANY</h3>
          <ul>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Features</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Pricing</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Affiliate Program</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Press Kit</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold dark:text-gray-300 mb-8">SUPPORT</h3>
          <ul>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Account</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Help</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Customer Support</Link>
            </li>
          </ul>
        </div>
        <div>
             <h3 className="font-bold dark:text-gray-300 mb-8">LEGALS</h3>
          <ul>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="mb-4 dark:hover:text-gray-300 dark:text-white hover:text-gray-700">
              <Link to="/">Licensing</Link>
            </li>
            
          </ul>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Footer;
