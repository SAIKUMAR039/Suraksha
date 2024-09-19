import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => (
  <div className="hero-bg relative">
    <div className="overlay"></div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 relative z-10"
    >
      <h2 className="text-5xl font-bold mb-6 text-white">
        Protect Your Loved Ones Now
      </h2>
      <TypeAnimation
        sequence={[
          "Instant Alerts",
          2000,
          "Real-time Tracking",
          2000,
          "Emergency Response",
          2000,
        ]}
        wrapper="p"
        speed={50}
        className="text-2xl text-purple-300"
        repeat={Infinity}
      />
    </motion.div>
  </div>
);

export default Hero;
