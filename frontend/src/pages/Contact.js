"use client"; // Ensure client-side rendering for Next.js

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Send, QrCode, User, Calendar, Plane, Car, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    fromDestination: "",
    toDestination: "",
    travelDate: "",
    returnDate: "",
    travelers: "",
    airportPickup: false,
    pickupDetails: {
      flightNumber: "",
      arrivalTime: "",
      airportName: ""
    },
    travelType: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('pickupDetails.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        pickupDetails: {
          ...formData.pickupDetails,
          [field]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🌴 *Sri Lanka Tour Inquiry* 🌴

👤 *Personal Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

✈️ *Travel Details:*
• Traveling From (Country): ${formData.from}
• Arriving To (Airport): ${formData.to}
• Starting Destination: ${formData.fromDestination}
• Ending Destination: ${formData.toDestination}
• Arrival Date: ${formData.travelDate}
• Departure Date: ${formData.returnDate}
• Number of Travelers: ${formData.travelers}

🚗 *Airport Pickup:* ${formData.airportPickup ? 'Yes' : 'No'}
${formData.airportPickup ? `
• Flight Number: ${formData.pickupDetails.flightNumber}
• Arrival Time: ${formData.pickupDetails.arrivalTime}
• Airport: ${formData.pickupDetails.airportName}` : ''}

🎯 *Travel Type:* ${formData.travelType}
💰 *Budget Range:* ${formData.budget}

📝 *Additional Message:*
${formData.message}

Please get back to me with tour details, itinerary, and pricing. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/940771351993?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Animation variants
  const headerVariants = {
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

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  const buttonVariants = {
    hover: { scale: 1.03, boxShadow: "0 8px 24px rgba(59, 130, 246, 0.2)", transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  const qrCodeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[500px] bg-cover bg-center -mt-20 pt-20"
        style={{
          backgroundImage: "url('https://tgmresearch.com/templates/yootheme/cache/92/tourists-man-woman-couple-traveling-920c8d02.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 sm:px-6 max-w-5xl">
            <motion.div className="mb-4" custom={0} variants={textVariants}>
              <div className="inline-block p-2 bg-white/10 rounded-full backdrop-blur-md">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-serif"
              custom={0}
              variants={textVariants}
            >
              Connect With Us
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
              custom={1}
              variants={textVariants}
            >
              Plan your <span className="font-semibold text-blue-200">dream adventure</span> with our travel experts. Reach out today to start your journey.
            </motion.p>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          </svg>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* QR Code, Gallery, and Map Section - Above Form */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-4 font-serif"
              custom={0}
              variants={textVariants}
            >
              Connect & Explore
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              custom={1}
              variants={textVariants}
            >
              Scan our QR code for instant contact, explore our photo gallery, and find our location
            </motion.p>
          </div>

          {/* Three Column Layout: QR Code, Gallery, Map */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* QR Code Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={qrCodeVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">Quick Connect</h3>
              <p className="text-sm text-gray-600 mb-6">Scan to access our contact details instantly</p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200">
                <img
                  src="/images/qr.jpg"
                  alt="Contact QR Code"
                  className="w-40 h-40 mx-auto object-contain rounded-lg"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiIGZpbGw9IiNGM0Y0RjYiLz48cmVjdCB4PSIyNCIgeT0iMjQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzM3NDE1MSIvPjxyZWN0IHg9IjEyMCIgeT0iMjQiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzM3NDE1MSIvPjxyZWN0IHg9IjI0IiB5PSIxMjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9Ijk2IiB5PSIxMDQiIGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UVI8L3RleHQ+PC9zdmc+";
                  }}
                />
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Point your camera at the QR code
              </div>
            </motion.div>

            {/* Gallery Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={galleryVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center font-serif">Photo Gallery</h3>
              <p className="text-sm text-gray-600 mb-6 text-center">Beautiful moments from our tours</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/images/T1.jpeg", title: "Paradise Beach" },
                  { src: "/images/T2.jpeg", title: "Mountain Vista" },
                  { src: "/images/T3.jpeg", title: "Cultural Heritage" },
                  { src: "/images/T4.jpeg", title: "Adventure Trail" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg aspect-square"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="120" fill="#F3F4F6"/>
                            <rect x="30" y="40" width="60" height="40" rx="8" fill="#D1D5DB"/>
                            <circle cx="50" cy="55" r="6" fill="#9CA3AF"/>
                            <path d="M40 75L55 65L70 75" stroke="#9CA3AF" stroke-width="2" fill="none"/>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-2 w-full">
                        <p className="text-white text-xs font-medium text-center">{image.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headerVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">Find Us</h3>
                <p className="text-sm text-gray-600 mb-6">Located in beautiful Mirissa</p>
              </div>
              
              <div className="relative h-64 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.0234567890123!2d80.45678901234567!3d5.945678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138b073c5c5c5%3A0x1a2b3c4d5e6f7g8h!2sMirissa%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Malith Tours Location"
                ></iframe>
                
                {/* Map overlay */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Malith Tours</h4>
                  <p className="text-xs text-gray-600">Colombo Rd, Mirissa</p>
                  <p className="text-xs text-gray-600">📞 +94 077 135 1993</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form and Info Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Enhanced Contact Form - Takes 2/3 width */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 rounded-2xl shadow-2xl p-10 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={formVariants}
          >
            <motion.div className="text-center mb-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 font-serif"
                custom={0}
                variants={textVariants}
              >
                Plan Your Sri Lankan Adventure
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg mb-6"
                custom={1}
                variants={textVariants}
              >
                Fill out this form and we'll create your perfect itinerary
              </motion.p>
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={1} variants={textVariants}>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div custom={2} variants={textVariants}>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <motion.div custom={3} variants={textVariants}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>
                  
                  <motion.div custom={4} variants={textVariants}>
                    <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-3">
                      Traveling From
                    </label>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      value={formData.from}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm"
                      placeholder="Country/City"
                    />
                  </motion.div>
                  
                  <motion.div custom={5} variants={textVariants}>
                    <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-3">
                      Arriving To
                    </label>
                    <select
                      id="to"
                      name="to"
                      value={formData.to}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-800 shadow-sm"
                    >
                      <option value="">Select Airport</option>
                      <option value="Colombo (CMB)">Colombo (CMB)</option>
                      <option value="Mattala (HRI)">Mattala (HRI)</option>
                    </select>
                  </motion.div>
                </div>
              </motion.div>

              {/* Travel Details */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Travel Route Planning
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div custom={6} variants={textVariants}>
                    <label htmlFor="fromDestination" className="block text-sm font-medium text-gray-700 mb-2">
                      Starting Destination
                    </label>
                    <select
                      id="fromDestination"
                      name="fromDestination"
                      value={formData.fromDestination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select starting point</option>
                      <option value="Colombo Airport (CMB)">Colombo Airport (CMB)</option>
                      <option value="Mattala Airport (HRI)">Mattala Airport (HRI)</option>
                      <option value="Colombo City">Colombo City</option>
                      <option value="Negombo">Negombo</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Galle">Galle</option>
                      <option value="Ella">Ella</option>
                      <option value="Sigiriya">Sigiriya</option>
                      <option value="Nuwara Eliya">Nuwara Eliya</option>
                      <option value="Mirissa">Mirissa</option>
                      <option value="Anuradhapura">Anuradhapura</option>
                      <option value="Polonnaruwa">Polonnaruwa</option>
                      <option value="Dambulla">Dambulla</option>
                      <option value="Bentota">Bentota</option>
                      <option value="Hikkaduwa">Hikkaduwa</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                  
                  <motion.div custom={7} variants={textVariants}>
                    <label htmlFor="toDestination" className="block text-sm font-medium text-gray-700 mb-2">
                      Ending Destination
                    </label>
                    <select
                      id="toDestination"
                      name="toDestination"
                      value={formData.toDestination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select ending point</option>
                      <option value="Colombo Airport (CMB)">Colombo Airport (CMB)</option>
                      <option value="Mattala Airport (HRI)">Mattala Airport (HRI)</option>
                      <option value="Colombo City">Colombo City</option>
                      <option value="Negombo">Negombo</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Galle">Galle</option>
                      <option value="Ella">Ella</option>
                      <option value="Sigiriya">Sigiriya</option>
                      <option value="Nuwara Eliya">Nuwara Eliya</option>
                      <option value="Mirissa">Mirissa</option>
                      <option value="Anuradhapura">Anuradhapura</option>
                      <option value="Polonnaruwa">Polonnaruwa</option>
                      <option value="Dambulla">Dambulla</option>
                      <option value="Bentota">Bentota</option>
                      <option value="Hikkaduwa">Hikkaduwa</option>
                      <option value="Same as starting point (Round Trip)">Same as starting point (Round Trip)</option>
                       <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <motion.div custom={8} variants={textVariants}>
                    <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select number</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="9-15">9-15 People</option>
                      <option value="16+">16+ People (Group)</option>
                    </select>
                  </motion.div>
                  
                  <motion.div custom={9} variants={textVariants}>
                    <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </motion.div>
                  
                  <motion.div custom={10} variants={textVariants}>
                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Departure Date
                    </label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </motion.div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600 bg-white/60 p-3 rounded-lg">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  <strong>Route Planning:</strong> Our team will create a custom itinerary connecting your 
                  chosen destinations with the most scenic and efficient routes, including must-see attractions along the way.
                </div>
              </div>

              {/* Airport Pickup Service */}
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-purple-600" />
                  Airport Pickup Service
                </h3>
                <motion.div custom={10} variants={textVariants}>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="airportPickup"
                      checked={formData.airportPickup}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Yes, I need airport pickup service
                    </span>
                  </label>
                </motion.div>
                
                {formData.airportPickup && (
                  <motion.div 
                    className="mt-4 grid md:grid-cols-3 gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <label htmlFor="pickupDetails.flightNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Flight Number
                      </label>
                      <input
                        type="text"
                        id="pickupDetails.flightNumber"
                        name="pickupDetails.flightNumber"
                        value={formData.pickupDetails.flightNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="e.g., UL301"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pickupDetails.arrivalTime" className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Arrival Time
                      </label>
                      <input
                        type="time"
                        id="pickupDetails.arrivalTime"
                        name="pickupDetails.arrivalTime"
                        value={formData.pickupDetails.arrivalTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="pickupDetails.airportName" className="block text-sm font-medium text-gray-700 mb-2">
                        <Plane className="inline h-4 w-4 mr-1" />
                        Airport
                      </label>
                      <select
                        id="pickupDetails.airportName"
                        name="pickupDetails.airportName"
                        value={formData.pickupDetails.airportName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select Airport</option>
                        <option value="Bandaranaike International Airport (CMB)">Bandaranaike International (CMB)</option>
                        <option value="Mattala Rajapaksa International Airport (HRI)">Mattala Rajapaksa International (HRI)</option>
                      </select>
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-3 text-sm text-gray-600 bg-white/60 p-3 rounded-lg">
                  <Car className="inline h-4 w-4 mr-1" />
                  <strong>Airport Pickup Service includes:</strong> Professional driver, comfortable vehicle, 
                  flight tracking, complimentary water bottles, and assistance with luggage.
                </div>
              </div>

             
                
                

              {/* Additional Message */}
              <motion.div 
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 shadow-sm border border-orange-100"
                custom={13} 
                variants={textVariants}
              >
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 text-gray-800 placeholder-gray-400 shadow-sm resize-none"
                  placeholder="Tell us about your dream Sri Lankan adventure, special interests, dietary requirements, or any other preferences..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="relative w-full group cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                custom={14}
                variants={textVariants}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-2xl transform transition-all duration-300 group-hover:shadow-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <MessageCircle className="h-7 w-7" />
                    </motion.div>
                    <span className="text-xl tracking-wider font-extrabold">Send Inquiry via WhatsApp</span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.div>
                  </div>
                </div>
              </motion.button>
              
              <motion.div 
                className="text-center mt-6 bg-gray-50 p-6 rounded-xl border border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-800">🚀 Quick Response:</span> By submitting this form, you'll be redirected to WhatsApp with your inquiry pre-filled. 
                  Our expert team will respond within <span className="font-semibold text-green-600">2-4 hours</span> during business hours with a customized itinerary and pricing.
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <motion.h2
                className="text-2xl font-bold text-gray-800 mb-6 font-serif text-center"
                custom={0}
                variants={textVariants}
              >
                Contact Details
              </motion.h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="h-6 w-6 text-indigo-600" />, label: "Phone", value: "+94 0771351993", link: "tel:+940771351993" },
                  { icon: <Mail className="h-6 w-6 text-indigo-600" />, label: "Email", value: "malithchamara1993@gmail.com", link: "mailto:malithchamara1993@gmail.com" },
                  { icon: <MapPin className="h-6 w-6 text-indigo-600" />, label: "Address", value: "Colombo Rd, Mirissa, Sri Lanka", link: "https://goo.gl/maps/example" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    custom={index + 1}
                    variants={textVariants}
                  >
                    <div className="flex-shrink-0 mt-1 mr-4">{item.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">{item.label}</p>
                      <a 
                        href={item.link}
                        className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-6 font-serif text-center"
                custom={0}
                variants={textVariants}
              >
                Follow Us
              </motion.h3>
              <div className="space-y-4">
                {[
                  { icon: <MessageCircle className="h-6 w-6 text-green-500" />, title: "WhatsApp", link: "https://wa.me/940771351993" },
                  { icon: <Facebook className="h-6 w-6 text-blue-600" />, title: "Facebook", link: "https://www.facebook.com/share/1K6hLztSti/" },
                  { icon: <Send className="h-6 w-6 text-blue-500" />, title: "Telegram", link: "https://telegram.org/dl" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group border border-gray-100 hover:border-gray-200"
                    custom={index + 1}
                    variants={textVariants}
                    whileHover={{ x: 5 }}
                  >
                    {social.icon}
                    <span className="ml-4 text-base font-semibold text-gray-700 group-hover:text-gray-900">{social.title}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
              
            
         

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ctaVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl shadow-lg p-6 sm:p-8"
            variants={ctaVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-3 font-serif"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Start Your Adventure
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base mb-4"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Contact us today to plan your unforgettable journey.
            </motion.p>
            <motion.a
              href="https://wa.me/940771351993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-600 font-medium py-2 px-6 rounded-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Message Us Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      

      <style>{`
        .font-serif {
          font-family: 'Poppins', 'Inter', sans-serif;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;