import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 text-gray-800 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
              About Smart Emergency Alert
            </h1>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <p>
                Smart Emergency Alert is a cutting-edge startup dedicated to
                revolutionizing personal safety through innovative AirTag
                technology. Our mission is to provide peace of mind to
                individuals and families by offering real-time tracking and
                instant alert systems.
              </p>
              <p>
                Founded in 2024, our team of experienced engineers and safety
                experts has developed a comprehensive solution that leverages
                the power of Apple's AirTag technology. We believe that everyone
                deserves to feel safe and secure, whether at home, work, or on
                the go.
              </p>
              <p>
                Our state-of-the-art system combines hardware and software to
                create a seamless safety net for our users. With features like
                instant alerts, real-time tracking, and geofencing, we're
                setting new standards in personal and family safety.
              </p>
              <h2 className="text-2xl font-semibold text-blue-600 mt-6">
                Introducing: Double-Tap Gesture for Instant Alerts
              </h2>
              <p>
                We're excited to announce our latest innovation: the double-tap
                gesture feature for AirTags. This groundbreaking functionality
                allows users to trigger an emergency alert with a simple,
                discreet double-tap on their AirTag device.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quick and easy activation in emergency situations</li>
                <li>Customizable alert settings via our companion app</li>
                <li>
                  Immediate notification sent to pre-configured contacts or
                  emergency services
                </li>
                <li>Haptic feedback confirms alert activation</li>
              </ul>
              <p>
                With this new feature, we're taking personal safety to the next
                level, ensuring that help is always just two taps away.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
