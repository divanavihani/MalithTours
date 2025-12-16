import React from "react";
import { motion } from "framer-motion";
import VehicleCard from "../components/VehicleCard";

const vehicles = [
	{
		id: 1,
		name: "Luxury Sedan",
		image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/9450/2014-Toyota-Prius%20Plug-in%20Hybrid-front_9450_032_2400x1800_070_nologo.png",
		capacity: "4 passengers",
		features: [
			"Leather seats",
			"Climate control",
			"Premium sound system",
			"WiFi",
			"Baby seat available (on request)",
		],
		idealUse: "Perfect for business trips and romantic getaways",
	},
	{
		id: 2,
		name: "Car",
		image: "https://i.pinimg.com/736x/e8/34/0a/e8340a5deb2debca109b080608edd310.jpg",
		capacity: "4 passengers",
		features: [
			"All-wheel drive",
			"Spacious interior",
			"Roof rack",
			"Advanced safety features",
			"Baby seat & booster seat available",
		],
		idealUse: "Ideal for family adventures and outdoor excursions",
	},
	{
		id: 3,
		name: "Minicar",
		image: "https://www.popularmaruti.com/blog/wp-content/uploads/2022/12/20903608375b891fb77e8402.66922053.jpg",
		capacity: "3 passengers",
		features: [
			"Extra legroom",
			"Air conditioning",
			"Entertainment system",
			"Luggage space",
			"Infant car seat available",
		],
		idealUse: "Perfect for couples and small families with babies",
	},
	{
		id: 4,
		name: "KDH Van",
		image: "https://toyota.cami-cfao.com/media/gamme/modeles/images/30d27f192f2033c2d75991c539c65eaf.png",
		capacity: "12 passengers",
		features: [
			"Spacious seating",
			"Air conditioning",
			"Entertainment system",
			"Bluetooth connectivity",
			"Multiple baby seats available",
			"Child safety locks",
		],
		idealUse: "Great for large families and group tours with children",
	},
	{
		id: 5,
		name: "Minivan",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xv4sEqY25VaUORe2uw7T-62qb7BxllnDoRC0NabaRWWsh2HJm6tjAnqgxdZng9WdkRM&usqp=CAU",
		capacity: "7 passengers",
		features: [
			"Extra legroom",
			"Air conditioning",
			"Entertainment system",
			"Luggage space",
			"2-3 baby seats available",
			"Family-friendly configuration",
		],
		idealUse: "Perfect for families with multiple children and babies",
	},
	{
		id: 6,
		name: "Minibus",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNem_XF1sc3fGDjS3mSzZvH5F-elthDywFbROhL-x-EG4guGBQ0nVGTR8Us5gxRn5xO8&usqp=CAU",
		capacity: "15 passengers",
		features: [
			"Extra legroom",
			"Air conditioning",
			"Entertainment system",
			"Luggage space",
			
			"Child safety features",
			"Easy access for families",
		],
		idealUse: "Ideal for large family groups and extended family tours",
	},
];

const Bookings = () => {
	const coverVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
		}),
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
		}),
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50">
			<motion.div
				className="relative w-full h-[500px] bg-cover bg-center -mt-20 pt-20"
				style={{
					backgroundImage:
						"url('https://images.squarespace-cdn.com/content/v1/5a4188e76f4ca304bb0e99ab/1556796678804-DZMJOWHD9D8YKI4A5FRQ/sri-lanka-things-to-do-38.jpg')",
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
							className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight"
							custom={0}
							initial="hidden"
							animate="visible"
							variants={textVariants}
						>
							Journey in Elegance
						</motion.h1>
						<motion.p
							className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light"
							custom={1}
							initial="hidden"
							animate="visible"
							variants={textVariants}
						>
							Discover unparalleled luxury and comfort with our premium vehicle
							fleet, tailored to elevate your travel experience.
						</motion.p>
					</motion.div>
				</div>
			</motion.div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
				<div className="text-center mb-16">
					<motion.h2
						className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 tracking-tight"
						custom={0}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={textVariants}
					>
						Our Premium Fleet
					</motion.h2>
					<motion.p
						className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
						custom={1}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={textVariants}
					>
						Explore our meticulously curated selection of vehicles, designed for
						sophistication, comfort, and reliability.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{vehicles.map((vehicle, index) => (
						<motion.div
							key={vehicle.id}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
						>
							<VehicleCard vehicle={vehicle} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Bookings;