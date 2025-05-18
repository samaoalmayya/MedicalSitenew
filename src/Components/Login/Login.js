import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
function Login() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6 labelMain">
                    <label htmlFor="inputEmail4"> Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder=" Write Your Email"
                    />
                  </div>
                  <div className="form-group col-md-6 labelMain">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6 labelMain">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Login in
                </button>
              </form>
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
      <div />
    </>
  );
}
export default Login;
