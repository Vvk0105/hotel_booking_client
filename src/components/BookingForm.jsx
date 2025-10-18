import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../config"; 

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    guests: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/bookings/`, formData);
    alert("Booking submitted successfully!");
    setFormData({ name: "", email: "", phone: "", check_in: "", check_out: "", guests: "", message: "" });
  };

  return (
    <div id="booking" className="p-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="check_in"
          type="date"
          placeholder="Check In"
          value={formData.check_in}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="check_out"
          type="date"
          placeholder="Check Out"
          value={formData.check_out}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="guests"
          type="number"
          placeholder="Guests"
          value={formData.guests}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}
