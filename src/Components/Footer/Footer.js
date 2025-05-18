import React from "react";
import footerlogo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebokImge from "../../Assets/icons8-facebook-48.png";
import instIimge from "../../Assets/icons8-instagram-48.png";
import TwitImge from "../../Assets/icons8-twitter-48.png";
import WatsappImge from "../../Assets/icons8-whatsapp-48.png";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 cloSmall">
            <img src={footerlogo} className="logoImage"></img>
            <p>
              {" "}
              lorem ipsum is dolor sit , csectetur adipiscing elit , lorem ipsum
              is dolor sit , csectetur adipiscing el
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} className="phone" />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4> +01 123 456 789</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li> Home</li>
              <li> About</li>
              <li> Blog</li>
              <li> Booking</li>
              <li> Fag's</li>
              <li> Our team</li>
              <li> Services</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Services</h2>
            <ul>
              <li> Dental Care</li>
              <li> Cardiac Clink</li>
              <li> Cardiology</li>
              <li> Precise Diagnosis</li>
              <li> Abmbulance Servic</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2> Subscribe</h2>
            <form>
              <input type="email" placeholder="entar your email"></input>
              <button type="submit">Subscribe Now </button>
            </form>
            <ul className="social">
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src={facebokImge}></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src={instIimge}></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src={TwitImge}></img>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <img src={WatsappImge}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <span>Copyright 2025 Design && Developer By ThreeTrades</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
