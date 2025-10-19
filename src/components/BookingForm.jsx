import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../config"; 

function BookingForm() {
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
    console.log(e.target.name);
    
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/bookings/`, formData);
    alert("Booking submitted successfully!");
    setFormData({ name: "", email: "", phone: "", check_in: "", check_out: "", guests: "", message: "" });
  };

  return (
    <div id="booking" className="h-[100vh] p-8 mx-auto bg-center" style={{ backgroundImage: "url('images/bg.jpg')" }}>
      <h2 className="text-3xl font-semibold mb-4 text-center text-white mt-10">Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="max-w-lg flex flex-col space-y-3 justify-center mx-auto">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <input
          name="check_in"
          type="date"
          placeholder="Check In"
          value={formData.check_in}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <input
          name="check_out"
          type="date"
          placeholder="Check Out"
          value={formData.check_out}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <input
          name="guests"
          type="number"
          placeholder="Guests"
          value={formData.guests}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-white"
        />
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm