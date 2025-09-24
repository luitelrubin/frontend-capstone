import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        {/* Home, About, Meu, Reservations, Order Online, Login */}
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/">Order&nbsp;Online</Link>
        <Link to="/">Login</Link>
      </nav>
    </>
  );
}
export default Nav;
