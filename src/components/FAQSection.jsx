import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Smart Emergency Alert work?",
      answer:
        "Smart Emergency Alert uses Apple's AirTag technology combined with our proprietary software to provide real-time location tracking and instant alerts for your valuables and loved ones.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to ensure your data and location information are always protected.",
    },
    {
      question: "Can I use Smart Emergency Alert with multiple AirTags?",
      answer:
        "Absolutely! Our app supports multiple AirTags, allowing you to track and secure various items or family members simultaneously.",
    },
    // Add more FAQs as needed
  ];

  return (
    <motion.section
      className="my-20 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-lg shadow-xl p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;
