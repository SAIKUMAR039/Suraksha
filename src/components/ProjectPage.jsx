import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const ProjectPage = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          Smart Emergency Alert System Using AirTags
        </h1>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Smart Emergency Alert System Using AirTags is designed to
            enhance personal safety by utilizing Apple's AirTags and smartphone
            technology to send real-time emergency alerts to a pre-defined list
            of contacts during critical situations. In case of an emergency, the
            user can activate the alert by pressing a button on their device,
            and their real-time location will be tracked and shared with
            emergency contacts. The system ensures fast response times by
            providing an easy and seamless way to contact help.
          </p>
        </section>

        {/* How the project was executed */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            How the Project Was Executed
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team followed a structured development process to ensure the
            successful execution of the Smart Emergency Alert System. We focused
            on key areas, including planning, prototyping, development, testing,
            and deployment.
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-600 leading-relaxed mt-4">
            <li>
              Research & Ideation: We started by identifying the need for a
              smart and efficient emergency alert system. After evaluating
              existing solutions, we conceptualized the idea of integrating
              AirTags with smartphone apps for a real-time alert system.
            </li>
            <li>
              Prototyping: Our team built a prototype to test the integration of
              AirTags with the app and how efficiently we could track and send
              emergency alerts.
            </li>
            <li>
              Development: We developed both the backend and frontend using
              modern technologies like React, Node.js, and Firebase for
              real-time data handling. Integration with AirTag’s tracking system
              was done using Apple's API.
            </li>
            <li>
              Testing & Validation: After development, we conducted several
              rounds of testing, including functional, security, and performance
              tests, to ensure that the system was reliable under various
              conditions.
            </li>
            <li>
              Deployment & Launch: After a successful testing phase, we deployed
              the application on a scalable platform and are currently planning
              to release it to users as a beta version.
            </li>
          </ol>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Technologies Used
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our project is powered by cutting-edge technologies to ensure high
            performance, scalability, and security. Here’s a breakdown of the
            tech stack used:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mt-4">
            <li>
              Frontend: React JS with Tailwind CSS for responsive and visually
              appealing design.
            </li>
            <li>
              Backend: Node.js with Express for API development and Firebase for
              real-time database and hosting.
            </li>
            <li>
              Location Tracking: AirTags integrated using Apple's API to track
              real-time location.
            </li>
            <li>
              Cloud Infrastructure: We used Firebase for hosting, real-time
              database management, and Firestore for scalable storage solutions.
            </li>
            <li>
              Authentication: Clerk was used for authentication and user
              management, ensuring a secure login experience.
            </li>
            <li>
              Notifications: Integration with Twilio for sending SMS alerts to
              emergency contacts when an alert is triggered.
            </li>
          </ul>
        </section>

        {/* Video Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Project Explanation Video
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Watch the full explanation of the Smart Emergency Alert System
            project in the video below:
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/8YLE13kB3p4"
              title="Smart Emergency Alert System - Project Explanation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Future Plans */}
        <section>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Future Plans
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team aims to continue improving the Smart Emergency Alert System
            by integrating features like voice-activated alerts, more advanced
            security protocols, and multi-language support. We also plan to
            explore machine learning models to predict potential emergencies
            based on user behavior patterns.
          </p>
        </section>
      </motion.div>
    </>
  );
};

export default ProjectPage;
