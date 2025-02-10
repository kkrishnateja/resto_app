import { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/contact").then((res) => setContact(res.data));
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Address: {contact.address}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?..."
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
