import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroVideo from "../assert/1.mp4";

const Hero = ({ scrollToDestinations }) => {
  // Animation variants for letters
  const letterVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -45 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.6, 0, 0.2, 1],
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  // Typewriter animation for subtitle
  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  // Split text into individual letters for animation
  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <div className="relative h-[100svh] min-h-[500px] max-h-[900px] overflow-hidden -mt-16 sm:-mt-18 md:-mt-20 pt-16 sm:pt-18 md:pt-20">
      {/* Video Background with Optimized Quality */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom brightness-105 contrast-105 saturate-100 z-0"
        style={{
          objectFit: "cover",
          willChange: "transform",
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Refined Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          {/* Main Title with Letter Animation */}
          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-2xl font-serif px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {splitText("Discover Your Journey")}
          </motion.h1>

          {/* Animated Subtitle with Typewriter Effect */}
          <div className="relative mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            <motion.div
              className="overflow-hidden"
              variants={typewriterVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                Embark on curated travel experiences tailored to your wanderlust. Your adventure begins here.
              </motion.p>
            </motion.div>
            <motion.span
              className="inline-block w-0.5 sm:w-1 h-4 sm:h-6 md:h-8 bg-white/80 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
                delay: 2.5,
              }}
            />
          </div>

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto sm:flex-1 sm:max-w-xs"
            >
              <Link
                to="/bookings"
                className="relative w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg overflow-hidden"
              >
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: [0, -3, 3, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  Book Your Journey
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                borderColor: "#ffffff",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto sm:flex-1 sm:max-w-xs"
            >
              <button
                onClick={scrollToDestinations}
                className="w-full flex items-center justify-center bg-transparent border-2 border-white/70 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 shadow-lg"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: [0, 3, -3, 0] }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center"
                >
                  Explore Destinations
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </button>
            </motion.div>
          </motion.div>

          {/* Floating SVG Icons - Hidden on small screens */}
          <motion.div
            className="absolute top-16 left-8 sm:left-12 text-white hidden sm:block"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-24 right-10 sm:right-16 text-white hidden sm:block"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-12h-2v6H9l3 3 3-3h-2V8z" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-24 left-12 sm:left-16 text-white hidden sm:block"
            animate={{
              y: [0, -12, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6h-8l-3 3H3v9h18V6zm-2 2v2h-6V8h6z" />
            </svg>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Custom Font Stack */
        .font-serif {
          font-family: 'Playfair Display', 'Georgia', serif;
        }
        /* Smooth Zoom Animation */
        @keyframes slow-zoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
        /* Responsive Adjustments */
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
          .max-w-xs {
            max-width: 10rem;
          }
        }
        @media (min-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
          p {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;