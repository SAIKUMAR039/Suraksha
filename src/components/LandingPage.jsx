import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Bell,
  Shield,
  Smartphone,
  CheckCircle,
  AlertCircle,
  MapPin,
} from "lucide-react";

import Header from "./Header";

import InteractiveDemo from "./InteractiveDemo";
import FAQSection from "./FAQSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 text-gray-800">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <Hero />
        <Features />
        <HowItWorks />

        <Testimonials />
        <CallToAction />
        <InteractiveDemo />
        <FAQSection />
      </main>
    </div>
  );
};

const Hero = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl font-bold mb-6 text-blue-700">
      Stay Safe with AirTag Technology
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
      className="text-2xl text-purple-600"
      repeat={Infinity}
    />
  </motion.div>
);

const Features = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
  >
    <FeatureCard
      icon={<Bell size={48} />}
      title="Instant Alerts"
      description="Receive immediate notifications in case of emergencies"
    />
    <FeatureCard
      icon={<Shield size={48} />}
      title="Enhanced Security"
      description="Advanced AirTag technology for precise location tracking"
    />
    <FeatureCard
      icon={<Smartphone size={48} />}
      title="Mobile App"
      description="Easy-to-use mobile application for quick access and control"
    />
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-lg shadow-xl"
  >
    <div className="text-blue-500 mb-6">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-blue-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const HowItWorks = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-20"
  >
    <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
      How It Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Step
        icon={<CheckCircle size={40} />}
        title="Set Up Your AirTag"
        description="Attach our smart AirTag to your valuables or loved ones' belongings."
      />
      <Step
        icon={<AlertCircle size={40} />}
        title="Configure Alerts"
        description="Set up custom alerts for different scenarios using our mobile app."
      />
      <Step
        icon={<MapPin size={40} />}
        title="Track & Respond"
        description="Receive real-time location updates and respond quickly to any emergency."
      />
    </div>
  </motion.section>
);

const Step = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonials = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-20"
  >
    <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Testimonial
        quote="Smart Emergency Alert has given me peace of mind knowing my family is safe."
        author="Jane Doe"
      />
      <Testimonial
        quote="The real-time tracking feature is a game-changer for personal safety."
        author="John Smith"
      />
    </div>
  </motion.section>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-blue-600 font-semibold">- {author}</p>
  </div>
);

const CallToAction = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-20 text-center"
  >
    <h2 className="text-4xl font-bold mb-6 text-blue-700">
      Ready to Stay Safe?
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Join thousands of satisfied users and experience the peace of mind that
      comes with Smart Emergency Alert.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transition duration-300"
    >
      Get Started Now
    </motion.button>
  </motion.section>
);

export default LandingPage;
