import React from "react";
import { motion } from "framer-motion";
import { Bell, Shield, Smartphone, Map, Clock, Users } from "lucide-react";
import Header from "./Header";

const FeaturesPage = () => {
  const features = [
    {
      icon: <Bell size={32} />,
      title: "Instant Alerts",
      description: "Get notified immediately in case of emergencies.",
    },
    {
      icon: <Shield size={32} />,
      title: "Enhanced Security",
      description:
        "Advanced AirTag technology ensures precise location tracking.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App",
      description:
        "Access all features on-the-go with our user-friendly mobile app.",
    },
    {
      icon: <Map size={32} />,
      title: "Geofencing",
      description:
        "Set up safe zones and get alerted when boundaries are crossed.",
    },
    {
      icon: <Clock size={32} />,
      title: "Real-time Updates",
      description:
        "Receive continuous updates on the location and status of your AirTags.",
    },
    {
      icon: <Users size={32} />,
      title: "Family Sharing",
      description: "Share access with family members for collaborative safety.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 text-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
            Our Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h2 className="text-xl font-semibold mb-2 text-blue-600">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;
