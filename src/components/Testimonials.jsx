import React from "react";
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";

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

export default Testimonials;
