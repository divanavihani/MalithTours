"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const RecentReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hardcodedReviews = [
      {
        _id: "1",
        name: "Anna Müller (Germany)",
        feedback: "The service from Malith Tours was exceptional! The guides were knowledgeable, and the arrangements were flawless.",
        createdAt: "2025-07-15T10:00:00Z",
        image: "/images/tra1.jpg",
      },
      {
        _id: "2",
        name: "Liam O’Connor (Russia)",
        feedback: "Outstanding customer service! Malith Tours made our trip to Sri Lanka seamless and enjoyable.",
        createdAt: "2025-07-10T14:30:00Z",
        image: "/images/tra2.jpg",
      },
      {
        _id: "3",
        name: "Sophie Dupont (France)",
        feedback: "The attention to detail and friendly staff at Malith Tours made this the best travel experience I've had!",
        createdAt: "2025-07-05T09:15:00Z",
        image: "/images/tra3.jpg",
      },
    ];
    setReviews(hardcodedReviews);
    setLoading(false);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  if (loading) {
    return (
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-800 mb-12 tracking-tight"
            variants={sectionVariants}
          >
            What Our Travelers Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-5 w-5 bg-gray-200 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-800 mb-12 tracking-tight"
          variants={sectionVariants}
        >
          What Our Travelers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                className="relative mb-6 overflow-hidden rounded-lg"
                variants={imageVariants}
              >
                <img
                  src={review.image}
                  alt={`${review.name}'s review`}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "/images/fallback.jpg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic text-base leading-relaxed font-medium">
                "{review.feedback}"
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800 text-lg">{review.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .font-serif {
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        @media (max-width: 640px) {
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default RecentReviews;