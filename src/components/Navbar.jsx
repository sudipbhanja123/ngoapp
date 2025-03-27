import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Caring Crowd Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CaringCrowd
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 pl-3 pr-4">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/donate" className="block py-2 pl-3 pr-4">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block py-2 pl-3 pr-4">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 pl-3 pr-4">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
