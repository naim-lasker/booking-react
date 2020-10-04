import React from "react"
import { FaEye, FaBookOpen, FaEnvelope, FaTachometerAlt, FaWallet, FaCog, FaBullhorn, FaStar } from "react-icons/fa"

const providerFeatureList = [
    { name: "Booking", icon: <FaBookOpen />, link: "/provider-booking" },
    { name: "Wallet", icon: <FaWallet />, link: "/provider-wallet" },
    {
        name: "Service and Product",
        dropdowns: [
            { name: "Category", link: "/provider-service-category-list" },
            { name: "Menu", link: "/" },
            { name: "Product", link: "/provider-product-list" },
        ],
        dropdown: true,
        icon: <FaCog />,
        link: "/#",
    },
    { name: "Promotion", icon: <FaBullhorn />, link: "/" },
    { name: "My Ratings", icon: <FaStar />, link: "/provider-rating" },
    { name: "Contact Supports", icon: <FaEnvelope />, link: "/" },
]

const userActivityList = [
    { name: "Promotion", icon: <FaEye />, link: "/promotion" },
    { name: "Restaurant", icon: <FaEye />, link: "/" },
    { name: "Tours & Excursions", icon: <FaEye />, link: "/" },
    { name: "Water Activities", icon: <FaEye />, link: "/" },
    { name: "Land Activities", icon: <FaEye />, link: "/" },
]

const userFeatureList = [
    { name: "My Bookings", icon: <FaBookOpen />, link: "/promotion" },
    { name: "Messeges", icon: <FaEnvelope />, link: "/promotion" },
    { name: "Favourites", icon: <FaEye />, link: "/promotion" },
    { name: "My Ratings", icon: <FaEye />, link: "/promotion" },
    { name: "Contact Supports", icon: <FaEye />, link: "/" },
]

export { providerFeatureList, userActivityList, userFeatureList }
