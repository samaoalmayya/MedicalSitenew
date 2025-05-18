import React from "react";
import "./Contact.css";
import Banner from "../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import FormContact from "./FormContact";
function Contact() {
  return (
    <>
      <Banner title="Contact US" smtitle="Contact Us"></Banner>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <FormContact></FormContact>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Information </h3>
                  <li>
                    <FontAwesomeIcon icon={faMap}> </FontAwesomeIcon> Location
                  </li>
                  <hr></hr>
                  <p>2005 Stokes Isle Apt ,313 Venaville 10010 ,USA</p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope}> </FontAwesomeIcon> Email
                    && Phone
                  </li>
                  <hr></hr>
                  <p> samoaalmayya23s@gmail.com</p>
                  <p> +963 994090576</p>
                  <li>
                    <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon> Follow
                    US
                  </li>
                  <hr></hr>
                  <ul>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
