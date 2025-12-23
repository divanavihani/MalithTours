import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCamera, 
  FaHeart,
  FaStar,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebook
} from "react-icons/fa";

const DestinationDetails = () => {
  const { name } = useParams();

  const destinations = {
    "ella": {
      name: "Ella",
      image: "/images/ella1.jpg",
      description: "Experience the iconic Nine Arch Bridge, a masterpiece of colonial-era railway architecture surrounded by lush tea plantations and misty mountains.",
      fullDescription: "Nestled in the heart of Sri Lanka's hill country, Ella is a charming town that captivates visitors with its stunning natural beauty and colonial heritage. The town sits at an elevation of 1,041 meters above sea level, offering cool mountain air and breathtaking panoramic views of the surrounding valleys and tea estates.",
      highlights: [
        "Nine Arch Bridge - Iconic railway bridge",
        "Little Adam's Peak - Easy hiking trail with stunning views",
        "Ella Rock - Challenging hike with panoramic vistas",
        "Tea plantations and factories",
        "Ravana Falls - Beautiful waterfall",
        "Flying Ravana Mega Zipline"
      ],
      bestTime: "December to March (dry season)",
      duration: "2-3 days recommended",
      activities: ["Hiking", "Photography", "Tea tasting", "Train rides", "Nature walks"],
      gallery: ["/images/ella1.jpg", "/images/ella.jpg", "/images/ella3.jpg"],
      rating: 4.8,
      reviews: 2847,
      location: "Badulla District, Uva Province"
    },
    "sigiriya": {
      name: "Sigiriya",
      image: "/images/sigiriya1.jpg",
      description: "Ancient palace and fortress complex with stunning frescoes and lion rock formation.",
      fullDescription: "Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District near the town of Dambulla. This UNESCO World Heritage Site rises dramatically 200 meters above the surrounding plains and is considered one of the finest examples of ancient urban planning in the world.",
      highlights: [
        "Lion Rock fortress - UNESCO World Heritage Site",
        "Ancient frescoes and mirror wall",
        "Water gardens and fountains",
        "Summit palace ruins with panoramic views",
        "Archaeological museum",
        "Pidurangala Rock - Alternative viewpoint"
      ],
      bestTime: "January to April, July to September",
      duration: "Full day (4-6 hours)",
      activities: ["Rock climbing", "Archaeological exploration", "Photography", "Museum visits"],
      gallery: ["/images/sigiriya.jpg", "/images/sigiriya1.jpg", "/images/sigiriya2.jpg"],
      rating: 4.9,
      reviews: 4253,
      location: "Matale District, Central Province"
    },
    "kandy": {
      name: "Kandy",
      image: "/images/dalada.jpg",
      description: "Cultural capital featuring the Temple of the Sacred Tooth Relic and beautiful botanical gardens.",
      fullDescription: "Kandy, the last capital of the ancient kings' era of Sri Lanka, is a UNESCO World Heritage Site that lies in the midst of hills in the Kandy plateau. The city is famous for its beautiful lake, the Temple of the Sacred Tooth Relic, and its role as the cultural capital of Sri Lanka.",
      highlights: [
        "Temple of the Sacred Tooth Relic",
        "Kandy Lake - Scenic artificial lake",
        "Royal Botanical Gardens, Peradeniya",
        "Kandy Cultural Show",
        "Udawattakele Forest Reserve",
        "Traditional markets and craft centers"
      ],
      bestTime: "December to April",
      duration: "2-3 days recommended",
      activities: ["Cultural tours", "Botanical garden visits", "Traditional shows", "Shopping", "Lake walks"],
      gallery: ["/images/kandy.jpg", "/images/dalada1.jpg", "/images/dalada2.jpg"],
      rating: 4.7,
      reviews: 3641,
      location: "Central Province"
    },
    "galle": {
      name: "Galle",
      image: "/images/galle4.jpg",
      description: "Historic coastal city with Dutch colonial architecture and a UNESCO World Heritage fort.",
      fullDescription: "Galle is a historic city located on the southwestern tip of Sri Lanka, 119 kilometers from Colombo. The city's most notable feature is the well-preserved Galle Fort, a UNESCO World Heritage Site that showcases the best of European colonial architecture combined with South Asian traditions.",
      highlights: [
        "Galle Fort - UNESCO World Heritage Site",
        "Dutch colonial architecture",
        "Lighthouse and ramparts",
        "National Maritime Museum",
        "Historic churches and mosques",
        "Beautiful beaches nearby"
      ],
      bestTime: "December to March",
      duration: "1-2 days",
      activities: ["Fort exploration", "Historical tours", "Beach visits", "Shopping", "Dining"],
      gallery: ["/images/galle1.jpg", "/images/galle4.jpg", "/images/galle.jpg"],
      rating: 4.6,
      reviews: 2934,
      location: "Southern Province"
    },
    "nuwara-eliya": {
      name: "Nuwara Eliya",
      image: "/images/nuwaraeliya1.jpg",
      description: "Known as 'Little England', this hill station is famous for its tea estates and cool climate.",
      fullDescription: "Nuwara Eliya, often referred to as 'Little England', is a hill station in the central highlands of Sri Lanka. Set at an altitude of 1,868 meters above sea level, it enjoys a cool climate throughout the year and is famous for its tea plantations, colonial-era buildings, and beautiful gardens.",
      highlights: [
        "Tea plantations and factories",
        "Gregory Lake - Boating and activities",
        "Hakgala Botanical Garden",
        "Victoria Park",
        "Seetha Amman Temple",
        "Strawberry fields and farms"
      ],
      bestTime: "January to May, August to September",
      duration: "2-3 days",
      activities: ["Tea plantation tours", "Boating", "Garden visits", "Cool climate walks", "Strawberry picking"],
      gallery: ["/images/nuwareliya.jpg", "/images/nuwaraeliya1.jpg", "/images/nuwaraeliya2.jpg"],
      rating: 4.5,
      reviews: 2156,
      location: "Central Province"
    },
    "yala-national-park": {
      name: "Yala National Park",
      image: "/images/yala4.jpg",
      description: "Home to diverse wildlife including leopards, elephants, and a variety of bird species.",
      fullDescription: "Yala National Park is the most popular and second largest national park in Sri Lanka. Located in the southeastern region of the country, it's renowned for having one of the highest leopard density in the world and offers incredible wildlife viewing opportunities.",
      highlights: [
        "Highest leopard density in the world",
        "Large herds of elephants",
        "Over 215 bird species",
        "Crocodiles and water buffalo",
        "Ancient rock temples",
        "Diverse ecosystems from coast to forest"
      ],
      bestTime: "February to July",
      duration: "1-2 days (safari trips)",
      activities: ["Wildlife safaris", "Bird watching", "Photography", "Nature exploration"],
      gallery: ["/images/yala4.jpg", "/images/yala5.jpg", "/images/yala2.jpg"],
      rating: 4.8,
      reviews: 3429,
      location: "Southern and Uva Provinces"
    },
    "anuradhapura": {
      name: "Anuradhapura",
      image: "/images/anu.jpg",
      description: "Ancient city with well-preserved ruins of palaces, temples, and stupas dating back to the 3rd century BC.",
      fullDescription: "Anuradhapura is one of the ancient capitals of Sri Lanka, renowned for its well-preserved ruins of ancient Buddhist and Hindu temples, palaces, and monuments dating back to the 3rd century BC. This UNESCO World Heritage Site is considered sacred by Buddhists worldwide and offers a fascinating glimpse into Sri Lanka's rich history.",
      highlights: [
        "Sri Maha Bodhi Tree - Sacred fig tree",
        "Ruwanwelisaya Stupa - Ancient Buddhist shrine",
        "Jetavanaramaya - One of the world's tallest ancient structures",
        "Abhayagiri Monastery - Ruins of ancient monastery",
        "Thuparamaya - Oldest stupa in Sri Lanka",
        "Archaeological Museum"
      ],
      bestTime: "December to March",
      duration: "1-2 days",
      activities: ["Archaeological exploration", "Religious pilgrimage", "Photography", "Historical tours"],
      gallery: ["/images/anuradapura.jpg", "/images/polonnaruwa.jpg", "/images/sigiriya.jpg"],
      rating: 4.6,
      reviews: 2341,
      location: "North Central Province"
    },
    "hikkaduwa": {
      name: "Hikkaduwa",
      image: "/images/hikkaduwa.jpg",
      description: "Popular beach destination known for its coral reefs, surfing spots, and vibrant nightlife.",
      fullDescription: "Hikkaduwa is a vibrant coastal town located on the southwest coast of Sri Lanka, famous for its beautiful beaches, coral reefs, and excellent surfing conditions. This lively destination offers a perfect blend of marine activities, nightlife, and cultural experiences, making it a favorite among both local and international travelers.",
      highlights: [
        "Coral reefs and snorkeling spots",
        "World-class surfing breaks",
        "Sea turtle watching",
        "Hikkaduwa National Park",
        "Beach bars and nightlife",
        "Glass-bottom boat rides"
      ],
      bestTime: "November to April",
      duration: "2-4 days",
      activities: ["Surfing", "Snorkeling", "Diving", "Beach relaxation", "Turtle watching"],
      gallery: ["/images/hikkaduwa.jpg", "/images/hikka.jpg", "/images/galle1.jpg"],
      rating: 4.4,
      reviews: 3156,
      location: "Southern Province"
    },
    "polonnaruwa": {
      name: "Polonnaruwa",
      image: "/images/polonnaruwa3.jpg",
      description: "Medieval capital with impressive archaeological sites, including the Gal Vihara rock temple.",
      fullDescription: "Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993. This UNESCO World Heritage Site contains some of the best-preserved ruins of ancient Buddhist temples, Hindu temples, palaces, and other structures built between the 11th and 13th centuries.",
      highlights: [
        "Gal Vihara - Rock temple with Buddha statues",
        "Royal Palace complex",
        "Lankathilaka Image House",
        "Watadage - Circular relic house",
        "Parakrama Samudra - Ancient reservoir",
        "Archaeological Museum"
      ],
      bestTime: "April to September",
      duration: "1-2 days",
      activities: ["Archaeological exploration", "Cycling tours", "Photography", "Historical learning"],
      gallery: ["/images/polonnaruwa.jpg", "/images/polonnaruwa3.jpg", "/images/polon.jpg"],
      rating: 4.7,
      reviews: 2789,
      location: "North Central Province"
    },
    "arugam-bay": {
      name: "Arugam Bay",
      image: "/images/aru.jpg",
      description: "Renowned surfing destination with golden beaches, laid-back vibes, and a vibrant annual festival.",
      fullDescription: "Arugam Bay is a picturesque beach town on the southeast coast of Sri Lanka, globally recognized as one of the top surfing destinations in Asia. With its consistent waves, relaxed atmosphere, and stunning natural beauty, it attracts surfers and beach lovers from around the world.",
      highlights: [
        "World-class surfing breaks",
        "Main Point - Famous surf spot",
        "Pottuvil Lagoon - Wildlife sanctuary",
        "Muhudu Maha Vihara - Ancient temple",
        "Crocodile Rock - Scenic viewpoint",
        "Annual Arugam Bay Festival"
      ],
      bestTime: "April to October (surf season)",
      duration: "3-7 days",
      activities: ["Surfing", "Beach relaxation", "Wildlife watching", "Lagoon tours", "Photography"],
      gallery: ["/images/arugambay.jpg", "/images/hikkaduwa.jpg", "/images/aru.jpg"],
      rating: 4.5,
      reviews: 2634,
      location: "Eastern Province"
    },
    "ambalangoda": {
      name: "Ambalangoda",
      image: "/images/ambala.jpg",
      description: "Famous for traditional mask carving, colorful cultural performances, and coastal charm.",
      fullDescription: "Ambalangoda is a charming coastal town in southern Sri Lanka, renowned for its traditional devil masks, cultural performances, and beautiful beaches. This cultural hub has been the center of traditional Sri Lankan performing arts for centuries, particularly known for its intricate wooden mask carving.",
      highlights: [
        "Traditional mask carving workshops",
        "Devil mask museums",
        "Cultural dance performances",
        "Beautiful sandy beaches",
        "Madu River boat safari nearby",
        "Traditional puppet shows"
      ],
      bestTime: "November to April",
      duration: "1-2 days",
      activities: ["Cultural tours", "Mask making workshops", "Beach visits", "Traditional performances", "Art appreciation"],
      gallery: ["/images/ambalangoda.jpg", "/images/galle.jpg", "/images/ambala.jpg"],
      rating: 4.3,
      reviews: 1876,
      location: "Southern Province"
    },
    "trincomalee": {
      name: "Trincomalee",
      image: "/images/trin.jpg",
      description: "Famous for its natural harbor, beautiful beaches, and the Koneswaram Temple.",
      fullDescription: "Trincomalee, often called 'Trinco', is a port city on the northeast coast of Sri Lanka. Known for having one of the finest natural harbors in the world, it boasts pristine beaches, rich maritime history, and significant Hindu and Buddhist religious sites.",
      highlights: [
        "Koneswaram Temple - Ancient Hindu temple",
        "Nilaveli Beach - Pristine white sand beach",
        "Pigeon Island National Park",
        "Natural harbor - One of the world's finest",
        "Hot Springs at Kanniya",
        "Maritime and Naval History Museum"
      ],
      bestTime: "April to September",
      duration: "2-3 days",
      activities: ["Beach relaxation", "Snorkeling", "Temple visits", "Whale watching", "Historical tours"],
      gallery: ["/images/trincomalee.jpg", "/images/arugambay.jpg", "/images/hikkaduwa.jpg"],
      rating: 4.4,
      reviews: 2234,
      location: "Eastern Province"
    }
  };

  const destination = destinations[name];

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "94771351993";
  const telegramLink = "https://telegram.org/dl";
  const facebookLink = "https://www.facebook.com/share/1K6hLztSti/";
  const message = encodeURIComponent(`I'm interested in visiting ${destination.name}!`);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] max-h-[500px] bg-gray-900 -mt-16 pt-16 z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover opacity-95 brightness-110 contrast-105"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={fadeInUp}
        >
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {destination.name}
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-200 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {destination.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:space-x-6 text-xs sm:text-sm md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center bg-black/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                <FaMapMarkerAlt className="mr-1.5 sm:mr-2 text-xs sm:text-sm md:text-base" />
                <span className="text-xs sm:text-sm md:text-base">{destination.location}</span>
              </div>
              <div className="flex items-center bg-black/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                <FaStar className="mr-1 text-yellow-400 text-xs sm:text-sm md:text-base" />
                <span className="text-xs sm:text-sm md:text-base">{destination.rating} ({destination.reviews} reviews)</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 relative z-20">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
        >
          <FaArrowLeft className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Description */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">About {destination.name}</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">{destination.fullDescription}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Top Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <FaHeart className="text-red-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                    <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Popular Activities</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {destination.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {destination.gallery.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${destination.name} view ${index + 1}`}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Info Card */}
            <motion.div
              className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Quick Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <FaClock className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Best Time to Visit</span>
                    <p className="font-medium text-sm sm:text-base">{destination.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCamera className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Recommended Duration</span>
                    <p className="font-medium text-sm sm:text-base">{destination.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-blue-600 mr-2 sm:mr-3 text-sm sm:text-base" />
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500">Rating</span>
                    <p className="font-medium text-sm sm:text-base">{destination.rating}/5 ({destination.reviews} reviews)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Section */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-5 md:p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Plan Your Visit</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Ready to explore {destination.name}? Contact us to plan your perfect Sri Lankan adventure.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <motion.a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 w-full text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="mr-1.5 sm:mr-2" />
                  Plan via WhatsApp
                </motion.a>
                <motion.a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaTelegramPlane className="mr-1.5 sm:mr-2" />
                  Plan via Telegram
                </motion.a>
                <motion.a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-800 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-900 transition-colors duration-200 w-full text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFacebook className="mr-1.5 sm:mr-2" />
                  Connect on Facebook
                </motion.a>
                <Link
                  to="/bookings"
                  className="flex items-center justify-center bg-purple-600 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 w-full text-sm sm:text-base"
                >
                  View Our Vehicle Fleet
                </Link>
              </div>
            </motion.div>

            {/* Travel Tips */}
            <motion.div
              className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Travel Tips</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Bring comfortable walking shoes</li>
                <li>• Carry plenty of water and sunscreen</li>
                <li>• Respect local customs and traditions</li>
                <li>• Start early to avoid crowds</li>
                <li>• Don't forget your camera!</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;