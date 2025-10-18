import React from 'react'
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('images/bg.jpg')" }}
    >
        <h1 className="text-5xl font-bold">Paradise Resort</h1>
        <p className="mt-4 text-xl">Relax, Rejuvenate, and Reconnect</p>
        <Link
        to="/booking"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >Book Now </Link>
    </div>
  )
}

export default HeroSection
