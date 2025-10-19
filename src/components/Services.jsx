import React from 'react'

function Services() {
    const services = [
        {
        title: "Accommodation",
        description:
            "Experience luxurious and comfortable stays with flexible hourly or full-day options designed to meet your needs.",
        icon: "🏨",
        },
        {
        title: "Adventure Activities",
        description:
            "Engage in exciting adventure experiences including trekking, cycling, and outdoor exploration around your stay.",
        icon: "🏞️",
        },
        {
        title: "Wellness & Spa",
        description:
            "Relax and rejuvenate with wellness treatments, spa therapies, and holistic health programs during your stay.",
        icon: "💆‍♀️",
        },
    ]
  return (
    <div className='max-w-6xl mx-auto mt-10 px-6 text-center'>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-6xl mb-5">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services
