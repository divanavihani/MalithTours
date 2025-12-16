"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Dummy reviews data
const DUMMY_REVIEWS = [
  {
    _id: "1",
    name: "Sarah Johnson from USA",
    feedback: "Malith Tours made our Sri Lankan adventure absolutely unforgettable! From the stunning beaches to the ancient temples, every moment was magical. Our guide was knowledgeable and friendly, making us feel safe and welcome throughout the journey.",
    rating: 5,
    tourImage: "/images/ella.jpg",
    createdAt: "2024-11-15T10:30:00Z"
  },
  {
    _id: "2",
    name: "David Chen from Singapore",
    feedback: "An incredible experience exploring Sri Lanka's cultural treasures. The accommodations were excellent, and the itinerary was perfectly planned. I especially loved visiting Sigiriya Rock and the tea plantations in Nuwara Eliya!",
    rating: 5,
    tourImage: "/images/sigiriya.jpg",
    createdAt: "2024-11-10T14:20:00Z"
  },
  {
    _id: "3",
    name: "Emma Williams from UK",
    feedback: "Best tour company ever! Malith and his team went above and beyond to ensure we had a wonderful time. The wildlife safari in Yala was breathtaking, and we saw so many elephants and leopards. Highly recommended!",
    rating: 5,
    tourImage: "/images/yala.jpg",
    createdAt: "2024-11-05T09:15:00Z"
  },
  {
    _id: "4",
    name: "Michael Brown from Australia",
    feedback: "Professional service and great value for money. The tour covered all the major attractions and some hidden gems too. Our driver was excellent and the vehicle was very comfortable for the long journeys.",
    rating: 4,
    tourImage: "/images/kandy.jpg",
    createdAt: "2024-10-28T16:45:00Z"
  },
  {
    _id: "5",
    name: "Lisa Anderson from Canada",
    feedback: "Sri Lanka is paradise and Malith Tours showed us the best of it! The beaches in Mirissa were pristine, whale watching was spectacular, and the food recommendations were spot on. Can't wait to come back!",
    rating: 5,
    tourImage: "/images/mirissa.jpg",
    createdAt: "2024-10-20T11:30:00Z"
  },
  {
    _id: "6",
    name: "Robert Martinez from Spain",
    feedback: "A wonderful cultural journey through Sri Lanka. The temples, the history, the local cuisine - everything was fantastic. Malith Tours organized everything perfectly and made our vacation stress-free and enjoyable.",
    rating: 5,
    tourImage: "/images/galle.jpg",
    createdAt: "2024-10-12T13:00:00Z"
  }
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setReviews(DUMMY_REVIEWS);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const coverVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const reviewCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50">
      {/* Cover Photo Section with Navigation Bar */}
      <motion.section
        className="relative"
        initial="hidden"
        animate="visible"
        variants={coverVariants}
      >
        {/* Background Image */}
        <div
          className="relative w-full h-[500px] bg-cover bg-center -mt-20 pt-20"
          style={{
            backgroundImage: "url('https://img.freepik.com/free-photo/lost-tourists-finding-way_23-2147643219.jpg?semt=ais_hybrid&w=740')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

          {/* Cover Content - Positioned absolutely on the image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            variants={coverVariants}
          >
            <div className="text-center px-4 sm:px-6 max-w-5xl">
              <motion.div className="mb-6" custom={0} variants={textVariants}>
                <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-md">
                  
                   
                 
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-serif tracking-tight mb-6"
                custom={0}
                variants={textVariants}
              >
                <span className="bg-gradient-to-r from-white via-white-100 to-white-107 bg-clip-text ">
                  Traveler Stories
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light mb-8"
                custom={1}
                variants={textVariants}
              >
                Discover the{" "}
                <span className="font-semibold text-white-200">unforgettable experiences</span> of travelers who explored
                <span className="font-bold text-white-200"> Sri Lanka</span> with{" "}
                <span className="font-bold text-white-200">Malith Tours</span>
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                custom={2}
                variants={textVariants}
              >
                
                
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                custom={3}
                variants={textVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80 text-sm">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                  <div className="text-white/80 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">Destinations</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtle Decorative Element */}
          <div className="absolute bottom-0 left-0 right-0 h-12 z-10">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            </svg>
          </div>

          {/* Floating Elements for Visual Interest */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-16 w-6 h-6 bg-purple-400 rounded-full opacity-40"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-8 h-8 bg-yellow-400 rounded-full opacity-50"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.section>

      {/* Reviews Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Destinations Highlight */}
          <div className="mb-20 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl -z-10 opacity-50"></div>
            <div className="py-12 px-8">
              <motion.div
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                ⭐ Featured Destinations
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Top Destinations Loved by Travelers
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Discover the magical destinations that have captured the hearts of thousands of travelers.
                From the misty hills of <span className="font-semibold text-blue-600">Ella</span> to
                the ancient rock fortress of <span className="font-semibold text-purple-600">Sigiriya</span>,
                and the cultural heart of <span className="font-semibold text-green-600">Kandy</span>—
                your next adventure awaits! 🌟
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-4"
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                {["🏔️ Ella", "🏰 Sigiriya", "🛕 Kandy", "🌊 Galle", "🐘 Yala"].map((destination, i) => (
                  <span
                    key={i}
                    className="bg-white/70 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    {destination}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Reviews Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded-full w-32 mb-2"></div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : reviews.length === 0 ? (
              <motion.div
                className="col-span-full text-center py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 max-w-md mx-auto border border-blue-200">
                  <div className="text-6xl mb-6">🌟</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">No Reviews Yet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Be the first to share your incredible Malith Tours adventure and inspire other travelers!
                  </p>
                </div>
              </motion.div>
            ) : (
              reviews.map((review, index) => (
                <motion.div
                  key={review._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 transition-all duration-300"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reviewCardVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {/* User Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      {review.tourImage ? (
                        <img
                          src={review.tourImage}
                          alt={`${review.name}'s profile`}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                          onError={(e) => {
                            e.target.src = "/images/default-avatar.jpg";
                          }}
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white">
                          {review.name?.charAt(0)?.toUpperCase() || "T"}
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-3 border-white rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{review.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < (review.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-gray-600">{review.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 font-medium">
                        {new Date(review.createdAt || "2025-07-21T22:54:00+0530").toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-base font-medium">"{review.feedback}"</p>
                  </div>

                  {/* Tour Image if available */}
                  {review.tourImage && (
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src={review.tourImage}
                        alt={`${review.name}'s tour experience`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/images/ella.jpg";
                        }}
                      />
                    </div>
                  )}

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified Review
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 font-medium">Malith Tours Experience</div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <style>{`
        .font-serif {
          font-family: "Inter", "Poppins", sans-serif;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 1.875rem;
          }
          p {
            font-size: 0.875rem;
          }
          nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Reviews;