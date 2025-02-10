import { useState } from "react";
import axios from "axios";

export default function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: 1 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/reserve", form);
    alert("Reservation confirmed!");
  };

  return (
    <div>
      <h1>Table Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input type="number" name="guests" placeholder="Guests" onChange={handleChange} required />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}
