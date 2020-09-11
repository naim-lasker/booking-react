import React from "react"
import { FaEye, FaBookOpen, FaEnvelope } from "react-icons/fa"

const activityList = [
    { name: "Promotion", icon: <FaEye />, link: "/promotion" },
    { name: "Restaurant", icon: <FaEye />, link: "/" },
    { name: "Tours & Excursions", icon: <FaEye />, link: "/" },
    { name: "Water Activities", icon: <FaEye />, link: "/" },
    { name: "Land Activities", icon: <FaEye />, link: "/" },
]

const featureList = [
    { name: "My Bookings", icon: <FaBookOpen />, link: "/promotion" },
    { name: "Messeges", icon: <FaEnvelope />, link: "/promotion" },
    { name: "Favourites", icon: <FaEye />, link: "/promotion" },
    { name: "My Ratings", icon: <FaEye />, link: "/promotion" },
    { name: "Contact Supports", icon: <FaEye />, link: "/" },
]

export { activityList, featureList }
