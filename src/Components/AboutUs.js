import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import imageabut from "../Assets/d5.jpg";

function AboutUS() {
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
                <img src={imageabut}></img>
                <FontAwesomeIcon icon={faSquare} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default AboutUS;
