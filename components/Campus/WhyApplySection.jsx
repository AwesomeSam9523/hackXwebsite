import React from 'react';
import { motion } from 'framer-motion';

const WhyApplySection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Should You Apply?
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          Becoming a Campus Ambassador offers a unique opportunity to develop your professional skills, network with industry leaders, and gain invaluable experience that will set you apart in the job market.
        </p>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          You will also receive exclusive training and mentorship, have the chance to earn rewards and recognition, and be part of a dynamic and supportive community.
        </p>
        <motion.img
          src="Poster.png" // Replace this URL with the actual URL of the online image you want to use
          alt="Why Apply"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md mx-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div className="lg:w-1/2 lg:mr-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">
            Perks
          </h3>
          <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
            As a Campus Ambassador, you will receive exclusive training and mentorship, allowing you to develop your skills and knowledge. You will have the opportunity to network with industry leaders, gaining valuable insights and connections. In addition, you will be recognized and rewarded for your efforts, and gain access to special events and resources.
          </p>
        </div>
        <motion.img
          src="images.jpg" // Replace this URL with the actual URL of the online image you want to use
          alt="Perks"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md lg:mt-0 lg:w-1/2"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div className="lg:w-1/2 lg:mr-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">
            Responsibilities
          </h3>
          <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
            As a Campus Ambassador, you will be responsible for promoting our brand on campus, organizing and hosting events and workshops, engaging with students and gathering feedback, and representing our company at campus fairs and events.
          </p>
        </div>
        <motion.img
          src="images (1).jpg" // Replace this URL with the actual URL of the online image you want to use
          alt="Responsibilities"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md lg:mt-0 lg:w-1/2"
        />
      </motion.div>
    </div>
  );
}

export default WhyApplySection;
