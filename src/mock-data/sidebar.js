import React from "react"
import { FaEye, FaBookOpen, FaEnvelope, FaWallet, FaCog, FaBullhorn, FaStar } from "react-icons/fa"

const providerFeatureList = [
    { name: "Booking", icon: <FaBookOpen />, link: "/provider-booking" },
    // { name: "Wallet", icon: <FaWallet />, link: "/provider-wallet" },
    {
        name: "Service and Product",
        dropdowns: [
            { name: "Product", link: "/provider-product-list" },
            { name: "Service Category", link: "/provider-service-category" },
            { name: "Service", link: "/provider-service-list" },
            { name: "Menu Category", link: "/provider-menu-category" },
            { name: "Menu", link: "/provider-menu-list" },
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
    // { name: "Promotion", icon: <FaEye />, link: "/user-promotion-list" },
    { name: "Restaurant", icon: <FaEye />, link: "/user-restaurant-list" },
    { name: "Tours & Excursions", icon: <FaEye />, link: "/user-tours-list" },
    { name: "Water Activities", icon: <FaEye />, link: "/user-restaurant-list" },
    { name: "Land Activities", icon: <FaEye />, link: "/user-restaurant-list" },
]

const userFeatureList = [
    { name: "My Bookings", icon: <FaBookOpen />, link: "/user-restaurant-list" },
    { name: "Messeges", icon: <FaEnvelope />, link: "/user-restaurant-list" },
    { name: "Favourites", icon: <FaEye />, link: "/user-restaurant-list" },
    { name: "My Ratings", icon: <FaEye />, link: "/user-restaurant-list" },
    { name: "Contact Supports", icon: <FaEye />, link: "/user-restaurant-list" },
]

export { providerFeatureList, userActivityList, userFeatureList }
