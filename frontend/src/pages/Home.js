import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import RecentReviews from "../components/RecentReviews";
import {
  FaPhone,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";

const Home = () => {
  const destinationsRef = useRef(null);

  const scrollToDestinations = () => {
    destinationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const destinations = [
    {
      name: "Ella",
      image: "/images/ella1.jpg",
      description:
        "Experience the iconic Nine Arch Bridge, a masterpiece of colonial-era railway architecture surrounded by lush tea plantations and misty mountains.",
    },
    {
      name: "Sigiriya",
      image: "/images/sigiriya1.jpg",
      description:
        "Ancient palace and fortress complex with stunning frescoes and lion rock formation.",
    },
    {
      name: "Kandy",
      image: "/images/kandy1.jpg",
      description:
        "Cultural capital featuring the Temple of the Sacred Tooth Relic and beautiful botanical gardens.",
    },
    {
      name: "Galle",
      image: "/images/galle4.jpg",
      description:
        "Historic coastal city with Dutch colonial architecture and a UNESCO World Heritage fort.",
    },
    {
      name: "Nuwara Eliya",
      image: "/images/nuwaraeliya1.jpg",
      description:
        "Known as 'Little England', this hill station is famous for its tea estates and cool climate.",
    },
    {
      name: "Yala National Park",
      image: "/images/yala4.jpg",
      description:
        "Home to diverse wildlife including leopards, elephants, and a variety of bird species.",
    },
    {
      name: "Anuradhapura",
      image: "/images/anu.jpg",
      description:
        "Ancient city with well-preserved ruins of palaces, temples, and stupas dating back to the 3rd century BC.",
    },
    {
      name: "Hikkaduwa",
      image: "/images/hikka.jpg",
      description:
        "Popular beach destination known for its coral reefs, surfing spots, and vibrant nightlife.",
    },
    {
      name: "Polonnaruwa",
      image: "/images/polonnaruwa3.jpg",
      description:
        "Medieval capital with impressive archaeological sites, including the Gal Vihara rock temple.",
    },
    {
      name: "Arugam Bay",
      image: "/images/aru.jpg",
      description:
        "Renowned surfing destination with golden beaches, laid-back vibes, and a vibrant annual festival.",
    },
    {
      name: "Ambalangoda",
      image: "/images/ambala.jpg",
      description:
        "Famous for traditional mask carving, colorful cultural performances, and coastal charm.",
    },
    {
      name: "Trincomalee",
      image: "/images/trin.jpg",
      description:
        "Famous for its natural harbor, beautiful beaches, and the Koneswaram Temple.",
    },
  ];

  const [isMainPopupOpen, setIsMainPopupOpen] = useState(false);

  const contactDetails = {
    whatsapp: {
      icon: <FaWhatsapp className="text-[#25D366]" />,
      title: "WhatsApp",
      number: "+94 077 135 1993",
      link: "https://wa.me/94771351993",
    },
    telegram: {
      icon: <FaTelegramPlane className="text-[#0088cc]" />,
      title: "Telegram",
      username: "@Hnds0",
      link: "https://telegram.org/dl",
    },
    facebook: {
      icon: <FaFacebook className="text-[#1877F2]" />,
      title: "Facebook",
      page: "Malith Tours",
      link: "https://www.facebook.com/share/1K6hLztSti/",
    },
  };

  const handleMainContactClick = () => {
    setIsMainPopupOpen(true);
  };

  const handleCloseMainPopup = () => {
    setIsMainPopupOpen(false);
  };

  // Animation variants for destination cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Animation variants for contact button
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  // Animation variants for popup
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Hero scrollToDestinations={scrollToDestinations} />

      {/* Featured Destinations */}
      <section
        ref={destinationsRef}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-tight"
          >
            Discover Sri Lanka
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Embark on a journey through the pearl of the Indian Ocean, where
            ancient heritage meets breathtaking landscapes.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2 drop-shadow-md"
                    whileHover={{ color: "#93c5fd" }}
                    transition={{ duration: 0.2 }}
                  >
                    {destination.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-100 text-sm font-medium drop-shadow-md"
                    whileHover={{ color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {destination.description.length > 120
                      ? destination.description.slice(0, 120) + "..."
                      : destination.description}
                  </motion.p>
                  <Link
                    to={`/destination/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-3 inline-block"
                  >
                    <motion.div
                      className="relative group/btn cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded blur-sm opacity-70 group-hover/btn:opacity-100 transition duration-500 animate-pulse"></div>
                      <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white px-3 py-1.5 rounded font-bold text-xs shadow-xl transform transition-all duration-300 group-hover/btn:shadow-2xl overflow-hidden border border-slate-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700"></div>
                        <div className="relative z-10 flex items-center justify-center space-x-1">
                          <span className="tracking-wide font-extrabold">EXPLORE</span>
                          <motion.span
                            animate={{
                              x: [0, 2, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="text-xs font-bold"
                          >
                            →
                          </motion.span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400"></div>
                        <div className="absolute inset-0 rounded bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RecentReviews />

      {/* CTA Section with T5 Image Background */}
      <div 
        className="relative w-full h-[500px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/T5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              Begin Your Sri Lankan Adventure
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100 font-light drop-shadow-md">
              Join thousands of travelers and create unforgettable memories with
              Malith Tours.
            </p>
            <motion.a
              href="/bookings"
              className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#dbeafe",
                color: "#1e40af",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Book Your Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
      <br /><br />

      {/* Contact Us Button (Fixed on Right Side) */}
      <motion.div
        className="fixed right-6 top-3/4 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.button
          onClick={handleMainContactClick}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-600 border border-gray-200 shadow-md hover:bg-teal-50 hover:border-teal-300 transition-all duration-200"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Contact Us"
        >
          <FaPhone size={20} />
        </motion.button>
      </motion.div>

      {/* Main Contact Popup */}
      <AnimatePresence>
        {isMainPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full max-w-md bg-white rounded-xl shadow-lg p-6"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-semibold text-gray-800 tracking-tight">
                  Contact Us
                </h2>
                <motion.button
                  onClick={handleCloseMainPopup}
                  className="text-gray-500 text-2xl font-semibold hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close popup"
                >
                  ×
                </motion.button>
              </div>
              <div className="flex flex-col space-y-6">
                {Object.values(contactDetails).map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-center">
                      {contact.icon}
                      <h3 className="text-base font-serif font-semibold text-gray-800 ml-2.5">
                        {contact.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {contact.title === "Facebook"
                        ? `Page: ${contact.page}`
                        : contact.title === "Telegram"
                        ? `Username: ${contact.username}`
                        : `Phone: ${contact.number}`}
                    </p>
                    <motion.a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white border border-teal-500 text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-teal-50 hover:border-teal-600 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      Contact Now
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
      <style>{`
        .font-serif {
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        @media (max-width: 640px) {
          .text-xl {
            font-size: 1.125rem;
          }
          .text-base {
            font-size: 0.875rem;
          }
          .text-sm {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;