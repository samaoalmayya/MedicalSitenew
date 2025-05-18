import React from "react";
import imageHeader from "../Assets/d2jpg.jpg";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";
import AboutUS from "../Components/AboutUs";
function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h5>We provide All Health Care Solution</h5>
              <h2> prodect Your Health and Take Care To Of Your Health</h2>

              <button>
                {" "}
                <a href="#"> Read More</a>
              </button>
              <span> +</span>
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="headerBox">
                {" "}
                <img src={imageHeader}></img>
                <FontAwesomeIcon icon={faSquare} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Contact></Contact>
      <Services></Services>
      <ServicesDetails></ServicesDetails>
      <AboutUS></AboutUS>
    </>
  );
}
export default Home;
