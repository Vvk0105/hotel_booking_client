import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../config"; 
import { Link, useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
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

    if(!formData.name || !formData.email || !formData.phone){
      alert('Please fill all the required fields')
    }

    if(!/^\d{10}$/.test(formData.phone)){
      alert('Phone number must be 10 digits')
    }

    if(isNaN(formData.guests) || formData.guests<1){
      alert('Guest must be atleast 1')
    }

    if (!formData.check_in || !formData.check_out) {
      alert("Please select check-in and check-out date");
      return;
    }

    await axios.post(`${BASE_URL}/bookings/`, formData);
    alert("Booking submitted successfully!");
    navigate("/");
    setFormData({ name: "", email: "", phone: "", check_in: "", check_out: "", guests: "", message: "" });
  };

  return (
    <div id="booking" className="h-[100vh] p-8 mx-auto bg-center" style={{ backgroundImage: "url('images/bg.jpg')" }}>
      <div className="flex justify-center items-center gap-3 text-white">
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">Book Your Stay</h2>
      <Link to={'/'} className="ml-47">back to home</Link>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg flex flex-col space-y-3 justify-center mx-auto">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded bg-white"
          
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