import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTelegramPlane, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              className="flex items-center mb-3"
              whileHover="hover"
              variants={logoVariants}
            >
              <img
                src="/images/logo.png"
                alt="Malith Tours Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 drop-shadow-lg"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Malith Tours
                </h3>
                <p className="text-gray-400 text-[10px] sm:text-xs">Your Gateway to Sri Lankan Adventures</p>
              </div>
            </motion.div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-md">
              Discover Sri Lanka with our premium travel services. From ancient temples to pristine beaches.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              {[
                { icon: FaWhatsapp, link: "https://wa.me/94771351993", color: "hover:text-green-400" },
                { icon: FaTelegramPlane, link: "https://t.me/YourTelegramBot", color: "hover:text-blue-400" },
                { icon: FaFacebook, link: "https://facebook.com/MalithTours", color: "hover:text-blue-500" },
                { icon: FaInstagram, link: "https://instagram.com/MalithTours", color: "hover:text-pink-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-blue-400">Quick Links</h4>
            <ul className="space-y-1">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Bookings", path: "/bookings" },
                { name: "Reviews", path: "/reviews" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center text-xs sm:text-sm"
                  >
                    <span className="mr-1 text-xs">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-blue-400">Contact Info</h4>
            <div className="space-y-2">
              <motion.div
                className="flex items-start"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-2 flex-shrink-0 text-xs sm:text-sm" />
                <p className="text-gray-300 text-xs sm:text-sm">
                  Colombo Road, Mirissa<br />
                  Sri Lanka
                </p>
              </motion.div>
              
              <motion.div
                className="flex items-center"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="text-blue-400 mr-2 text-xs sm:text-sm" />
                <a href="tel:+94771351993" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                  +94 077 135 1993
                </a>
              </motion.div>
              
              <motion.div
                className="flex items-center"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-blue-400 mr-2 text-xs sm:text-sm" />
                <a href="mailto:malithchamara1993@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all">
                  malithchamara1993@gmail.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <motion.p
              className="text-gray-400 text-[10px] sm:text-xs text-center sm:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              © {currentYear} Malith Tours. All Rights Reserved.
            </motion.p>
            
            <motion.div
              className="flex space-x-4 text-[10px] sm:text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;