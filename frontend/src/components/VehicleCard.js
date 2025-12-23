import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane, FaUsers, FaCheck } from "react-icons/fa";

const VehicleCard = ({ vehicle }) => {
  if (!vehicle) {
    return (
      <div className="text-red-500 text-center p-4 font-serif text-sm">
        Error: Vehicle data not available
      </div>
    );
  }

  const whatsappNumber = "94771351993";
  const telegramLink = "https://telegram.org/dl";
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in booking the ${vehicle.name} for my trip. Can you provide more details?`
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  const imageVariants = {
    hover: { scale: 1.03, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  return (
    <motion.div
      className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Vehicle Image */}
      <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
        <motion.img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          variants={imageVariants}
          whileHover="hover"
          onError={(e) => (e.target.src = "/images/fallback.jpg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-indigo-600 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center">
          <FaUsers className="mr-1 sm:mr-1.5 text-[10px] sm:text-xs" />
          {vehicle.capacity}
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="p-3 sm:p-4 md:p-5">
        <motion.h3
          className="text-base sm:text-lg font-serif font-semibold text-gray-800 mb-1 sm:mb-1.5 tracking-tight"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {vehicle.name}
        </motion.h3>
        <motion.p
          className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {vehicle.idealUse}
        </motion.p>

        {/* Features */}
        <div className="mb-3 sm:mb-4 md:mb-5">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">Features:</h4>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center text-[10px] sm:text-xs text-gray-600">
                <FaCheck className="text-green-500 mr-1 sm:mr-1.5 flex-shrink-0 text-[10px] sm:text-xs" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-1.5 sm:space-y-2">
          <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white border border-gray-200 text-gray-800 font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 w-full text-xs sm:text-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaWhatsapp className="mr-1 sm:mr-1.5 text-[#25D366]" />
            WhatsApp
          </motion.a>
          
          <motion.a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white border border-gray-200 text-gray-800 font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 w-full text-xs sm:text-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaTelegramPlane className="mr-1 sm:mr-1.5 text-[#0088cc]" />
            Telegram
          </motion.a>
        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Inter', 'Poppins', sans-serif;
        }
      `}</style>
    </motion.div>
  );
};

export default VehicleCard;