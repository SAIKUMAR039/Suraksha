import React from "react";

const Testimonial = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-blue-600 font-semibold">- {author}</p>
  </div>
);

export default Testimonial;
