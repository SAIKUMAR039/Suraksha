import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Icons for LinkedIn, GitHub, Mail

// Team Members data
const teamMembers = [
  {
    name: "Sai Kumar Thota",
    role: "Team Leader & Main Idea Elaborator",
    image: "/images/saikumar.jpg",
    contribution: "Lead the project, elaborated the core idea.",
    linkedin: "https://www.linkedin.com/in/saikumar", // Replace with actual links
    github: "https://github.com/saikumar",
    email: "mailto:sai.kumar@example.com",
  },
  {
    name: "D Devayani",
    role: "Team Member",
    image: "/images/devayani.jpg",
    contribution: "Worked on frontend development and design.",
    linkedin: "https://www.linkedin.com/in/devayani",
    github: "https://github.com/devayani",
    email: "mailto:devayani@example.com",
  },
  {
    name: "M Vishwa Teja",
    role: "Team Member",
    image: "/images/vishwateja.jpg",
    contribution: "Handled backend and API integration.",
    linkedin: "https://www.linkedin.com/in/vishwateja",
    github: "https://github.com/vishwateja",
    email: "mailto:vishwa.teja@example.com",
  },
  {
    name: "Vedasree M",
    role: "Team Member",
    image: "/images/vedasree.jpg",
    contribution: "Contributed to database design and security features.",
    linkedin: "https://www.linkedin.com/in/vedasree",
    github: "https://github.com/vedasree",
    email: "mailto:vedasree@example.com",
  },
  {
    name: "B Thanay",
    role: "Team Member",
    image: "/images/thanay.jpg",
    contribution: "Worked on real-time tracking and location services.",
    linkedin: "https://www.linkedin.com/in/thanay",
    github: "https://github.com/thanay",
    email: "mailto:thanay@example.com",
  },
  {
    name: "R Lokesh",
    role: "Team Member",
    image: "/images/lokesh.jpg",
    contribution: "Developed mobile application and UI/UX.",
    linkedin: "https://www.linkedin.com/in/lokesh",
    github: "https://github.com/lokesh",
    email: "mailto:lokesh@example.com",
  },
];

const TeamSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="my-20"
  >
    <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
      Meet Our Team
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
          <p className="text-gray-500 mb-2">{member.role}</p>
          <p className="text-gray-600 mb-4">{member.contribution}</p>
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-blue-700 text-xl" />
            </a>
            <a href={member.github} target="_blank" rel="noreferrer">
              <FaGithub className="text-gray-800 hover:text-black text-xl" />
            </a>
            <a href={member.email}>
              <FaEnvelope className="text-red-500 hover:text-red-700 text-xl" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default TeamSection;
