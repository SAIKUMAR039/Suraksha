import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Tagline */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Smart Emergency Alert</h3>
            <p className="text-gray-600 mt-2">
              Your safety, our priority. Stay connected and secure with
              real-time emergency alerts.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul>
              <li>
                <a href="/" className="text-gray-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-600">Email: saikumarthota2004@gmail.com</p>
            <p className="text-gray-600">Phone: +91 9059081173</p>
            <p className="text-gray-600">Warangal, Telangana, India - 506002</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sai-kumar-101764252/" // Replace with actual LinkedIn profile URL
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.29-1.92 2.63v5.08h-3v-9h2.88v1.23h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.55 1.97 3.55 4.53v4.78z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/SAIKUMAR_039" // Replace with actual Twitter profile URL
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.565-2.005.978-3.127 1.2-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.762.127 1.122-4.094-.205-7.725-2.167-10.152-5.144-.424.729-.667 1.574-.667 2.475 0 1.708.87 3.215 2.19 4.1-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.826-.413.111-.849.171-1.296.171-.317 0-.626-.031-.929-.087.627 1.956 2.444 3.379 4.6 3.419-1.685 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.398 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.637.961-.694 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SAIKUMAR039" // Replace with actual GitHub profile URL
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .296c-6.626 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.727-4.042-1.416-4.042-1.416-.546-1.388-1.333-1.757-1.333-1.757-1.091-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.072 1.835 2.809 1.305 3.495.997.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.048.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.872.117 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.623-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .322.217.694.826.576 4.765-1.589 8.201-6.084 8.201-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-600">
          &copy; 2024 Smart Emergency Alert. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
