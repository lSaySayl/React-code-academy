import logo from "../../assets/logo.svg";
import line from "../../assets/line.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__logo">
        <img src={logo} alt="logo__footer" />
        <img src={line} alt="line__footer" />
        <h3>Virtual class for zoom</h3>
      </section>
      <section className="footer__form">
        <h2>Subscribe to get our Newsletter</h2>
        <section className="footer_form-input">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </section>
      </section>
      <section className="footer__terms">
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      </section>
      <span>© 2022. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
