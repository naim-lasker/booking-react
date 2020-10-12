import React from "react"
import { FaEye, FaBookOpen, FaEnvelope, FaWallet, FaCog, FaBullhorn, FaStar } from "react-icons/fa"

const providerFeatureList = [
    { name: "Booking", icon: <FaBookOpen />, link: "/provider-booking" },
    // { name: "Wallet", icon: <FaWallet />, link: "/provider-wallet" },
    {
        name: "Service and Product",
        dropdowns: [
            { name: "Service Category", link: "/provider-service-category" },
            { name: "Menu Category", link: "/provider-menu-category" },
            { name: "Product", link: "/provider-product-list" },
            { name: "Service", link: "/provider-service-list" },
        ],
        dropdown: true,
        icon: <FaCog />,
        link: "/#",
    },
    // { name: "Promotion", icon: <FaBullhorn />, link: "/provider-booking" },
    { name: "My Ratings", icon: <FaStar />, link: "/provider-rating" },
    // { name: "Contact Supports", icon: <FaEnvelope />, link: "/provider-booking" },
]

const userActivityList = [
    { name: "Promotion", icon: <FaEye />, link: "/user-promotion" },
    { name: "Restaurant", icon: <FaEye />},
    { name: "Tours & Excursions", icon: <FaEye />},
    { name: "Water Activities", icon: <FaEye />},
    { name: "Land Activities", icon: <FaEye />},
]

const userFeatureList = [
    { name: "My Bookings", icon: <FaBookOpen /> },
    { name: "Messeges", icon: <FaEnvelope /> },
    { name: "Favourites", icon: <FaEye /> },
    { name: "My Ratings", icon: <FaEye /> },
    { name: "Contact Supports", icon: <FaEye />},
]

export { providerFeatureList, userActivityList, userFeatureList }
