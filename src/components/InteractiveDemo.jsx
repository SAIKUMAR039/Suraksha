import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bell, Shield } from "lucide-react";

const InteractiveDemo = () => {
  const [activeFeature, setActiveFeature] = useState("tracking");

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl max-w-3xl mx-auto my-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Try Our Demo</h3>
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setActiveFeature("tracking")}
          className={`flex items-center ${
            activeFeature === "tracking" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <MapPin className="mr-2" /> Tracking
        </button>
        <button
          onClick={() => setActiveFeature("alerts")}
          className={`flex items-center ${
            activeFeature === "alerts" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <Bell className="mr-2" /> Alerts
        </button>
        <button
          onClick={() => setActiveFeature("security")}
          className={`flex items-center ${
            activeFeature === "security" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <Shield className="mr-2" /> Security
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        {activeFeature === "tracking" && (
          <div>
            <h4 className="font-bold mb-2">Real-time Tracking</h4>
            <p>
              See the live location of your AirTag-equipped items on an
              interactive map.
            </p>
          </div>
        )}
        {activeFeature === "alerts" && (
          <div>
            <h4 className="font-bold mb-2">Instant Alerts</h4>
            <p>
              Receive immediate notifications when your AirTag enters or leaves
              designated safe zones.
            </p>
          </div>
        )}
        {activeFeature === "security" && (
          <div>
            <h4 className="font-bold mb-2">Enhanced Security</h4>
            <p>
              Set up custom security protocols and emergency contacts for quick
              response.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveDemo;
