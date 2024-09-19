import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-6 flex justify-between items-center bg-white bg-opacity-90 shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-blue-600 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-11 h-11 md:w-12 md:h-12 mr-2"
            />
          </h1>
        </Link>
      </div>
      {/* Title Centered for large devices */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-semibold text-blue-700">
          Smart Emergency Alert System Using Air Tags
        </h1>
      </div>
      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6">
          {["Features", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-blue-700 hover:text-blue-900 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
