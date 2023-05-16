import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import "./Navbar.css";
import NavbarBtn from "../NavbarBtn/NavbarBtn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />

      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to={"/"}>Home</Link>
        </li>

        <li className="navbar__li">
          <Link to={"/courses"}>Courses</Link>
        </li>

        <li className="navbar__li">Blog</li>

        <li className="navbar__li">About us</li>
      </ul>
      <section className="navbar__section-btn">
        <NavbarBtn style={"login"} text={"Login"} />
        <NavbarBtn style={"signup"} text={"Sign Up"} />
      </section>
    </nav>
  );
};

export default Navbar;
