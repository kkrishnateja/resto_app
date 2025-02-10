import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy delicious food and a great dining experience.</p>
      <nav>
        <ul>
          <li><Link to="/menu">View Menu</Link></li>
          <li><Link to="/reservation">Reserve a Table</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}
