import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for the cover photo section
  const coverVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the text content
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#2563eb",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50" >
      {/* Cover Photo Section */}
      <motion.div
        className="relative w-full h-[500px] bg-cover bg-center -mt-20 pt-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
        initial="hidden"
        animate="visible"
        variants={coverVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-center justify-center z-10">
          <motion.div
            className="text-center px-6 md:px-12"
            variants={coverVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Malith Tours
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mt-4 max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting unforgettable travel experiences in Sri Lanka with
              passion and expertise.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Our Story
              </motion.h2>
              {[
                "At Malith Tours, we are passionate about showcasing the vibrant culture, stunning landscapes, and rich heritage of Sri Lanka. With over a decade of experience in the tourism industry, we specialize in crafting personalized travel experiences that leave lasting memories.",
                "Our mission is to connect travelers with the heart of Sri Lanka through exceptional service, comfortable transportation, and expert local guides. From luxury sedans to spacious minibuses, we provide the perfect vehicle for every journey, ensuring comfort and safety.",
                "Whether you're exploring ancient cities, relaxing on pristine beaches, or embarking on a wildlife adventure, our dedicated team is here to make your travel dreams a reality. Discover Sri Lanka with Malith Tours.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                >
                  {text}
                </motion.p>
              ))}
              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                <Link
                  to="/bookings"
                  className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
                >
                  <motion.span
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Plan Your Journey
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <motion.img
                src="/images/T3.jpeg"
                alt="Malith Tours Team"
                className="rounded-xl shadow-xl w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default About;
      

