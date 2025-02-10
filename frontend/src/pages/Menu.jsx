import { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/menu").then((res) => setMenu(res.data));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menu.map((item, index) => (
        <div key={index}>
          <h3>{item.name} - ${item.price}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
